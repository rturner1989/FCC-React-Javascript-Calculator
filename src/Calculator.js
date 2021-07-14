import React, { useState } from "react";
import Keypad from "./Keypad";
import Display from "./Display";
import * as math from "mathjs";

const Calculator = () => {
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState(0)

    const handleClick = (value)=>{
        
        if(value === "." && ([...display].includes("."))){
            return
        } else if(value === "0" && display.charAt(0) === "0"){
            return
        }
        setDisplay((display)=>display + value);
    }
    const calculateResult = ()=>{
        setResult(math.evaluate(display));
        setDisplay(math.evaluate(display));
    }
    const clearInput = ()=>{
        setDisplay("")
        setResult(0)
    }

    return (
        <div id="calculator">
            <Display display={display} result={result} />
            <Keypad  handleClick={handleClick} clearInput={clearInput} calculateResult={calculateResult}/>
        </div>
    );
};

export default Calculator;
