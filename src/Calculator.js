import React from "react";
import Keypad from "./Components/Keypad";
import Display from "./Components/Display";

const Calculator = () => {
    return (
        <div id="calculator">
            <Display />
            <Keypad />
        </div>
    );
};

export default Calculator;
