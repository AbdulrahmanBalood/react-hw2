import './App.css';
import { ButtonsComp } from './components/ButtonsComp';
import {useState} from 'react';

function App() {
  const [firstNum,setFirstNum] = useState(0);
  const [secondNum,setSecondNum] = useState(0);
  const [result,setResult] = useState(0);
  const numOneChange = (e) => {
    let num1 = e.target.value
    setFirstNum(parseInt(num1))
  }
  const numSecondChange = (e) => {
    let num2 = e.target.value
    setSecondNum(parseInt(num2))
  }
  const sumClicked = () => {
    setResult(firstNum+secondNum)
  }
  const subClicked = () => {
    setResult(firstNum - secondNum)
  }
  const multClicked = ()=>{
    setResult(firstNum*secondNum)
  }
  const divClicked = () =>{
    setResult(firstNum/secondNum)
  }
  const modClicked = () => {
    setResult(firstNum%secondNum)
  }
  console.log(result);
  
  return (
    <div className="App">
      <h1>Calculator</h1>
      <input onChange={numOneChange} className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Enter first Number"/>
      <input onChange={numSecondChange} className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Enter Second Number"/>
      <ButtonsComp sumClicked={sumClicked} subClicked={subClicked} multClicked={multClicked}
      divClicked={divClicked} modClicked = {modClicked}/>
      <input readOnly value={result} className="form-control" list="datalistOptions" id="exampleDataList" placeholder=""></input>
    </div>
  );
}

export default App;
