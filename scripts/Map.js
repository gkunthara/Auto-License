function myMap() {
    var uluru = {lat: 47.8625106, lng: -122.28410070000001};
    var mapOptions = {
        center: uluru,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.roadmap
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });


}