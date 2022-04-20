import React, { useEffect, useState } from "react";
import Header from "../Header";
import likeRed from "../../images/LikeRed.svg"
import sortAZ from "../../images/sortAZ.svg"
import sortZA from "../../images/sortZA.svg"
import { GetAllUsers,searchContact,sortAz,sortZa } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
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
  


  return <Header />;
};
export default ContactList;
