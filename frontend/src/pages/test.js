import Popup from "../components/popup";
import { useState } from "react";

function Test() {
    const [showPopup, setShowPopup] = useState(false);
    const [data, setData] = useState({
        "address": "123 Gay Street",
        "listingPrice": 13,
        "aScore": 0.7,
        "pScore": 0.96,
        "beds": 3,
        "baths": 2
    });

    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    return (
        <div id="test">
            <button onClick={togglePopup}>Show/Hide</button>
            <Popup data={data} show={showPopup} closePopup={togglePopup}/>
         </div>
    );
}

export default Test;