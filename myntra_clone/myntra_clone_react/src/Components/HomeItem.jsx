import {useDispatch, useSelector} from 'react-redux'
import { itemAction } from '../store/item';
import {bagAction} from '../store/bag'

const HomeItem = ({item})=>{
    const bagItem = useSelector(store=>store.bag);
    const indexSelected = bagItem.indexOf(item)>=0;
    const dispatch = useDispatch();
    return <>
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {indexSelected?<button className="btn btn-danger btn-add-bag" onClick={()=>{dispatch(bagAction.removeItem(item.id))}}>Remove to Bag</button>:<button className="btn-add-bag" onClick={()=>{dispatch(bagAction.addItem(item))}}>Add to Bag</button>}
      
    </div>
    </>
}

export default HomeItem