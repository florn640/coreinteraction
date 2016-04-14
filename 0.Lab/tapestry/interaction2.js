// JavaScript File
function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	function drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
       
       if(ev.target.tagName!="IMG"){
		ev.target.appendChild(document.getElementById(data));
}
else{
var _oldDiv= document.getElementById(data).parentNode,
_oldData= document.getElementById(data),

_newDiv=ev.target.parentNode,
_newData=ev.target;

_oldDiv.appendChild(_newData);
_newDiv.appendChild(_oldData);

}

	}