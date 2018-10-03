
/************ MVT *****************/
var layer = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: 'http://maps.ecere.com/hms/layers/NaturalEarth/cultural/ne_10m_admin_0_countries/tiles/GNOSISGlobalGrid/0/1/0.json'
    }),
    style: style
});

var map = new ol.Map({
    target: 'map-ecere-mvt',
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

/************ JVT *****************/
var map = new ol.Map({
    target: 'map-ecere-jvt',
    view: new ol.View({
        center: ol.proj.fromLonLat([-77.029852, 38.896461]),//, 
        zoom: 10
    }),
    layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
    }), new ol.layer.VectorTile({
        source: new ol.source.VectorTile({
            format: new ol.format.GeoJSON(),
            url: '0.json'//'
        }),
        style: function (feature, resolution) {
            return new ol.style.Style({
                fill: new ol.style.Fill({
                    color: '#F7FA00',
                    opacity: 0.6
                }),
                stroke: new ol.style.Stroke({
                    color: '#444',
                    width: 0.4
                })
            });
        }
    })]
});
maps.push(map);