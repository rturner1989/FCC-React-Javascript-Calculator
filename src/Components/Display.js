import React from "react";
import { useGlobalContext } from "../Context";

const Display = () => {
    const { equationDisplay, calculatedResult } = useGlobalContext();

    return (
        <section className="display">
            <h3 id="input">{equationDisplay}</h3>
            <h1 id="display">{calculatedResult}</h1>
        </section>
    );
};

export default Display;
