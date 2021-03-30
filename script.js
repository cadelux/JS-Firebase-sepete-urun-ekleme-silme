
var firebaseConfig = {
    apiKey: "AIzaSyA-l6eh5sqpwtXPfJ9nuHV3Xl-vjZ8hWfQ",
    authDomain: "fir-javascript-9eaf6.firebaseapp.com",
    databaseURL: "https://fir-javascript-9eaf6-default-rtdb.firebaseio.com",
    projectId: "fir-javascript-9eaf6",
    storageBucket: "fir-javascript-9eaf6.appspot.com",
    messagingSenderId: "212904252400",
    appId: "1:212904252400:web:4f2f72b879bbceaf1e0335"
    };

    firebase.initializeApp(firebaseConfig);



var kulaklikbtn=document.getElementById("kulaklikbtn");
var klavyebtn=document.getElementById("klavyebtn");
var mousebtn=document.getElementById("mousebtn");

kulaklikbtn.onclick=function(){
    var urunadı="Kulaklık"
    firebase.database().ref('urunler/' + urunadı).set({ // ad tablosunu ekledik 
        urunadı:"Kulaklık",         // bunlarda tablonun içindeki objeler 
        fiyat: 35 , //soldakiler veritabanında ismi ne olmasını istiyorsan
        resim :"https://www.incehesap.com/resim/urun/202002/5e58dc3c00abf8.12410874_fpjnqlmeikogh_500.jpg"
});
console.log("eklendi")
}


mousebtn.onclick=function(){
    var urunadı="Mouse"
    firebase.database().ref('urunler/' + urunadı).set({ // ad tablosunu ekledik 
        urunadı:"Mouse",         // bunlarda tablonun içindeki objeler 
        fiyat: 45,  //soldakiler veritabanında ismi ne olmasını istiyorsan
        resim :"https://www.itopya.com/picture/rampage-smx-r19-fighter-12400dpi-rgb-ledli-profesyonel-gaming-oyuncu-mouse.png"
});
console.log("eklendi")
}

klavyebtn.onclick=function(){
    var urunadı="Klavye"
    firebase.database().ref('urunler/' + urunadı).set({ // ad tablosunu ekledik 
        urunadı:"Klavye",         // bunlarda tablonun içindeki objeler 
        fiyat: 59,  //soldakiler veritabanında ismi ne olmasını istiyorsan
        resim : "https://s.eticaretbox.com/1321/dosyalar/images/Zoccoshop/proo.png"

});
console.log("eklendi")

}