import React, { useRef, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

const Keypad = ({
    handleClick,
    handleNumbers,
    handleOperators,
    handleKeyPress,
    clearInput,
    calculate,
}) => {
    const calcRef = useRef(null);

    useEffect(() => {
        calcRef.current.focus();
    }, []);

    return (
        <section id="keypad" onKeyDown={handleKeyPress}>
            <button id="clear" ref={calcRef} onClick={() => clearInput()}>
                AC
            </button>
            <button
                id="backspace"
                value="backspace"
                onClick={(e) => handleClick(e.target.value)}
            >
                <BsArrowLeft />
            </button>
            <button
                id="divide"
                onClick={(e) => handleOperators(e.target.innerHTML)}
            >
                /
            </button>
            <button
                id="seven"
                onClick={(e) => handleNumbers(e.target.innerHTML)}
            >
                7
            </button>
            <button
                id="eight"
                onClick={(e) => handleNumbers(e.target.innerHTML)}
            >
                8
            </button>
            <button
                id="nine"
                onClick={(e) => handleNumbers(e.target.innerHTML)}
            >
                9
            </button>
            <button
                id="multiply"
                onClick={(e) => handleOperators(e.target.innerHTML)}
            >
                *
            </button>
            <button
                id="four"
                onClick={(e) => handleNumbers(e.target.innerHTML)}
            >
                4
            </button>
            <button
                id="five"
                onClick={(e) => handleNumbers(e.target.innerHTML)}
            >
                5
            </button>
            <button id="six" onClick={(e) => handleNumbers(e.target.innerHTML)}>
                6
            </button>
            <button
                id="subtract"
                onClick={(e) => handleOperators(e.target.innerHTML)}
            >
                -
            </button>
            <button id="one" onClick={(e) => handleNumbers(e.target.innerHTML)}>
                1
            </button>
            <button id="two" onClick={(e) => handleNumbers(e.target.innerHTML)}>
                2
            </button>
            <button
                id="three"
                onClick={(e) => handleNumbers(e.target.innerHTML)}
            >
                3
            </button>
            <button
                id="add"
                onClick={(e) => handleOperators(e.target.innerHTML)}
            >
                +
            </button>
            <button
                id="zero"
                onClick={(e) => handleNumbers(e.target.innerHTML)}
            >
                0
            </button>
            <button
                id="decimal"
                onClick={(e) => handleClick(e.target.innerHTML)}
            >
                .
            </button>
            <button id="equals" onClick={() => calculate()}>
                =
            </button>
        </section>
    );
};

export default Keypad;
