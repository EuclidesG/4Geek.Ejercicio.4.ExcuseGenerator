
function excuseGenerator() { 
    let who = ["Mi perro ", "Mi madre ", "Mi vecino ", "Mi novia "];
    let action = ["destruyo ", "escondio ", "quemo " ]
    let what = ["mis llaves ", "mi tarea ", "mi vehiculo "]
    let when = ["antes de que pudiese evitarlo", "antes de llegar a casa", "antes de llegar a clases"]
    
    var random1 = Math.floor(Math.random() * who.length);
    var random2 = Math.floor(Math.random() * action.length);
    var random3 = Math.floor(Math.random() * what.length);
    var random4 = Math.floor(Math.random() * when.length);

    document.querySelector("#laExcusa").innerHTML = who[random1]  + action[random2] + what[random3] + when[random4]; 
}
window.onload = function (){excuseGenerator ()}
