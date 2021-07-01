var firebaseConfig = {
    apiKey: "AIzaSyAQSkkuu1yo8MgO4m-IkmbY5JFdCeu1VoA",
    authDomain: "case-law-database.firebaseapp.com",
    projectId: "case-law-database",
    storageBucket: "case-law-database.appspot.com",
    messagingSenderId: "523926910114",
    appId: "1:523926910114:web:38188ad5cd0c7ac41493fb",
    measurementId: "G-RNCZXPFP98"
  };

 // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics(); 




var imagesource=[];
var wordname=[];
var expandedword=[];
var i=0;
//imagesource[0]="https://images.news18.com/tamil/uploads/2019/03/82d4e8040550729f46e550d633438d3d.jpg";
//imagesource[1]= "https://tamil.indianexpress.com/wp-content/uploads/2020/02/a1428.jpg?w=670";
//wordname[0]="பானை";
//expandedword[0]="https://images.news18.com/tamil/uploads/2019/03/82d4e8040550729f46e550d633438d3d.jpg";
//wordname[1]="மனை";
//expandedword[1]="https://images.news18.com/tamil/uploads/2019/03/82d4e8040550729f46e550d633438d3d.jpg";
answer=[];
var header =document.createElement('p');



//---------------------படத்தை மாற்ற----------------------//
function changepic() {
  //console.log(imagesource[i]);
 //console.log(i);
 //console.log(imagesource.length);
 if (i>=imagesource.length-1) {
 	i=0;
 } else {
 	i++;
 }
 document.getElementById("slide").src=imagesource[i];
 document.getElementById("words").innerHTML=wordname[i];
 document.getElementById("slide1").src=expandedword[i];
 //document.getElementById('imghd1').addEventListener("click", checkans);
 document.getElementById("answerh2").innerHTML="";
 document.getElementById("answerh3").innerHTML="";
}

function previousword() {
  if (i>=1) {
    i=i-2;
    changepic();
    //console.log(i);
  }
}

function checkans() {
  if(answer[i].trim()=='B'){
    //console.log("correct");
    document.getElementById("answerh2").innerHTML="சரி";
  } else
  {
    //console.log("wrong");
    document.getElementById("answerh2").innerHTML="தவறு";
  }
  //console.log(answer[i]);
}

function checkans2() {
  if(answer[i].trim()=='A'){
    //console.log("correct");
    document.getElementById("answerh3").innerHTML="சரி";
  } else
  {
    //console.log("wrong");
    document.getElementById("answerh3").innerHTML="தவறு";
  }
  //console.log(answer[i]);
}

//-----------------------read from database ------------------------//
function collectdata(){
  sno=0;
  var clist=document.getElementById("caselist");
  firebase.database().ref('tamilwords1/').once('value', function(snapshot){
    snapshot.forEach(
        function(childsnapshot){
          let twords_=childsnapshot.val().Twords;
          let xtwords_=childsnapshot.val().Xtwords;
          let timages_=childsnapshot.val().Timages;
          let notes_=childsnapshot.val().Notes;
          wordname.push(twords_);
          expandedword.push(xtwords_);
          imagesource.push(timages_);
          answer.push(notes_);
          //console.log(wordname, expandedword,imagesource);
        }
      );

  })
}

//window.onload = collectdata();
