import React from "react";

const Display = ({ equationDisplay, calculatedResult}) => {
    return (
        <section className="display">
            <h3 id="input">{equationDisplay}</h3>
            <h1 id="display" >{calculatedResult}</h1>
        </section>
    );
};

export default Display;
