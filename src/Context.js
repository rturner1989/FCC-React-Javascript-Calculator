import React, { useContext, useState, useEffect } from "react";
import * as math from "mathjs";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [equationDisplay, setEquationDisplay] = useState("");
    const [calculatedResult, setCalculatedResult] = useState("0");
    const [prevCalculation, setPrevCalculation] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(null);
    const [equals, setEquals] = useState(null);

    const isOperator = new RegExp(/[-,+,*,\/]/);
    const isNumber = new RegExp(/[0-9]/);

    const backspace = () => {
        setEquationDisplay((val) => val.substr(0, val.length - 1));
        setCalculatedResult((val) => val.substr(0, val.length - 1));
    };

    const historyBack = () => {
        if (historyIndex !== null && historyIndex >= 0) {
            clearInput();
            setEquals(null);
            setEquationDisplay(prevCalculation[historyIndex]);
            setHistoryIndex(historyIndex - 1);
        }
    };
    const historyForward = () => {
        if (historyIndex !== null && historyIndex <= prevCalculation.length) {
            clearInput();
            setEquals(null);
            setEquationDisplay(prevCalculation[historyIndex + 2]);
            setHistoryIndex(historyIndex + 1);
        }
    };

    useEffect(() => {
        setHistoryIndex(prevCalculation.length - 1);
    }, [prevCalculation]);

    const handleKeyPress = (e) => {
        if (isNumber.test(e.key)) {
            e.preventDefault();
            handleNumbers(e.key);
        } else if (isOperator.test(e.key)) {
            e.preventDefault();
            handleOperators(e.key);
        } else if (e.keyCode === 8) {
            e.preventDefault();
            backspace();
        } else if (e.keyCode === 13) {
            e.preventDefault();
            calculate();
        } else if (e.keyCode === 46) {
            e.preventDefault();
            clearInput();
        } else if (e.keyCode === 38) {
            e.preventDefault();
            historyBack();
        } else if (e.keyCode === 40) {
            e.preventDefault();
            historyForward();
        }
    };

    const handleClick = (value) => {
        console.log(isOperator.test(value));
        if (value === ".") {
            if (!calculatedResult.includes(value)) {
                setEquationDisplay((val) => (val += value));
                setCalculatedResult((val) => (val += value));
            }
        }
        if (value === "backspace") {
            backspace();
        }
        if (value === "=") {
            calculate();
        }
        if (value === "AC") {
            clearInput();
        }
        if (isOperator.test(value)) {
            handleOperators(value);
        }
        if (isNumber.test(value)) {
            handleNumbers(value);
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
            try {
                const result = math.evaluate(equationDisplay);
                setCalculatedResult(result);
                setEquationDisplay((val) => (val += `=${result}`));
                setEquals(result);
                setPrevCalculation((prevState) => [
                    ...prevState,
                    equationDisplay,
                ]);
            } catch (error) {
                console.log(error);
            }
        }
    };
    const clearInput = () => {
        setEquationDisplay("");
        setCalculatedResult("0");
    };

    return (
        <AppContext.Provider
            value={{
                handleClick,
                handleNumbers,
                handleOperators,
                handleKeyPress,
                clearInput,
                calculate,
                equationDisplay,
                calculatedResult,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};
