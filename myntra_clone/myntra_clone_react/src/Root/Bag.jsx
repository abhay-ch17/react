import { useSelector } from 'react-redux'
import BagItem from '../Components/BagItem'
import BagSummary from '../Components/BagSummary'

const Bag = ()=>{
  const item = useSelector(store=>store.bag);
    return <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {item.map(item=><BagItem key={item.id} item={item}/>)}
        </div>
        <div className="bag-summary">
          <BagSummary/>
        </div>

      </div>
    </main>
    </>
}

export default Bag