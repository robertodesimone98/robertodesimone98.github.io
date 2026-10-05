import './Footer.css'

const OWNER_NAME = 'Roberto De Simone'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>{year} {OWNER_NAME}</span>
      </div>
    </footer>
  )
}

export default Footer
