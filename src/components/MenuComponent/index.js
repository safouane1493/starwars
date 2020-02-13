import React, { useState } from 'react';

function MenuComponent({ elements, mode = 'horizontal' }) {
  const [isVisible, setVisibility] = useState(false);
  window.onresize = () => (window.innerWidth > 767) ? setVisibility(false) : null


  return (
    <nav className={`menu navbar navbar-expand-md navbar-dark fixed-top ${isVisible ? 'is-show-mobile' : ''}`}>
      <div className="container align-self-start">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={() => setVisibility((prevVisibility) => !prevVisibility)}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isVisible ? 'show' : ''}`} id="navbarCollapse">
          <ul className={"navbar-nav m-auto"}>
            {elements.map(menuItem =>
              <li key={menuItem.id} class="menu__item nav-item">
                <a className="nav-link" href={menuItem.link} title={menuItem.title} onClick={() => setVisibility(false)}>
                  {menuItem.title}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuComponent;
