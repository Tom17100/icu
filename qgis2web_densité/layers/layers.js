ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([1.137918, 43.472243, 1.686959, 43.815640]);
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
var format_densit_bti_2 = new ol.format.GeoJSON();
var features_densit_bti_2 = format_densit_bti_2.readFeatures(json_densit_bti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_densit_bti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_densit_bti_2.addFeatures(features_densit_bti_2);
var lyr_densit_bti_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_densit_bti_2, 
                style: style_densit_bti_2,
                popuplayertitle: 'densité_bâti',
                interactive: true,
    title: 'densité_bâti<br />\
    <img src="styles/legend/densit_bti_2_0.png" /> 0 - 3<br />\
    <img src="styles/legend/densit_bti_2_1.png" /> 3 - 9,2<br />\
    <img src="styles/legend/densit_bti_2_2.png" /> 9,2 - 16<br />\
    <img src="styles/legend/densit_bti_2_3.png" /> 16 - 22,8<br />\
    <img src="styles/legend/densit_bti_2_4.png" /> 22,8 - 31<br />\
    <img src="styles/legend/densit_bti_2_5.png" /> 31 - 42,1<br />\
    <img src="styles/legend/densit_bti_2_6.png" /> 42,1 - 58,4<br />\
    <img src="styles/legend/densit_bti_2_7.png" /> 58,4 - 79<br />\
    <img src="styles/legend/densit_bti_2_8.png" /> 79 - 107,3<br />\
    <img src="styles/legend/densit_bti_2_9.png" /> 107,3 - 149,7<br />\
    <img src="styles/legend/densit_bti_2_10.png" /> 149,7 - 214,9<br />' });
var format_territoritoires_tm_3 = new ol.format.GeoJSON();
var features_territoritoires_tm_3 = format_territoritoires_tm_3.readFeatures(json_territoritoires_tm_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_territoritoires_tm_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_territoritoires_tm_3.addFeatures(features_territoritoires_tm_3);
var lyr_territoritoires_tm_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_territoritoires_tm_3, 
                style: style_territoritoires_tm_3,
                popuplayertitle: 'territoritoires_tm',
                interactive: true,
                title: '<img src="styles/legend/territoritoires_tm_3.png" /> territoritoires_tm'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_densit_bti_2.setVisible(true);lyr_territoritoires_tm_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_densit_bti_2,lyr_territoritoires_tm_3];
lyr_densit_bti_2.set('fieldAliases', {'fid': 'fid', 'TEMP': 'TEMP', 'UU': 'UU', 'id_case': 'id_case', 'surface_sum': 'surface_sum', 'dens_bati': 'dens_bati', });
lyr_territoritoires_tm_3.set('fieldAliases', {'numero': 'numero', 'nom': 'nom', 'surface_km2': 'surface_km2', });
lyr_densit_bti_2.set('fieldImages', {'fid': 'TextEdit', 'TEMP': 'TextEdit', 'UU': 'TextEdit', 'id_case': 'Range', 'surface_sum': 'TextEdit', 'dens_bati': 'TextEdit', });
lyr_territoritoires_tm_3.set('fieldImages', {'numero': 'TextEdit', 'nom': 'TextEdit', 'surface_km2': 'TextEdit', });
lyr_densit_bti_2.set('fieldLabels', {'fid': 'hidden field', 'TEMP': 'hidden field', 'UU': 'hidden field', 'id_case': 'hidden field', 'surface_sum': 'hidden field', 'dens_bati': 'inline label - always visible', });
lyr_territoritoires_tm_3.set('fieldLabels', {'numero': 'hidden field', 'nom': 'inline label - always visible', 'surface_km2': 'hidden field', });
lyr_territoritoires_tm_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});