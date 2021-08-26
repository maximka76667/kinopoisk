function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">©{currentYear} <a className="footer__author" href="https://github.com/maximka76667">Maxim Grivennyy</a> with <a className="footer__link" href="http://www.omdbapi.com/">OMDb API</a>
      </p>
    </footer>
  )
}

export default Footer;