//your JS code here. If required.
let student = {
	name:"rn"
}
Object.protoype.getKets = function(){
	return Object.getKeys(this);
}
console.log(student.getKeys());