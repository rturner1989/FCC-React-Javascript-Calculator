import React, { useEffect } from "react";
import Data from "../Data";
import { useGlobalContext } from "../Context";

const KeypadNew = () => {
    const { handleClick, handleKeyPress } = useGlobalContext();

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <section id="keypad">
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
