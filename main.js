//default start function
function createMap() {

    //opening statement URLs
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' + ' <a href="http://mapbox.com">Mapbox</a> |  <a href="https://wooly-gator-kupo.github.io/">UFO2019 Robert Eschbaugh</a>';
    // removed "' + '" before URL
	
    //Mapbox API Token
    var apitoken = 'pk.eyJ1Ijoid29vbHktZ2F0b3Ita3VwbyIsImEiOiJjazJvM2l3MG0wN2IxM2dwYnBkeXMwMzNvIn0.t2SQOlFI55bLWqBUqfJNMg'; 
    
    //Stanard MaxBox Styles URL
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={apitoken}';
    
    //Custom MapBox Style URL
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={apitoken}'; s
    
    //custom basemaps
    var customBasemap = L.tileLayer(mbStyleUrl, {id: 'wooly-gator-kupo/ck2o3oae50d451cpbnf46lpe2', token: apitoken,  attribution: mbAttr});
    
    //different basemap variables
    //var MapBox   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    var dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark', token: apitoken,  attribution: mbAttr});
    //var Outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken,  attribution: mbAttr});
    
    //maps to be created
    var map = L.map('map', {
        center: [36.00, -5],//map center coordination 
        zoom: 7, //zoom level
        layers: dark //dark base
    });
    
    //basemap control layers
    var baseLayers = {
        //"MapBox": MapBox,
	//"Outdoors": Outdoors,
	"dark": dark,
    };
    
    L.control.layers(baseLayers).addTo(map);
     
};

//default call function
$(document).ready(createMap);

//Dark changed to dark on 12/13/2019
//token to apitoken
