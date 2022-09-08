//declarando arreglos en JS

// Un arreglo es una variable especial que me permite almacenar multiples datos en una sola variable

//let numeros=[5,8,12,10]
//console.log(numeros[0])

//let nombres=Array("juan","sara",5,"laura")
//console.log(nombres[2])

//Un OBJETO es una variable especial que eprmite que yo almacene multiples datos en una zona variable

// let persona={
//    nombre:"Juan",
 //   profesion:"Ingeniero",
 //   edad:33,
  //  hinchaDelMejor:true,
  //  materiasDictadas:["web2","avanzada","nuevas tecnologias"],
  //  equiposFavortios:["nacional","liverpool"],
  //  comida:{
    //    nombre:"bandeja paisa",
   //     precio:25000
    //}
//}
//console.log(persona.nombre)
//console.log(persona.equiposFavortios)
//console.log(persona.comida.precio)

let peliculas=[
    {
        nombre:"Trenbala",
        genero:"Accion",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/trenbala.jpg?alt=media&token=2bf54fa0-9d74-4c4d-abbe-a4b7204d604b",
        sinopsis:"En un tren de alta velocidad que se dirige de Tokio a Morioka, cinco asesinos profesionales descubren que van tras el mismo objetivo.",
        clasificacion:"+18",
        idioma:"En subtitulado",
        director:"David Leitch",
        actores:"Brad Pitt, Bad Bunny, Aouron Taylor-Jhonson"
        
    },
    {
        nombre:"Thor: Amor y Trueno",
        genero:"Acción/Aventura ",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/thor.jpg?alt=media&token=a3caa41a-8bb3-4676-8691-b926c35d70fc",
        sinopsis:"Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate. Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, para que lo ayuden a evitar la extinción de los dioses",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Taika Waititi",
        actores:" Chris Hemsworth; Christian Bale; Tessa Thompson"
    },
    {
        nombre:"La ciudad perdida",
        genero:"Romance/Aventura",
        duracion:112,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/ciudad-perdida.jpg?alt=media&token=98926f64-faf3-4f66-8633-9e9fa0d5872c",
        sinopsis:"Un modelo de portada viaja a una jungla exótica para rescatar a una escritora de aventuras de un excéntrico multimillonario.",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Aaron Nee, Adam Nee",
        actores:"Sandra Bullock, Channing Tatum, Brad Pitt"
    },
    {
        nombre:"Lightyear",
        genero:"Aventura/Infantil",
        duracion:100,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/buzz.jpg?alt=media&token=246e52c2-9aa7-4d03-b447-fa604cfc41a3",
        sinopsis:"Buzz Lightyear se embarca en una aventura intergaláctica con un grupo de reclutas ambiciosos y su compañero robot. Los amigos tendrán que aprender a trabajar juntos para escapar del malvado Zurg y su ejército de robots.",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Angus MacLane",
        actores:"Chris Evanz, Taika Waititi, Keke Palmer"
    },
    {
        nombre:"Dragon Ball Super: Super Hero",
        genero:"Acción/Fantasía",
        duracion:100,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/ZUZ5AO2ULRHJHHOHJQVZDDN7HU.jpeg?alt=media&token=c8b4b8b8-3ed1-4f14-a9fe-90660d286b00",
        sinopsis:"La malvada organización Red Ribbon Army se reforma con nuevos y más poderosos androides, Gamma 1 y Gamma 2 para buscar venganza.",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Tetsuro Kodama",
        actores:"Luis Manuel Ávila, Carlos Segundo, Mario Castañeda"
    },
    {
        nombre:"Jack en la caja maldita 2",
        genero:"Acción/Fantasía",
        duracion:93,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/2cc78e8d12157485be6adfe0f7e3b14e.png?alt=media&token=5a86fb46-b196-4153-86aa-d4d5900d55ea",
        sinopsis:"Cuando una mujer moribunda abre una caja antigua, hace un trato con el demonio. Éste curará su enfermedad a cambio de ayudarla a reclamar seis víctimas inocentes.",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Lawrence Fowler",
        actores:"Mollie Hindle, Nicola Wright, James Swanton"
    },
    {
        nombre:"Elvis",
        genero:"Musical/Drama",
        duracion:160,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/812SwQ1toSL._AC_SL1200_.jpg?alt=media&token=9ffd7ee1-892f-4e79-848b-f5ad594cc1d6",
        sinopsis:"Elvis Presley salta a la fama en la década de 1950, mientras mantiene una relación compleja con su manager, el coronel Tom Parker.",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Baz Luhrmann",
        actores:"Austin Buttler, Tom Hanks, Dacre Montgomery"
    },
    {
        nombre:"Top Gun: Maverick",
        genero:"Acción/Aventura",
        duracion:130,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/71BokibfVUL._AC_SL1500_.jpg?alt=media&token=fdef7e4d-8fd4-44ea-b425-743f437aca9f",
        sinopsis:"Maverick, quien lleva 30 años de servicio, es ahora instructor de pilotos militares. Una última misión, un sacrificio final, obliga a este maestro de los cielos a enfrentar las heridas abiertas del pasado y sus temores más profundos.",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Joseph Kosinski",
        actores:"Tom Cruise; Val Kilmer; Miles Teller;"
    },
    {
        nombre:"Bestia",
        genero:"Suspenso",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/bestia-poster-oficial.jpeg?alt=media&token=1516f4e1-20fb-43e5-9179-f31a9a95c1c8",
        sinopsis:"Beast es una película de suspenso y supervivencia estadounidense de 2022 dirigida por Baltasar Kormákur a partir de un guión de Ryan Engle, basado en una historia de Jaime Primak Sullivan. La película está protagonizada por Idris Elba, Iyana Halley, Leah Sava Jeffries y Sharlto Copley",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Baltasar Kormákur",
        actores:"Idris Elba, Shartllo Copey, Leah Jeffries"

    },
    {
        nombre:"Minions: nace un villano",
        genero:"Comedia/Aventura",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/3bdcc08a3d7e-mn2_cineco_2-poster_480x670.jpg?alt=media&token=9be39670-8f0c-4cc2-aa87-b6c7a28cc078",
        sinopsis:"En los años 70, Gru crece siendo un gran admirador de Los salvajes seis, un supergrupo de villanos. Para demostrarles que puede ser malvado, diseña un plan con la esperanza de formar parte de la banda.",
        clasificacion:"general",
        idioma:"En subtitulado",
        director:"Kyle Balda",
        actores:"Steve Carell, Jean Cloud Van-dame, Julie Andrews"
    },

]

