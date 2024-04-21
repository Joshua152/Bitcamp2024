import React from 'react';
import './card.css';

function Pie({ percent, label, color }) {
    let color1;
    if (percent < 60) {
        color1 = `rgb(${255}, ${5.1 * percent}, 0)`; // red to yellow
    } else {
        color1 = `rgb(${255 - 5.1 * (percent - 50)}, ${255}, 0)`; // yellow to green
    }
    return (
        <>
            <div className='pie-container'>
                <div class='pie' style={{ '--p': percent, '--b': '10px', '--c': color1 }}></div>
                <h5>{label}</h5>
            </div>
        </>
    )
}


// props: house json
function Card({ house, setPopupData }) {
    const updatePopupData = e => {
        setPopupData(house);
    }

    return (
        <>
            <div className='card' onClick={updatePopupData}>
                <div className='addr-scores'>
                    <h1>{house.address}</h1>
                    <div className='scores'>
                        <Pie percent={house.a_score * 100} label='Affordability Score' color='var(--bg-color)'/>
                        <Pie percent={house.p_score * 100} label='Preference Score' color='var(--bg-color)' />
                    </div>
                </div>
                <div className='separator' />
                <div className='property-container'>
                    <div className='property'><strong>Price: </strong> {house.listingPrice}</div>
                    <div className='property'><strong>Lot Size (ft²): </strong> {house.lotsize}</div>
                    <div className='property'><strong>Baths: </strong> {house.bathstotal}</div>
                    <div className='property'><strong>Beds: </strong> {house.beds}</div>
                    <div className='property'><strong>Rooms: </strong> {house.roomsTotal}</div>
                </div>
            </div>
        </>
    )
}

export default Card;