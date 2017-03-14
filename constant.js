var constant = (
	function () {
		var constant = {}
		var prefix = (Math.random() + '_').slice(2)
		var ownProperty = Object.prototype.hasOwnProperty
		var allowed = {
			'string':1,
			'number':1,
			'boolean':1
		}
		function set(key, value) {
			if(isDefined(key)){
				return false
			}
			if(!ownProperty.call(allowed,typeof value)){
				return false
			}
			constant[prefix + key] = value
		}

		function isDefined(name) {
			return ownProperty.call(constant,prefix+name)
		}

		function get(name){
			if(isDefined(name)){
				return constant[prefix+name]
			}
			return false
		}
		return {
			get:get,
			set:set,
			isDefined:isDefined
		}
	}
)()