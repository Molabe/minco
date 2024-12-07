import React from "react";

const ContactSection = () => {
    return (
        <div className="container-fluid bg-dark text-light text-center py-5">
            <div className="container">
                <h4 className="mb-4">KONTAKT:</h4>
                <p>
                    <strong>Adresa:</strong> Saratovská 3, 841 02 Bratislava
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:info@spognetky.sk" className="text-light">
                        info@spognetky.sk
                    </a>
                </p>
                <p>
                    <strong>Telefón:</strong> +421 903 251 727
                </p>
                <p>
                    <strong>Ochrana osobných údajov:</strong>{" "}
                    <a href="./cookies-privacy.html" className="text-light">
                        Prečítať
                    </a>
                </p>
                <p>© 2024 Spognetky.sk. Všetky práva vyhradené.</p>
            </div>
        </div>
    );
};

export default ContactSection;
