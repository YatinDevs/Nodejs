var url="http://abc.com"
function message()
{
console.log("welcoeme to node js ")
}

function sum(a ,b)
{

    return a+b
}

//message()
//console.log(sum(10,20))

module.exports.x=message
module.exports.y= sum

module.exports.endpoint= url