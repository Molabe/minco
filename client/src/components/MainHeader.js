import React from 'react';
import bg from './img/background.jpg';

const MainHeader = () => {
    return (
        <>
            <div
                className="container-fluid text-center py-5"
                style={{
                    background: "linear-gradient(90deg, rgba(1,2,2,1) 0%, rgba(39,89,75,1) 100%)",
                }}
            >
                <div id="Domov" className="container-fluid">
                    <img
                        src={bg}
                        alt="Background"
                        className="img-fluid rounded shadow responsive"
                    />
                </div>
            </div>
        </>
    );
};

export default MainHeader;
