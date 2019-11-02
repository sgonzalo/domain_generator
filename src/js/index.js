/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  //   console.log('generatedomain')///////

  console.log("Hello Rigo from the console!");
  console.log("Hello Rigo from the console!");
  var pronoun = ["the", "your", "my"];
  var adj = ["smallest", "biggest", "dirtiest"];
  var noun = ["website", "site", "domain"];
  let emptyArray = [];
  for (let a in pronoun)
    for (let b in adj)
      for (let c in noun)
        emptyArray.push(pronoun[a] + adj[b] + noun[c] + ".com <br>");
  console.log(emptyArray);
  document.querySelector(".domains").innerHTML = emptyArray;
};
