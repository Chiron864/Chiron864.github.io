// Making sure that they cannot highlight the food group
fruitSelect.onclick = function() {
  if (fruitSelect.selectedIndex !== 0){
    console.log(fruitSelect.selectedIndex);
  } else {
    console.log("error");
  }
}

vegetableSelect.onclick = function() {
  if (vegetableSelect.selectedIndex !== 0){
    console.log(vegetableSelect.selectedIndex);
  } else {
    console.log("error");
  }
}

dairySelect.onclick = function() {
  if (dairySelect.selectedIndex !== 0){
    console.log(dairySelect.selectedIndex);
  } else {
    console.log("error");
  }
}

proteinSelect.onclick = function() {
  if (proteinSelect.selectedIndex !== 0){
    console.log(proteinSelect.selectedIndex);
  } else {
    console.log("error");
  }
}

grainSelect.onclick = function() {
  if (grainSelect.selectedIndex !== 0){
    console.log(grainSelect.selectedIndex);
  } else {
    console.log("error");
  }
}

otherSelect.onclick = function() {
  if (otherSelect.selectedIndex !== 0){
    console.log(otherSelect.selectedIndex);
  } else {
    console.log("error");
  }
}

















































/*console.log("selectElement");
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
/*x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
/*  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
/*  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
/*    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*//*
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            h = this.innerHTML;
            console.log(h);
            break;
          }
        }

    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
}*/
