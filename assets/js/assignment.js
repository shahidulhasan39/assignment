
// Inch to mile converter
document.getElementById('inch').onkeyup = function() {

	let inchVal = document.getElementById('inch').value;
	let mileShodId = document.getElementById("mile-result");

	if(!inchVal) {
		mileShodId.innerHTML = '';
	} else if(inchVal >= 0 ) {
		mileShodId.innerHTML = inchToMile(inchVal);
	}

};

function inchToMile(inchVal) {

	let mile = inchVal * 0.0000157828;
	let mileAfter = mile.toString().split(".")[1];
	let mileAfterVal = mileAfter.slice(0, 1);
	let mileBeforeVal = mile.toString().split(".")[0];

	if( `${mileBeforeVal}.${mileAfterVal}` == `${mileBeforeVal}.9` ) {
		mileVal = Math.ceil(mile);
	} else {
		mileVal = inchVal * 0.0000157828;
	}
	return `${mileVal} Mile!`;
}

// Mutual Friends
mutualFriendFunc();
function mutualFriendFunc() {
	let shahid = ['Rohim', 'Karim', 'Manila', 'Shahid', 'Sathi'];
	let nish = ['Manila', 'Shahid', 'Jobbar', 'Parvej'];
	document.getElementById("show-arr").innerHTML = `First Array:  [ ${ shahid.join(', ') } ] <br> Second Array: [ ${ nish.join(', ') } ]`;

	let mutualFriend = '';
	for (let i = 0; i < shahid.length; i++) {
		for (let j = 0; j < nish.length; j++) {
			if( shahid[i] == nish[j] ) {
	  			mutualFriend += shahid[i] + "<br>";
	  		}
		}
	}
	if(mutualFriend) {
		document.getElementById("mutual-friend-result").innerHTML =  `<h3 class="mtl-frnd">Mutual Friends is:</h3> ${mutualFriend}`;
	} else {
		document.getElementById("mutual-friend-result").innerHTML = 'Not mutual firend!';
	}
}

// Wood Calculator
document.getElementById('wood-chair-val').onkeyup = function() {

	woodCal();

};
document.getElementById('wood-table-val').onkeyup = function() {

	woodCal();

};
document.getElementById('wood-khat-val').onkeyup = function() {

	woodCal();

};
function woodCal() {
	let chairVal = document.getElementById('wood-chair-val').value;
	let tableVal = document.getElementById('wood-table-val').value;
	let khatVal = document.getElementById('wood-khat-val').value;
	let woodCalShowId = document.getElementById('wood-cal-result');

	let chairWood = chairVal * 1;
	let tableWood = tableVal * 3;
	let khatWood = khatVal * 5;

	woodCalShowId.innerHTML = chairWood + tableWood + khatWood + ' ' +'Cubics wood!';

}

// Building Calculator
document.getElementById('building-cal-val').onkeyup = function() {

	buildingCal();

};
function buildingCal() {
	let buildingCalVal = document.getElementById('building-cal-val').value;
	let buildingCalShowId = document.getElementById('building-cal-result');
	const thousend = 1000;
	const fifteen = 15;
	const twelve = 12;
	const ten = 10;

	if(!buildingCalVal) {
		buildingCalShowId.innerHTML = '';
	} else if( buildingCalVal < 1 ) {
		buildingCalShowId.innerHTML = '0 or negetive number not allowed. You have need typing 1 to upper number';
	} else if( buildingCalVal >= 1 && buildingCalVal <= ten ) {
		let tenTola = ( buildingCalVal * fifteen ) * thousend;
		buildingCalShowId.innerHTML = tenTola + ' ' + 'ti iter proyojon!';
	} else if( buildingCalVal >= 11 && buildingCalVal <= 20 ) {
		let tenTola = ten * fifteen * thousend;
		let tenToTweenty = ( (buildingCalVal - ten) * twelve ) * thousend + tenTola;
		buildingCalShowId.innerHTML = tenToTweenty + ' ' + 'ti iter proyojon!';
	} else {
		let tenTola = ten * fifteen * thousend;
		let tenToTweenty = ten * twelve * thousend;
		let upperTweenty = ( (buildingCalVal - 20) * ten ) * thousend + tenTola + tenToTweenty;
		buildingCalShowId.innerHTML = upperTweenty + ' ' + 'ti iter proyojon!';
	}
}

// Grade Calculator
document.getElementById('mark-val').onkeyup = function() {

	gradeCal();

};
function gradeCal() {
	let marks = document.getElementById('mark-val').value;
	let gradeShowId = document.getElementById('result');

	if(!marks) {
		gradeShowId.innerHTML = '';
	} else if(marks > 100 || marks < 0 ) {
		gradeShowId.innerHTML = 'This number is not allowed! Please enter 0-100.';
	} else if(marks >= 97) {
		gradeShowId.innerHTML = `You are get "A+". Congratulation! You've selected for the scholarship!`;
	} else if(marks >= 90) {
		gradeShowId.innerHTML = `You are get "A". Congratulation! You've selected for the scholarship!`;
	} else if(marks >= 86) {
		gradeShowId.innerHTML = 'You are get "A-"';
	} else if(marks >= 80) {
		gradeShowId.innerHTML = 'You are get "B"';
	} else if(marks >= 75) {
		gradeShowId.innerHTML = 'You are get "C+"';
	} else if(marks >= 70) {
		gradeShowId.innerHTML = 'You are get "C"';
	} else if(marks >= 65) {
		gradeShowId.innerHTML = 'You are get "D+"';
	} else if(marks >= 60) {
		gradeShowId.innerHTML = 'You are get "D"';
	} else {
		gradeShowId.innerHTML = 'You are Fail!';
	}
}
