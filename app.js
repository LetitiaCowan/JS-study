// const statusRef = document.querySelector(".status")


// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         resolve("VIP")
//     })
// }

// // //Then
// // getSubscriptionStatus().then(response => console.log(response))

// //async/await
// async function main() {

//     const status = (await getSubscriptionStatus())
//     statusRef.innerHTML = status

// }

// main()

let p = new Promise((resolve, reject) => {

    let a = 1 + 1;
    if (a ==2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {

    console.log('This is in the then' + message)
    
}).catch((message) => {

    console.log('This is in the catch' + message)
})