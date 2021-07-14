import React from "react";

const Display = ({ display, result }) => {
    return (
        <section className="display">
            <div>
                <h1 id="result" className="result-screen">{result}</h1>
            </div>
            <div>
                <h3 id="display"  className="computation-screen">{result === 0? display:result}</h3>
            </div>
        </section>
    );
};

export default Display;
