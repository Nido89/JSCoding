
function updateMap(){
    fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
    .then(response=> response.json())
    .then(rsp =>{
        
        
       console.log(rsp.locations[0].coordinates);

        

        rsp.locations.forEach(location => {
            coordinates= 
            latitude = element.latitude;
            longitude = element.longitude;

            // Mark on the map
            new mapboxgl.Marker({
                draggable: true
                })
                .setLngLat([longitude, latitude])
                .addTo(map);

        });

    })
}   

updateMap();
