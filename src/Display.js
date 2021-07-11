import React from "react";

const Display = ({ equation, result }) => {
    return (
        <section id="display">
            <div className="result-screen">{result}</div>
            <div className="computation-screen">{equation}</div>
        </section>
    );
};

export default Display;
