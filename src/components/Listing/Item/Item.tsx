
interface Props {
    listing_id: number,
    url: string,
    MainImage: string,
    title : string,
    currency_code : string,
    price : string,
    quantity: number

}[]



function titleCutter(title:string): string {
    if(title && title.length > 50) {
        title.slice(50, title.length - 1)
        return `${title}...`;
    }
    return title || "Нет заголовка"
}

function fixPrice(namePrice: string, price: string): string {
    switch (namePrice) {
        case 'USD': 
            return `$${price}`;
        case 'EUR':
            return `€${price}`;
        default: 
            return `${price} GBP`
    }
}

function balance(quantity:number) {
    if (quantity > 20) return "high"
    if (quantity > 10) return "medium"
    return "low"
    
}

const Item = (   data  : Props ) => {
    const { items } = data

    return (
        <>
        
        {items.map((el : Props) => {
            return (
            <div key={el.listing_id} className="item">
                <div className="item-image">
                    <a href={el.url}> 
                        <img src={el.MainImage}/>
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{titleCutter(el.title || "")}</p>
                    <p className="item-price">{fixPrice(el.currency_code, el.price)}</p>
                    <p className={`item-quantity level-${balance(el.quantity)}`}>{el.quantity}</p>
                </div>
            </div>
            )
            }
        

        )}
        </>
        

    )
}


export default Item