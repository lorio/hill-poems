import React from 'react'
import Link from 'gatsby-link'
import Nav from '../Nav'

const Header = () => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
    }}
  >
    <div
      style={{
        margin: '0 50px',
        display: 'flex',
        flexBasis: '30% auto',
        maxWidth: '280px',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'flex',fontSize: '18px' }}>
        <Link
          to="/"
          style={{
            color: '#006',
            textDecoration: 'none',
          }}
        >
          hillary keel | writing
        </Link>
      </h1>
    </div>
    <Nav />
  </div>
)

export default Header
