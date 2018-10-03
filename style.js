var style = function (feature, resolution) {

    var layer = feature.get('layer');
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
        case 'facilitypnt':
            return new ol.style.Style({
                fill: new ol.style.Fill({
                    color: '#E85F50',
                    opacity: 1
                }),
                stroke: new ol.style.Stroke({
                    color: '#eeddcc',
                    width: 2
                }),
                image: new ol.style.Circle({
                    radius:5,
                    fill:new ol.style.Fill({
                        color: '#E85F50',
                        opacity: 0.8
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#EED0D3',
                        width: 1
                    })
                })
            });
            break;
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
                    radius:3,
                    fill:new ol.style.Fill({
                        color: '#FFE47A',
                        opacity: 0.8
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#7767c2',
                        width: 1
                    })
                })
            });
            break;
        case 'agriculturesrf':
            return new ol.style.Style({
                fill: new ol.style.Fill({
                    //color: '#A1D3B9',
                    color: 'hsla(250, 53%, 77%, 0.5)',
                    opacity: 0.6
                }),
                stroke: new ol.style.Stroke({
                    color: '#039859',
                    width: 0.3
                })
            });
            break;
        case 'settlementsrf':
            return new ol.style.Style({
                fill: new ol.style.Fill({
                    //color: '#A1D3B9',
                    color: 'hsla(250, 53%, 77%, 0.5)',
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