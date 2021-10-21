import './ShoppingForm.css';
import {useState} from 'react';

function ShoppingForm({addItem}) {
    console.log('in Shopping Form');

    const [newItemName, setNewItemName] = useState();
    const [newQuantity, setNewQuantity] = useState();
    const [newUnit, setNewUnit] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

    
        const newItem = {
            item: newItemName,
            quantity: newQuantity,
            unit: newUnit
        }

        // call newItem function in App with newItem obj passed as a parameter
        addItem(newItem);

        // clear the inputs
        setNewItemName('');
        setNewQuantity('')
        setNewUnit('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Item:</label>
            <input
                onChange={(e) => setNewItemName(e.target.value)}
                value={newItemName}
            />
            <label>Quantity:</label>
            <input
                onChange={(e) => setNewQuantity(e.target.value)}
                value = {newQuantity}
            />
            <label>Unit(s):</label>
            <input 
                onChange = {(e) => {setNewUnit(e.target.value)}}
                value = {newUnit}
            />
            <button type="submit">Add New Item</button>
        </form>
    )


}

export default ShoppingForm;