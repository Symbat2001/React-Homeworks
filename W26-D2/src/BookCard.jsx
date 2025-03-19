import React from "react";
import './BookCard.css'

export default function BookCard(props){
    return (
        <div className="book-card">
            <img src={props.image} alt={props.name} />
            <h2>Book name: {props.title}</h2>
            <p>Author: {props.author}</p>
            <p>Year: {props.year}</p>
        </div>
    )

}