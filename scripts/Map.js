function myMap() {
    var uluru = {lat: 47.862992472118485, lng: -122.28451609611511};
    var mapOptions = {
        center: uluru,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.roadmap
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });


}