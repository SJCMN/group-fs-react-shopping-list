import './ShoppingList.css';

function ShoppingList ({shoppingList}){

    const updateItem = (id) => {
        axios.put(`/list/${id}`).then((response) => {
            console.log("Update success", response);
        }).catch((error) => {
            console.log("Error updating item", error);
        })
    }
    

return(
    

)


}

export default ShoppingList;