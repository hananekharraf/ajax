
// fonction pour afficher des images dans un slider tous les 3 secondes :
//-----------------------------------------------------------------------
$(function(){
  let index = 0;
  setInterval(function(){ //permet d'effectuer une fonction toute les x secondes
    let image =  ["http://www.kasbahmoroccanrestaurant.com/data1/images/image_1.jpg","http://www.kasbahmoroccanrestaurant.com/data1/images/image_5.jpg","http://www.chazal.com/wp-content/themes/Chalong/timthumb.php?src=http://www.chazal.com/wp-content/uploads/2012/02/412091-1024x682.jpg&h=360&w=960&zc=1"]; // variable qui stocké nos images

    if(index == image.length)// conndition pour revenir à la prémiere image
        index = 0;

    $("#silder-Mike").attr("src",image[index]); // Modifier la source de l'image

    index++;

  }, 3000);


// // fonction pour affiche une image au click EXO 2  :
// //---------------------------------------------------------------------------------------------------------------------------------------------
// $("#imagesMike1").click(function() {
////   $("#imagesMike1").attr("src","http://www.lalalacuisine.com/wp-content/uploads/2016/05/bakoula-290x180.jpg"); // Modifier la source de l'image
// });


// fonction pour affiche des images au  1 click EXO 3 :
//--------------------------------------------------------------------------------------------------------------------------------------------------

// $(".imagesMike1").click(function() {
//   $(".imagesMike1").attr("src","http://www.lalalacuisine.com/wp-content/uploads/2016/05/bakoula-290x180.jpg"); // Modifier la source de l'image
//
// });

//Version Mike
//-------------
$(".one_third").one("click",function() { // Function se declanche au click sur l'id #rudy
   $("#imagesMike1").attr("src", "http://www.lalalacuisine.com/wp-content/uploads/2016/05/bakoula-290x180.jpg"); // Modifier la source de l'image
   $("#imagesMike2").attr("src", "https://s-media-cache-ak0.pinimg.com/originals/0c/fe/54/0cfe54adce7265dbb4ed6b011b134236.jpg"); // Modifier la source de l'image
   $("#imagesMike3").attr("src", "http://www.lalalacuisine.com/wp-content/uploads/2017/01/one-pot-pasta-plates-and-pot-290x180.jpg"); // Modifier la source de l'image
 });
// N.B : attribuer des id aux images en html.
//--------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Suite exo 3 Roulement des images :
//----------------------------------

$(".one_third").click(function(){

  let image = $("#imagesMike1").attr("src"); // je stocke la valeur src de la 1ére image dans la variable
  $("#imagesMike1").attr("src", $("#imagesMike3").attr("src")); // Je modifie le src de la premiere image par le src de la troisieme
  $("#imagesMike3").attr("src", $("#imagesMike2").attr("src")); // Je modifie le src de la troisieme image par le src de la deuxieme
  $("#imagesMike2").attr("src", image);

});



//Exo 4
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

$(".one_quarter .more > a").click(function(){ // function se déclanche au click sur la balise a qui se trouve dans class more

event.preventDefault();// annuler l'evenement par défaut

console.log($(this)) // balise a selectionner
console.log($(this).parent()) // balise p class more
console.log($(this).parent().parent()) //balise article class one_quarter
console.log($(this).parent().parent().children("p"))// balise p

$(this).parent().parent().children("p").eq(0).append("La cuisine marocaine est une cuisine méditerranéenne caractérisée par sa variété de plats issus des traditions arabes, berbères ou juives, utilisant de nombreuses épices, et par ses pâtisseries à base d'amandes et de miel. Elle a des traits communs avec les cuisines des autres régions du Maghreb, tout en conservant une originalité culturelle unique."); //eq(0) permet de parcourir un tableau en jquery

$(this).parent().parent().children("p").eq(1).hide();

});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// EXO 5 AJAX
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// affichage des noms d'utilisateurs
//-----------------------------------
var request = $.ajax({ // Envoi d'un request sur une url avec une methode
  url: "https://jsonplaceholder.typicode.com/users",
  method: "GET",
  dataType: "json" // optionnel - defini le type de donnée recu par le serveur 
});

request.done(function( users ) { // done =succes code à effectuer en cas de réussite -réponse en cas de succés ( users = reponse du serveur).
    
 var content="";// definition d'une variable 
 console.log(users);
    for(var i = 0; i < users.length;i++){
        content += '<li><a href="#">'+users[i].name+'</a></li>'
    }
   $("#right_column ul").html(content) // Evenement du DOM - Modification de l'html dans la balise ul qui se trouve dans la balise qui a l'id right_column
 
});

request.fail(function( jqXHR, textStatus ) { // fail = échec (code à effectuer en cas d'echec) - Réponse en cas d'échec.
  alert( "Request failed: " + textStatus );
});


////-----------------------------------------------------------
// affichage des photos
//----------------------
$.ajax({  
  url: "https://jsonplaceholder.typicode.com/photos",
  method: "GET",
  dataType: "json"  
})

.done(function( photos ) { 
console.log($("#posts img"))
for(var i = 0; i < 2; i++){
    $("#posts img").eq(i).attr("src",photos[i].url);
}
   
$(".more > a").click(function(){ 

event.preventDefault();

console.log($(this)) // balise a selectionner
console.log($(this).parent()) // balise p class more
console.log($(this).parent().parent())  // balise article class clear
console.log($(this).parent().parent().children("img")) // balis p 
    
for(var i=0; i < 2; i++){
    if(photos[i].url == 
    $(this).parent().parent().parent().children("img").attr("src")){ //
         $(this).parent().parent().children("p").append(photos[i].title);
          // la fonction eq() permet de parcourir un tableau en jquery.
    }
  
   }

 });
 
})

.fail(function( jqXHR, textStatus ) { 
  alert( "Request failed: " + textStatus );
    
 });  

});







