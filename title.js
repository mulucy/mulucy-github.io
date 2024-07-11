var baslik = document.title;
var yeniBaslik = "Beni Unutma, Unutursan Kahrolurum.";
//var icon = "assets/icons/mulucy.ico";
//var yeniIcon = "assets/icons/sad.ico";
window.onblur = function(){
  document.title = yeniBaslik;
  //document.getElementByID("icon").href = yeniIcon;
  
  }
    
window.onfocus = function() {

 document.title = baslik;
//document.getElementByID("icon").href = icon;
}
