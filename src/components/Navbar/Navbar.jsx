/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import getSiblings from '../../common/getSiblings'

const Navbar = ({ navbarRef, logoRef }) => {

  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement).filter((item) => item.classList.contains("show")).map((item) => {
      item.classList.remove("show");
      if (item.childNodes[0]) item.childNodes[0].setAttribute("aria-expanded", false);
      if (item.childNodes[1]) item.childNodes[1].classList.remove("show");
    });

    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
  };

  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
        <div className="container">

            {/* Logo  */}
            <Link href="/">
              <a className="logo">
                <img src="/assets/img/logo.png" alt="logo" ref={logoRef} />
              </a>
            </Link>
            

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleMobileDropdown}
            >
              <span className="icon-bar">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            {/* navbar links */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
            </li>
                <li className="nav-item dropdown" onClick={handleDropdown}>
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Planos</span>
              <div className="dropdown-menu">
                    <Link href="/criar-sites">
                      <a className="dropdown-item">Criação de Sites</a>
                    </Link>
                    <Link href="/mkt-digital">
                      <a className="dropdown-item">Marketing Digital</a>
                    </Link>
                    <Link href="/app-delivery">
                      <a className="dropdown-item">Aplicativos Delivery</a>
                </Link>
                <Link href="/app-pwa">
                      <a className="dropdown-item">Cardápio Digital</a>
                    </Link>
                    <Link href="/robo-atendimento">
                      <a className="dropdown-item">Atendimento Robô</a>
                    </Link>
                  </div>
                </li> 
                <li className="nav-item">
                  <Link href="/about">
                    <a className="nav-link">Sobre</a>
                  </Link>
                </li>
                <li className="nav-item dropdown" onClick={handleDropdown}>
                  <span className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Apps Delivery</span>
                  <div className="dropdown-menu">
                    <Link href="/app-delivery">
                      <a className="dropdown-item">Aplicativo e Painel Administrativo</a>
                    </Link>
                    <Link href="/app-pwa">
                      <a className="dropdown-item">Cardápio Digital</a>
                    </Link>
                    {/* <Link href="/works3">
                      <a className="dropdown-item">Pinterest List</a>
                    </Link> */}
                  </div>
                </li> 
                 {/* <li className="nav-item">
                  <Link href="/blog">
                    <a className="nav-link">Blogs</a>
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link href="/contact">
                    <a className="nav-link">Contato</a>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar