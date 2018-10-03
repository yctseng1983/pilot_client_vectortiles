
/************ MVT *****************/
var layer = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: 'http://www.pvretano.com/cubewerx/cubeserv/default/wfs/3.0.0/foundation/collections/inwatera_1m/items?f=mvt&limit=20000&crs=epsg:3857&bbox=38.7527,-77.1593,39.0425,-76.8709'
    }),
    style: style
});

var map_cubewerx_mvt = new ol.Map({
    target: 'map-cubewerx-mvt',
    view: new ol.View({
        center: ol.proj.fromLonLat([36.102615, 32.622897]),
        zoom: 9
    }),
    layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
    })
    ]
});
map_cubewerx_mvt.addLayer(layer);
map_cubewerx_mvt.on('pointermove', showInfo);
map_cubewerx_mvt.on('moveend', function (event) {
    moveend(event);
});
maps.push(map_cubewerx_mvt);
/************ JVT *****************/
var map_cubewerx_jvt = new ol.Map({
    target: 'map-cubewerx-jvt',
    view: new ol.View({
        center: ol.proj.fromLonLat([36.102615, 32.622897]),//, 
        zoom: 10
    }),
    layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
    }), new ol.layer.VectorTile({
        source: new ol.source.VectorTile({
            format: new ol.format.GeoJSON(),
            url: 'http://tb14.cubewerx.com/cubewerx/cubeserv/vt/wfs/3.0.0/vtpilot/collections/AgricultureSrf/items?count=1000&outputFormat=application%2Fgeo%2Bjson'//'
        }),
        style: function (feature, resolution) {
            //console.log(feature);
            var layer = feature.get('layer');
            //console.log(layer);
            var style = null;
            if (layer == undefined || layer == null) {
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
            switch (layer.toLowerCase()) {
                case 'informationpnt':
                    return new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: '#ccddee',
                            opacity: 1
                        }),
                        stroke: new ol.style.Stroke({
                            color: '#eeddcc',
                            width: 2
                        }),
                        image: new ol.style.Circle({
                            radius:5,
                            fill:new ol.style.Fill({
                                color: '#FFBA7A',
                                opacity: 1
                            }),
                            stroke: new ol.style.Stroke({
                                color: '#7767c2',
                                width: 2
                            })
                        })
                    });
                    break;
                case 'agriculturesrf':
                    return new ol.style.Style({
                        fill: new ol.style.Fill({
                            color: '#A1D3B9',
                            opacity: 0.6
                        }),
                        stroke: new ol.style.Stroke({
                            color: '#039859',
                            width: 0.3
                        })
                    });
                    break;
            }
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
    })]
});

map_cubewerx_jvt.on('pointermove', showInfo);
map_cubewerx_jvt.on('moveend', function (event) {
    moveend(event);
});
maps.push(map_cubewerx_jvt);
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