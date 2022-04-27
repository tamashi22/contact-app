import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Spin } from "antd";
import likeRed from "../../images/LikeRed.svg"
import sortAZ from "../../images/sortAZ.svg"
import sortZA from "../../images/sortZA.svg"
import { GetAllUsers,searchContact,sortAz,sortZa } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./contactList.css"
import Contact from "./Contact";
const ContactList = () => {
  const state=useSelector((state)=>state)
  const dispach =useDispatch();
  const [fav,setFav]=useState(true);

  useEffect(()=>{
    const getData=localStorage.getItem("LocalData")
    if(!getData){
      dispach(GetAllUsers())
    }
  },[]);
  const showFav=()=>{
    setFav(!fav);
    console.log(fav);
    if (fav) {
      const favList = localStorage.getItem("list");
      if (!favList) {
        alert("There is no Favourite contact");
      }
      console.log(favList);
    }
  
  }
  const handleSearch=(event)=>{
    dispach(searchContact(event))
  }
  const clickAzFilter=()=>{
    dispach(sortAz())
  }
  const blur=()=>{
    dispach(GetAllUsers())
  }
  const clickZaFilter=()=>{
    dispach(sortZa())
  }
  const favList = JSON.parse(localStorage.getItem("list"));
  let dataList = fav ? state.data : favList;
  

  return state.loading ?(
    <div className="loader"><Spin/></div>
    
  ) : state.error?(
    <h1>{state.error}</h1>
  ) : (
    <div>
      <Header/>
      <div className="main__wrapper">
        <div className="toolbar" >
          <input className="search__contact"   placeholder="type to search..." onChange={(e)=>handleSearch(e.target.value)}
            onBlur={(e)=>blur(e.target.value)}/>
          <div className="filters">
            <img src={likeRed} className="big__like" alt="big__like" onClick={showFav}/>
            <img src={sortAZ} className="sort_AZ" onClick={clickZaFilter} alt="sortAZ"/>                 
            <img src={sortZA} className="sort_ZA" onClick={clickAzFilter} alt="sortZA"/> 
          </div>
        </div>
        <div className="contacts__wrapper">
        {dataList.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              city={item.city}
              country={item.country}
              email={item.email}
              phoneNumber={item.phoneNumber}
              website={item.website}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
};
export default ContactList;
