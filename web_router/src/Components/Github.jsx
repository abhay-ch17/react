import { useLoaderData } from "react-router-dom"

function Github(){

    const data = useLoaderData();

    return <>
        <h1 className="bg-gray-50  w-full text-white-700 min-h-28 text-5xl font-bold text-center mt-10"> followers = {data.followers}
        <img src="https://avatars.githubusercontent.com/u/11613311?v=4" alt="" className="h-40 text-center mx-auto mt-10 mb-10"/>
        </h1>
    </>
}

export default Github


export const gitDataLoader = async()=>{
    // return fetch('https://api.github.com/users/hiteshchoudhary')
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    
    return response.json()
    
}