import React from "react";

const ContactSection = () => {
    return (
        <div className="container-fluid text-center" style={{ background: "black" }}>
            <div className="container p-5">
                <h4 className="text-light"><strong>KONTAKT:</strong></h4>
                <p className="text-light">Adresa: <strong>Saratovská 3, 841 02 Bratislava</strong></p>
                <p className="text-light">Email: <strong><a href="mailto:info@spognetky.sk" style={{ color: "white" }}>info@spognetky.sk</a></strong></p>
                <p className="text-light">Telefón: <strong>+421 903 251 727</strong></p>
                <p className="text-light">Meno: <strong>Anna Mičová</strong></p>
                <p className="text-light">Podmienky: <a href="./cookies-privacy.html" style={{ color: "white" }}>Ochrana osobných údajov</a></p>
                <h4 className="text-light"><strong>Napíšte nám | Zavolajte nám</strong></h4>
                <p className="text-light">© 2024 Spognetky.sk. Všetky práva vyhradené.</p>
            </div>
        </div>
    );
};

export default ContactSection;
