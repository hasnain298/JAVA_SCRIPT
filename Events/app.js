// let imageTag = document.getElementById("img")


// function psycho () {
//     imageTag.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEPPv5yuXAqgrRuMICII1GtRveOrgASBSWdw&s"
// }
// function psycho2 () {
//     imageTag.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP8yGuDDBINqOdIbbrUVrBZvNwCTQMp_0ZCg&s"
// }


let div = document.getElementById("div")
let heading = document.getElementById("h1")
let ptag = document.getElementById("ptag");
let colors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", 
    "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", 
    "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", 
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", 
    "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", 
    "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", 
    "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", 
    "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", 
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", 
    "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin"
];

function backgroundChanger() {
   
   let randomIndex = Math.floor(Math.random() * colors.length);
   document.body.style.backgroundColor = colors[randomIndex]
   if(document.body.style.backgroundColor == "black"){
    ptag.style.color = "white"
    heading.style.color = "white"
    div.style.borderColor = "white"
   }else{
   ptag.style.color ="black";
   heading.style.color = "black"
   div.style.borderColor= "black"
   }
   ptag.innerText = colors[randomIndex]
   ptag.style.textTransform = "uppercase"
    
}