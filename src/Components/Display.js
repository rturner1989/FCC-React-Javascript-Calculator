import React from "react";
import { useGlobalContext } from "../Context";

const Display = () => {
    const { equationDisplay, calculatedResult, setCalculatedResult } =
        useGlobalContext();

    let fontSize,
        bn = calculatedResult.length;
    if (bn > 8) fontSize = "3.5rem";
    if (bn > 10) fontSize = "2.5rem";
    if (bn > 15) fontSize = "1.5rem";

    return (
        <section className="display">
            <h3 id="input" className="top">
                {equationDisplay}
            </h3>
            <h1 id="display" className="bottom" style={{ fontSize }}>
                {calculatedResult}
            </h1>
        </section>
    );
};

export default Display;
