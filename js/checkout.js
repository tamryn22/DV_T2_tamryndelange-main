let checkTotal = 0;

displayCheck = () =>{
    let data =JSON.parse(localStorage.getItem('order'));
    let items = documenty.getElementById('checkoutOrder');
    let totalArea = document.getElementById ('totalOut');

    for (let i =0; i < data.length; i ++){
        let name = data[i].subName;
        let size = data[i].subSize;
        let bread = data[i].subBread;
        let fillings = data[i].subFillings;
        let price = data[i].subPrice

        checkTotal =+ price;

        items.innerHTML =+ `
        <div class="orderLine">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Size:</strong> ${size} </p>
            <p><strong>Base:</strong> ${base}</p>
            <p><strong>Toppings:</strong> ${fillings.join()}</p>
            <p><strong>Price:</strong> ${price}.00</p>
        </div>`
    totalArea.innerHTML = "R" + checkTotal + ".00"
        
    }
}

promoNumber = () => {
    let value = +document.getElementById('promo').value
    let newTotal = document.getElementById('totalOut')

    if(value === 1234){
        let discount = 0.1;
        let answer = CheckOut - discount * 100
        
        newTotal.innerHTML = "R" + answer + ".00"


    } else {
        alert("Promo Code not valid")
    }

}