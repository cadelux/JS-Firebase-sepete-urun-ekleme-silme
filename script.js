// MASA TAKIMI
var urun1=document.getElementById("u1")
var x = document.getElementsByClassName("card-title")[0].textContent;


// SANDALYE TAKIMI
var urun2=document.getElementById("u2")
var y = document.getElementsByClassName("card-title")[1].textContent;

var urunler=[]


// masa takımında "sepete ekle" tıklayınca: "Masa takımı" cümlesini diziye ekledim.
urun1.onclick=function(){
urunler.push(x)   
}
// aynı şekilde sandalye takımı 
urun2.onclick=function(){
    urunler.push(y)   
    }
