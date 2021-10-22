import axios from 'axios';
import './ShoppingItem.css';


function ShoppingItem({ listItem, updateItem, deleteStuff }) {


    return (

        <div key={listItem.id} className="item-card">
            <h3>{listItem.item}</h3>
            <h5 className="quant-unit">{listItem.quantity} {listItem.unit}</h5>
            {/* <h5 className="unit">{listItem.unit}</h5> */}

            <button
                value={listItem.id}
                onClick={() => updateItem(listItem.id)}
                className="button-buy"
            >
                BUY
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