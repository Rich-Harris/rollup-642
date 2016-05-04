var babelHelpers = {};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers;

var MyClass = function MyClass() {
	babelHelpers.classCallCheck(this, MyClass);

	console.log("this is my class");
};

var myClass = new MyClass();