
import Header from './components/Header'
import Results from './components/Results';
import UserInput from './components/UserInput'
import { useState } from 'react';

function App() {


  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputsValid = userInput.duration >= 1;



function handleChange(inputIdentifier, value) {
  setUserInput(prevUserInput => ({
      ...prevUserInput,
      [inputIdentifier]: +value,
  }));
}





  return (
    <>
    <Header />
    <UserInput onChange={handleChange} userInput={userInput}/>
    {inputsValid ? <Results userInput={userInput}/> : <p className='center'>Please enter a duration grater than zero.</p>}
    </>
  )
}

export default App
