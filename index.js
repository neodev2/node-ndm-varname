
module.exports = (function(global){
	
	var cache = {};
	
	return function(obj){
		
		// get variable name

		myObject = function () {
		  this.getName = function () {
		    // search through the global object for a name that resolves to this object
		    for (var name in global)
		      if (global[name] == this)
		        return name;
		  };
		};

// usage

var o = new myObject(); 
console.log(o.getName()); // returns "o"
		
	};
	
}(this));