var acc= document.getElementsByClassName("acordeon");

var i=0;
for(i; i<acc.length;i++){
    acc[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var panel =  this.nextElementSibling;
            if(panel.style.display == "block"){
                panel.style.display = "none";
            }else{
                panel.style.display = "block";
            }
            });
}