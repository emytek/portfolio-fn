import React from 'react'

function Header({ text }) {
    const headerStyles = {
        backgroundColor: '#fff',
        color: 'blue'
    }
    
  return (
      <>
        <header style={headerStyles}>
            <div className="container">
                <h1>{text}</h1>
            </div>
        </header>
      </>
  )
}

Header.defaultProps = {
    text: 'Vetir Feedback'
}

// Header.propTypes = {
//     text: PropTypes.string
// }

export default Header
