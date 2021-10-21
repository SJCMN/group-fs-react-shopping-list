import './ShoppingItem.css';

function ShoppingItem({item, fetchList}) {
    //const id = item.id // assuming that this component is receiving 'item' as a prop

    const deleteItem = () => {
        axios.delete(`/list/${id}`).then(result => {
            console.log('DELETE success');
            fetchList();
        }).catch(err => {
            console.log('DELETE ERR');
        });


    }


    return 


}

export default ShoppingItem;