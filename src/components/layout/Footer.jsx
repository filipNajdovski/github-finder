import React from 'react'
import footerSvg from '../assets/footer.svg'

const footerYear = new Date().getFullYear()


function Footer() {
  return (
    <footer className='footer p-10 bg-grey-700 text-primary-content footer-center text-white'>
        <img src={footerSvg} alt="footer svg" />
        <p>Copyright &copy; {footerYear}</p>
    </footer>
  )
}

export default Footer