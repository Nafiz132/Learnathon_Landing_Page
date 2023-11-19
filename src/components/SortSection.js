import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const SortSection = () => {
  const { appState, setAppState } = useContext(AppContext);

  const handleSort = () => {
    setAppState((prevState) => ({
      ...prevState,
      sortedData: [...prevState.items].sort((a, b) =>
        a.name.localeCompare(b.name)
      ),
    }));
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <button
        onClick={handleSort}
        className="p-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Sort
      </button>
      <ul className="mt-4">
        {appState.sortedData.map((item) => (
          <li
            key={item.id}
            className="p-2 border rounded-md mb-2 hover:bg-gray-100"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortSection;
