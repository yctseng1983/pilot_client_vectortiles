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


/************ JVT *****************/
var group_ii = [];
var ajax_setting = {
    type: "GET",
    url: 'https://services.interactive-instruments.de/vtp/daraa?f=json',
    dataType: "json",
    success: function (data) {
        
        for (var i = 0; i < data.collections.length; i++) {
            var collection = data.collections[i];

            var name = collection.name;
            var l = new ol.layer.VectorTile({
                title:collection.name,
                source: new ol.source.VectorTile({
                    format: new ol.format.GeoJSON(),
                    url: 'https://services.interactive-instruments.de/vtp/daraa/collections/' + collection.name + '/items?f=json&count=100'//'
                }),
                style: function () {

                    var layer = feature.get('layer');// there's no such property

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
        }),new ol.layer.Group({
            title: 'Overlays',
            layers: group_ii
        })]
    });
    map_ii_jvt.addControl(new ol.control.LayerSwitcher());
    map_ii_jvt.on('moveend', function (event) {
        moveend(event);
    });
    maps.push(map_ii_jvt);
}
