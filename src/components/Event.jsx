import React from "react";
import "../styles/Event.css";

export default function Event(props) {
    return (
        <div>
            <h3>
                {props.overview}
            </h3>
        </div>
    );
}