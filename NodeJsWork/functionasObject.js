
 function student()
{ 
    
    // variable inside a class

    this.name="puja"
    this.age=34

   // function inside a class

    this.show=()=>
    {
        console.log(this.name + " "  + this.age)

    }


}

// object created

var s= new student()

s.show() // calling class function
console.log(s.name)  // calling class variable

module.exports= student