import React from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";

// POST ROUTE item quantity unit

function App() {

  const addItem = (newItem) => {
    console.log(newItem);
    // POST your data here

    axios({
      method: "POST",
      url: "/list",
      data: newItem,
    })
      .then((response) => {
        console.log("Response is", response);
        fetchList();
      })
      .catch((error) => {
        console.log("Error on POST", error);
      });
  };

  const [shoppingList, setShoppingList] = useState([]);

  const fetchList = () => {
    console.log("in fetchList");
    axios
      .get("/list")
      .then((response) => {
        console.log("Response from axios GET: ", response);
        setShoppingList(response.data);
      })
      .catch((err) => {
        console.log("Error on axios GET: ", err);
      });
  };
  useEffect(() => {
    fetchList();
  }, []);
  //   console.log("shoppingList:", shoppingList);
  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingForm addItem={addItem} />
        <ShoppingList shoppingList={shoppingList} />
      </main>
    </div>
  );
}

export default App;
