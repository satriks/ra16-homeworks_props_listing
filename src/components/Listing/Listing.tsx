import Item from './Item/Item'
import { v4 as uuidv4 } from 'uuid'
import "./Listing.css"


interface Props {
        listing_id: number,
        url: string,
        MainImage: string | object,
        title : string,
        currency_code : string,
        price : string,
        quantity: number,

    }

    interface AppProps {
        items : Props[]
    }




const Listing = ({items}: AppProps) => {

    const newArr : Props[] = [] 
     items.forEach( (item)  => {

        const {listing_id, url, MainImage, title, currency_code, price, quantity } = item
        const url_570xN = MainImage && MainImage.url_570xN;

        newArr.push({listing_id, url, MainImage: url_570xN , title, currency_code, price, quantity})

    })
    
    

    return  ( 
        <div className="item-list">
          <Item key={uuidv4()} items={newArr}/>
        </div>
        )
        

     }
    




export default Listing



//TODO Наверно будет правильно разделить на компоненты, Отдельно итемс отдельно Экран . 