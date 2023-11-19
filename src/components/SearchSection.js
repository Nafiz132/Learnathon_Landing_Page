import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const SearchSection = () => {
  const { appState, setAppState } = useContext(AppContext);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setAppState((prevState) => ({
      ...prevState,
      searchTerm,
      sortedData: prevState.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }));
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <input
        type="text"
        placeholder="Search..."
        value={appState.searchTerm}
        onChange={handleSearch}
        className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
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

export default SearchSection;
