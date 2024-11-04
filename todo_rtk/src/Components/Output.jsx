const Output = ({item})=>{
    console.log(item)
    return <>
     <div className="col-8 d-flex  mt-3">
                <p className="form-control text-light" style={{borderRadius:'5px 0 0 5px', height:'37px'}}>{item}</p>
                <button className="btn btn-success text-light" style={{borderRadius:' 0 5px 5px 0', height:'37px'}}>delete</button>
            </div>
    </>
}

export default Output