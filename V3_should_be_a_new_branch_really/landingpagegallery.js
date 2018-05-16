document.onload = function() {myFunction()};

function myFunction() {
var allImages = "";

for (var i = 1; i < 31; i++) {

  allImages += '<img src="/shoePics/sho'+i+'.JPG'" alt="KickrentalShoes">';
}

$('#photos').append(allImages);}