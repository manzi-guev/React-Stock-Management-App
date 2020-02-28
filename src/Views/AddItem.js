import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {addingItem,deletingItem} from '../Storage/Actions/action1';

const AddItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const dispatch = useDispatch();

    const addProduct = e => {
      e.preventDefault();
      dispatch(
        addingItem({
          name,
          price
        })
      );
      setName("");
      setPrice("");
    }; 
 const deleteProduct = id => {
   dispatch(deletingItem(id));
 };
    const items = useSelector(state => state.Items);
    const list = items.map((item ,index) => {
        return (
          <tbody key={index}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
              <td>
                  <button className="delete-button" onClick={()=> deleteProduct(item.id)}>
                    Delete
                  </button>
              </td>
            </tr>
          </tbody>
        );
    })
    return (
      <div>
        <form
          onSubmit={addProduct}
        >
          <h2 className="item-header">Add Item</h2>
          <input
            type="text"
            placeholder="enter the name of the item"
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <input
            type="text"
            placeholder="enter your price"
            required
            value={price}
            onChange={event => setPrice(event.target.value)}
          />
          <br></br>
          <br></br>
          <button className="add-button">Add</button>
        </form>
        <h2 className="item-header">All Items</h2>
        <div>
          <table id="items">
            <thead>
              <tr>
                <th>Id</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Date Created</th>
                <th>Action</th>
              </tr>
            </thead>
            {list}
          </table>
        </div>
      </div>
    );
    }

export default AddItem;
