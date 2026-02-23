import React from 'react'

function Footer() {
  return (
    <footer className="bg-primary text-foreground p-6 border-t border-secondary text-center">
      <p>&copy; {new Date().getFullYear()} Dams Crypto. All rights reserved.</p>
    </footer>
  )
}

export default Footer