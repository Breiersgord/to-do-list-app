
function newItem(){

//javascript
//1. Adding a new item to the list of items: 
   let li = $("<li></li>"); //reflects open and closed tags for list
   let inputValue = $("#input").val(); //val() gets input values from index page; stored values into variable 'inputValue'
   li.append(inputValue); //append values into list (should result in HTML elements that look like below)

   // <ol id="list">
   	//<li>the value of the (inputValue) from the input element</li>
     //</ol>
     

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = $('#list');
     list.append(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.toggleClass("strike");
 	}

 	li.on("dblclick",crossOut); //on is the jQuery equivalent to 'addEventListener'

 //3(i). Adding the delete button "X": 
   let crossOutButton = $("<button></button>"); 
 	crossOutButton.append(document.createTextNode("X")); //we keep document.createTextNode bc we aren't pulling this from the HTML, we are creating "X" here
 	li.append(crossOutButton);

 	crossOutButton.on("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.addClass("delete");
 	}
 // 4. Reordering the items: 
   $('#list').sortable();

}
