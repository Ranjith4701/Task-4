function title(str){
    return str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
}
  

console.log([title("hi ranjith!")]);