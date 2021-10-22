import './ShoppingList.css';
import axios from 'axios';
import ShoppingItem from '../ShoppingItem/ShoppingItem.jsx'

function ShoppingList({ shoppingList, fetchList }) {

    const deleteStuff = (id) => {
        console.log('deleteStuff Called');
        // this should work in both the list and item scope
        // server handles request differently depending on the presence of id param;
        axios.delete(`/list/${id}`)
            .then(result => {
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
                fetchList();
            })
            .catch((error) => {
                console.log("Error updating item", error);
            });
    };


    return (
        <div className="shopping-list-container">
            <div className="shopping-list-header">
                <h2>Shopping List</h2>

                <button className="button-reset" onClick={() => updateItem(`0`)}>Reset</button>
                <button className="button-clear" onClick={() => deleteStuff('')}>Clear</button>

            </div>

            <div className="item-container">
                {shoppingList.map((listItem) => (
                    <ShoppingItem
                        key={listItem.id}
                        listItem={listItem}
                        updateItem={updateItem}
                        deleteStuff={deleteStuff}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
