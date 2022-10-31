    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    }


    // Contact form fill Check
    function contactFill(){
        let x = document.getElementById("name").value;
        let y = document.getElementById("email").value;
        let name = document.getElementById("ne");
        let email = document.getElementById("ee");
        let ce1 = document.getElementById("nce");
        let ce2 = document.getElementById("ece");
        if (x == '') {
            document.getElementById("ne").innerHTML = "* Please Entery Name.";
            document.getElementById("ne").style.color = "#d84747";
            document.getElementById("ne").style.background = "#da343450";
            ce1.style.display = "block";
            
            name.classList.add("shack");
            ce1.classList.add("shack");

            setTimeout (function(){
                name.classList.remove("shack");
                ce1.classList.remove("shack");
            }, 300);
            
            
        }
        else{
            document.getElementById("ne").innerHTML = '';
            document.getElementById("ne").style.background = "";
            ce1.style.display = "none";
          
        }
        if (y == '') {
            document.getElementById("ee").innerHTML = "* Please Entery Valit Email ID.";
            document.getElementById("ee").style.color = "#d84747";
            document.getElementById("ee").style.background = "#da343450";
            ce2.style.display = "block";
      
            email.classList.add("shack");
            ce2.classList.add("shack");
            setTimeout(function(){
                 email.classList.remove("shack");
                 ce2.classList.remove("shack");
            }, 300);
        }
        else{
            document.getElementById("ee").innerHTML = '';
            document.getElementById("ee").style.background = "";
            ce2.style.display = "none";

        }

        if (x != "" && y != "") {
            setTimeout(function(){
                alert("Your request "+ x+' '+y +" Submited Successfully");
        
            }, 100);
        }
        
        
    }





    // Under Constraction
    function showDemoWeb(){
        const showWebsite = document.getElementById('underConstrction');
        showWebsite.style.display = 'none'
        document.body.style.overflow = 'scroll'
    }

