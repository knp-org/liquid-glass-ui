export function GlassNavbar() {
  return (
    <nav className="glass-navbar" aria-label="Primary navigation">
      <a href="/" className="heading-small nav-brand">
        KNP.
      </a>
      <div className="glass-nav-links">
        <a href="/" className="glass-nav-link">Home</a>
        <a href="/products" className="glass-nav-link">Products</a>
        <a href="/components" className="glass-nav-link">Components</a>
        <a
          href="https://github.com/knp-org"
          target="_blank"
          rel="noreferrer"
          className="glass-nav-link"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
