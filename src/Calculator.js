import { useState } from "react";

import * as math from "mathjs";

import './Calculator.css'
import AmazingNumberButton from "./components/AmazingNumberButton";
import BeautifulScreen from "./components/BeautifulScreen";


const Calculator = () => {

  const [Num, setNum] = useState("");
  const [result, setResult] = useState("");

  const addToInput = (val) => {
    setNum((Num) =>[...Num, val + ""])
  };

  const calculateResult = () => {
    const input = Num.join ("") 
    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setNum("");
    setResult("");
  };

  const buttonColor = "#B68973";

  return (
    <div className="App">
      <div className="calc-wrapper">
      <BeautifulScreen Num={Num} result={result}/>
        <div className="row">
        <AmazingNumberButton number="7" handleClick={addToInput}/>
        <AmazingNumberButton number="8" handleClick={addToInput}/>
        <AmazingNumberButton number="9" handleClick={addToInput}/>
        <AmazingNumberButton number="/" color= {buttonColor} handleClick={addToInput}/>
        </div>
        <div className="row">
        <AmazingNumberButton number="4" handleClick={addToInput}/>
        <AmazingNumberButton number="5" handleClick={addToInput}/>
        <AmazingNumberButton number="6" handleClick={addToInput}/>
        <AmazingNumberButton number="*" color= {buttonColor} handleClick={addToInput}/>
        </div>
        <div className="row">
        <AmazingNumberButton number="1" handleClick={addToInput}/>
        <AmazingNumberButton number="2" handleClick={addToInput}/>
        <AmazingNumberButton number="3" handleClick={addToInput}/>
        <AmazingNumberButton number="-" color= {buttonColor} handleClick={addToInput}/>
        </div>
        <div className="row">
        <AmazingNumberButton number="0" handleClick={addToInput}/>
        <AmazingNumberButton number="." handleClick={addToInput}/>
        <AmazingNumberButton number="=" handleClick={calculateResult}/>
        <AmazingNumberButton number="+" color= {buttonColor} handleClick={addToInput}/>
        </div>
        <AmazingNumberButton number="Clear"  color= "#F28C0F" handleClick={resetInput}/>
        <AmazingNumberButton number="Save"  color= "#BB2020"  onChange={(e) => setResult(e.target.value)}
                                                 value={result} handleClick={()=> console.log(result, "RESULTAT") }/>
                                                    
      </div>
    </div>  
  ); 
}

export default Calculator;
