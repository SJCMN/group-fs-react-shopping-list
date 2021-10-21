import './ShoppingList.css';

function ShoppingList ({ShoppingList}){

    return(
        <div className="shopping-list-container" >

            <div className="shopping-list-header">
                <h2>Shopping List</h2>
                <button onClick={() => (updateItem(`all`))}>Reset</button>
                <button onClick={handleClear}>Clear</button>
            </div>

            <div className="item-container">

                {ShoppingList.map((listItem) => (
                    <div key={item.id} className="item-card">
                        <h3>{listItem.item}</h3>
                        <h5>{listItem.quantity}</h5>
                        <h5>{listItem.unit}</h5>

                        <button value={listItem.id} onClick={updateItem}     className="button-buy">BUY</button>
                        <button value={listItem.id} onClick={handleRemove}  className="button-remove">REMOVE</button>
                    </div>
                ))}
                
            </div>

        </div>
    )

}

export default ShoppingList;