	function initialize() { 
		var lat;
 		var lng;
 
	$.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?',function(data) {
	console.log(data.geoplugin_latitude);
	lat = data.geoplugin_latitude;
	lng = data.geoplugin_longitude;

    var latlng = new google.maps.LatLng(lat, lng);
 
    var myOptions = {
      zoom: 11,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
		    
	var marker = new google.maps.Marker({
      position: new google.maps.LatLng(59.32536, 18.071197),
      map: map, 
      title:"Hello World!"
	});
	marker.setMap(map);
	
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(lat,lng),
		map: map,
		title:"du är här"
	});
	marker2.setMap(map);
	
	
	/*var contentString2 = '<div id="popup_info">'+
    '<div id="info">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Du är här</h1>'+
    '<div id="popupContent">'+
    '<p><b>Rubrik</b>, här kommer kortfattad info om frågan. </p>' +
    '<p> <a href="../question.html">Klicka här</a></p>'+
    '</div>'+
    '</div>';
    
    var infowindow = new google.maps.InfoWindow({
    	content: contentString2
	});*/


	var contentString = '<div id="popup_info">'+
    '<div id="info">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Vad är det här?</h1>'+
    '<div id="popupContent">'+
    '<p>Det står stolar på isen vid...</p>' +
    '<p><a href="../question.html">Klicka här för att komma till frågan</a></p>'+
    '</div>'+
    '</div>';
    
    var infowindow = new google.maps.InfoWindow({
    	content: contentString
	});
    
    google.maps.event.addListener(marker, 'click', function() {
  		infowindow.open(map,marker);
	});

   }); 
}
