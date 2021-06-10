import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url: 'http://lds365.com/wp-content/uploads/2013/12/jesus-christ.jpg',
        },
        {
            name: 'the zuck',
            url: 'http://blogs.biomedcentral.com/bmcseriesblog/wp-content/uploads/sites/9/2016/02/Garden_Lizard_Calotes_head1.jpg',
        },
    ]);
    

    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className="tinderCards__cardContainer">
            {people.map(person => (
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={"up", "down"}
                >
                    <div
                    style={{ backgroundImage: `url(${person.url})` }} 
                    className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}

export default TinderCards
