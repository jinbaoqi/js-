var extend = (function(){
    var fn = function(){}

    return function(){
        fn.prototype = P.prototype;
        C.prototype = new fn();
        C.uber = P;
        C.prototype.constructor=C;
    }
})();