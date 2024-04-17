//your JS code here. If required.
let student = {
	name:"rn"
}
Object.prototype.getKeys = function(){
	return Object.Keys(this);
}
console.log(student.getKeys());