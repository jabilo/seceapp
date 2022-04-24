import React from "react";
import data from "../data";
import Event from "./Event";
import { Link } from 'react-router-dom';

export default function Events() {

    const contests = data.events.map(contest => (
        <div>
        <Link to={{ path: "/" + `{contest.name}`, state: { nationality: "Icelandic" } }}>
  Next step
</Link>
        <Link to={"Event"}>
                {contest.name}
        </Link>
            {/* <button onClick={handleClick}>
                {contest.name}
            </button>

            {click && 
            /*  <Event name={contest.name}
                about={contest.about}
                overview={contest.overview}
                requirements={contest.requirements}
                venue={contest.venue}
                registrationLink={contest.registrationLink}
                contact={contest.Contact} />} */} 
        </div>
    ))

    return (
        <main>
            {/* main poster */}
            {contests}            
        </main>
    );
}