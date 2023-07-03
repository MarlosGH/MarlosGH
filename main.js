const palabras = {
    "- Marlos": '"A veces tengo ganas de ser cursi para decir: La amo a usted con locura. A veces tengo ganas de ser tonpara gritar: ¡La quiero tanto! A veces tengo ganas de ser ni para llorar acurrucado en su seno. A veces tengo ganas de estar muerto para sentir, bajo la tierra húmeda de mis jugos, que me crece una flor rompiéndome el pecho, una flor, y decir: Esta flor, para usted."',
    "- Tu niño": '"¿Mi tierra? Mi tierra eres tú.  ¿Mi gente? Mi gente eres tú.  El destierro y la muerte para mi están adonde no estés tú.  ¿Y mi vida? Dime, mi vida, ¿qué es, si no eres tú?"',
    "- Tu bb": '"Como si cada beso Fuera de despedida, Cloé mía, besémonos, amando. Tal vez ya nos toque En el hombro la mano que llama A la barca que no viene sino vacía; Y que en el mismo haz Ata lo que fuimos mutuamente Y la ajena suma universal de la vida.',
    "- Tu chico": '"Amar es este tímido silencio cerca de ti, sin que lo sepas, y recordar tu voz cuando te marchas y sentir el calor de tu saludo. Amar es aguardarte como si fueras parte del ocaso, ni antes ni después, para que estemos solos entre los juegos y los cuentos sobre la tierra seca."',
};
document.querySelector("#generate").addEventListener("click",()=>{
    generate()
})
function generate(){
    // grab all the keys in the dictionary (authors) and store in an array
    const authors = Object.keys(palabras);
    // grab a random key (author) and store it in author
    const author = authors[Math.floor(Math.random() * authors.length)];
    // grab the value(quote) that belongs to that key
    const quote = palabras[author]
  
    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
  }
  
  window.onload = function(){
    generate()
  }
