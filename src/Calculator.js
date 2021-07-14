import React, { useState, useEffect } from "react";
import Keypad from "./Keypad";
import Display from "./Display";
import * as math from "mathjs";
import { string } from "mathjs";

const Calculator = () => {
    const [equationDisplay, setEquationDisplay] = useState("");
    const [calculatedResult, setCalculatedResult] = useState("0")
    const [equals, setEquals] = useState(null)
    

    const handleClick = (value)=>{
        const numbers = new RegExp(/[0-9]/);
        const operators = new RegExp(/[-,+,*,\/]/);
        const decimal = new RegExp(/[.]/);
        // if value matches a number
        if(numbers.test(value)){
            if(equals !== null){
                setEquals(null);
                setCalculatedResult("");
                setEquationDisplay("");
            }
            if(calculatedResult.length === 1 && calculatedResult.charAt(0) === "0"){
                setCalculatedResult(value);
            } else {
                setCalculatedResult((val)=> val += value);
            }
            if(operators.test(calculatedResult)){
                setCalculatedResult(value);
            } 
            
            setEquationDisplay((val)=> val += value);
        } 
        // if value matches an operator 
        else if (operators.test(value)){
            if(equals !== null){
                setEquationDisplay(`${equals}${value}`);
                setCalculatedResult(value);
                setEquals(null);
            } 
            else if (operators.test(calculatedResult) && value !== "-"){
                if(calculatedResult === "-"){
                    setCalculatedResult(value);
                    setEquationDisplay((val)=> val.substr(0, val.length -2)+ value);
                } else {
                    setCalculatedResult(value);
                    setEquationDisplay((val)=> val.substr(0, val.length -1)+ value);
                }
            } else {
                    setCalculatedResult(value);
                    setEquationDisplay((val)=> val += value);
            }
        }
        // if value matches a decimal
        else if(decimal.test(value)){
            if(!calculatedResult.includes(value)){
                setEquationDisplay((val) => val += value);
                setCalculatedResult((val) => val += value);
            } 
        }
        
    }
    const calculate = ()=>{
        const result = math.evaluate(equationDisplay);
        setCalculatedResult(result);
        setEquationDisplay((val)=> val += `=${result}`)
        setEquals(result)
    }
    const clearInput = ()=>{
        setEquationDisplay("")
        setCalculatedResult("0")
    }
    

    return (
        <div id="calculator">
            <Display  equationDisplay={equationDisplay} calculatedResult={calculatedResult} />
            <Keypad  handleClick={handleClick} clearInput={clearInput} calculate={calculate}/>
        </div>
    );
};

export default Calculator;
