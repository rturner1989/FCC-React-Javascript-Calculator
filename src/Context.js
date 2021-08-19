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
            if (historyIndex > 0) {
                setHistoryIndex(historyIndex - 1);
            }
        }
    };
    const historyForward = () => {
        if (
            historyIndex !== null &&
            historyIndex < prevCalculation.length - 1
        ) {
            clearInput();
            setEquals(null);
            setEquationDisplay(prevCalculation[historyIndex + 1]);
            setHistoryIndex(historyIndex + 1);
        }
    };

    const handleKeyPress = (e) => {
        if (isNumber.test(e.key)) {
            e.preventDefault();
            handleNumbers(e.key);
        } else if (isOperator.test(e.key)) {
            e.preventDefault();
            handleOperators(e.key);
        } else if (e.key === "Backspace") {
            e.preventDefault();
            backspace();
        } else if (e.key === "Enter") {
            e.preventDefault();
            calculate();
        } else if (e.key === "Delete") {
            e.preventDefault();
            clearInput();
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            historyBack();
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            historyForward();
        } else if (e.key === ".") {
            e.preventDefault();
            handleDecimal();
        }
    };

    const handleClick = (value) => {
        if (value === ".") {
            handleDecimal();
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
        const a = equationDisplay.charAt(equationDisplay.length - 1);
        const b = equationDisplay.charAt(equationDisplay.length - 2);

        if (equationDisplay === "" && value !== "-") return;
        if (
            equationDisplay.length === 1 &&
            isOperator.test(equationDisplay.charAt(0))
        ) {
            return;
        }
        if (equals !== null) {
            setEquationDisplay(`${equals}${value}`);
            setEquals(null);
        } else if (isOperator.test(a)) {
            if (value === "-" && isNumber.test(b)) {
                setEquationDisplay((val) => (val += value));
            } else if (isOperator.test(b)) {
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

    const handleDecimal = () => {
        if (!calculatedResult.includes(".")) {
            if (!equationDisplay) {
                setEquationDisplay("0");
            }
            setEquationDisplay((val) => (val += "."));
            setCalculatedResult((val) => (val += "."));
        }
    };

    const calculate = () => {
        if (equals === null) {
            try {
                const result = math.string(math.evaluate(equationDisplay));
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

    useEffect(() => {
        setHistoryIndex(prevCalculation.length - 1);
    }, [prevCalculation]);

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
                setCalculatedResult,
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