//Arreglo estrenos
let estrenos=[
    {
        nombre:"42 segundos",
        genero:"Drama",
        duracion:220,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/42-segundos-poster-sinopsis.jpg?alt=media&token=5e0ce24c-9211-4dd1-ae71-a30bc3f3d2bc",
        sinopsis:"Olimpiadas 1992, Barcelona. El equipo español de waterpolo no pasa por su mejor momento y están a punto de competir con deportistas de élite de todo el mundo. Necesitan un golpe de suerte que llegará en forma de un entrenador exigente y con técnicas de trabajo más que cuestionables.",
        clasificacion:"+18",
        idioma:"En subtitulado",
        director:"Dani de la Orden, Àlex Murrull",
        actores:"Jaime Lorente, Álvaro Cervantes, Roger Casamajor"
        
    },
    {
        nombre:"El test",
        genero:"Comedia, Drama",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/el_test-308064054-large.jpg?alt=media&token=7b2f3c76-e406-4484-9cfb-00e4219ec0f7",
        sinopsis:"Adaptación cinematográfica por Dani de la orden de la obra de teatro homónima. La trama sigue a un grupo de personas que deben elegir entre conseguir 100.000 euros inmediatamente o un millón, dentro de 10 años.",
        clasificacion:"+18",
        idioma:"En subtitulado",
        director:"Dani de la Orden",
        actores:"Blanca Suárez, Miren Ibarguren, Antonio Resines"
        
    },
    {
        nombre:"Pacifiction",
        genero:"Drama, Espionaje",
        duracion:165,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/FZKxErLXEAEWEbK.jpg?alt=media&token=ba95da4d-583e-4f14-8ce6-442d667cb823",
        sinopsis:"Un escritora vuelve a su país, la Polinesia Francesa, tras triunfar con una novela en Francia. Pero a su regreso acepta un trabajo como traductora simultánea del embajador francés con el que surgirá un interés romántico, con tintes del cinismo de la política internacional de fondo.",
        clasificacion:"Todas las edades",
        idioma:"En subtitulado",
        director:"Albert Serra",
        actores:"Benoît Magimel, Marc Susini, Sergi López"
        
    },
    {
        nombre:"Buena suerte, Leo Grande",
        genero:"Comedia, Romántico",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/Good%20Luck%20to%20You%20Leo%20Grande%20Poster.jpg?alt=media&token=96ace13e-8ab1-42ea-9f0e-e79d32fb2098",
        sinopsis:"Nancy Stokes es una mujer jubilada y viuda que decide cambiar su vida para darle un poco de color. Ya supera los 60 años y está dispuesta a disfrutar de su sexualidad de manera plena. Para ello recurre a los servicios de un trabajador sexual llamado Leo Grande. Junto a él intentará experimentar una noche de placer y autodescubrimiento.",
        clasificacion:"Todas las edades",
        idioma:"En subtitulado",
        director:"Sophie Hyde",
        actores:"Emma Thompson, Daryl McCormack, Isabella Laughland"
        
    },
    {
        nombre:"Buena suerte, Leo Grande",
        genero:"Comedia, Romántico",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinejm-46921.appspot.com/o/descarga.jpg?alt=media&token=f89c974c-2862-47d7-a8e6-57f0f8c224ca",
        sinopsis:"Anna es una ilustradora de carácter impulsivo e inconformista, y Marco, un maestro de física convencido de que todo se rige por una fórmula específica. Juntos sin ninguna razón aparente, harán todo lo posible para que su relación dure toda la vida.",
        clasificacion:"Todas las edades",
        idioma:"En subtitulado",
        director:"Paolo Genovese",
        actores:"Jasmine Trinca, Alessandro Borghi, Greta Scarano"
        
    },
]
//RECORRER ARREGLO EN JS

