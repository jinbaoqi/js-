// var superMan = Klass(Parent, {
// 	__construct: function () { },
// 	getName:function(){
// 		return this.name
// 	}
// })

// var superman = new superMan();

//生成一个基于父级的

var Klass = function(Parent,props){
	var Child,i,fn

	Child = function(){
		if(Child.uber&&Child.uber['__constructor']){
			Child.uber['__constructor'].apply(this,arguments)
		}
		if(Child.prototype['__constructor']){
			Child.prototype['__constructor'].apply(this,arguments)
		}
	}

	//原型链不全
	Parent = Parent||Object
	fn = function(){}
	fn.prototype = Parent.prototype
	Child.prototype = new fn()

	Child.prototype.constructor=Child
	Child.uber = Parent.prototype

	for(i in props){
		if(props.hasOwnProperty(i)){
			Child.prototype[i] = props[i]
		}
	}

	return Child
}