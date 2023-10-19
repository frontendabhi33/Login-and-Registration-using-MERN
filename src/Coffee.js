import { useState } from "react";
import "./coffee.css";

const Coffee = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <div>
      <header className={showMobileMenu ? "show-mobile-menu" : ""}>
        <nav className="navbar">
          <a href="#" className="logo">
            Coffee <span>.</span>
          </a>
          <ul className="menu-links">
            <span
              className="material-symbols-outlined"
              id="close-menu-btn"
              onClick={() => setShowMobileMenu(false)}
            >
              close
            </span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
          <span
            className="material-symbols-outlined"
            id="hamburger-btn"
            onClick={toggleMenu}
          >
            menu
          </span>
        </nav>
      </header>
      <section className="hero-section">
        <div className="content">
          <h2>Start your day with fresh coffee</h2>
          <p>
            Coffee is a popular and beloved beverage enjoyed by people around
            the world.Awaken your senses with a steaming cup of liquid
            motivation.
          </p>
          <button>Order Now</button>
        </div>
      </section>
    </div>
  );
};

export default Coffee;
