var baslik = document.title;
var yeniBaslik = "Beni Unutma, Unutursan Kahrolurum.";
//var icon = "assets/icons/mulucy.ico";
//var yeniIcon = "assets/icons/sad.ico";
window.onblur = function(){
  //document.getElementByID("ikon").href = yeniIcon;
  document.title = yeniBaslik;
 
  
  }
    
window.onfocus = function() {
  //document.getElementByID("ikon").href = icon;
  document.title = baslik;
 
}
