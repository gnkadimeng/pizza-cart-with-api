fetch('https://pizza-cart-api.herokuapp.com/api/pizzas').then((data) => {
    //console.log(data);
    return data.json();
}).then((completeData) => {
    // console.log(completeData.pizzas);
    let data1 = '';
    completeData.pizzas.map((values) => {
        data1 += `<div id="pizza">
        <img class="images" src="pizza-size.png" alt="">
        <p class="size">${values.size}</p>
        <p class="type">${values.type}</p>
        <p class="flavour">${values.flavour}</p>
        <p class="price">R ${values.price}</p>
        <br>
        <button x-on:click="showCart = true" class="btn">Order</button>
    
       </div>`
    });
    document.getElementById("pizza").innerHTML = data1;
    // document.getElementsByClassName("").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})


// att 
fetch('https://pizza-cart-api.herokuapp.com/api/pizzas').then((data) => {
    //console.log(data);
    return data.json();
}).then((completeData) => {
    // console.log(completeData.pizzas);
    let data1 = '';
    completeData.pizzas.map((values) => {
        data1 = `<div id="pi">
        <!-- <img class="images" src="pizza-size.png" alt=""> -->
        <p class="size">${values.size}</p>
        <p class="type">${values.type}</p>
        <p class="flavour">${values.flavour}</p>
        <p class="price">${values.price}</p>
        <br>
        <!-- <button x-on:click="showCart = true" class="btn">Order</button> -->
    
       </div>`
    });
    document.getElementById("pi").innerHTML = data1;
    // document.getElementsByClassName("").innerHTML = data1;

}).catch((err) => {
    console.log(err);
})
