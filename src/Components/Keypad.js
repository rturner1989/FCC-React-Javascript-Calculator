import React from "react";

const Keypad = ({
    handleClick,
    handleNumbers,
    handleOperators,
    clearInput,
    calculate,
}) => {
    return (
        <section id="keypad">
            <button
                id="clear"
                onClick={() => clearInput()}
                style={{ backgroundColor: " #d0d0d0 " }}
            >
                AC
            </button>
            <button
                id="backspace"
                onClick={(e) => handleClick(e.target.innerHTML)}
                style={{ backgroundColor: " #d0d0d0 " }}
            >
                Backspace
            </button>
            <button
                id="divide"
                onClick={(e) => handleOperators(e.target.innerHTML)}
                style={{ backgroundColor: "#ecb700" }}
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
                style={{ backgroundColor: "#ecb700" }}
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
                style={{ backgroundColor: "#ecb700" }}
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
                style={{ backgroundColor: "#ecb700" }}
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
            <button
                id="equals"
                onClick={() => calculate()}
                style={{ backgroundColor: "#ecb700" }}
            >
                =
            </button>
        </section>
    );
};

export default Keypad;
