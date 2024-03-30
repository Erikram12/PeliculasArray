var listaPeliculas = [
    "https://64.media.tumblr.com/5b084491af94fcb5fdce949ca9254c74/tumblr_inline_p8hchyWzw41thno99_1280.jpg",
    "https://cines.com/files/2015/08/mision-imposible-poster.jpg",
    "https://flxt.tmsimg.com/assets/p163566_p_v13_am.jpg",
    "https://es.web.img3.acsta.net/pictures/22/09/01/09/14/1206850.jpg",
    "https://www.cine.com.pa/wp-content/uploads/2014/04/Dios-no-esta-muerto-poster.jpg",
    "https://2.bp.blogspot.com/-E25d1SW-rn0/VG_d7edKDQI/AAAAAAAAAe4/N8OZC95drjU/s1600/2012.jpg",
    "https://i.pinimg.com/originals/b1/ee/5c/b1ee5c80dbd6db0348fa4f01a0fde073.jpg",
    "https://lh5.googleusercontent.com/-6Ts1iIEo6-g/UxRcUeNDbII/AAAAAAAAJsU/J4lGB_JDbhM/s446/Best%2520Drama%2520Movies%252088.JPG",
    "https://es.web.img2.acsta.net/pictures/14/06/23/11/40/441402.jpg",
    "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1wpyflz4T5Egto5hY9wXjLo4Fsm.jpg"
  ];

  var nombrePeliculas = [
    "El Corcel Indomable",
    "Misión Imposible 1",
    "Exterminador 2",
    "Terrifier 2",
    "Dios No Esta Muerto",
    "Dos Mil Doce",
    "A Prueva de Fuego",
    "Orgullo y Prejuicio",
    "Transformers",
    "Inuyasha"
  ];
  //Desafio 2, elementos a la lista usando .push
  
  listaPeliculas.push();
    
  for (var i = 0; i < listaPeliculas.length; i++) {
    if (!listaPeliculas[i].endsWith(".jpg")) {
        alert("❌Imagen no válida en el índice " + i + ".\n¡Solo imagenes .jpg son validas!");
    }
    document.write("<div>");
    document.write("<img src=" + listaPeliculas[i] + ">");
    document.write("<p style='color: white;'>" + nombrePeliculas[i] + "<p/>");
    document.write("</div>");
  }
  