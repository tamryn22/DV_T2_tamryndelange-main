let checkTotal = 20;

displayCheck = () =>{

    // let orders = localStorage.getItem("order")

    // let data = JSON.parse(orders)

    // console.log(data);

    let data =JSON.parse(localStorage.getItem('order'));
    console.log(data);
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById ('totalOut');

    for (let i = 0; i < data.length; i++){
        let name = data[i].subName;
        let size = data[i].subSize;
        let bread = data[i].subBread;
        let fillings = data[i].subFillings;
        let price = data[i].subPrice


        // console.log("name: " + name + " size: " + size + " bread: " + bread + " fillings: " + fillings + " price: " + price );

        checkTotal += price;

        items.innerHTML += `
            <div class="orderLine">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Size:</strong> ${size} </p>
                <p><strong>Base:</strong> ${bread}</p>
                <p><strong>Toppings:</strong> ${fillings.join()}</p>
                <p><strong>Price:</strong> R${price}.00</p>
            </div>
        `
        totalArea.innerHTML = "R" + checkTotal + ".00"
        
    }
}

let promoRun = false

promoNumber = () => {

    console.log(promoRun);
    let value = document.getElementById('promoNumber').value
    console.log(value);

    let newTotal = document.getElementById('totalOut')
    let totalArea = document.getElementById ('totalOut');

    if(promoRun = false){
        console.log(promoRun);
        if(value == 1234){
    
            let updateTotal = checkTotal - 20
            console.log(updateTotal);
    
            totalArea.innerHTML = "R" + updateTotal + ".00"

            promoRun = true
            console.log(promoRun);
        } else {
            alert("Promo Code not valid")
            promoRun = false
        }
    }  else {
        console.log("already added promo code");
        // alert("Already added promo code")
    }

}
