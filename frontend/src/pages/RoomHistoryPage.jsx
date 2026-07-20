import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../stores/authStore'
import useRoomStore from '../stores/roomStore'
import Sidebar from '../components/Sidebar'
import ThemeToggle from '../components/ThemeToggle'
import ProfileDropdown from '../components/ProfileDropdown'
import useIsMobile from '../hooks/useIsMobile'

function RoomHistoryPage() {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const { user, token } = useAuthStore()
  const { rooms, isLoading, fetchRooms, setAuthToken } = useRoomStore()

  useEffect(() => {
    if (token) {
      setAuthToken(token)
      // Students use dedicated endpoint for their room history
      if (user?.role === 'student') {
        useRoomStore.getState().fetchStudentRoomHistory()
      } else {
        fetchRooms()
      }
    }
  }, [token, user?.role])

  // Filter ended rooms for teacher view
  const endedRooms = rooms?.filter(r => r.endedAt) || []

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      maxWidth: '100%',
      boxSizing: 'border-box',
      background: 'var(--bg-primary)',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <Sidebar user={user} />

      <div style={{
        flex: 1,
        minWidth: 0,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'var(--sidebar-width, 240px)',
        maxWidth: '100%',
        boxSizing: 'border-box'
      }}>
        {/* Header */}
        <header style={{
          background: 'var(--header-bg)',
          color: 'white',
          padding: isMobile ? '20px 16px' : '24px 32px',
          paddingLeft: isMobile ? '64px' : '32px',
          boxSizing: 'border-box'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{
                margin: 0,
                fontSize: isMobile ? '22px' : '26px',
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}>Room History</h1>
              <p style={{ margin: '4px 0 0', opacity: 0.9, fontSize: '14px' }}>View past classroom sessions</p>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ThemeToggle />
              <ProfileDropdown />
            </div>
          </div>
        </header>

        {/* Content */}
        <div style={{
          flex: 1,
          padding: isMobile ? '16px' : '32px',
          maxWidth: '100%',
          boxSizing: 'border-box'
        }}>
          <h2 style={{
            margin: '0 0 24px',
            fontSize: isMobile ? '17px' : '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em'
          }}>
            Ended Rooms
          </h2>

          {isLoading ? (
            <div style={{
              textAlign: 'center',
              padding: '48px 24px',
              color: 'var(--text-secondary)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}>
              Loading rooms...
            </div>
          ) : endedRooms.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {endedRooms.map((room) => (
                <div
                  key={room._id}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)'
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '22px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    minHeight: '140px',
                    minWidth: 0,
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                      {room.name}
                    </h3>
                    <p style={{ margin: '0 0 6px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                      Code: <strong style={{ color: 'var(--accent)', letterSpacing: '1px' }}>{room.code}</strong>
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
                      Ended {room.endedAt ? new Date(room.endedAt).toLocaleDateString() : ''}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate(`/${user?.role === 'teacher' ? 'teacher' : 'student'}/room/${room._id}/results`)}
                    style={{
                      marginTop: '18px',
                      padding: '10px 16px',
                      background: 'var(--accent-gradient)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 'var(--radius)',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    View Results →
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '48px 24px',
              color: 'var(--text-secondary)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📜</div>
              <p style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 600 }}>No ended rooms yet.</p>
              <p style={{ fontSize: '13px', marginTop: '8px' }}>Rooms you end will appear here for review.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RoomHistoryPage
