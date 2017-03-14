function duplicate(arr){
    return arr.concat(arr)
}


Array.prototype.duplicate = Array.prototype.duplicate||function(){
    var self = this;
    return self.concat(self);
}

function duplicate(arr){
    var res= arr.reduce(function(pre,cur){return arr.concat(cur)},arr)
    return res;
}