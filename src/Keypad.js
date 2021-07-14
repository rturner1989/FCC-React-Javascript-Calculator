import React from "react";

const Keypad = ({handleClick, clearInput, calculateResult}) => {
    return (
        <section id="keypad">
            <section className="btn-container">
                <button id="clear" onClick={()=>clearInput()} >
                    AC
                </button>
                <button id="backspace">backspace</button>
                <button id="divide" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    /
                </button>
            </section>
            <section className="btn-container">
                <button id="seven"  onClick={(e)=>handleClick(e.target.innerHTML)}>
                    7
                </button>
                <button id="eight" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    8
                </button>
                <button id="nine" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    9
                </button>
                <button id="multiply" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    *
                </button>
            </section>
            <section className="btn-container">
                <button id="four" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    4
                </button>
                <button id="five" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    5
                </button>
                <button id="six" onClick={(e)=>handleClick(e.target.innerHTML)} >
                    6
                </button>
                <button id="subtract" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    -
                </button>
            </section>
            <section className="btn-container">
                <button id="one" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    1
                </button>
                <button id="two"onClick={(e)=>handleClick(e.target.innerHTML)}>
                    2
                </button>
                <button id="three" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    3
                </button>
                <button id="add" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    +
                </button>
            </section>
            <section className="btn-container">
                <button id="zero" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    0
                </button>
                <button id="decimal" onClick={(e)=>handleClick(e.target.innerHTML)}>
                    .
                </button>
                <button id="equals" onClick={()=>calculateResult()} >
                    =
                </button>
            </section>
        </section>
    );
};

export default Keypad;
