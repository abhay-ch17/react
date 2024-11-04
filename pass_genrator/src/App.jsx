import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react"

export default function App(){
  let [password, setPassword] = useState('password');
  let [len, setLen] = useState(8);
  let [number, setNumber] = useState(false);
  let [specialChar, setSpecialChar] = useState(false);

  const pass = useEffect(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    number==true ? str+='1234567890': str;
    specialChar==true ? str+='!@#$%^&*(){}?/~': str;
    let newStr = '';
    for(let i=1; i<=len; i++){
      let random = Math.floor(Math.random()*str.length+1);
      newStr+=str[random];
    }
    setPassword(newStr);
  }, [len, number, specialChar, setPassword]);

  return <>
    <div className="col-10 mb-5 mt-5 bg-dark container" style={{height: '130px', margin: '10px auto', textAlign: 'center'}}>
      <div className="input_container col-8 container pt-4 d-flex">
        <input type="text" className="form-control" style={{borderRadius:'4px 0 0 4px'}} value={password}  readOnly/>
        <button className="btn btn-info text-light" style={{borderRadius:'0 4px 4px 0'}}
        onClick={()=>{navigator.clipboard.writeText(password)
          alert('text copied successfully!')}
        }
        >copy</button>
      </div>
      <div className="settings d-flex col-8 pt-4 container justify-content-between">
        <div className="range_input">
          <input type='range' min={8} max={50} step={1} value={len} onChange={(event)=>{setLen(event.target.value)}} className='custom-slider'/>
          <label htmlFor="range" className="text-light">length: {len}</label>
        </div>
        <div className="range_input">
          <input type="checkbox" className="btn btn-info" onClick={()=>setNumber(!number)}/>
          <label className="text-light">Numbers</label>
        </div>
        <div className="range_input">
        <input type="checkbox" className="btn btn-info" onClick={()=>setSpecialChar(!specialChar)}/>
        <label className="text-light">Special Characters</label>
        </div>
      </div>
    </div>
  </>
}

