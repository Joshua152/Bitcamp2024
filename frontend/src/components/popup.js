import "./popup.css";

function Popup({ data, show, closePopup }) {
    return ( 
    <div id="popup" style={{left: show && "10%"}}>
        <span><h1>{data.address}</h1></span>
        <span>Estimated Value: ${data.listingPrice}</span>
        <span className="score" style={{"--s": 10 * data.a_score}}>Affordability Score: {data.a_score}</span>
        <span className="score" style={{"--s": 10 * data.p_score}}>Preference Score: {data.p_score}</span>
        <span>Bedrooms: {data.beds}</span>
        <span>Bathrooms: {data.bathstotal}</span>

        <button onClick={closePopup} id="close-popup">X</button>
    </div> );
}

export default Popup;