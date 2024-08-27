function Footer() {
  return (
    <footer className="footer">

      <div className="social-icons">
        <a href="https://github.com/contra19" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/robert-wisniewski-69620813" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/contra19" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
          <i className="fab fa-facebook"></i>
        </a>

      </div>
      <p>&copy; {new Date().getFullYear()} Created and designed by Contra19. All rights reserved.</p>
    </footer>
  );
}

export default Footer;