var name = 'John';
var age = 28;
var greeting = "Hello, my name is " + name + " and my age is " + age;

console.log(greeting);

for(var i=0; i<5; i++) {
    console.log(name);
}

try {
    var y = greeting;
    if(y === undefined) {
        throw "error";
    }
    else throw "ok";
}
catch(err) {
    console.log(err);
}

function foo() {
	var a = 2;

	function bar() {
		console.log( a );
    }
    
    function double(a) {
        return a * 2;
    }

    function api() {
        return {
            x: bar,
            d: double
        }
    }

	return api;
}

var baz = foo();
console.log(baz);
var bz = baz();
console.log(baz().d(5));

//baz();