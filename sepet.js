
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



      // BUTONA BASTIĞINDA TABLODAKİ TÜM DATAYI ÇEKSİN İSTİYORUM. ONU ARAŞTIR.
      firebase.database().ref("urunler/Kulaklık").once("value").then(function(snapshot){

        var kulaklıkfiyat=snapshot.val().fiyat;
        var kulaklıkadı=snapshot.val().urunadı;
        var resim=snapshot.val().resim;
        a=document.getElementById("img").setAttribute("src",resim)
        
        document.getElementById("img").style.width="120px"
        document.getElementById("p01").innerHTML=kulaklıkfiyat+" ₺  "+"<br>"+kulaklıkadı+" ";
        document.getElementById("c1").style.width="155px"
        document.getElementById("c1").style.height="255px"
        document.getElementById("c1").style.marginTop="-255px"

        var bt = document.createElement("button");
        bt.innerHTML = "Sil";
        bt.style.width="100px"
        bt.setAttribute("class","btn btn-danger shadow-lg")

        document.getElementById("p01").appendChild(bt);
        bt.onclick=function(){
            firebase.database().ref('urunler/Kulaklık').remove();
            location.reload();

            console.log("aa")
        }
        
    })


    

    
    firebase.database().ref("urunler/Mouse").once("value").then(function(snapshot){
        var mousefiyat=snapshot.val().fiyat;
        var mouseadı=snapshot.val().urunadı;
        var mouseresim=snapshot.val().resim;
        document.getElementById("p02").innerHTML=mousefiyat+" ₺  "+"<br>"+mouseadı+" ";
        c=document.getElementById("img2").setAttribute("src",mouseresim)
        document.getElementById("img2").style.width="130px"
        document.getElementById("c2").style.width="155px"
        document.getElementById("c2").style.height="255px"
        document.getElementById("c2").style.marginLeft="170px"
        document.getElementById("c2").style.marginRight="150px"
        document.getElementById("c2").style.marginTop="-260px"

        var bt = document.createElement("button");
        bt.innerHTML = "Sil";
        bt.style.width="100px"
        bt.setAttribute("class","btn btn-danger shadow-lg")

        document.getElementById("p02").appendChild(bt);
        bt.onclick=function(){
            firebase.database().ref('urunler/Mouse').remove();
            console.log("aa")
            location.reload();

        }
        
    })

    

    firebase.database().ref("urunler/Klavye").once("value").then(function(snapshot){
        var klavyefiyat=snapshot.val().fiyat;
        var klavyeadı=snapshot.val().urunadı;
        var klavyeresim=snapshot.val().resim;
        document.getElementById("p03").innerHTML=klavyefiyat+"  ₺  "+"<br>"+klavyeadı+" ";
        b=document.getElementById("img3").setAttribute("src",klavyeresim)
        document.getElementById("img3").style.width="155px"
        document.getElementById("c3").style.width="155px"
        document.getElementById("c3").style.height="255px"
        document.getElementById("c3").style.marginLeft="340px"
        document.getElementById("c3").style.marginRight="150px"
        document.getElementById("c3").style.marginTop="-255px"

        var bt = document.createElement("button");
        bt.innerHTML = "Sil";
        bt.style.width="100px"
        bt.setAttribute("class","btn btn-danger shadow-lg")

        
        document.getElementById("p03").appendChild(bt);
         bt.onclick=function(){
            firebase.database().ref('urunler/Klavye').remove();
            location.reload();


            console.log("aa")
        }
        
    })