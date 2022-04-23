import React, { useState } from 'react';
import "./contact_styles.css"
import { FaHeart } from "react-icons/fa";
/*import { addFavorite,delFavorite } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';*/
import like from "../../images/smallLike.svg"
import { Link } from 'react-router-dom';
const Contact = (item) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = (e) => {
      setToggle(!toggle);
      const list = [];
      if (!toggle) {
        console.log(e);
        list.push(e);
        localStorage.setItem("list", JSON.stringify(list));
      }
      if (toggle) {
        list.shift(e);
        localStorage.setItem("list", JSON.stringify(list));
      }
    };
    return (
        <div>
         <div className="contact__wrapper">
             <img className="contact__img"  alt="img" src={item.image}/>
             <div className="contact__info">
                <h1 className="contact__title">
                   <b> {item.firstName}  {item.lastName}</b>
                </h1> 
                
                <FaHeart  onClick={()=>handleToggle(item)} className={toggle ? "red__like":"white__like"} alt="like"/>     
             </div>
             <div className="contact__details">
               <ul className='details__list'>
                 <li className="adress li">{item.city} city, {item.country}</li>
                 <li className='phone li'>{item.phoneNumber}</li>
                 <li className='site li'>{item.website}</li>
                 <li className='email li'>{item.email}</li>
               </ul>
             </div>
             <Link to={`/item/${item.id}`}>
          <button className="contact_button">Show more</button>
          </Link>
         </div>     
        </div>
    );
};

export default Contact;