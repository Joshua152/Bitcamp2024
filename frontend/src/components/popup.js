import "./popup.css";

function Popup({ data, show, closePopup }) {
    return (
        <div id="popup" style={{ left: show && "5%" }}>
            <span><h1>{data.address}</h1></span>
            <div id="popup-values">
                <span>Estimated Value:</span><span>${data.listingPrice}</span>
                <span>Affordability Score: {Math.floor(data.a_score*100)}%</span><div className="score-bar" style={{ "--s": 10 * data.a_score }} />
                <span>Preference Score: {Math.floor(data.p_score*100)}%</span><div className="score-bar" style={{ "--s": 10 * data.p_score }} />
                <span>Bedrooms: {data.beds}</span>
                <span>Bathrooms: {data.bathstotal}</span>
                <span style={{"grid-column": "1 / span 2"}}>Lot Size: {data.lotsize}ft²</span>
                <iframe
                    frameBorder="0"
                    id="map-iframe"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBlb-lAQkxT5aTLVAUu7nNMmMk7cKSHrPY&q=${data.address}&maptype=satellite`}
                    allowFullScreen>
                </iframe>
            </div>

            <button onClick={closePopup} id="close-popup">X</button>
        </div>);
}

export default Popup;