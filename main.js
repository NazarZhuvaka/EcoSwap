window.onload = function() {
    window.setInterval(function(){
        var date = new Date();


        var years = date.getFullYear();
        

        var clock = years;

        document.getElementById("year-clock").innerHTML = clock; 
    }
    );
}

function navToggle() {
    document.getElementById("header__ul").classList.toggle("header__ul_active");
  }