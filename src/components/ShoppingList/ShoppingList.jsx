import './ShoppingList.css';

function ShoppingList ({shoppingList, fetchList}){

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

    const updateItem = (id) => {
        axios
          .put(`/list/${id}`)
          .then((response) => {
            console.log("Update success", response);
          })
          .catch((error) => {
            console.log("Error updating item", error);
          });
      };
    
      const handleClear = () => {};
      const handleRemove = () => {};

  return (
    <div className="shopping-list-container">
      <div className="shopping-list-header">
        <h2>Shopping List</h2>
        <button onClick={() => updateItem(`0`)}>Reset</button>
        <button onClick={handleClear}>Clear</button>
      </div>

      <div className="item-container">
        {shoppingList.map((listItem) => (
          <div key={listItem.id} className="item-card">
            <h3>{listItem.item}</h3>
            <h5>{listItem.quantity}</h5>
            <h5>{listItem.unit}</h5>

            <button
              value={listItem.id}
              onClick={updateItem}
              className="button-buy"
            >
              BUY
            </button>
            <button
              value={listItem.id}
              onClick={handleRemove}
              className="button-remove"
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
