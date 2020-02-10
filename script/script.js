console.log('hello world');

// Object storing person's 1 inputted data
var person1 = {};
// Object storing person's 2 inputted data
var person2 = {};
// Person 1's total hours spent doing activities
var totalTimeSpentP1 = 0;
// Person 2's total hours spent doing activities
var totalTimeSpentP2 = 0;

function addUsersHolidayDetails(){
	person1 = {
		name : document.getElementById('nameP1').value ,
		activity1 : document.getElementById('activity1P1').value ,
		activity1Hours : parseInt(document.getElementById('hoursDoingActivity1P1').value),
		activity2 : document.getElementById('activity2P1').value ,
		activity2Hours : parseInt(document.getElementById('hoursDoingActivity2P1').value),
		activity3 : document.getElementById('activity3P1').value ,
		activity3Hours : parseInt(document.getElementById('hoursDoingActivity3P1').value),
		activity4 : document.getElementById('activity4P1').value ,
		activity4Hours : parseInt(document.getElementById('hoursDoingActivity4P1').value),
		activity5 : document.getElementById('activity5P1').value ,
		activity5Hours : parseInt(document.getElementById('hoursDoingActivity5P1').value) 
	};
	person2 = {
		name : document.getElementById('nameP2').value ,
		activity1 : document.getElementById('activity1P2').value ,
		activity1Hours : parseInt(document.getElementById('hoursDoingActivity1P2').value),
		activity2 : document.getElementById('activity2P2').value ,
		activity2Hours : parseInt(document.getElementById('hoursDoingActivity2P2').value),
		activity3 : document.getElementById('activity3P2').value ,
		activity3Hours : parseInt(document.getElementById('hoursDoingActivity3P2').value),
		activity4 : document.getElementById('activity4P2').value ,
		activity4Hours : parseInt(document.getElementById('hoursDoingActivity4P2').value),
		activity5 : document.getElementById('activity5P2').value ,
		activity5Hours : parseInt(document.getElementById('hoursDoingActivity5P2').value) 
	}
}

// Calculates total activity hours
function calculateTotalHours(){
	totalTimeSpentP1 = person1.activity1Hours + person1.activity2Hours + person1.activity3Hours + person1.activity4Hours + person1.activity5Hours;
	totalTimeSpentP2 = person2.activity1Hours + person2.activity2Hours + person2.activity3Hours + person2.activity4Hours + person2.activity5Hours;
}

// When the user clicks the submit button, calls functions
$('#submitUsersInput').click(function(){
	addUsersHolidayDetails();
	calculateTotalHours()
	console.log(person1);
	console.log(person2);
	console.log(totalTimeSpentP1);
	console.log(totalTimeSpentP2);
});