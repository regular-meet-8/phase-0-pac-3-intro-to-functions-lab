function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string){
    console.log(string.toUpperCase())
  }
  function logWhisper(string){
    console.log(string.toLowerCase())
  }
  function sayHiToGrandma(greeting){
if (greeting===greeting.toLowerCase()){
    console.log("i cant hear you")

}else if (greeting===greeting.toUpperCase()){
    console.log("YES INDEED")

}else if (greeting=== word){
console.log("I would love to.")
}

  }
  var word = 'Let\'s have dinner together!'
  sayHiToGrandma("hi grandma")
  sayHiToGrandma("HI GRANDMA")
  sayHiToGrandma(word)