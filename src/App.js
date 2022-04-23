import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContactItem from "./components/contactItem/ContactItem";
import ContactList from "./components/contactList/ContactList";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/item/:id" element={<ContactItem/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
