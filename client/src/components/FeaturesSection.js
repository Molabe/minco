import React from 'react';
import image1 from './img/image1.jpeg';

const FeaturesSection = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img
                        src={image1}
                        alt="Magnetky"
                        className="img-fluid rounded shadow"
                        style={{ width: "100%", height: "400px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-6">
                    <div className="bg-success text-light p-4 rounded shadow">
                        <h4>Prečo si vybrať SPOGNETKY?</h4>
                        <ul>
                            <li>
                                <strong>Precízna kvalita:</strong> Moderné technológie lisovania zaručujú dlhú životnosť a sýte farby.
                            </li>
                            <li>
                                <strong>Osobný prístup:</strong> Každá magnetka je šitá na mieru vašim spomienkam.
                            </li>
                            <li>
                                <strong>Rýchle dodanie:</strong> Vaše objednávky spracujeme a doručíme v čo najkratšom čase.
                            </li>
                            <li>
                                <strong>Originálny darček:</strong> Ideálny spôsob, ako potešiť svojich blízkych.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
