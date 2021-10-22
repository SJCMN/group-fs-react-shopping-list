import "./ShoppingList.css";
import axios from "axios";

function ShoppingList({ shoppingList }) {
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
        <button className="button-reset" onClick={() => updateItem(`0`)}>Reset</button>
        <button className="button-clear" onClick={handleClear}>Clear</button>
      </div>

      <div className="item-container">
        {shoppingList.map((listItem) => (
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
