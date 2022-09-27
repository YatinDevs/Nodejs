// 11 Create a function in node that print greater of
// three numbers passed by user as argument .

const prompt = require('prompt-sync')();
function greater()
{
    const num1=prompt("Enter First Number : ");
    const num2=prompt("Enter Second Number : ");
    const num3=prompt("Enter Third Number : ");

    console.log("================================================");
    console.log("1st Number : " + num1);
    console.log("2nd Number : " + num2);
    console.log("3rd Number : " + num3);

    if(num1>num2 && num1>num3)
    console.log("Greater Number : " + num1)
    else if(num2>num1 && num2>num3)
    console.log("Greater Number : " + num2)
    else if(num3>num1 && num3>num2)
    console.log("Greater Number : " + num3)
}

greater()