var add = (a,b)=>{
    return a+b
} 
var square = (x) => x*x; 
var setName = (user ,  fullname) => {

    var names=fullname.split(' ');
    console.log(names)
    user.firstName=names[0];
    user.lastName=names[1];
    return user
}

var asyncAdd = (a, b , callback )=>{
    setTimeout(()=>{
        callback(a+b)
    }, 1000)
}

var asyncSquare = (a, callback)=>{
    setTimeout(()=>{
        callback(a*a)
    },1000)
}

module.exports={
    add,
    square,
    setName,
    asyncAdd,
    asyncSquare
}