var trabajosValentina= [{
    figure: "media/trabajo-01-estructuras.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca de madera de terciado de 3 mm, pintada y sellada con carbonileo",
    url: "http://www.instagram.com/brnwld"
}, {
    figure: "media/trabajo-02-taller.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-01-estructuras.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca de madera de terciado de 3 mm, pintada y sellada con carbonileo",
    url: "http://www.instagram.com/brnwld"
}, {
    figure: "media/trabajo-02-taller.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",
    url: "https://www.emol.cl"
}];

var trabajosLoreto= [{
    figure: "media/trabajo-01-estructuras.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca de madera de terciado de 3 mm, pintada y sellada con carbonileo",
    url: "http://www.instagram.com/brnwld"
}, {
    figure: "media/trabajo-02-taller.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-01-estructuras.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca de madera de terciado de 3 mm, pintada y sellada con carbonileo",
    url: "http://www.instagram.com/brnwld"
}, {
    figure: "media/trabajo-02-taller.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",
    url: "https://www.emol.cl"
}];

var trabajosBelen= [{
    figure: "media/trabajo-01-estructuras.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca de madera de terciado de 3 mm, pintada y sellada con carbonileo",
    url: "http://www.instagram.com/brnwld"
}, {
    figure: "media/trabajo-02-taller.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-01-estructuras.jpg",
    alt: "Descripción de la imagen",
    title: "Cyl",
    about: "Banca de madera de terciado de 3 mm, pintada y sellada con carbonileo",
    url: "http://www.instagram.com/brnwld"
}, {
    figure: "media/trabajo-02-taller.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo",
    url: "https://www.emol.cl"
}, {
    figure: "media/trabajo-03-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Dispositivo de Enriquecimiento Animal para Servales",
    about: "Texto simulado de descripción de tercer trabajo",
    url: "https://www.emol.cl"
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
