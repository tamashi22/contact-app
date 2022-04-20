import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactList from "./components/contactList/ContactList";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ContactList />} />
      </Routes>
    </Provider>
  );
}

export default App;
