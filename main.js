


function rate(){
    var x= document.getElementById("x").value ;

    if(x<50){
        console.log("falled");
    }
    else if (x>=50 && x<65)
        console.log("good");

    else if (x>=65 && x<85)
        console.log("very good");  

    else if (x>=85 && x<=100)
        console.log("excellent");
}