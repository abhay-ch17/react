import { useParams } from "react-router-dom"

function Params(){
    const {userId} = useParams();
    return <>
        <h1 className="bg-gray-50 text-white-700 min-h-28 text-5xl font-bold text-center mt-10">my params:{userId}</h1>
    </>
}

export default Params