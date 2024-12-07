import React from 'react';
import logo from './img/logo.png';
import fbIcon from './img/fb.png';
import igIcon from './img/ig.png';

const Header = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><h3 className="quicksand-500">SPOGNETKY</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav nav-underline">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Domov">Domov</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Onas">O nás</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Produkt">Produkt</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Kontakt">KONTAKT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};


export default Header;
