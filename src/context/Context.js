import React, { useState, useEffect, useContext } from "react";
const url = "https://panorbit.in/api/users.json";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const opensidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  // api fetched
  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { users } = data;
    setUsers(users);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(users);

  return (
    <AppContext.Provider
      value={{
        users,
        isSidebarOpen,
        opensidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGolbalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
