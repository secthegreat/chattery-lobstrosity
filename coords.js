// Steven Corbin CSCI 252, LAB 008 .js file

var uniqueSuccess = [
  [23.50, 121.00], [53.00,  -8.00], [40.40, -3.68], [37.06, -120.85], [55.75,  37.62], [55.75, 37.62], [52.37, 4.90], [52.37, 4.90], [38.00, -97.00000],
  [38.00, -97.00000], [41.77, -87.94], [37.57, 126.98], [37.54, -120.85], [38.00, -97.00], [38.00, -97.00], [35.17, -120.44], [26.06,119.31], [50.45, 30.52],
  [50.45, 30.52], [55.75, 37.62], [56.91, 59.94], [48.86, 2.35], [55.75, 37.62], [52.37, 4.89], [40.85, -74.83], [38.00, -97.00], [38.00,-97.00],
  [1.00, 8.00], [20.00, 77.00], [-33.9, 150.97], [40.71,-74.01], [39.49, -74.48], [39.49, -74.48], [50.45, 30.52], [39.04, -77.49], [39.04, -77.49],
  [39.04, -77.49] 
]; // 37 items, unique successful visits @ phillipsd.net

var uniqueFail = [
  [33.74, -117.06], [38.61, -121.46], [37.68, -120.95], [36.77, -119.76], [38.63, -121.33], [37.74, -121.12], [37.64, -120.97], [37.67, -121.02], [37.43, -120.78],
  [37.47, -120.86], [37.54, -120.85], [37.73, -120.95], [37.54, -120.85], [37.54,-120.84], [37.77, -120.85], [37.77, -120.85], [37.74, -121.24], [37.68, -120.95],
  [37.72, -121.04], [37.67, -121.02], [37.77, -120.85], [38.12, -121.17], [37.74, -121.24], [37.67, -121.02], [37.62, -121.46], [37.65, -121.14], [37.73, -120.95],
  [37.77, -120.85], [37.54, -120.85], [37.54, -120.85], [37.54, -120.85], [37.47, -120.86], [37.54, -120.85], [37.59, -120.96]
]; //34 items, unique Failed Logins @ phillipsd.net


function initMap() {

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 38.00, lng: -130.00},
    scrollwheel: true,
    zoom: 1
  });
  
  //successMarkers = sMark();
  //failMarkers = fMark();
  
  //var successMarkers, failMarkers;
  var marker, i, j, pos;

//function sMark() { // makes 'successful visits' markers
//var marker;
for (i = 0; i < uniqueSuccess.length; i++) {  
    pos = {lat: uniqueSuccess[i][0], lng: uniqueSuccess[i][1]};
    marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: 'blue_MarkerS.png'
    });
}

//function fMark() { // makes Failed login markers

//var marker;
for (j = 0; j < uniqueFail.length; j++) { 
    // pos = {lat: uniqueFail[j]['lat'], lng: uniqueFail[j]['lng']};
    pos = {lat: uniqueFail[j][0], lng: uniqueFail[j][1]};
    marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: 'orange_MarkerF.png'
    });
}

/**var mark1;
  mark1 = new google.maps.Marker({
    position: {lat: 38, lng: -130},
    map: map,
    icon: 'pink_MarkerA.png'
    });*/
    
} // end initMap function