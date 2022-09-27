// in java its lambda expression
// ============== regular function =====================================================
function print()

{
  
    console.log("welcome to noida js")

}

print()
//============================= arrow function ==========================================

let x= ()=> console.log("welcome")

x()

// ========================== arrow function with arugment ==============================

let m1= (a,b)=> a*b

console.log(m1(10,2))

// =========================== arrow function with multiple lines =======================

let message= ()=>

{
    console.log("welcome1")
    console.log("welcome2")
    console.log("welcome3")
    console.log("welcome4")


}

message()