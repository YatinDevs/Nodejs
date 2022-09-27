function sum (x,y)
{
return x*y;
}

//arrow function  //in java its lambda expression 
 const  sum2 = (x,y) => x*y 
//let  sum2= (x,y) => x*y 
  //let sum2=344;
 //sum2=33;
 
 console.log(sum2(5,6))
 console.log(sum2(52,62))

  let k =()=>  console.log("welcome")
  k()
  //arrow function with argument 

let r1 = n => 
  {
    console.log("value="+ n+ "nextline")
    
  }
r1("23")
r1("welcome")
r1(90.7)

