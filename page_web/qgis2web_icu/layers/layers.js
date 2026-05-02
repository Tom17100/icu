ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([1.238667, 43.498649, 1.648371, 43.754897]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_icu2_2 = new ol.format.GeoJSON();
var features_icu2_2 = format_icu2_2.readFeatures(json_icu2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_icu2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_icu2_2.addFeatures(features_icu2_2);
var lyr_icu2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_icu2_2, 
                style: style_icu2_2,
                popuplayertitle: 'icu2',
                interactive: true,
    title: 'icu2<br />\
    <img src="styles/legend/icu2_2_0.png" /> -0,157 - -0,082<br />\
    <img src="styles/legend/icu2_2_1.png" /> -0,082 - -0,007<br />\
    <img src="styles/legend/icu2_2_2.png" /> -0,007 - 0,068<br />\
    <img src="styles/legend/icu2_2_3.png" /> 0,068 - 0,143<br />\
    <img src="styles/legend/icu2_2_4.png" /> 0,143 - 0,218<br />\
    <img src="styles/legend/icu2_2_5.png" /> 0,218 - 0,293<br />\
    <img src="styles/legend/icu2_2_6.png" /> 0,293 - 0,368<br />\
    <img src="styles/legend/icu2_2_7.png" /> 0,368 - 0,443<br />\
    <img src="styles/legend/icu2_2_8.png" /> 0,443 - 0,518<br />\
    <img src="styles/legend/icu2_2_9.png" /> 0,518 - 0,593<br />\
    <img src="styles/legend/icu2_2_10.png" /> 0,593 - 0,668<br />\
    <img src="styles/legend/icu2_2_11.png" /> 0,668 - 0,743<br />\
    <img src="styles/legend/icu2_2_12.png" /> 0,743 - 0,818<br />\
    <img src="styles/legend/icu2_2_13.png" /> 0,818 - 0,893<br />\
    <img src="styles/legend/icu2_2_14.png" /> 0,893 - 0,968<br />\
    <img src="styles/legend/icu2_2_15.png" /> 0,968 - 1,043<br />\
    <img src="styles/legend/icu2_2_16.png" /> 1,043 - 1,118<br />\
    <img src="styles/legend/icu2_2_17.png" /> 1,118 - 1,193<br />\
    <img src="styles/legend/icu2_2_18.png" /> 1,193 - 1,268<br />\
    <img src="styles/legend/icu2_2_19.png" /> 1,268 - 1,343<br />\
    <img src="styles/legend/icu2_2_20.png" /> 1,343 - 1,418<br />\
    <img src="styles/legend/icu2_2_21.png" /> 1,418 - 1,493<br />\
    <img src="styles/legend/icu2_2_22.png" /> 1,493 - 1,568<br />\
    <img src="styles/legend/icu2_2_23.png" /> 1,568 - 1,643<br />\
    <img src="styles/legend/icu2_2_24.png" /> 1,643 - 1,718<br />\
    <img src="styles/legend/icu2_2_25.png" /> 1,718 - 1,793<br />\
    <img src="styles/legend/icu2_2_26.png" /> 1,793 - 1,868<br />\
    <img src="styles/legend/icu2_2_27.png" /> 1,868 - 1,943<br />\
    <img src="styles/legend/icu2_2_28.png" /> 1,943 - 2,018<br />\
    <img src="styles/legend/icu2_2_29.png" /> 2,018 - 2,093<br />\
    <img src="styles/legend/icu2_2_30.png" /> 2,093 - 2,168<br />\
    <img src="styles/legend/icu2_2_31.png" /> 2,168 - 2,243<br />\
    <img src="styles/legend/icu2_2_32.png" /> 2,243 - 2,318<br />\
    <img src="styles/legend/icu2_2_33.png" /> 2,318 - 2,393<br />\
    <img src="styles/legend/icu2_2_34.png" /> 2,393 - 2,468<br />\
    <img src="styles/legend/icu2_2_35.png" /> 2,468 - 2,543<br />\
    <img src="styles/legend/icu2_2_36.png" /> 2,543 - 2,618<br />\
    <img src="styles/legend/icu2_2_37.png" /> 2,618 - 2,693<br />\
    <img src="styles/legend/icu2_2_38.png" /> 2,693 - 2,768<br />\
    <img src="styles/legend/icu2_2_39.png" /> 2,768 - 2,843<br />\
    <img src="styles/legend/icu2_2_40.png" /> 2,843 - 2,918<br />\
    <img src="styles/legend/icu2_2_41.png" /> 2,918 - 2,993<br />\
    <img src="styles/legend/icu2_2_42.png" /> 2,993 - 3,068<br />\
    <img src="styles/legend/icu2_2_43.png" /> 3,068 - 3,143<br />\
    <img src="styles/legend/icu2_2_44.png" /> 3,143 - 3,218<br />\
    <img src="styles/legend/icu2_2_45.png" /> 3,218 - 3,293<br />\
    <img src="styles/legend/icu2_2_46.png" /> 3,293 - 3,368<br />\
    <img src="styles/legend/icu2_2_47.png" /> 3,368 - 3,443<br />\
    <img src="styles/legend/icu2_2_48.png" /> 3,443 - 3,518<br />\
    <img src="styles/legend/icu2_2_49.png" /> 3,518 - 3,593<br />\
    <img src="styles/legend/icu2_2_50.png" /> 3,593 - 3,668<br />\
    <img src="styles/legend/icu2_2_51.png" /> 3,668 - 3,743<br />\
    <img src="styles/legend/icu2_2_52.png" /> 3,743 - 3,818<br />\
    <img src="styles/legend/icu2_2_53.png" /> 3,818 - 3,893<br />\
    <img src="styles/legend/icu2_2_54.png" /> 3,893 - 3,968<br />\
    <img src="styles/legend/icu2_2_55.png" /> 3,968 - 4,043<br />\
    <img src="styles/legend/icu2_2_56.png" /> 4,043 - 4,118<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_icu2_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_icu2_2];
lyr_icu2_2.set('fieldAliases', {'TEMP': 'TEMP', 'UU': 'UU', 'id': 'id', 'id_carreau': 'id_carreau', });
lyr_icu2_2.set('fieldImages', {'TEMP': 'TextEdit', 'UU': 'TextEdit', 'id': '', 'id_carreau': '', });
lyr_icu2_2.set('fieldLabels', {'TEMP': 'inline label - always visible', 'UU': 'hidden field', 'id': 'hidden field', 'id_carreau': 'hidden field', });
lyr_icu2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});