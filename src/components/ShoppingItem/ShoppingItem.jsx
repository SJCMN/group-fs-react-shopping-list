import axios from 'axios';
import './ShoppingItem.css';


function ShoppingItem({ listItem, updateItem, deleteStuff }) {
    console.log(listItem);
    console.log('isPurchased', listItem.ispurchased);

    return (

        <div key={listItem.id} className={listItem.ispurchased ? "item-card bought" : "item-card"}>
            <h3>{listItem.item}</h3>
            <h5 className="quant-unit">{listItem.quantity} {listItem.unit}</h5>
            {/* <h5 className="unit">{listItem.unit}</h5> */}

            <button
                value={listItem.id}
                onClick={() => updateItem(listItem.id)}
                className="button-buy"
            >
                {listItem.ispurchased ? 'BOUGHT' : 'BUY'}
            </button>
            <button
                value={listItem.id}
                onClick={() => deleteStuff(listItem.id)}
                className="button-remove"
            >
                REMOVE
            </button>
        </div>
    )
}

export default ShoppingItem;