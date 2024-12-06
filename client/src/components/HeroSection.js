import React from "react";
import image0 from "./img/image0.jpeg";

const HeroSection = () => {
    return (
        <div className="container-fluid text-center" style={{ background: "#e6fff8" }}>
            <div className="container pt-4">
                <h4>
                    Vezmeme vaše obľúbené fotografie a premeníme ich na kvalitné, štýlové magnetky, ktoré oživia každú domácnosť alebo poslúžia ako skvelý darček.
                </h4>
                <div className="row p-4 d-flex">
                    <div className="col" style={{ position: "relative", left: "4vh", top: "1vh", transform: "rotate(-7deg)" }}>
                        <div
                            className="container p-3"
                            style={{
                                border: "2px solid #000",
                                borderRadius: "10px",
                                background: "#6FD8BB",
                                width: "45vh",
                            }}
                        >
                            <h4><strong>Ako to funguje?</strong></h4>
                            <p>
                                <strong>1. Nahrajte svoju fotku:</strong> Vyberte obľúbený záber z vášho telefónu, počítača alebo sociálnych sietí. <br />
                                <strong>2. Vyberte formát a design:</strong> Zvoľte si veľkosť, tvar a prípadné úpravy. <br />
                                <strong>3. Objednajte a relaxujte:</strong> Magnetky vyrobíme, zabalíme a doručíme priamo až k vám domov.
                            </p>
                        </div>
                    </div>
                    <div className="col" style={{ transform: "rotate(7deg)", position: "relative", left: "4vh", top: "1vh" }}>
                        <img src={image0} className="img-fluid" alt="Sample" style={{ border: "2px solid #000", borderRadius: "10px", width: "30vh" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
