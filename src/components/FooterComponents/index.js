import React from 'react';
import { menuBottomLeft, menuBottomMiddle } from "./../../data/data"
function Footer() {
  return (
    <footer className="footer bg--darthvader">
      <div className="container">
        <div className="footer__copyright text-center pt-4 mb-4 pb-2">
          <p><strong>TM Lucasfilm</strong> Ltd. All Rights Reserved.</p>
        </div>
        <div className="footer__container row d-flex justify-content-between">
          <div className="footer__section col-6 col-md-4">
            <ul className={"navbar-nav m-auto"}>
              {menuBottomLeft.map(menuItem =>
                <li key={menuItem.id} class="menu__item nav-item">
                  <a className="nav-link" href={menuItem.link} title={menuItem.title}>
                    {menuItem.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="footer__section text-center col-6 col-md-4">
            <ul className={"navbar-nav m-auto"}>
              {menuBottomMiddle.map(menuItem =>
                <li key={menuItem.id} class="menu__item nav-item">
                  <a className="nav-link" href={menuItem.link} title={menuItem.title}>
                    {menuItem.title}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="footer__section col-12 col-md-4 pt-4 pt-md-0">
            <div className="row">
              <p className="is-light text-center col-6 col-md-12">FOLLOW STAR WARS</p>
              <ul className="d-flex justify-content-center reseau-sociaux pl-0 col-6 col-md-12">
                <li><a href="" title=""><img src={require('./../../assets/images/icon_facebook.png')} alt="facebook" /></a></li>
                <li><a href="" title=""><img src={require('./../../assets/images/icon_twitter.png')} alt="twitter" /></a></li>
                <li><a href="" title=""><img src={require('./../../assets/images/icon_instagram.png')} alt="instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
