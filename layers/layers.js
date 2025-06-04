var wms_layers = [];


        var lyr_ImagenRaster3BingAerial_0 = new ol.layer.Tile({
            'title': 'Imagen Raster 3 Bing Aerial',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ak.t0.tiles.virtualearth.net/tiles/a{q}.jpeg?n=z&g=5880'
            })
        });

        var lyr_ImagenRaster2OSMStandard_1 = new ol.layer.Tile({
            'title': 'Imagen Raster 2 - OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ImagenRaster1GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Imagen Raster 1 - Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_san_salvador_3 = new ol.format.GeoJSON();
var features_san_salvador_3 = format_san_salvador_3.readFeatures(json_san_salvador_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_san_salvador_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_san_salvador_3.addFeatures(features_san_salvador_3);
var lyr_san_salvador_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_san_salvador_3, 
                style: style_san_salvador_3,
                popuplayertitle: 'san_salvador',
                interactive: true,
                title: '<img src="styles/legend/san_salvador_3.png" /> san_salvador'
            });
var format_colonias_4 = new ol.format.GeoJSON();
var features_colonias_4 = format_colonias_4.readFeatures(json_colonias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_4.addFeatures(features_colonias_4);
var lyr_colonias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colonias_4, 
                style: style_colonias_4,
                popuplayertitle: 'colonias',
                interactive: true,
                title: '<img src="styles/legend/colonias_4.png" /> colonias'
            });
var format_municipios_5 = new ol.format.GeoJSON();
var features_municipios_5 = format_municipios_5.readFeatures(json_municipios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_5.addFeatures(features_municipios_5);
var lyr_municipios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_5, 
                style: style_municipios_5,
                popuplayertitle: 'municipios',
                interactive: true,
                title: '<img src="styles/legend/municipios_5.png" /> municipios'
            });
var format_zona_industriales_6 = new ol.format.GeoJSON();
var features_zona_industriales_6 = format_zona_industriales_6.readFeatures(json_zona_industriales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_industriales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_industriales_6.addFeatures(features_zona_industriales_6);
var lyr_zona_industriales_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_industriales_6, 
                style: style_zona_industriales_6,
                popuplayertitle: 'zona_industriales',
                interactive: true,
                title: '<img src="styles/legend/zona_industriales_6.png" /> zona_industriales'
            });
var format_zona_residenciales_7 = new ol.format.GeoJSON();
var features_zona_residenciales_7 = format_zona_residenciales_7.readFeatures(json_zona_residenciales_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_residenciales_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_residenciales_7.addFeatures(features_zona_residenciales_7);
var lyr_zona_residenciales_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_residenciales_7, 
                style: style_zona_residenciales_7,
                popuplayertitle: 'zona_residenciales',
                interactive: true,
                title: '<img src="styles/legend/zona_residenciales_7.png" /> zona_residenciales'
            });
var format_calles_8 = new ol.format.GeoJSON();
var features_calles_8 = format_calles_8.readFeatures(json_calles_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calles_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calles_8.addFeatures(features_calles_8);
var lyr_calles_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_calles_8, 
                style: style_calles_8,
                popuplayertitle: 'calles',
                interactive: true,
                title: '<img src="styles/legend/calles_8.png" /> calles'
            });
var format_carreteras_9 = new ol.format.GeoJSON();
var features_carreteras_9 = format_carreteras_9.readFeatures(json_carreteras_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carreteras_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carreteras_9.addFeatures(features_carreteras_9);
var lyr_carreteras_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carreteras_9, 
                style: style_carreteras_9,
                popuplayertitle: 'carreteras',
                interactive: true,
                title: '<img src="styles/legend/carreteras_9.png" /> carreteras'
            });
var format_municipios_pts_10 = new ol.format.GeoJSON();
var features_municipios_pts_10 = format_municipios_pts_10.readFeatures(json_municipios_pts_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_pts_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_pts_10.addFeatures(features_municipios_pts_10);
var lyr_municipios_pts_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_pts_10, 
                style: style_municipios_pts_10,
                popuplayertitle: 'municipios_pts',
                interactive: true,
                title: '<img src="styles/legend/municipios_pts_10.png" /> municipios_pts'
            });
