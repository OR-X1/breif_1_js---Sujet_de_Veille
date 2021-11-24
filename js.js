// Default variables
const startButton = document.getElementById('startButton');
const headerOne = document.getElementById('headerNames');
const tbody = document.getElementById('tbody');

var sizeOfArray = document.getElementById("numberOfArray").value;



console.log(sizeOfArray);
// Add list of names
var namesList = [];  
var resultList = []; 

var count = 1;

var ind = 1;
// var limitarray = 0;

var i=0;

// var headerNames;

// function stringArray(){
// 	var nameList = $("#stringArray").val();
  
// 	$.each(nameList.split(/\n/), function (i, name) {

// 		// check if string is empty
// 		if(name != ""){
// 			// namesList.push(name);
// 			namesList.push({'id': i+1 , 'name': name});

// 			limitarray++;
// 		}
// 	});
// 	console.warn(limitarray);
// }






// var close = document.getElementsByClassName("close");
        // for (i = 0; i < close.length; i++) {
        //   close[i].onclick = function() {
        //     // var div = this.parentElement;
        //     // div.style.display = "none";
        //   }
        // }

        
        // Create a new list item when clicking on the "Add" button
        function newElement() {
			var li = document.createElement("li");
			
  
			var myName = document.getElementById("myName").value;
			var Subject = document.getElementById("Subject").value;
			var t = document.createTextNode(myName);
			li.appendChild(t);
			if (myName === '' || Subject === '') {
			  alert("You must write something!");
			} else {
			  namesList.push({'id': i+1 , 'name': myName, 'sujet': Subject});
			  document.getElementById("myUL").appendChild(li);
			}
			document.getElementById("myName").value = "";
			document.getElementById("Subject").value = "";
		  
  
  
  
		  //   var span = document.createElement("SPAN");
		  //   var txt = document.createTextNode("\u00D7");
		  //   span.className = "close";
		  //   span.appendChild(txt);
		  //   li.appendChild(span);
		  
		  //   for (i = 0; i < close.length; i++) {
		  //     close[i].onclick = function() {
		  //       var div = this.parentElement;
		  //       div.style.display = "none";
		  //     }
		  //   }
		  }





// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {

	var date=document.getElementById("date").value;
	if(namesList.length == 1){
		this.style.display = "none";
	}

	// intervalHandle = setInterval(function () {
		var u = rand();
		headerOne.textContent = namesList[u].id + namesList[u].name;
	// }, 500);

    // setTimeout(clearInterval, 2000, (intervalHandle));
	
		resultList.push({'id': namesList[u].id , 'name': namesList[u].name, 'sujet': namesList[u].sujet, 'date' : datee(date,ind++)});
		
		namesList.splice(u, 1);

	// console.log(namesList);
	// console.log(namesList.length);
	// console.log(resultList);
	
	// if(resultList.length == sizeOfArray){
		tbody.innerHTML= ''
		resultList.forEach(element => {
			tbody.innerHTML += `
				<tr>
					<td class="align-middle text-center">
						<h6 class="mb-0 text-xs">${element.id}</h6>
					</td>
		
					<td class="align-middle text-center text-sm">
						<p class="text-xs text-secondary mb-0">${element.name}</p>
					</td>
		
					<td class="align-middle text-center">
						<p class="text-xs text-secondary mb-0">${element.sujet}</p>
					</td>
		
					<td class="align-middle text-center">
						<p class="text-xs text-secondary mb-0">${element.date}</p>
					</td>
		
				</tr>
			`
			
		});
	// }

});




function rand(){

	return Math.floor(Math.random() * namesList.length);
	
}

// function datee(){

// var date=document.getElementById("date").value;
// var result=new Date(date);
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var dayName;

// 			result.setDate(result.getDate() -1);

// 			result.setDate(result.getDate() + count);
 
// 			dayName = days[result.getDay()];
// 			console.log(dayName);
   
// 			if(dayName=="Saturday"){
// 			   result.setDate(result.getDate() + 2);
// 			}
// 			else if(dayName=="Sunday"){
// 			   result.setDate(result.getDate() + 1);
// 			}
// 			// console.log(result.getDate()+"/"+result.getMonth()+"/"+result.getFullYear());
// 			count++;
			
// 			return result.getDate()+"/"+result.getMonth()+"/"+result.getFullYear();
// }

const datee = (date, days) => {
	
	var d = moment(new Date(date)).add(Math.floor(days / 5) * 7, 'd');
	var remaining = days % 5;
	while (remaining) {
	  d.add(1, 'd');
	  if (d.day() !== 0 && d.day() !== 6)
		remaining--;
	}
	return d;
  };


          $(document).ready(function() {
            $('#example').DataTable( {
              dom: 'Bfrtip',
              buttons: [
                'copy','excel', 'pdf', 'print'
              ]
            } );
          } );
