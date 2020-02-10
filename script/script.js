console.log('hello world');

// Object storing person's 1 inputted data
var person1 = {
	activity1 : '',
	activity1Hours : 0 ,
	activity2 : '', 
	activity2Hours : 0 ,
	activity3 : '' ,
	activity3Hours : 0 ,
	activity4 : '' ,
	activity4Hours : 0 ,
	activity5 : '' ,
	activity5Hours : 0
};
// Object storing person's 2 inputted data
// var person2 = {
// 	activity1 : '',
// 	activity1Hours : ,
// 	activity2 : '', 
// 	activity2Hours : ,
// 	activity3 : '' ,
// 	activity3Hours : ,
// 	activity4 : '' ,
// 	activity4Hours : ,
// 	activity5 : '' ,
// 	activity5Hours : 
// };

// Action that the user makes dfa
$('#submitUsersInput').click(function(){
	person1.activity1 = documnent.getElementById('activity1P1');
	console.log(person1);
});