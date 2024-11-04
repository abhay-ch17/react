import { useEffect, useReducer } from "react"
import { useDispatch } from "react-redux";
import { itemAction } from "../store/item";
import { loaderAction } from "../store/loader";

const FetchItem = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(loaderAction.loader(true));
        fetch('http://localhost:8080/items', {signal})
        .then(res=>res.json())
        .then(res=>{
            dispatch(itemAction.apiItem(res))
            dispatch(loaderAction.loader(false))
        });

        ()=>{
            controller.abort();
            console.log('aborterd')
        };
    }, []);
    return <></>
}

export default FetchItem