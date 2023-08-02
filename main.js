function selectThis(id) {
	var myCheckbox = document.getElementsByName("Gender");
	Array.prototype.forEach.call(myCheckbox, function(el){
		el.checked = false;
	});
	id.checked = true;
}
function selectThis2(id) {
	var myCheckbox = document.getElementsByName("Sexuality");
	Array.prototype.forEach.call(myCheckbox, function(el){
		el.checked = false;
	});
	id.checked = true;
}
function selectThis3(id) {
	var myCheckbox = document.getElementsByName("Partner");
	Array.prototype.forEach.call(myCheckbox, function(el){
		el.checked = false;
	});
	id.checked = true;
}
var demographics = "";

function getDemographics() {
	/*figure out later !!*/
}