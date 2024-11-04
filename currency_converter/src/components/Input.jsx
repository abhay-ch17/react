
function Input({
    label, 
    currencyKey,
    setCurrency,
    amount,
    disablity,
    setGetAmount,
    currentCurrency
}){
    
    return <>
        <div className="container col-11 bg-dark text-light">
            <div className="top_to_from d-flex justify-content-between pt-4 pb-2">
                <div className="label">{label}</div> 
                <div className="label">currency Type</div> 
            </div>
            <div className="top_to_from d-flex justify-content-between pt-3 pb-4">
                <div className="input col-6">
                    <input type="number" className="form-control" value={amount} disabled={disablity} onChange={event=>setGetAmount(event.target.value)}/>
                    </div> 
                <div className="label custom_select  pt-2">
                    <select name="" id="" className="selectOptions" value={currentCurrency} onChange={(event)=>setCurrency(event.target.value)}>
                        {currencyKey && currencyKey.map(item=><option key={item} value={item}>{item}</option>)}
                    </select>
                </div> 
            </div>
        </div> 
    </>
}

export default Input

// https://v6.exchangerate-api.com/v6/fb26afbb40796140a75b82bd/latest/USD