import React, { useState } from "react";
import Keypad from "./Components/Keypad";
import Display from "./Components/Display";
import * as math from "mathjs";

const Calculator = () => {
    const [equationDisplay, setEquationDisplay] = useState("");
    const [calculatedResult, setCalculatedResult] = useState("0");
    const [equals, setEquals] = useState(null);

    const isOperator = new RegExp(/[-,+,*,\/]/);

    const handleClick = (value) => {
        if (value === ".") {
            if (!calculatedResult.includes(value)) {
                setEquationDisplay((val) => (val += value));
                setCalculatedResult((val) => (val += value));
            }
        }
        if (value === "backspace") {
            setEquationDisplay((val) => val.substr(0, val.length - 1));
            setCalculatedResult((val) => val.substr(0, val.length - 1));
        }
    };

    const handleNumbers = (value) => {
        if (equals !== null) {
            setEquals(null);
            setCalculatedResult("");
            setEquationDisplay("");
        }
        if (
            calculatedResult.length === 1 &&
            calculatedResult.charAt(0) === "0"
        ) {
            setCalculatedResult(value);
        } else {
            setCalculatedResult((val) => (val += value));
        }
        if (isOperator.test(calculatedResult)) {
            setCalculatedResult(value);
        }
        setEquationDisplay((val) => (val += value));
    };

    const handleOperators = (value) => {
        if (equals !== null) {
            setEquationDisplay(`${equals}${value}`);
            setEquals(null);
        } else if (value === "-") {
            setEquationDisplay((val) => (val += value));
        } else if (isOperator.test(calculatedResult)) {
            if (calculatedResult === "-") {
                setEquationDisplay(
                    (val) => val.substr(0, val.length - 2) + value
                );
            } else {
                setEquationDisplay(
                    (val) => val.substr(0, val.length - 1) + value
                );
            }
        } else {
            setEquationDisplay((val) => (val += value));
        }
        setCalculatedResult(value);
    };

    const calculate = () => {
        if (equals === null) {
            const result = math.evaluate(equationDisplay);
            setCalculatedResult(result);
            setEquationDisplay((val) => (val += `=${result}`));
            setEquals(result);
        }
    };
    const clearInput = () => {
        setEquationDisplay("");
        setCalculatedResult("0");
    };

    return (
        <div id="calculator">
            <Display
                equationDisplay={equationDisplay}
                calculatedResult={calculatedResult}
            />
            <Keypad
                handleClick={handleClick}
                handleNumbers={handleNumbers}
                handleOperators={handleOperators}
                clearInput={clearInput}
                calculate={calculate}
            />
        </div>
    );
};

export default Calculator;
