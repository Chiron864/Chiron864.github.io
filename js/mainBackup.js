var fruitSelect = document.getElementById("fruitSelect");
var dairySelect = document.getElementById("dairySelect");
var vegetableSelect = document.getElementById("vegetableSelect");
var proteinSelect = document.getElementById("proteinSelect");
var grainSelect = document.getElementById("grainSelect");
var otherSelect = document.getElementById("otherSelect");

var addbutton = document.getElementById("addButton");
var removeButton = document.getElementById("removeButton");

function resetSelect() {
  fruitSelect.size = fruitSelect.length;
  dairySelect.size = dairySelect.length;
  vegetableSelect.size = vegetableSelect.length;
  proteinSelect.size = proteinSelect.length;
  grainSelect.size = grainSelect.length;
  otherSelect.size = otherSelect.length;
}

function removeOptions(selectbox){
    var i;
    for(i = selectbox.options.length; i > 0; i--){
      console.log(i);
        selectbox.remove(i);
    }
}

var myForm = document.getElementById("myForm");

myForm.addEventListener("submit", saveFood);

//Saving Foods

function saveFood(e){
  // Get form values
  var foodInput = document.getElementById("textBox").value;
  var expInput = document.getElementById("expirationInput").value;

  var array = {
    food: foodInput,
    exp: expInput
  }

  // Local Storage & JSON

  // If the array is null
  if(localStorage.getItem('array') === null){
    //Init array
    var arrays = [];
    //Add to array
    arrays.push(array);
    // Set to localStorage
    localStorage.setItem('array', JSON.stringify(arrays));
  }else{
    // Get foods from localStorage
    var arrays = JSON.parse(localStorage.getItem('array'));
    // Add book to array
    arrays.push(array);
    //Reset to localStorage
    localStorage.setItem('array', JSON.stringify(arrays));

  }

  //Reset Select Element
  resetSelect();

  // Re-fetch foods
  fetchFood();

  //Prevent from from submitting
  e.preventDefault();
}

//Delete Foods
removeButton.addEventListener("click", deleteFood);

function deleteFood(){
  //Get foods from localStorage
  var arrays = JSON.parse(localStorage.getItem('array'));
  // Loop through Foods
  if (fruitSelect.selectedIndex !== 0) {
    console.log(arrays, fruitSelect.selectedIndex);
    arrays.splice(fruitSelect.selectedIndex - 1, 1);
    //Reset to localStorage
    console.log(arrays, fruitSelect.selectedIndex);
    localStorage.setItem('array', JSON.stringify(arrays));

    //Reset Select Element
    resetSelect();

    // Re-fetch foods
    fetchFood();

  }else{
    console.log("food group highlighted");
  }
}

//Fetch foods
function fetchFood(){
  var arrays = JSON.parse(localStorage.getItem('array'));

  //Find today's Date
  var today = new Date();
  console.log(today);
  var dd = today.getDate();
  var then = new Date(today.getFullYear(),
   today.getMonth(),
   today.getDate()+7);
  var ddd = then.getDate();
  console.log("ddd",ddd);
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd = '0'+dd;
  }
  if(ddd<10) {
      ddd = '0'+ddd;
  }
  if(mm<10) {
      mm = '0'+mm;
  }
  var today = yyyy + '-' + mm + '-' + dd;
  var today2 = yyyy + '-' + mm + '-' + ddd;
  console.log(today, today2, exp);
  //Build output
  removeOptions(fruitSelect);
  for(var i = 0; i < arrays.length; i++){
    console.log("arrays", arrays, arrays.length);
    var food = arrays[i].food;
    var exp = arrays[i].exp;

    var option = document.createElement('option');
    option.text = food;
    option.value = exp;

    //If the expiration date is today
    if(today >= exp){
      option.className = "red";
      console.log("red", today, exp);
    }else if(today2 >= exp){
      option.className = "yellow";
      console.log("yellow",today2, exp);
    }else{
      option.className = "green";
      console.log("green",today, today2, exp);
    }

    fruitSelect.add(option);
  }
  resetSelect();
}
