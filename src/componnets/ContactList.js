import React from 'react'
import { ContactCard } from './ContactCard'

export const ContactList = (props) => {
    console.log(props)
    const renderlist = props.contacts.map((contact)=>{
        return <ContactCard  contact = {contact} />
    });
        return <div>{renderlist}</div>
           
        
    }
   
   
