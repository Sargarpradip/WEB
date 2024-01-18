    var i=0;
    var words=["From the tree to your plate – our mangoes are nature's candy.",
                "A little slice of heaven – that's what our mangoes are all about.",
                "Pure happiness in every juicy bite – it's all in our mangoes." 
                ]
    var time= 3000;            

    function chengeText() {
        document.slide= words[i];

        if (i<words.length) {
            i++;
        } else {
            i=0;
        }
        setTimeout("chengeText()", time);
    }
    window.onload=chengeText;

    function a(){
        var x= document.getElementById("user").value
        var y= document.getElementById("pass").value
        
        if(x==""&& y==""){
            alert("Are Pagal Type Username")
            alert("Are Pagal Type Password")
        }
        else if (x=="") {
            alert("Username is required");
        }
        else if (y=="") {
            alert("Password is required");
        }
        else if (x=="Pradip" && y=="12345") {
            alert("Welcome to the page");
        }else{
            alert("You are kachara")
        }
    }



    setTimeout(function(){
        var textElement = document.getElementById("Nana");
        textElement.innerHTML = "This is a Life";
        // textElement.style.left = "-550px";
        // textElement.style.backgroundColor = "rgba(38, 207, 4, 0.2)";
        // textElement.style.padding="20px";
        // textElement.style.paddingLeft="200px";

      }, 3000);