let fila=document.getElementById("fila")

let fila2=document.getElementById("fila2")


peliculas.forEach(function(pelicula){
    //console.log(pelicula)
    console.log(pelicula.nombre)
    console.log(pelicula.genero)
    console.log(pelicula.duracion)
    console.log(pelicula.poster)
    console.log(pelicula.sinopsis)
    console.log(pelicula.clasificacion)
    console.log(pelicula.idioma)
    console.log(peliculas.director)
    console.log(peliculas.actores)

    //TRAVESING (CREAR ETIQUETAS HTML DESDE JS)
    //let poster=document.createElement("img")
    //poster.src=pelicula.poster
    //let nombre=document.createElement("h3")
    //nombre.textContent=pelicula.nombre
    //-----------------------------------------------------------------------------------------
    //1.creamos una columna por cada pelicula
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    //3.creamos una foto para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=pelicula.poster

    //4.creamos el nombre de la pelicula
    let nombre=document.createElement("h5")
    nombre.classList.add("card-title")
    nombre.textContent=pelicula.nombre

    //5.creamos el genero de cada pelicula

    let genero=document.createElement("h6")
    genero.classList.add("cart-text")
    genero.textContent=pelicula.genero

    //6. creamos idioma
    let idioma=document.createElement("h6")
    idioma.classList.add("cart-text")
    idioma.textContent=pelicula.idioma

    //7. creamos sinopsis

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=pelicula.sinopsis

    //8. creamos director
    let director=document.createElement("p")
    director.classList.add("card-text")
    director.textContent="Director: "+pelicula.director

    //9. creamos actores
    let actores=document.createElement("p")
    actores.classList.add("card-text")
    actores.textContent="Actores: "+pelicula.actores

    //Padre e Hijos
    //fila.appendChild(poster)
    //fila.appendChild(nombre)
    tarjeta.appendChild(poster)
    fila.appendChild(columna)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
    columna.appendChild(tarjeta)
})

estrenos.forEach(function(estreno){

    console.log(estreno.nombre)
    console.log(estrenos.genero)
    console.log(estreno.duracion)
    console.log(estreno.poster)
    console.log(estreno.sinopsis)
    console.log(estreno.clasificacion)
    console.log(estreno.idioma)
    console.log(estreno.director)
    console.log(estreno.actores)

    //1.creamos una columna por cada pelicula
    let columna=document.createElement("div")
    columna.classList.add("col")

    //2.creamos una tarjeta para cada pelicula
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","h-100")

    //3.creamos una foto para cada pelicula
    let poster=document.createElement("img")
    poster.classList.add("card-img-top")
    poster.src=estreno.poster

    //4.creamos el nombre de la pelicula
    let nombre=document.createElement("h5")
    nombre.classList.add("card-title")
    nombre.textContent=estreno.nombre

    //5.creamos el genero de cada pelicula

    let genero=document.createElement("h6")
    genero.classList.add("cart-text")
    genero.textContent=estreno.genero

    //6. creamos idioma
    let idioma=document.createElement("h6")
    idioma.classList.add("cart-text")
    idioma.textContent=estreno.idioma

    //7. creamos sinopsis

    let sinopsis=document.createElement("p")
    sinopsis.classList.add("d-none")
    sinopsis.textContent=estreno.sinopsis

    //8. creamos director
    let director=document.createElement("p")
    director.classList.add("card-text")
    director.textContent="Director: "+estreno.director

    //9. creamos actores
    let actores=document.createElement("p")
    actores.classList.add("card-text")
    actores.textContent="Actores: "+estreno.actores

    //Padres e hijos
    tarjeta.appendChild(poster)
    fila.appendChild(columna)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(genero)
    tarjeta.appendChild(idioma)
    tarjeta.appendChild(sinopsis)
    tarjeta.appendChild(director)
    tarjeta.appendChild(actores)
    columna.appendChild(tarjeta)
    fila2.appendChild(columna)
}
)
//DETECTANDO SELECCION DE UNA PELICULA
/*fila.addEventListener ("click", function(){
    alert("Esta seleccionando una pelicula")
}
)*/

