import { useState, useEffect } from 'react'

function CurrencyCustom(currency){
    const [data, setData] = useState();
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/fb26afbb40796140a75b82bd/latest/${currency}`)
        .then(obj=>(obj.json()))
        .then(obj=>(setData(obj.conversion_rates)));
    }, [currency]);

    return data;
}

export default CurrencyCustom