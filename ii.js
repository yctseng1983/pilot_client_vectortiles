/************ MVT *****************/
var layer = new ol.layer.VectorTile({
    source: new ol.source.VectorTile({
        format: new ol.format.MVT(),
        url: 'https://services.interactive-instruments.de/vtp/daraa/tiles/default/{z}/{x}/{y}?f=mvt'
    }),
    style: style
});

var map_ii_mvt = new ol.Map({
    target: 'map-ii-mvt',
    view: new ol.View({
        center: ol.proj.fromLonLat([36.102615, 32.622897]),
        zoom: default_zoom
    }),
    layers: [new ol.layer.Tile({
        source: new ol.source.OSM()
    })
    ]
});
map_ii_mvt.addLayer(layer);
map_ii_mvt.on('pointermove', showInfo);
map_ii_mvt.on('moveend', function (event) {
            moveend(event);
});
maps.push(map_ii_mvt);

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
//



var group_ii = [];
var ajax_setting = {
    type: "GET",
    url: 'https://services.interactive-instruments.de/vtp/daraa?f=json',
    dataType: "json",
    success: function (data) {
        
        for (var i = 0; i < data.collections.length; i++) {
            var collection = data.collections[i];

            var name = collection.name;
            //if (collection.name.toLowerCase() != 'agriculturesrf') continue;
            var l = new ol.layer.VectorTile({
                title:collection.name,
                source: new ol.source.VectorTile({
                    format: new ol.format.GeoJSON(),
                    url: 'https://services.interactive-instruments.de/vtp/daraa/collections/' + collection.name + '/items?f=json&count=100'//'
                }),
                style: style
            });
            group_ii.push(l);
        }
        render_ii_jvtmap();
    },
    error: function (err) {
       
    }
}
$.ajax(ajax_setting);
var map_ii_jvt = null;
function render_ii_jvtmap() {

    map_ii_jvt = new ol.Map({
        target: 'map-ii-jvt',
        view: new ol.View({
            center: ol.proj.fromLonLat(default_position),//, 
            zoom: default_zoom
        }),
        
        layers: [new ol.layer.Tile({
            source: new ol.source.OSM()
        })/*, new ol.layer.VectorTile({
            source: new ol.source.VectorTile({
                format: new ol.format.GeoJSON(),
                url: 'https://services.interactive-instruments.de/vtp/daraa/collections/agriculturesrf/items?f=json&count=1000'//'
            }),
            style:style
        })*/,new ol.layer.Group({
            title: 'Overlays',
            layers: group_ii
        })]
    });
    map_ii_jvt.addControl(new ol.control.LayerSwitcher());
    //map_ii_jvt.on('pointermove', showInfo);
    map_ii_jvt.on('moveend', function (event) {
        moveend(event);
    });
    maps.push(map_ii_jvt);
}
//var group = new ol.layer.Group({
//    title: 'Overlays',
//    layers: [
//        new ol.layer.VectorTile({
//            title: 'ddd',
//            source: new ol.source.VectorTile({
//                format: new ol.format.MVT(),
//                url: 'http://www.pvretano.com/cubewerx/cubeserv/default/wfs/3.0.0/foundation/collections/inwatera_1m/items?f=mvt&limit=20000&crs=epsg:3857&bbox=38.7527,-77.1593,39.0425,-76.8709'
//            }),
//            style: style
//        })
//    ]
//})