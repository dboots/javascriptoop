var ObjA = function(my_foo) {
	'use strict';

	var _foo = (my_foo) ? my_foo : 'default foo';

	function _privateMethod() {
		console.log('** private ObjA method');
	}
	
	this.Fling  = function() {
		console.log('** from public class method');
		console.log('flinging foo: ' + _foo);
	};

	this.GetFoo = function() {
		return _foo;
	};
		
	this.SetFoo = function(my_foo) {
		console.log('** setting foo in public class method');
		_foo = my_foo;
	};
};


//-- Static variable
ObjA.prototype.Foo = 'static foo';

//-- Static method, no access to private/public class variables/methods
ObjA.StaticFoo = function() {
	//-- no access to _poo
	var objA = new ObjA('class foo');
	
	console.log('** public class method');
	objA.Fling();
};