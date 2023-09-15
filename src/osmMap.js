export function mapOSM(element,height,width,lat,lng,zoom){
  let ele = document.getElementById(element); //Find element
  ele.style.height = height;
  ele.style.width = width;

  let map = L.map(ele); //Create Map
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  let pin = L.latLng(lat,lng); // Create Pin
  map.setView(pin, zoom);
  L.marker(pin).addTo(map);
}
