function extend(Parent,Child){
    var i
    Child = Child||{}
    for(i in Parent){
        if(Parent.hasOwnProperty(i)){
            Child[i]=Parent[i]
        }
    }
    return Child


}