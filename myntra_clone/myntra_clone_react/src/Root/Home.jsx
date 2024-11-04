import HomeItem from '../Components/HomeItem'
import {useSelector} from 'react-redux'
const Home = ()=>{
    const {items} = useSelector(store=>store.item);
    return <>
    <main>
    <div className="items-container">
        {items&&items.map(item=><HomeItem key={item.id} item={item}/>)}
    </div>
</main></>
}

export default Home