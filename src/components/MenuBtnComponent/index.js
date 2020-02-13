import React, { useState } from 'react';

function MenuBtnComponent({ elements }) {

    return (
        <nav className={`menu navbar navbar-expand-md navbar-dark`}>
            <div className="container align-self-start">
                <div className={`collapse navbar-collapse`} id="navbarCollapse">
                    <ul className={"navbar-nav m-auto"}>
                        {elements.map(menuItem =>
                            <li key={menuItem.id} class="menu__item nav-item">
                                <a className="nav-link" href={menuItem.link} title={menuItem.title}>
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

export default MenuBtnComponent;
