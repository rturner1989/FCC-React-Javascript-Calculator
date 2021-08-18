import React from "react";
import KeypadNew from "./Components/KeypadNew";
import Display from "./Components/Display";

const Calculator = () => {
    return (
        <div id="calculator">
            <Display />
            <KeypadNew />
        </div>
    );
};

export default Calculator;
