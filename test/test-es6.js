var tape= require('tape')

tape('es6', function(t){
	function*p(){
		yield 1
		yield 2
		yield 3
	}
	var i= 0
	for(var o of p()){
		t.equal(o, ++i, 'returns the right value')
	}
	t.equal(i, 3, 'correct number of iterations')
	t.end()
})
