var trabajos = [{
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
    figure: "media/trabajo-04-zoologico.jpg",
    alt: "Descripción de la imagen",
    title: "Título de cuarto trabajo",
    about: "Texto simulado de descripción de cuarto trabajo",
    url: "https://www.emol.cl"

}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
