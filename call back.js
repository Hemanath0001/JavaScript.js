
// function testp(a,b,c,d){
//     c()
//     console.log(a+b)
//     d()

// } testp(11,11,testp1,testp2)

// function testp1()
//     {
//         console.log('1')
//     }

// function testp2()
// {
//     console.log('2')
// } 




function y1(j){
    j()
    console.log('eeeeeee')
    
}
function y2(){
    console.log('fffffffff')
}
function j(){
    console.log('gggggggg')
}


y1(y2)



let buyIceCream = new Promise((resolve, reject) => {
    let money = 50;
  
    if (money >= 30) {
      resolve("You got your ice cream! 🍦");
    } else {
      reject("Not enough money for ice cream 😢");
    }
  });
  
  buyIceCream
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.log("Failed:", error);
    });
  