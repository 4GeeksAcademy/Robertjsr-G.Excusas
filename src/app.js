window.onload = function() {
  function generadorDeExcusas() {
    let who = ['Un pollito', 'Mi gato', 'Mi vecino', 'El profe Pool'];
    let action = ['desintegro', 'devoro', 'escondio', 'deleteo'];
    let what = ['mi proyecto', 'mi portatil', 'tu secreto', 'tus esperanzas'];
    let when = ['antes del trabajo', 'cuando estaba durmiendo', 'mientras me estaba en la ducha', 'durante mi almuerzo'];
  
    let text1 = who[Math.floor(Math.random() * who.length)]
    let text2 = action[Math.floor(Math.random() * action.length)]
    let text3 = what[Math.floor(Math.random() * what.length)]
    let text4 = when[Math.floor(Math.random() * when.length)]
  
    let resultado = text1 + " "  + text2 + " " + text3 + " " + text4;
    
    document.getElementById("excuse").innerHTML = resultado
  }
  generadorDeExcusas()
}