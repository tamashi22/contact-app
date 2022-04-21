import React, { useEffect, useState } from "react";
import Header from "../Header";
import likeRed from "../../images/LikeRed.svg"
import sortAZ from "../../images/sortAZ.svg"
import sortZA from "../../images/sortZA.svg"
import { GetAllUsers,searchContact,sortAz,sortZa } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "./contactList.css"
const ContactList = () => {
  const state=useSelector((state)=>state)
  const favContact = useSelector(state=>state.favorite)
  const dispach =useDispatch();
  const [fav,setFav]=useState(false);

  useEffect(()=>{
    const getData=localStorage.getItem("LocalData")
    if(!getData){
      dispach(GetAllUsers())
    }
  },[]);
  const showFav=()=>{
    setFav(!fav)
    if (showFav.length==0){
      alert("There is no favorites!")
      setFav(!fav);
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
  let dataList = fav &&favContact.length ? favContact:state.data


  return state.loading ?(
    <h1>loading</h1>
  ):state.error?(
    <h1>{state.error}</h1>
  ):(
    <div>
      <Header/>
      <div className="main__wrapper">
        <div className="toolbar" >
          <input className="search__contact"   placeholder="type to search..." onChange={(e)=>handleSearch(e.target.value)}
            />
          <div className="filters">
            <img src={likeRed} className="big__like"/>
            <img src={sortAZ} className="sort_AZ" onClick={clickAzFilter}/>                 <img src={sortZA} className="sort_ZA"onClick={clickZaFilter}/> 
          </div>
        </div>
      </div>
    </div>
  )
};
export default ContactList;
