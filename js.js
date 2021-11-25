// Default variables
const startButton = document.getElementById('startButton');
const headerOne = document.getElementById('headerNames');
const tbody = document.getElementById('tbody');





// console.log(sizeOfArray);
// Add list of names
var namesList = [];  
var resultList = []; 


var count = 1;
var ind = 1;
var i=0;



document.getElementById('json').style.display= 'none';
document.getElementById('pdf').style.display= 'none';



function numberOfArray(){

	const sizeOfArray = document.getElementById("numberOfArray").value;
	console.log(sizeOfArray);


		if(sizeOfArray <= namesList.length){
		document.getElementById('addBtn').style.display= 'none';
	}else{
		document.getElementById('addBtn').style.display= 'block';
	}
}
        
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
			  i++;
			//   document.getElementById("myUL").appendChild(li);

			  document.getElementById("myUL").innerHTML= '';
					namesList.forEach(element => {
						document.getElementById("myUL").innerHTML += `
							<li>${element.id} : ${element.name}</li>
							`
					});
			}
			document.getElementById("myName").value = "";
			document.getElementById("Subject").value = "";

			numberOfArray();

		}

			if(namesList.length == 0){
				headerOne.style.display = "none";
			}


// Start the name shuffle on button click
startButton.addEventListener('click', function() {

	

	headerOne.style.display = "block";
	document.getElementById('json').style.display= 'block';
	document.getElementById('pdf').style.display= 'block';

	var date=document.getElementById("date").value;
	if(namesList.length == 1){
		this.style.display = "none";
	}


	// intervalHandle = setInterval(function () {
		var u = rand();
		// setTimeout(() => {
			headerOne.textContent = namesList[u].name;
		// }, 2000);


		  // animation -------------------------------------------------------

		//   const circuference = 260; // deg

		//   const data = {
		// 	// labels: ["Red", "Blue", "Yellow"],
		// 	datasets: [
		// 	  {
		// 		// label: "My First Dataset",
		// 		data: [1],
		// 		backgroundColor: [
		// 		  "rgb(255, 99, 132)",
		// 		]
		// 	  }
		// 	]
		//   };
		  
		//   const config = {
		// 	type: "doughnut",
		// 	data: data,
		// 	options: {   
		// 	  reponsive: true,
		// 	  maintainAspectRatio: false,
		// 	  rotation: (circuference / 2) * -1,
		// 	  circumference: circuference,
		// 	  cutout: "90%",
		// 	  borderWidth: 0,
		// 	  animation: {
		// 		  duration: 2000,
		// 	  },
		// 	}
		//   };
		  
		//   const myChart = new Chart("myChart", config);



	// }, 500);

    // setTimeout(clearInterval, 2000, (intervalHandle));
	
		resultList.push({'id': namesList[u].id , 'name': namesList[u].name, 'sujet': namesList[u].sujet, 'date' : datee(date,ind++)});
		
		namesList.splice(u, 1);


		document.getElementById("myULRes").innerHTML= '';
				resultList.forEach(element => {
						document.getElementById("myULRes").innerHTML += `
							<li>${element.id} : ${element.name} : ${element.date}</li>
							`
					});

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

});


// random -------------------------------------------
function rand(){

	return Math.floor(Math.random() * namesList.length);
	
}


// date -------------------------------------------
const datee = (date, days) => {
	
	var d = moment(new Date(date)).add(Math.floor(days / 5) * 7, 'd');
	var remaining = days % 5;
	while (remaining) {
	  d.add(1, 'd');
	  if (d.day() !== 0 && d.day() !== 6)
		remaining--;
	}
	return d.format('yyy-mm-dd');
  };





