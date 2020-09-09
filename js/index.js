function myFunction(clickedButton, divID){
  var item = document.getElementById(divID);
  if(item){
    if(item.className=='hidden'){
      item.className = 'unhidden';
      clickedButton.value = 'hide'
    }
    else{
      item.className = "hidden";
      clickedButton.value = 'unhide'
    }
  }
}