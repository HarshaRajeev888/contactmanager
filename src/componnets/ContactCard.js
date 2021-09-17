import React from 'react'

export const ContactCard = (props) => {
    const {id,name,email}=props.contact

        return (
            <div>
                <br>
                </br>
            <div>{name}</div>
            <div>{email}</div>
            </div>
        )
    
}
