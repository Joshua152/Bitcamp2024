import React from 'react';
import Card from '../../components/card.js'
import Popup from '../../components/popup.js';
import { useState } from 'react';

function Dashboard() {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    const house = {
        "attomId": 1,
        "lotsize": 1500,
        "address": "123 north st",
        "bathstotal": 3,
        "beds": 4,
        "roomsTotal": 6,
        "listingPrice": 400000,
        "a_score": 0.8,
        "p_score": 0.9
    }

    const houseList = [house, house, house, house];

    const createPopup = e => {
        setShowPopup(true);
    }

    const hidePopup = e => {
        setShowPopup(false);
    }

    return (
        <>
            <Popup data={popupData} show={showPopup} closePopup={hidePopup}/>
            <div className='dashboard-container'>
                <h1>Dashboard</h1>
                <p style={{ 
                    display: 'flex', 
                    alignSelf: 'start',
                    marginInlineStart: '30px' }}
                >
                        Here's a list of suitable houses we found!
                </p>
                {
                    houseList.map(item => (
                        <div key={item.attomId} onClick={createPopup}><Card house={item} setPopupData={setPopupData}/></div>
                    ))
                }
            </div>
        </>
    );
}

export default Dashboard;