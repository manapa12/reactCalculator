import './index.css';
import Result from './Result';
import Button from './Button';
import { useState,useEffect } from 'react';


function App() {
  const buttonValues = ["AC", "-", "/",7, 8, 9, "x", 4, 5, 6,"-" ,1, 2, 3, "+", 0, ".", "="];
  let numberInString = "";
  
  
  const [result,setResult] = useState(0);
  const [myNumber, setMyNumber] = useState("");
  const [arr,setArr] = useState([])
  const [symbol,setSymbol] = useState("");

  const onhandleClick = (index) => {
    if(typeof buttonValues[index]  === "number" || buttonValues[index] === "." ){
      numberInString =  numberInString + buttonValues[index].toString();
      setMyNumber(myNumber + numberInString)
    } else {
      if(buttonValues[index] === "AC"){
        numberInString = ""; 
        setMyNumber("")
        setArr([])
      } else {
      let fullNumber = parseFloat(myNumber);
      setArr([...arr,fullNumber])
      numberInString = ""; 
      setMyNumber("")
      if(buttonValues[index] === "-" || buttonValues[index] === "/" || buttonValues[index] === "x" ||buttonValues[index] === "+" || buttonValues[index] === "-" ){
       setSymbol(buttonValues[index])
      }
    }
  }
  }
 

  useEffect(() => {
    let value;
    if(arr.length === 2){
      if(symbol === "x"){
        value = arr[0] * arr[1]
        setMyNumber(value.toString())
        setArr([])
        setArr([...arr,value])
        console.log(arr)
      }else if(symbol === "+"){
        
      }else if(symbol === "/"){
        
      }else if(symbol === "-"){
        
      }
    }
    console.log(arr)
     // This will log the updated value of arr
  }, [arr],symbol); // Run the effect whenever arr changes
   

  return (
    <div className="App">
      <Result result={result} myNumber={myNumber}/>
      <Button onhandleClick={onhandleClick} buttonValues={buttonValues}/>
    </div>
  );
}

export default App;
