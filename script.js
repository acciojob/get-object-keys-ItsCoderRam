//your JS code here. If required.
let student = {
	name:"rn"
}
Object.prototype.getKeys = function(){
	return Object.getKeys(this);
}
console.log(student.getKeys());