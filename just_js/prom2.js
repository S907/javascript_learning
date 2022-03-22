function placeOrder(drink){
    
    return new Promise(function(resolve, reject){
        if(drink === 'coffee'){
        resolve("Coffee extra large with no sugar. Enjoy !!! Happy Diabetic day.");
     } else reject();
    
    });
    
}

// In a promise always look for resolve reject properly as there are callbacks involved.

function orderProcess(order){
        return new Promise(function(resolve){
            console.log("Order is under process");
            resolve(`Order is here. Here is your ${order}`);
        });
    

}


/*  Used arrow function as there is no this binding most likely value was not returned. Probably seeing the call stack can give more answers */

// placeOrder("coffee").then((orderFromCus)=>{
//     console.log("Order is in process mode");
//     let  customerOrder = orderFromCus;
//     return customerOrder; 
// }).then((customerOrder)=>{
//     console.log(customerOrder);
// }).catch((err)=>{
//     console.log(err);
// });

//----------------------------------------------------------------------------





placeOrder("coffee").then(function(orderFromCusto){
    let customerOrder = orderProcess(orderFromCusto);
    return customerOrder;
}).then(function(customerOrder){
    console.log(customerOrder);
}).catch(function(err){
    console.log(err);
})

