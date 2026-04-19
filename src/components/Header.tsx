const menus = [
  { label: "소개", href: "#hero" },
  { label: "기술", href: "#skills" },
  { label: "프로젝트", href: "#projects" },
  { label: "경험", href: "#education" },
  { label: "연락", href: "#contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="inner header-inner">
        <a href="#hero" className="logo">
          Portfolio
        </a>

        <nav className="nav">
          {menus.map((menu) => (
            <a key={menu.href} href={menu.href} className="nav-link">
              {menu.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
