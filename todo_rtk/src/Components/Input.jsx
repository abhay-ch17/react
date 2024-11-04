import { useId } from "react";
import Output from "./Output"
import { useSelector } from 'react-redux';
const Input = ()=>{
    const {list} = useSelector(store=>store.todo);
    return <>
        <div className="col-6 p-4" style={{backgroundColor:'#601c1c'}}>
            <div className="col-8 d-flex">
                <input type="text" className="form-control" style={{borderRadius:'5px 0 0 5px', height:'37px'}}/>
                <button className="btn btn-info text-light" style={{borderRadius:' 0 5px 5px 0', height:'37px'}}>add</button>
            </div>
            {list.map(item=><Output item={item} key={useId()}/>)}
        </div>
    </>
}

export default Input