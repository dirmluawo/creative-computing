const originalHTML = document.body.innerHTML;
let counter = 0;
let messageWrapper = document.getElementById('message');

document.onkeydown = function (event) {

    if (event.keyCode === 13) {
        event.preventDefault();
        document.body.innerHTML = originalHTML;
        messageWrapper = document.getElementById('message');
      }
}

document.onkeyup = function (event) {
    
    var keyCodePressed = event.keyCode;
    var fontFamilyArray = ["Anton" , "Lobster", "Monoton", "Abril+Fatface", "Alfa+Slab+One", "Archivo+Black", "Baloo+Bhaijaan", "Bevan", "Fascinate+Inline", "Notable", "Righteous", "Ultra"];
    const coordinates = helpers.generateCoordinates();
    const degreesRotation = Math.floor(Math.random() * 360);
    ft = Math.floor(Math.random() * 12); 

    const dog = document.createElement('h1');
    dog.className = 'dog';
    dog.innerText = event.key;
    dog.style.position = 'absolute';
    dog.style.fontFamily = fontFamilyArray[ft];
    dog.style.left = `${coordinates.x}px`;
    dog.style.top = `${coordinates.y}px`;
    dog.style.transform = `-webkit-rotate(${degreesRotation}deg)`;
    dog.style.transform = `rotate(${degreesRotation}deg)`;
    document.body.appendChild(dog);

    messageWrapper.innerText = event.key;

    counter++;
    // always keeps the message on top of other elements
    messageWrapper.style.zIndex = counter;
}


//const phrase = document.createElement('h3');
//phrase.className = 'phrase';
//phrase.style.left = `${coordinates.x}px`;
//phrase.style.top = `${coordinates.y}px`;
//phrase.innerText = getPhrase();
//phrase.style.color = helpers.generateRandomColorString(false);
//phrase.style.transform = `rotate(${degreesRotation}deg)`;
//document.body.appendChild(phrase);


    //<p id="demo" onclick="myFunction()">Click me to change my text color.</p>

    //<p>A function is triggered when the p element is clicked. The function sets the color of the p element to red.</p>

    //<script>
    //function myFunction() {
    //   document.getElementById("demo").style.color = "red";
    //}

document.onclick = function (event){

    document.body.className = 'animated';
   
}

    const helpers = {

        removeClass: (cssClass) => {
          if (document.body.classList.contains(cssClass)) {
            document.body.classList.remove(cssClass);
          }
        },

    generateCoordinates: () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
      },

    //generateRandomColorString: (alpha = true) => {
       // random RBG values
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        // fully opaque if `false` is passed to function
        let a = 1;
        if (alpha) {
          a = Math.random();
        }
  
        return `rgba(${r},${g},${b},${a})`;
      }


    }
