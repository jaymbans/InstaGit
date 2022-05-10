import React from 'react'
import { GoGlobe } from "react-icons/go"

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-10 bg-gray-700 text-primary-content footer-center'>
      <div>
        <GoGlobe className='text-3xl' />
        <p>InstaGit {footerYear}</p>
      </div>
    </footer>
  )
}

export default Footer

