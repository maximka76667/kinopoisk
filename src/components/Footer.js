function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">©{currentYear} <span>Maxim Grivennyy</span> with <a className="footer__link" href="http://www.omdbapi.com/">OMDb API</a></p>
    </footer>
  )
}

export default Footer;