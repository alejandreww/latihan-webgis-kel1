var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_1 = format_Batas_Administrasi_1.readFeatures(json_Batas_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_1.addFeatures(features_Batas_Administrasi_1);
var lyr_Batas_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_1, 
                style: style_Batas_Administrasi_1,
                popuplayertitle: 'Batas_Administrasi',
                interactive: false,
                title: '<img src="styles/legend/Batas_Administrasi_1.png" /> Batas_Administrasi'
            });
var format_Jaringan_Transportasi_2 = new ol.format.GeoJSON();
var features_Jaringan_Transportasi_2 = format_Jaringan_Transportasi_2.readFeatures(json_Jaringan_Transportasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Transportasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Transportasi_2.addFeatures(features_Jaringan_Transportasi_2);
var lyr_Jaringan_Transportasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Transportasi_2, 
                style: style_Jaringan_Transportasi_2,
                popuplayertitle: 'Jaringan_Transportasi',
                interactive: false,
                title: '<img src="styles/legend/Jaringan_Transportasi_2.png" /> Jaringan_Transportasi'
            });
var format_Halte_3 = new ol.format.GeoJSON();
var features_Halte_3 = format_Halte_3.readFeatures(json_Halte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_3.addFeatures(features_Halte_3);
var lyr_Halte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_3, 
                style: style_Halte_3,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_3.png" /> Halte'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_Administrasi_1.setVisible(true);lyr_Jaringan_Transportasi_2.setVisible(true);lyr_Halte_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_Administrasi_1,lyr_Jaringan_Transportasi_2,lyr_Halte_3];
lyr_Batas_Administrasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jaringan_Transportasi_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Halte_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Kenyamanan': 'Kenyamanan', 'Kanopi': 'Kanopi', 'Seating': 'Seating', 'Kebersihan': 'Kebersihan', 'Inklusif': 'Inklusif', 'Lighting': 'Lighting', 'Pedestrian': 'Pedestrian', 'Signage': 'Signage', 'Kepadatan': 'Kepadatan', 'Keamanan': 'Keamanan', });
lyr_Batas_Administrasi_1.set('fieldImages', {'OBJECTID': '', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'SUMBER': '', 'LUASHA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Jaringan_Transportasi_2.set('fieldImages', {'OBJECTID': '', 'NAMOBJ': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'REMARK': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_Halte_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Kenyamanan': 'TextEdit', 'Kanopi': 'TextEdit', 'Seating': 'TextEdit', 'Kebersihan': 'TextEdit', 'Inklusif': 'TextEdit', 'Lighting': 'TextEdit', 'Pedestrian': 'TextEdit', 'Signage': 'TextEdit', 'Kepadatan': 'TextEdit', 'Keamanan': 'TextEdit', });
lyr_Batas_Administrasi_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jaringan_Transportasi_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'ORDE01': 'no label', 'ORDE02': 'no label', 'ORDE03': 'no label', 'ORDE04': 'no label', 'JNSRSR': 'no label', 'STSJRN': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'REMARK': 'no label', 'SBDATA': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Halte_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'header label - always visible', 'REMARK': 'hidden field', 'Kenyamanan': 'inline label - always visible', 'Kanopi': 'inline label - always visible', 'Seating': 'inline label - always visible', 'Kebersihan': 'inline label - always visible', 'Inklusif': 'inline label - always visible', 'Lighting': 'inline label - always visible', 'Pedestrian': 'inline label - always visible', 'Signage': 'inline label - always visible', 'Kepadatan': 'no label', 'Keamanan': 'inline label - always visible', });
lyr_Halte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});