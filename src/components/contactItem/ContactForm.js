import React, { useState } from 'react';
import "./Item.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from 'react-router-dom';
import {  useSelector, useDispatch } from 'react-redux';
import {updateContact} from '../../redux/actions';

const validationSchema=Yup.object().shape({
    firstName: Yup.string().typeError('Must be string').required('This field is requred'),
    lastName: Yup.string().typeError('Must be string').required('This field is requred'),
    city: Yup.string().typeError('Must be string').required('This field is requred'),
    country: Yup.string().typeError('Must be string').required('This field is requred'),
    phoneNumber: Yup.string().required('This field is requred').matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Please, enter correct phone number"),
    email: Yup.string().email("Invalid email").required("This field is requred"),
    website: Yup.string().required("This field is requred").matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"Please, enter correct Url"),
});

const ContactForm = () => {
    const state=useSelector((state)=>state);
    const {id}= useParams();
    const navigate=useNavigate()
    const dispatch = useDispatch();
    const submit= async (values)=>{
      await dispatch(updateContact(values))
      navigate("/");
    }

    return  (
        state.data.filter((item)=>item.id ===+id).map((item)=>(
            <Formik
                key={item.id}
                initialValues={{
                    id: item.id,
                    firstName: item.firstName,
                    lastName:item.lastName,
                    city: item.city,
                    country: item.country,
                    phoneNumber: item.phoneNumber,
                    email: item.email,
                    website: item.website,
                    image: item.image
                }}
                validateOnBlur
                onSubmit={submit}
                validationSchema={validationSchema}
                >
                    {({errors,values,handleChange,handleSubmit,dirty,touched,handleBlur,isValid })=>(
                        <Form className='item__form'>
                            <div className='form__wrapper'>
                            <div className='input__wrapper'>
                                <div className='flex__input' >
                                    <label className='label' htmlFor='firstName'>First Name</label>
                                    <Field className="input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="firstName"
                                        value={values.firstName}
                                    />
                                    {touched.firstName && errors.firstName ?(
                                        <div className='error'>{errors.firstName}</div>
                                    ):null}
                                </div>
                        
                                <div className='flex__input col2'>
                                    <label className='label' htmlFor='lastName'>Last name</label>
                                    <Field className="input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="lastName"
                                        value={values.lastName}
                                    />
                                    {touched.lastName && errors.lastName ?(
                                        <div className='error'>{errors.lastName}</div>
                                    ):null}
                                </div>
                            </div>


                            <div className='input__wrapper'>
                                <div className='flex__input' >
                                    <label className='label' htmlFor='city'>City</label>
                                    <Field className="input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="city"
                                        value={values.city}
                                    />
                                    {touched.city && errors.city ?(
                                        <div className='error'>{errors.city}</div>
                                    ):null}
                                </div>
                        
                                <div className='flex__input col2'>
                                    <label className='label' htmlFor='country'>Country</label>
                                    <Field className="input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="country"
                                        value={values.country}
                                    />
                                    {touched.country && errors.country ?(
                                        <div className='error'>{errors.country}</div>
                                    ):null}
                                </div>
                            </div>

                            <div className='input__wrapper'>
                                <div className='flex__input' >
                                    <label className='label' htmlFor='phoneNumber'>Phone Number</label>
                                    <Field className="input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="phoneNumber"
                                        value={values.phoneNumber}
                                    />
                                    {touched.phoneNumber && errors.phoneNumber ?(
                                        <div className='error'>{errors.phoneNumber}</div>
                                    ):null}
                                </div>
                        
                                <div className='flex__input col2'>
                                    <label className='label' htmlFor='email'>Email</label>
                                    <Field className="input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="email"
                                        value={values.email}
                                    />
                                    {touched.email && errors.email ?(
                                        <div className='error'>{errors.email}</div>
                                    ):null}
                                </div>
                            </div>


                            <div className='input__wrapper'>
                                <div className='flex__input' >
                                    <label className='label' htmlFor='website'>Website</label>
                                    <Field className="input"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="website"
                                        value={values.website}
                                    />
                                    {touched.website && errors.website ?(
                                        <div className='error'>{errors.website}</div>
                                    ):null}
                                </div>
                        
                                <div className='col2'>
                                    <button
                                        onClick={() => handleSubmit()}
                                        className="button"
                                        type="submit"
                                        >
                                        Save Contact
                                    </button>
                                </div>
                            </div>





                            </div>
                        </Form>
                    )}

                </Formik>
        ))
    );
};

export default ContactForm;