var format_estaciones_11 = new ol.format.GeoJSON();
var features_estaciones_11 = format_estaciones_11.readFeatures(json_estaciones_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_estaciones_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_estaciones_11.addFeatures(features_estaciones_11);
var lyr_estaciones_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_estaciones_11, 
                style: style_estaciones_11,
                popuplayertitle: 'estaciones',
                interactive: true,
                title: '<img src="styles/legend/estaciones_11.png" /> estaciones'
            });
var group_Estaciones = new ol.layer.Group({
                                layers: [lyr_municipios_pts_10,lyr_estaciones_11,],
                                fold: 'open',
                                title: 'Estaciones'});
var group_Vias = new ol.layer.Group({
                                layers: [lyr_calles_8,lyr_carreteras_9,],
                                fold: 'open',
                                title: 'Vias'});
var group_Zonas = new ol.layer.Group({
                                layers: [lyr_colonias_4,lyr_municipios_5,lyr_zona_industriales_6,lyr_zona_residenciales_7,],
                                fold: 'open',
                                title: 'Zonas'});

lyr_ImagenRaster3BingAerial_0.setVisible(true);lyr_ImagenRaster2OSMStandard_1.setVisible(true);lyr_ImagenRaster1GoogleMaps_2.setVisible(true);lyr_san_salvador_3.setVisible(true);lyr_colonias_4.setVisible(true);lyr_municipios_5.setVisible(true);lyr_zona_industriales_6.setVisible(true);lyr_zona_residenciales_7.setVisible(true);lyr_calles_8.setVisible(true);lyr_carreteras_9.setVisible(true);lyr_municipios_pts_10.setVisible(true);lyr_estaciones_11.setVisible(true);
var layersList = [lyr_ImagenRaster3BingAerial_0,lyr_ImagenRaster2OSMStandard_1,lyr_ImagenRaster1GoogleMaps_2,lyr_san_salvador_3,group_Zonas,group_Vias,group_Estaciones];
lyr_san_salvador_3.set('fieldAliases', {'Codigo': 'Codigo', 'Tipo': 'Tipo', 'Nombre': 'Nombre', 'Longitud': 'Longitud', 'Area': 'Area', });
lyr_colonias_4.set('fieldAliases', {'Codigo': 'Codigo', 'Municipio': 'Municipio', 'Nombre': 'Nombre', });
lyr_municipios_5.set('fieldAliases', {'Tipo_Area': 'Tipo_Area', 'Departamen': 'Departamen', 'Nombre': 'Nombre', 'Codigo': 'Codigo', 'Cod_Region': 'Cod_Region', 'Nom_Region': 'Nom_Region', 'Tasa_Pobla': 'Tasa_Pobla', 'Pobreza': 'Pobreza', 'Perimetro': 'Perimetro', 'Area': 'Area', 'Poblacion': 'Poblacion', 'Poblacion_': 'Poblacion_', 'Poblacio_1': 'Poblacio_1', 'Longitud': 'Longitud', 'Longitud_1': 'Longitud_1', 'Longitud_2': 'Longitud_2', });
lyr_zona_industriales_6.set('fieldAliases', {'Codigo': 'Codigo', 'Clase': 'Clase', 'Nombre': 'Nombre', });
lyr_zona_residenciales_7.set('fieldAliases', {'Codigo': 'Codigo', 'Clase': 'Clase', 'Nombre': 'Nombre', });
lyr_calles_8.set('fieldAliases', {'TYPE': 'TYPE', 'NAME': 'NAME', 'ONEWAY': 'ONEWAY', 'LANES': 'LANES', });
lyr_carreteras_9.set('fieldAliases', {'Layer': 'Layer', 'ID': 'ID', 'ACC_DESC': 'ACC_DESC', 'EXS_DES': 'EXS_DES', 'NOM': 'NOM', 'TRS_DESC': 'TRS_DESC', 'COD_MOP': 'COD_MOP', 'TRAM': 'TRAM', 'CAT_DESC': 'CAT_DESC', 'USO_DESC': 'USO_DESC', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_municipios_pts_10.set('fieldAliases', {'Nombre': 'Nombre', 'Codigo': 'Codigo', 'Departamen': 'Departamen', 'Punto X': 'Punto X', 'Punto Y': 'Punto Y', });
lyr_estaciones_11.set('fieldAliases', {'Codigo': 'Codigo', 'Nombre': 'Nombre', 'Parametro': 'Parametro', 'Indice': 'Indice', 'ug/m3': 'ug/m3', });
lyr_san_salvador_3.set('fieldImages', {'Codigo': '', 'Tipo': '', 'Nombre': '', 'Longitud': '', 'Area': '', });
lyr_colonias_4.set('fieldImages', {'Codigo': 'TextEdit', 'Municipio': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_municipios_5.set('fieldImages', {'Tipo_Area': 'TextEdit', 'Departamen': 'TextEdit', 'Nombre': 'TextEdit', 'Codigo': 'TextEdit', 'Cod_Region': 'TextEdit', 'Nom_Region': 'TextEdit', 'Tasa_Pobla': 'TextEdit', 'Pobreza': 'TextEdit', 'Perimetro': 'TextEdit', 'Area': 'TextEdit', 'Poblacion': 'TextEdit', 'Poblacion_': 'TextEdit', 'Poblacio_1': 'TextEdit', 'Longitud': 'TextEdit', 'Longitud_1': 'TextEdit', 'Longitud_2': 'TextEdit', });
lyr_zona_industriales_6.set('fieldImages', {'Codigo': 'TextEdit', 'Clase': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_zona_residenciales_7.set('fieldImages', {'Codigo': 'TextEdit', 'Clase': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_calles_8.set('fieldImages', {'TYPE': '', 'NAME': '', 'ONEWAY': '', 'LANES': '', });
lyr_carreteras_9.set('fieldImages', {'Layer': '', 'ID': '', 'ACC_DESC': '', 'EXS_DES': '', 'NOM': '', 'TRS_DESC': '', 'COD_MOP': '', 'TRAM': '', 'CAT_DESC': '', 'USO_DESC': '', 'Shape_Leng': '', 'Shape_Le_1': '', });
lyr_municipios_pts_10.set('fieldImages', {'Nombre': 'TextEdit', 'Codigo': 'TextEdit', 'Departamen': 'TextEdit', 'Punto X': 'TextEdit', 'Punto Y': 'TextEdit', });
lyr_estaciones_11.set('fieldImages', {'Codigo': 'TextEdit', 'Nombre': 'TextEdit', 'Parametro': 'TextEdit', 'Indice': 'TextEdit', 'ug/m3': 'TextEdit', });
lyr_san_salvador_3.set('fieldLabels', {'Codigo': 'no label', 'Tipo': 'no label', 'Nombre': 'no label', 'Longitud': 'no label', 'Area': 'no label', });
lyr_colonias_4.set('fieldLabels', {'Codigo': 'no label', 'Municipio': 'no label', 'Nombre': 'no label', });
lyr_municipios_5.set('fieldLabels', {'Tipo_Area': 'no label', 'Departamen': 'no label', 'Nombre': 'no label', 'Codigo': 'no label', 'Cod_Region': 'no label', 'Nom_Region': 'no label', 'Tasa_Pobla': 'no label', 'Pobreza': 'no label', 'Perimetro': 'no label', 'Area': 'no label', 'Poblacion': 'no label', 'Poblacion_': 'no label', 'Poblacio_1': 'no label', 'Longitud': 'no label', 'Longitud_1': 'no label', 'Longitud_2': 'no label', });
lyr_zona_industriales_6.set('fieldLabels', {'Codigo': 'no label', 'Clase': 'no label', 'Nombre': 'no label', });
lyr_zona_residenciales_7.set('fieldLabels', {'Codigo': 'hidden field', 'Clase': 'header label - visible with data', 'Nombre': 'hidden field', });
lyr_calles_8.set('fieldLabels', {'TYPE': 'no label', 'NAME': 'no label', 'ONEWAY': 'no label', 'LANES': 'no label', });
lyr_carreteras_9.set('fieldLabels', {'Layer': 'no label', 'ID': 'no label', 'ACC_DESC': 'no label', 'EXS_DES': 'no label', 'NOM': 'no label', 'TRS_DESC': 'no label', 'COD_MOP': 'no label', 'TRAM': 'no label', 'CAT_DESC': 'no label', 'USO_DESC': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_municipios_pts_10.set('fieldLabels', {'Nombre': 'hidden field', 'Codigo': 'inline label - visible with data', 'Departamen': 'inline label - visible with data', 'Punto X': 'no label', 'Punto Y': 'no label', });
lyr_estaciones_11.set('fieldLabels', {'Codigo': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Parametro': 'inline label - visible with data', 'Indice': 'inline label - visible with data', 'ug/m3': 'inline label - visible with data', });
lyr_estaciones_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});