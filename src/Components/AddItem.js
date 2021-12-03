import { useState } from "react";
import { images } from "../assets/images";

export default function AddItem({
  listContainer,
  setListContainer,
  onRefresh,
}) {
  const [newItem, setNewItem] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    if (newItem.trim()) {
      if (listContainer.includes(newItem)) {
        alert("We already have this item in the list. Please add another one");
      } else {
        setListContainer([...listContainer, newItem]);
        setNewItem("");
      }
    } else {
      alert("Nothing added, Did you forget to add something?");
    }
  };

  return (
    <form style={{ flex: 1 }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <button
          type="button"
          style={
            {
              // display: 'none',
              // flex: 1,
              // alignSelf: 'flex-start',
            }
          }
          onClick={onRefresh}
        >
          <img
            src={images.reload}
            style={{
              width: "32px",
              height: "32px",
            }}
            alt="reload"
          />
        </button>
        <input
          id="add-item"
          className="form-control form-control-full-width"
          value={newItem}
          onChange={(event) => setNewItem(event.target.value)}
          placeholder="Add an item"
        />
        <button className="btn btn-primary" onClick={formSubmit} type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}
