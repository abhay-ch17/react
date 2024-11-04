import { useState } from 'react';
import './App.css'
import Input from './components/Input'
import CurrencyCustom from './Hooks/customApiHook'
function App(){
  
    const [currency, setCurrency] = useState('INR'); 
    const [amount, setAmount] = useState('0');
    const [getAmount, setGetAmount] = useState('0');
    const [getChangeCurrency, setGetChangeCurrency] = useState('USD');

  const hooks = CurrencyCustom(currency);
  const currencyKey = hooks===undefined ? undefined : Object.keys(hooks);

function executeItem(event){
  event.preventDefault();
  setAmount((parseInt(getAmount)*hooks[getChangeCurrency]));
}

function exChangeCurrency(){
  setGetChangeCurrency(currency)
  setCurrency(getChangeCurrency)
}

  return <>
  <div className="main_contianer_flex">
    <form className='mainContainer col-lg-4 col-sm-12 container' onSubmit={(event)=>executeItem(event)}>
      <Input
      label={'from'}
      currencyKey = {currencyKey}
      setCurrency={setCurrency}
      disablity={false}
      setGetAmount={setGetAmount}
      currentCurrency={currency}
      />
      <div className="turn_button" style={{textAlign: 'center', margin: '-12px 0 -10px 0'}}>
      <button className='turn_btn' onClick={()=>exChangeCurrency()}>USD to INR</button>
      </div>
      <Input
      label={'to'}
      setCurrency={setGetChangeCurrency}
      currencyKey = {currencyKey}
      amount={amount}
      disablity={true}
      currentCurrency={getChangeCurrency}
      />
      
      <div className="execute_btn col-11 container">
      <button type='submit' className='col-12 mt-1 text-light pb-1 pt-1 turn_btn'>Execute</button>
      </div>
      </form>
      </div>
  </>
}

export default App