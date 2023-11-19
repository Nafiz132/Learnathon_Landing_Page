import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const CrudSection = () => {
  const { appState, setAppState } = useContext(AppContext);

  const handleAddItem = () => {
    const newItem = {
      id: appState.items.length + 1,
      name: appState.newItemName || `New Item ${appState.items.length + 1}`,
    };
    setAppState((prevState) => ({
      ...prevState,
      items: [...prevState.items, newItem],
      newItemName: '',
    }));
  };

  const handleDeleteItem = (id) => {
    const updatedItems = appState.items.filter((item) => item.id !== id);
    setAppState((prevState) => ({
      ...prevState,
      items: updatedItems,
    }));
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <input
        type="text"
        value={appState.newItemName}
        onChange={(e) =>
          setAppState((prevState) => ({
            ...prevState,
            newItemName: e.target.value,
          }))
        }
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        placeholder="Enter item name"
      />
      <button
        onClick={handleAddItem}
        className="p-2 bg-green-500 text-white rounded-md ml-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Add
      </button>
      <ul className="mt-4">
        {appState.items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-2 border rounded-md mb-2 hover:bg-gray-100"
          >
            <span>{item.name}</span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="p-2 bg-red-500 text-white rounded-md"
            >
               Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudSection;
