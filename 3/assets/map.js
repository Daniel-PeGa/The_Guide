var markers = []; // Array that stores markers

function initialize() {
    var mapOptions = {
        zoom: 18,
        center: new google.maps.LatLng(38.983064, -76.9473872) // Van Munching Hall
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // To add the marker to the map, use the 'map' property
    markers[0] = new google.maps.Marker({
        position: new google.maps.LatLng(38.983064, -76.9473872), // Van Munching Hall,
        map: map,
        title: "Van Munching Hall"
    });

    markers[1] = new google.maps.Marker({
        position: new google.maps.LatLng(38.9827089, -76.9475412), // Smith Store,
        map: map,
        title: "The Smith Store",
        icon: "http://maps.google.com/mapfiles/ms/micons/shopping.png"
    });

    var vmhInfoWindow = new google.maps.InfoWindow({
        content: "Van Munching Hall is home to the University of Maryland's Robert H. Smith School of Business."
    });

    var smithStoreInfoWindow = new google.maps.InfoWindow({
        content: "The Smith Store is a student-run organization dedicated to providing students with practical, hands-on management experience who in turn, help to promote the Smith brand."
    });

    google.maps.event.addListener(markers[0], 'mouseover', function() {
        vmhInfoWindow.open(map, this);
    });

    google.maps.event.addListener(markers[0], 'mouseout', function() {
        vmhInfoWindow.close();
    });

    google.maps.event.addListener(markers[1], 'mouseover', function() {
        smithStoreInfoWindow.open(map, this);
    });

    google.maps.event.addListener(markers[1], 'mouseout', function() {
        smithStoreInfoWindow.close();
    });
}

google.maps.event.addDomListener(window, 'load', initialize);