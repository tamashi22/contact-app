import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import ContactForm from './ContactForm';
import "./Item.css"
const ContactItem = () => {
    const state=useSelector((state)=>state);
    const {id}= useParams();
    return (
        state.data.filter((item)=>item.id ===+id).map((item)=>(
        <div>
           <Header/> 
            
        <div className='item__wrapper'>
        <img src={item.image} className="item__img" alt="img"/>
               <ContactForm/>
              
           </div>
        </div>
        
        ))
    )
    
};

export default ContactItem;