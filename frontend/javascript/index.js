import "index.css"
import "syntax-highlighting.css"

// Import all JavaScript & CSS files from src/_components
import components from "bridgetownComponents/**/*.{js,jsx,js.rb,css}"

window.cvToPDF = () => {
  var element = document.getElementById('cv');
  var opt = {
    margin: 5,
    filename: 'Sam-Green-CV.pdf',
    html2canvas: { scale: 1 },
  }

  html2pdf().set(opt).from(element).save();
}