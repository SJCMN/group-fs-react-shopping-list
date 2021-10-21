import './ShoppingList.css';

function ShoppingList (props){


    return(
        <div className="shopping-list-container" >

            <div className="shopping-list-header">
                <h2>Shopping List</h2>
                <button>Reset</button>
                <button>Clear</button>
            </div>

            <div className="item-container">

                <div className="item-card">
                    <h3>item</h3>
                    <h5>unit</h5>
                    <h5>quantity</h5>

                    <button className="button-buy">BUY</button>
                    <button className="button-remove">REMOVE</button>
                </div>

            </div>

        </div>
    )


}

export default ShoppingList;