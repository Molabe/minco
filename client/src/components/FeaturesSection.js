import React from "react";
import featureImage from "./img/image1.png";

const FeaturesSection = () => {
    return (
        <div className="container-fluid text-center">
            <div className="row g-0">
                <div className="col">
                    <div className="container p-4" style={{ background: "#8DC7B5", borderRadius: "10px", maxWidth: "80%", margin: "auto", border: "2px solid black" }}>
                        <h4><strong>Prečo si vybrať SPOGNETKY?</strong></h4>
                        <p>
                            <strong>Precízna kvalita:</strong> Moderné technológie lisovania zaručujú dlhú životnosť a sýte farby. <br />
                            <strong>Osobný prístup:</strong> Každá magnetka je šitá na mieru vašim spomienkam. <br />
                            <strong>Rýchle dodanie:</strong> Vaše objednávky spracujeme a doručíme v čo najkratšom čase. <br />
                            <strong>Originálny darček:</strong> Ideálny spôsob, ako potešiť svojich blízkych.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
