import React, { useState } from 'react'

function DashboardPage() {
  const [roomName, setRoomName] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  const handleCreateRoom = () => {
    if (!roomName.trim()) return
    setIsCreating(true)
    // Simulate creation
    setTimeout(() => {
      setIsCreating(false)
      alert(`Assessment Space "${roomName}" created!`)
      setRoomName('')
    }, 1000)
  }

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #f8f9fb 90%, #e0e7ff 100%)',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(to right, #1e40af, #1e3a8a)',
        color: 'white',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            ✨
          </div>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>Spandan</h1>
            <p style={{ fontSize: '12px', opacity: 0.8, margin: 0 }}>Poll Question Generator</p>
          </div>
        </div>
        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ cursor: 'pointer', fontWeight: '500' }}>Dashboard</span>
          <span style={{ cursor: 'pointer', fontWeight: '500' }}>My Rooms</span>
          <span style={{ cursor: 'pointer', fontWeight: '500' }}>Profile</span>
        </nav>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px' }}>
        {/* Welcome Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
          borderRadius: '20px',
          padding: '40px',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          boxShadow: '0 10px 40px rgba(30, 64, 175, 0.3)'
        }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>
              Welcome Back, Educator
            </h2>
            <p style={{ fontSize: '16px', opacity: 0.9, margin: 0 }}>
              Track, analyze, and enhance student learning outcomes
            </p>
          </div>
          <div style={{
            width: '120px',
            height: '120px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '48px' }}>📊</span>
          </div>
        </div>

        {/* Create Assessment Section */}
        <div style={{
          background: 'white',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <span style={{ fontSize: '24px', color: 'white' }}>📝</span>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1f2937', margin: 0 }}>
                Create Assessment Space
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: '4px 0 0 0' }}>
                Define your assessment parameters for optimal student engagement
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div style={{
            background: '#eff6ff',
            border: '1px solid #bfdbfe',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            gap: '16px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <span style={{ fontSize: '18px', color: 'white' }}>ℹ️</span>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#1e40af', margin: '0 0 4px 0' }}>
                Assessment Workflow
              </h4>
              <p style={{ fontSize: '14px', color: '#3b82f6', margin: 0, lineHeight: '1.5' }}>
                After creation, you'll receive a unique identifier for the students to join. 
                You can then administer assessments, monitor participation, and analyze results in real-time.
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              fontSize: '14px', 
              fontWeight: '500', 
              color: '#374151', 
              marginBottom: '8px' 
            }}>
              Assessment Title
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: '-2px',
                background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                borderRadius: '12px',
                opacity: 0.2,
                zIndex: 0
              }}></div>
              <input
                type="text"
                placeholder="e.g., Algebra Midterm Review, Chemistry Lab Evaluation..."
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  width: '100%',
                  padding: '16px 20px',
                  fontSize: '18px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'border-color 0.3s',
                  background: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>
            <p style={{ 
              fontSize: '12px', 
              color: '#6b7280', 
              marginTop: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              💡 Use a clear, descriptive title to help students identify the assessment
            </p>
          </div>

          {/* Create Button */}
          <button
            onClick={handleCreateRoom}
            disabled={!roomName.trim() || isCreating}
            style={{
              width: '100%',
              padding: '16px 24px',
              fontSize: '18px',
              fontWeight: '600',
              color: 'white',
              background: roomName.trim() 
                ? 'linear-gradient(135deg, #1e40af, #3b82f6)' 
                : '#9ca3af',
              border: 'none',
              borderRadius: '12px',
              cursor: roomName.trim() ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              transition: 'all 0.3s',
              boxShadow: roomName.trim() ? '0 4px 15px rgba(59, 130, 246, 0.4)' : 'none'
            }}
          >
            {isCreating ? (
              <>
                <div style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                <span>Establishing Assessment...</span>
              </>
            ) : (
              <>
                <span style={{ fontSize: '20px' }}>📝</span>
                <span>Create Assessment Space</span>
                <span style={{ fontSize: '20px' }}>→</span>
              </>
            )}
          </button>
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginTop: '32px'
        }}>
          {[
            { icon: '🏠', label: 'Total Rooms', value: '0', color: '#1e40af' },
            { icon: '📊', label: 'Total Polls', value: '0', color: '#7c3aed' },
            { icon: '👥', label: 'Total Responses', value: '0', color: '#059669' },
            { icon: '📈', label: 'Participation Rate', value: '0%', color: '#dc2626' }
          ].map((stat, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>{stat.icon}</span>
                <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>{stat.label}</span>
              </div>
              <div style={{ 
                fontSize: '28px', 
                fontWeight: '700', 
                color: stat.color 
              }}>
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginTop: '32px'
        }}>
          {[
            {
              icon: '🎤',
              title: 'Voice Input',
              desc: 'Record audio and transcribe with Whisper AI'
            },
            {
              icon: '📄',
              title: 'Upload Text',
              desc: 'Upload text files to generate questions'
            },
            {
              icon: '✨',
              title: 'AI Generation',
              desc: 'AI-powered question generation from content'
            }
          ].map((feature, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '32px'
              }}>
                {feature.icon}
              </div>
              <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1f2937', marginBottom: '8px' }}>
                {feature.title}
              </h4>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '32px',
        color: '#6b7280',
        fontSize: '14px'
      }}>
        <p style={{ margin: 0 }}>
          
        </p>
      </footer>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default DashboardPage