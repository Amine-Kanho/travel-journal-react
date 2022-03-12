import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt="" className="card--img"/>
            <div className="card--description">
                <div className="card--location" >
                    <img src="../location.png" alt="" className="location--logo" />
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer" className="card--map" >View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    )
}