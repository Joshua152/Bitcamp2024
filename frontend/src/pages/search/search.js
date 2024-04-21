import React, { useState, useEffect, useRef } from 'react';
import Header from '../../components/header';
import { useNavigate } from 'react-router-dom';
import BedroomFilter from './bedroomFilter';
import BathroomFilter from './bathroomFilter';
import { UserAuth } from '../../context/AuthContext';
import { getHousesByZip } from '../../data';



function Search({ setHouseData }) {
  const { user } = UserAuth();
  const mapRef = useRef(null);
  

  const [searchTerm, setSearchTerm] = useState('');
  const [errored, setErrored] = useState(false);
  const [bathrooms, setBathrooms] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleEnter = async (event) => {
    if (searchTerm === '') {
      setErrored(true);
      return;
    }

    setErrored(false);

    if (event.key === "Enter") {
      const newHouseData = await getHouseData();
      setHouseData(newHouseData);
      navigate("/dashboard");
    }
  };

  const handleSearch = async () => {
    if (searchTerm === '') {
      setErrored(true);
      return;
    }

    setErrored(false);
    const newHouseData = await getHouseData();
    setHouseData(newHouseData);
    navigate("/dashboard");
  };

  const getHouseData = async () => {
    const data = await getHousesByZip(user, searchTerm, bedrooms, bathrooms);
    return data;
  }

  
/*Code pen 
useEffect(() => {
  const pos = fromLonLat([16.3725, 48.208889]);
  const layer = new TileLayer({
      source: new OSM()
  });
  const map = new Map({
      target: 'map', // Ensure this is the ID of your map container
      layers: [layer],
      view: new View({
          center: pos,
          zoom: 2
      })
  });

  // Example of adding a marker
  const markerElement = document.getElementById('marker');
  const marker = new Overlay({
      position: pos,
      element: markerElement
  });
  map.addOverlay(marker);

}, []);

// popup
var popup = new ol.Overlay.Popup();


// drag action
var dragPan;
map.getInteractions().forEach(function(interaction){
	if (interaction instanceof ol.interaction.DragPan) {
		dragPan = interaction;  
  }
});

var latlng = [16.3725, 48.208889];
popup.show(pos,'Latitude :'+ latlng[0]+', Longitude :'+ latlng[1]);
map.addOverlay(popup);

// drag pin
marker_el.addEventListener('mousedown', function(evt) {
  dragPan.setActive(false);
  marker.set('dragging', true);
  console.info('start dragging');
});

map.on('pointermove', function(evt) {
	if (marker.get('dragging') === true) {
  	marker.setPosition(evt.coordinate);
  }
});

map.on('pointerup', function(evt) {
	if (marker.get('dragging') === true) {
    console.info('stop dragging, coordinate' + evt.coordinate);
    dragPan.setActive(true);
    marker.set('dragging', false);
    popup.show(evt.coordinate,'Latitude :'+evt.coordinate[0]+', Longitude :'+ evt.coordinate[1]);
  }
});

// onclick ma
map.on('click', function(evt){
  popup.show(evt.coordinate,'Latitude :'+evt.coordinate[0]+', Longitude :'+ evt.coordinate[1]);
   marker.setPosition(evt.coordinate);
   marker.set('dragging', false);
});
*/


  

  return (
    <div>
    <Header userName={user?.displayName} userProfilePic={user?.photoURL} />
      <div className='container-search'>
        
        <div className='right-side'>
          <div id="map" class="map"></div>
          <div id="msg">Dragging ol.Overlay</div>
          <div id="marker" title="Marker"></div>
        </div>
        <div className='left-side'>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter a zip code here"
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleEnter}
            />
            <button className="search-button" onClick={handleSearch}>Find Your Home</button>
            <p style={{ visibility: errored ? 'visible' : 'hidden'}}>Zip code cannot be empty</p>
            <div className="filter-container">
              <BedroomFilter callback={setBedrooms}/>
              <BathroomFilter callback={setBathrooms}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;