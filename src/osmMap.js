export function mapOSM(element,height,width,lat,lng,zoom){
  let ele = document.getElementById(element); //Find element
  ele.style.height = height;
  ele.style.width = width;

  let map = L.map(ele).setView([lat, lng], zoom); //Create Map
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map); // Create Pin
}
