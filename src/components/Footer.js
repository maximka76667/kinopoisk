function Footer() {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>©{currentYear} Maxim Grivennyy with <a href="http://www.omdbapi.com/">OMDb API</a></p>
    </footer>
  )
}

export default Footer;