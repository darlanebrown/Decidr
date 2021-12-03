import "./App.css";
import { useState } from "react";
import AddItem from "./Components/AddItem";
import { images } from "./assets/images";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");

  const selectItem = () => {
    if (allItems.length > 0) {
      if (allItems.length === 1) {
        // if we have only one item then we cannot have different item on each click.
        // We'll set the item though but also alert the user to add more items
        setSelectedIndex(0);
        setSelectedItem(allItems[0]);
        alert(
          "We recommend adding at least two items to have different item on each click"
        );
      } else {
        const randomIndex = Math.floor(Math.random() * allItems.length);
        if (randomIndex === selectedIndex) {
          // if new random number is equal to previously selected index then we won't be able to have a different on some clicks.
          // To avoid similarity in selected item we'll re-call the function to get a different index

          // this approach is called recursion
          selectItem();
        } else {
          setSelectedIndex(randomIndex);
          setSelectedItem(allItems[randomIndex]);
          //setAllItems([]);
        }
      }
    } else {
      alert("Add items to select an item from");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>DECIDR</h2>
      </header>
      <div className="app-container">
        <AddItem
          setListContainer={setAllItems}
          listContainer={allItems}
          onRefresh={(e) => {
            e.preventDefault();
            setSelectedItem(undefined);
            setSelectedIndex(undefined);
          }}
        />
        {selectedItem ? (
          <p>{selectedItem}</p>
        ) : (
          <div className="list-display-container">
            {allItems.map((entry, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p>{entry}</p>
                <button
                  className="btn btn-warning"
                  onClick={() =>
                    setAllItems(allItems.filter((i) => i !== entry))
                  }
                >
                  eighty-six
                </button>
              </div>
            ))}
          </div>
        )}
        <button className="btn btn-primary" onClick={() => selectItem()}>
          Select an Item
        </button>
        {selectedItem && <p>{selectedItem}</p>}
      </div>
    </div>
  );
}

export default App;
