import React from "react";

const Keypad = ({ onButtonPress }) => {
    return (
        <section id="keypad">
            <section className="btn-container">
                <button id="clear" onClick={onButtonPress}>
                    AC
                </button>
                <button id="backspace">backspace</button>
                <button id="divide" name="/">
                    /
                </button>
            </section>
            <section className="btn-container">
                <button id="seven" onClick={onButtonPress}>
                    7
                </button>
                <button id="eight" onClick={onButtonPress}>
                    8
                </button>
                <button id="nine" onClick={onButtonPress}>
                    9
                </button>
                <button id="multiply" onClick={onButtonPress}>
                    *
                </button>
            </section>
            <section className="btn-container">
                <button id="four" onClick={onButtonPress}>
                    4
                </button>
                <button id="five" onClick={onButtonPress}>
                    5
                </button>
                <button id="six" onClick={onButtonPress}>
                    6
                </button>
                <button id="subtract" onClick={onButtonPress}>
                    -
                </button>
            </section>
            <section className="btn-container">
                <button id="one" onClick={onButtonPress}>
                    1
                </button>
                <button id="two" onClick={onButtonPress}>
                    2
                </button>
                <button id="three" onClick={onButtonPress}>
                    3
                </button>
                <button id="add" onClick={onButtonPress}>
                    +
                </button>
            </section>
            <section className="btn-container">
                <button id="zero" onClick={onButtonPress}>
                    0
                </button>
                <button id="decimal" onClick={onButtonPress}>
                    .
                </button>
                <button id="equals" name="=">
                    =
                </button>
            </section>
        </section>
    );
};

export default Keypad;
