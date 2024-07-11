var baslik = document.title;
var yeniBaslik = "Beni Unutma, Unutursan Kahrolurum.";
window.onblur = function(){
  document.title = yeniBaslik;
  }
    
window.onfocus = function() {

 document.title = baslik;
}
