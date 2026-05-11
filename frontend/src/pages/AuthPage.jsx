import React, { useState } from 'react'

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px 60px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '450px',
        width: '100%'
      }}>
        {/* Logo */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px',
          fontSize: '2.5rem'
        }}>
          ✨
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: '2.5rem',
          color: 'white',
          marginBottom: '10px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Spandan
        </h1>

        {/* Divider */}
        <div style={{
          width: '60px',
          height: '3px',
          background: '#ffd700',
          margin: '15px auto',
          borderRadius: '2px'
        }}></div>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.1rem',
          color: '#ffd700',
          marginBottom: '25px'
        }}>
          Poll Question Generator
        </p>

        {/* Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
            />
          )}
          <input
            type="email"
            placeholder="Email Address"
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: '100%',
              padding: '12px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'rgba(59, 130, 246, 0.8)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '5px',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = 'rgba(59, 130, 246, 1)'}
            onMouseOut={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.8)'}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        {/* Toggle */}
        <div style={{ marginTop: '20px' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none',
                border: 'none',
                color: '#ffd700',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.95rem'
              }}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '25px',
          paddingTop: '15px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.85rem'
          }}>
            By Rohit Sharma | Built by Spandan_Astra ⭐
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthPage