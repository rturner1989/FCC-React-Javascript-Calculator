import React from "react";
import Data from "../Data";
import { useGlobalContext } from "../Context";

const KeypadNew = () => {
    const { handleClick, handleKeyPress } = useGlobalContext();

    return (
        <section id="keypad" onKeyDown={handleKeyPress}>
            {Data.map((btn) => {
                const { id, value, display } = btn;
                return (
                    <button key={id} id={id} onClick={() => handleClick(value)}>
                        {display}
                    </button>
                );
            })}
        </section>
    );
};

export default KeypadNew;
