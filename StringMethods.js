var y= 'Hi Dude 6776 8y65'
var x='              lets do this'
// console.log(y.indexOf('Dude     '))
// console.log(y.indexOf('7'))
// console.log(y.lastIndexOf(6))
// console.log(y.includes('6 8'))
// console.log(y.includes('78'))
// console.log(y.charAt(6))
 //console.log(y.slice(-6,))
 //console.log(y.substring(3,7))     //Today's task(17/4/25)
 //console.log(y.substring(-4))
//console.log(y.split('Du'))
// console.log(x.trim())
// console.log(y.endsWith('5'))
// console.log(y.startsWith('h'))
// console.log(x.concat(y))
//console.log(y.match('y'))
// console.log(y.search('u'))
// console.log(y.repeat(2))


var r=0
var tas=[1,0,1,0,1,0]
     for(r=0;r<6;r++){
       console.log(tas[r])
    
    }

function isPrime(n) {
    if (n < 2) return false;
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
console.log(isPrime(6))


function tr(r)
{
return console.log(r)
}
tr(7)
var j=9
if(j>6){
    return true
}
  else  {
        return false
    }


    function wr(a,b){
     if(a>b)
     {
        return true
     }
      
     else
     {
        return false
     }
   
   
    }
    console.log(wr(4,5))


    let t=[55,44,11,22,66]
    var s=0



    let a=['one','two','three','four','five','six']
    
    a.forEach(re=>{                       ////=>   for.. each
      console.log(re)
    })
 ///////////////////////////////////   
    for (const nu of a) {
      if (nu=='four')
        continue;                                  //=> for.. of
      console.log(nu)
    }
////////////////////////////////////////////       
       
    try {
        let q=20
        let c=q+b
        console.log(c)                               //=> try..catch
    } catch (error) {
      console.log('error is :'+error.message)
    }


    var st=0
    var rts = [12,13,14,15,16]
      
     for (st=0;st<5;st++){
      
      if(rts[st]==14){
        continue;
      }
      console.log(rts[st])
     }

 if (condition) {
  
 }

 var ty=34


 var mn='I Love India'
 console.log(mn)
 var nm=mn.split('').reverse().join('')
 console.log(nm)
 var zz=mnn.split(' ').reverse().join(' ')
 console.log(zz)
//  var io=nm.map(india=>india.split(' ').reverse().join(' '))
//  console.log(io)



//  let y='I Love India'
//  let z = y.split(' ')
//  console.log(z)
//////////////////////////////////////
var arr='Playwright'
var rt=arr.split('')
console.log(rt)
var ai=[rt]
var bi=[rt].reverse()
let ci=[bi].concat()

console.log(ci)
///////////////////////////
