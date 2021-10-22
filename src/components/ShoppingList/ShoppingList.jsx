import './ShoppingList.css';

function ShoppingList ({ShoppingList, fetchList}){

    const deleteStuff = () => {
        // this should work in both the list and item scope
        // server handles request differently depending on the presence of id param;
        
        //Can't be tested yet, though
        axios.delete(`/list/${item.id || ''}`).then(result => {
            console.log('DELETE success');
            fetchList();
        }).catch(err => {
            console.log('DELETE ERR');
        });

    }

    return(
        <div className="shopping-list-container" >

            <div className="shopping-list-header">
                <h2>Shopping List</h2>
                <button onClick={() => (updateItem(`all`))}>Reset</button>
                <button onClick={handleClear}>Clear</button>
            </div>

            <div className="item-container">

                {ShoppingList.map((listItem) => (
                    //<ShoppingItem listItem={listItem} />
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