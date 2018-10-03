
/************ MVT *****************/
var layer = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: 'http://www.pvretano.com/cubewerx/cubeserv/default/wfs/3.0.0/foundation/collections/inwatera_1m/items?f=mvt&limit=20000&crs=epsg:3857&bbox=38.7527,-77.1593,39.0425,-76.8709'
    }),
    style: function (feature, resolution) {

        var layer = feature.get('layer');
        var style = null;

        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: '#80E87B',
                opacity: 0.6
            }),
            stroke: new ol.style.Stroke({
                color: '#AD60AA',
                width: 0.3
            })
        });
    }
});

var map = new ol.Map({
    target: 'map-geosolution-mvt',
    view: new ol.View({
        center: ol.proj.fromLonLat([36.102615, 32.622897]),
        zoom: 9
    }),
    layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
    })
    ]
});
//map.addLayer(layer);
maps.push(map);
/************ JVT *****************/
var map = new ol.Map({
    target: 'map-geosolution-jvt',
    view: new ol.View({
        center: ol.proj.fromLonLat([-77.029852, 38.896461]),//, 
        zoom: 10
    }),
    layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
    })]
});
maps.push(map);
//var apiKey = 'UhguM5rA4BKa6p2UTZrG';
//var style = 'https://maps.tilehosting.com/styles/basic/style.json?key=' + apiKey;
//style = 'style.json';
//fetch(style).then(function (response) {
//    response.json().then(function (glStyle) {
//        olms.applyStyle(layer, glStyle, 'composite').then(function () {
//            map.addLayer(layer);
//        });
//    });
//});