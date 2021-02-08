import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
 } from '../types'

 const ContactState = props => {
     const initialState = {
        contacts: [
            {
                id: 1,
                name: "Harry White",
                email: "harry@gmail.com",
                phone: "133-243-7584",
                type: "professional"
            },
            {
                id: 2,
                name: "Derick Obi",
                email: "derick@gmail.com",
                phone: "243-233-7584",
                type: "work"
            },
            {
                id: 1,
                name: "Melissa Green",
                email: "melissa@outlook.com",
                phone: "543-325-8342",
                type: "home"
            }
        ]
     };

     const [ state, dispatch ] =  useReducer(contactReducer, initialState);

     //Add Contact

     //Delete Contact

     //Set Current Contact

     //Clear Current Contact

     //Update Contact

     //Filter Contact

     //Clear Filter

     return (
         <contactContext.Provider value={{ 
             contacts: state.contacts
         }}>
            { props.children }
         </contactContext.Provider>
     )
 }

 export default ContactState;