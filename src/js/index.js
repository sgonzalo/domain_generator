/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  //   console.log('generatedomain')///////

  let firstArray = ["The ", "Your ", "My "];
  let secondArray = [" smallest", " biggest", " dirtiest"];
  let thirdArray = [" website.com", " site.com", " domain.com"];

  firstArray.forEach(first => {
    secondArray.forEach(second => {
      thirdArray.forEach(third => {});
    });
  });
};
