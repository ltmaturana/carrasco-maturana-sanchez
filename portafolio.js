var trabajosValentina= [{
    figure: "media/trabajo-01-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca fabricada a partir de placas de terciado de 3 milímetros. La banca tiene solo dos puntos de apoyo y reforzada por un sistema de costillas y ensambles, y estructurada con cables zip.",

}, {
    figure: "media/trabajo-04-vale.jpg",
    alt: "Descripción de la imagen",
    title: "JV 53",
    about: "Modelo de bote confeccionado con PAI estilo libre, curso Laboratorio de Modelos y Prototipos",

}, {
    figure: "media/trabajo-02-vale.jpg",
    alt: "Descripción de la imagen",
    title: "IlkoBasic KIT",
    about: "Kit de utensilios fundamentales para cocinar en el día a día y que no están presente en la mente del colectivo de los jóvenes que están equipando su nuevo hogar.",

}, {
    figure: "media/trabajo-03-vale.jpg",
    alt: "Descripción de la imagen",
    title: "Maty",
    about: "Producto en base a TERERÉ que invita a vivir una nueva experiencia para disfrutar su sabor, pero en un formato distinto",

}, {
    figure: "media/trabajos-05-vale.jpg",
    alt: "Descripción de la imagen",
    title: "MOONLIGHT",
    about: "Luminaria confeccionada a base una mezcla de jabón de argán y sal",

}, {
    figure: "media/trabajo-06-vale.jpg",
    alt: "Descripción de la imagen",
    title: "Iluminación   Puente Suecia",
    about: "Reestructuración en el tipo de iluminación del puente.",

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
    about: "Sistema desarrollado para Ilko, que consiste en un juego de porcionadores de alimentos para niños de 2 a 5 años, en los cuales están medidas las porciones necesarias de carbohidratos, proteínas, verduras y frutas que necesita un niño dentro de ese rango de edad.",

}, {
    figure: "media/trabajo-03-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "Enriquecimiento Animal",
    about: "Dispositivo creado para darle uso al espacio áreo en el recinto de los servales y aumentar su actividad física. Éste trabajo se realizó en conjunto con PARQUEMET",

}, {
    figure: "media/trabajo-04-lolo.jpg",
    alt: "Descripción de la imagen",
    title: "Iluminación  Puente Condell",
    about: "Proyecto que buscaba modificar la iluminación del puente, para resaltar la idea romántica que tienen los transeúntes sobre el mismo.",

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
    about: "Creación de imagen gráfica, packaging y distribución de la chicha de Curacaví",

}, {
    figure: "media/trabajo-02-belen.jpg",
    alt: "Descripción de la imagen",
    title: "Nae",
    about: "Sesión fotográfica de producto alimenticio.",

}, {
    figure: "media/trabajo-03-belen.jpg",
    alt: "Descripción de la imagen",
    title: "Protestype",
    about: "Video animado donde se buscaba la expresión visual de una frase rítmica de protesta.",

}, {
    figure: "media/trabajo-04-belen.jpg",
    alt: "Descripción de la imagen",
    title: "Wikiglitch",
    about: "Video animado basado en el juego de wikipedia glitch.",

}, {
    figure: "media/trabajo-05-belen.jpg",
    alt: "Descripción de la imagen",
    title: "MM",
    about: "Sesión fotográfica para el numero de K-pop de la revista MM.",

}, {
    figure: "media/trabajo-06-belen.jpg",
    alt: "Descripción de la imagen",
    title: "Fresia querida",
    about: "Trailer realizado para la obra teatral Fresia Querida.",

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
