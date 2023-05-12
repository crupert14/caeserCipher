var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "+",
    "{",
    "}",
    "[",
    "]",
    "\\",
    "|",
    ":",
    ";",
    "\"",
    "'",
    ",",
    ".",
    "/",
    "<",
    ">",
    "?",
    ];
    
    var btn = document.getElementById("user-confirm");
    var output = document.getElementById("output");
    var userText;
    var charHolder;
    var numHolder;
    var finalString;
    var transMessage = "";
    var words = [];
    var wordLets = [];
    var tempArr = [];
    var numArr = [];
    var transArr = [];
    var word;
    
    btn.onclick = function() {
    
      userText = document.getElementById("user-input").value.toLowerCase().trim();
      words = userText.split(" ");
      
      for(var i = 0;i < words.length;i++) {
        wordLets.push(words[i].split(""));
      }
      
      for(var x = 0;x < wordLets.length;x++) {
        for(var y = 0;y < wordLets[x].length; y++) {
            charHolder = wordLets[x][y];
            numHolder = alphabet.indexOf(charHolder) + 1;
            
            if(numHolder > alphabet.length - 1) {
              numHolder = 0;
              tempArr.push(numHolder);
            }
            else {
              tempArr.push(numHolder);
            }
        }
        numArr.push(tempArr);
        tempArr = [];
      }
      
      console.log(numArr);
      
      charHolder = "";
      numHolder = 0;
      tempArr = [];
      
      for(var a = 0;a < numArr.length;a++) {
        for(var b = 0;b < numArr[a].length;b++) {
            transMessage += alphabet[numArr[a][b]];
        }
        transMessage += " ";
      }
      
      output.value = transMessage;
      wordLets = [];
      numArr = [];
      
    };