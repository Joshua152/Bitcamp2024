import React from 'react';
import Card from '../../components/card.js'
import Popup from '../../components/popup.js';
import { useState } from 'react';

function Dashboard({ houseData }) {
    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});
    
    const createPopup = e => {
        setShowPopup(true);
    }

    const hidePopup = e => {
        setShowPopup(false);
    }

    return (
        <>
            <Popup data={popupData} show={showPopup} closePopup={hidePopup}/>
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                <p style={{ 
                    display: 'flex', 
                    alignSelf: 'start',
                    marginInlineStart: '30px' }}
                >
                        Here's a list of suitable houses we found!
                </p>
                {
                    houseData.map(item => (
                        <div key={item.attomId} onClick={createPopup}><Card house={item} setPopupData={setPopupData}/></div>
                    ))
                }
            </div>
        </>
    );
}

export default Dashboard;