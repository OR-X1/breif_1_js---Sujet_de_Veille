

// Default variables
const startButton = document.getElementById('startButton');
const headerOne = document.getElementById('headerNames');
const tbody = document.getElementById('tbody');

// Add list of names
var namesList = [];  
var resultList = [];  
// var headerNames;

function stringArray(){
	var nameList = $("#stringArray").val();
  
	$.each(nameList.split(/\n/), function (i, name) {

		// check if string is empty
		if(name != ""){
			// namesList.push(name);
			namesList.push({'id': i+1 , 'name': name});
		}
  });
}

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	// stopButton.style.display = "block";
	if(namesList.length == 0){
		this.style.display = "none";
	}

	// intervalHandle = setInterval(function () {
		var u = rand();
		headerOne.textContent = namesList[u].id + namesList[u].name;
	// }, 500);

    // setTimeout(clearInterval, 2000, (intervalHandle));
	
	// for(i=0; i<namesList.length; i++){
		resultList.push({'id': namesList[u].id , 'name': namesList[u].name, 'sujet': 'hhhh', 'date': date()});
		// }
		namesList.splice(u, 1);

	console.log(namesList);
	console.log(namesList.length);
	console.log(resultList);

	if(resultList.length == 5){
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
	}

});

function rand(){

	return Math.floor(Math.random() * namesList.length);
	
}

function date(){
	var date=document.getElementById("date").value;
	console.log(date);

   var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   var dayName;
   result=new Date(date);

    for (var i = 0; i < resultList.length; i++) {

          result.setDate(result.getDate() + i);

         dayName = days[result.getDay()];
         console.log(dayName);

         if(dayName=="Saturday"){
            result.setDate(result.getDate() + 2);
         }
         else if(dayName=="Sunday"){
            result.setDate(result.getDate() + 1);
         }
		//  resultList[i].push({'date': result.getDate()});
		 return result.getDate();

    }
}