let pro = new Promise((resolve,reject)=>{
    success=true
    try{
        if(success==true){
            reject('failure')
        }
        else{
            resolve('success')
        }
    }catch{}
})
//console.log(pro)
pro.then((result)=>{
    console.log(result)
}).catch((res)=>{console.log(res)})

//////////////////////////////////////////////////////////////////

const one1=Promise.resolve('immediate success')
const two2=Promise.reject('immediate failure')

two2.catch((rt)=>{console.log(rt)})
console.log(one1)

/////////////////////////////////async function
const asyncfunc = async()=>{
    const three3 = await Promise.resolve('async await')
    console.log(three3)
}
asyncfunc()