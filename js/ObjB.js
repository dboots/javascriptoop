var ObjB = function() {
	'use strict';
	
	//-- Private class variables/methods
	function _flush() {
		console.log('** private method');
		console.log('flushing from private');
	}
	
	//-- Return public class methods that can access private
	//-- class variables/methods
	this.Flush = function(my_foo) {
		console.log('** accessing private method from public func');
		_flush();
		
		console.log('** accessing public method');
		my_foo.Fling();
	};
};

//-- Static method, no access to private/public class variables/methods
ObjB.prototype.StaticFlush = function() {
	console.log('static flush');
};