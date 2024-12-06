import React from "react";
import logo from "./img/logo.png";
import fbLogo from "./img/fb.png";
import igLogo from "./img/ig.png";

const Header = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#23C29A" }}>
                <div className="container d-flex justify-content-center p-2">
                    <h4 className="text-white">Doprava zdarma pri objednávke nad 50€!</h4>
                </div>
            </div>
            <div className="container-fluid p-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <img src={logo} width="50" height="50" alt="Logo" />
                    <h3 className="text-light">
                        Premením Vaše najkrajšie chvíle na jedinečné magnetky!
                    </h3>
                    <div className="gap-3 d-flex">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src={fbLogo} width="40" height="40" alt="Facebook Logo" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <img src={igLogo} width="40" height="40" alt="Instagram Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
