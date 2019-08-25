var trabajosValentina= [{
    figure: "media/trabajo-01-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca fabricada a partir de placas de terciado de 3 milímetros. La banca tiene solo dos puntos de apoyo y reforzada por un sistema de costillas y ensambles, y estructurada con cables zip.",

}, {
    figure: "media/trabajo-04-vale.jpeg",
    alt: "Descripción de la imagen",
    title: "JV 53",
    about: "Modelo de bote confeccionado con PAI estilo libre, curso Laboratorio de Modelos y Prototipos",

}, {
    figure: "media/trabajo-02-vale.jpg",
    alt: "Descripción de la imagen",
    title: "IlkoBasics KIT",
    about: "Kit de utensilios fundamentales para cocinar en el día a día y que no están presente en la mente del colectivo de los jóvenes que están equipando su nuevo hogar.",

}, {
    figure: "media/trabajo-03-vale.jpeg",
    alt: "Descripción de la imagen",
    title: "Maty",
    about: "Producto en base a TERERÉ que invita a vivir una nueva experiencia para disfrutar su sabor, pero en un formato distinto",

}, {
    figure: "media/trabajos-05-vale.jpeg",
    alt: "Descripción de la imagen",
    title: "MOONLIGHT",
    about: "Luminaria confeccionada a base una mezcla de jabón de argán y sal",

}, {
    figure: "media/trabajo-06-vale.jpg",
    alt: "Descripción de la imagen",
    title: "Propuesta Puente Suecia",
    about: "Reestructuración en el tipo de iluminación del puente",

}];

var trabajosLoreto= [{
    figure: "media/trabajo-01-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca fabricada a partir de placas de terciado de 3 milímetros. La banca tiene solo dos puntos de apoyo y reforzada por un sistema de costillas y ensambles, y estructurada con cables zip.",

}, {
    figure: "media/trabajo-02-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "PEP",
    about: "Sistema desarrollado para Ilko, que consiste en un juego de porcionadores de alimentos para niños de 2 a 5 años, en los cuales están medidas las porciones necesarias de carbohidratos, proteínas, verduras y frutas que necesita un niño dentro de ese rando de edad.",

}, {
    figure: "media/trabajo-03-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Dispositivo creado con el propósito de darle uso al espacio áreo en el recinto de los servales, aumentar su actividad física y reducir las conductas estereotípicas comunes en animales en cautiverio. Éste trabajo se realizó en conjunto con PARQUEMET",

}, {
    figure: "media/trabajo-04-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "Proyecto de Iluminación para Puente Condell",
    about: "Proyecto que buscaba modificar la iluminación del Puente Condell, para resaltar la idea romántica que tienen los transeúntes sobre el mismo y poner en valor los candados que la gente ha ido añadiendo con el paso del tiempo.",

}, {
    figure: "media/trabajo-05-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "CHIQUEFUERTE",
    about: "Producto resultante de un proyecto de fusión de comida típica Chilena y Mexicana. Consistente en una pasta de chorizo apanada en tortilla y acompañada de una salsa de chilaquiles con pebre.",

}, {
    figure: "media/trabajo-06-lolo.jpeg",
    alt: "Descripción de la imagen",
    title: "Lettering",
    about: "Muestra de uno de los letterings realizados para la campaña publicitaria 'La ternura viene de adentro', de chocolates Milka, el año 2018",

}];

var trabajosBelen= [{
    figure: "media/trabajo-01-belen.jpg",
    alt: "Descripción de la imagen",
    title: "Raco",
    about: "Texto simulado de descrición de primer trabajo",

}, {
    figure: "media/trabajo-02-belen.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",

}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",

}, {
    figure: "media/trabajo-01-estructuras.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca de madera de terciado de 3 mm, pintada y sellada con carbonileo",

}, {
    figure: "media/trabajo-02-taller.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",

}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",

}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajosValentina, function(i, val) {
    var uno = '<figure><img src="' + trabajosValentina[i].figure + '" alt="' + trabajosValentina[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajosValentina[i].title + '</h4>';
    var tres = '<p>' + trabajosValentina[i].about + '</p>';
    $('#Valentina').append('<div class="item">' + uno + dos + tres + '</div>')
});

$.each(trabajosLoreto, function(i, val) {
    var uno = '<figure><img src="' + trabajosLoreto[i].figure + '" alt="' + trabajosLoreto[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajosLoreto[i].title + '</h4>';
    var tres = '<p>' + trabajosLoreto[i].about + '</p>';
    $('#Loreto').append('<div class="item">' + uno + dos + tres + '</div>')
});

$.each(trabajosBelen, function(i, val) {
    var uno = '<figure><img src="' + trabajosBelen[i].figure + '" alt="' + trabajosBelen[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajosBelen[i].title + '</h4>';
    var tres = '<p>' + trabajosBelen[i].about + '</p>';
    $('#Belen').append('<div class="item">' + uno + dos + tres + '</div>')
});
