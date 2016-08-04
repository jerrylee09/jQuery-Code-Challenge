$(document).ready(function() {

$('.container').on('click', 'button#add-spy', addSpy);
$('.container').on('click', 'button#remove-spy', removeSpy);
$('.container').on('click', 'button#change-color', changeColor);


var inform = "New spies";
// var spies = {
// 	JasonBourn: 'New school spy';
// 	JamesBomb: 'Old school spy';
// 	AustinPower: 'Hippie spy';

// };

function addSpy() {
	$('#spies').append('<div class="yellow">  ' + inform + '  <button class="btn btn-default" ' + 'id="remove-spy">Delete</button>' +  ' <button class="btn btn-default" ' + 'id="change-color">Change Color</button>' + '</div>');
}
function removeSpy() {
	$(this).parent().remove();
}
function changeColor() {
	var colorClass = $(this).parent().className;
	console.log(colorClass);
	$(this).parent().toggleClass( "red" );
	console.log('this have been click', colorClass);


// I was trying to make a toggle color change for the change button

	// if (colorClass ==red) {
	//   $(this).parent().addClass('yellow');
	//   $(this).parent().removeClass( 'red' );
	// } else if (colorClass ==red) {
	//   $(this).parent().addClass('yellow');
	//   $(this).parent().removeClass( 'red' );
	// }
}


// function diffColor() {
// 	var myColor = $(this).className;
// 	if(myColor == "red"){
// 		$(this).addClass('yellow');
// 	} else {
// 		$(this).addClass('red');
// 	}
// }



});