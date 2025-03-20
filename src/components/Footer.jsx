import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://www.instagram.com/rsb.captures" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTiktok />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
      </div>
    </footer>
  )
}