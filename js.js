

// Add list of names here
const namesList = [
	// '1',
	// '2',
	// '3', 
	// '4',
	// '5',
	// '6',
	// '7'

    'othmane',
    'imane',
	'hicham',
	'yassin', 
	'zouhair',
	'ali',
	'mohammed',
	'brahim'
];

// Default variables
const startButton = document.getElementById('startButton');
const headerOne = document.getElementById('headerNames');



// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	// this.style.display = "none";
	// stopButton.style.display = "block";
	
	intervalHandle = setInterval(function () {
		
		headerNames.textContent = namesList[Math.floor(Math.random() * namesList.length)];
	}, 10);

    setTimeout(clearInterval, 2000, (intervalHandle));
});






