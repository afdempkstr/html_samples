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

    function set(x) {
        a = x;
    }

    function baz() {
        var a = 0;
        return a+1;
    }
    
    function double(a) {
        return a * 2;
    }

    function api() {
        return {
            Bar: bar,
            Dbl: double,
            Set: set,
            Baz: baz
        }
    }

	return api;
}


var api = foo();
console.log(api);
var apiObject = api();
