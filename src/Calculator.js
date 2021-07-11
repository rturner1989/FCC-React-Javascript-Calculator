import React, { useState } from "react";
import Keypad from "./Keypad";
import Display from "./Display";

const Calculator = () => {
    const [display, setDisplay] = useState({ equation: "", result: 0 });

    const onButtonPress = (e) => {
        let equation = display.equation;
        const pressedButton = e.target.innerHTML;

        if (pressedButton === "AC") {
            setDisplay({ equation: "", result: 0 });
        } else if (
            (pressedButton >= "0" && pressedButton <= "9") ||
            pressedButton === "."
        ) {
            equation += pressedButton;
        } else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1) {
            equation += " " + pressedButton + " ";
        } else if (pressedButton === "=") {
            // call function here
        } else {
            // .trim removes whitespace from both ends of a string.
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }
        setDisplay({ equation: equation });
    };

    return (
        <div id="calculator">
            <Display equation={display.equation} result={display.result} />
            <Keypad onButtonPress={onButtonPress} />
        </div>
    );
};

export default Calculator;
