let cartCards = document.getElementById("cartCards");
let data = JSON.parse(localStorage.getItem("cart"));
console.log(data);

const cartHandler = () => {
    const modify = data.map((item) => {
        return ` <div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">Quantity : ${item.quantity}</p>
          <button type="button" class="btn btn-outline-danger">Remove</button>
        </div>
        </div> `
        })
        cartCards.innerHTML = modify.join(" ")
        
}
cartHandler()







const cartRemoveHandler = (elem) => {

let removeItem = elem.parentElement.parentElement.remove()

}



document.addEventListener("click" , (e) => {
// console.log(e.target.classList.contains("btn"));
// cartRemoveHandler(e.target)
if(e.target.classList.contains("btn")){
  cartRemoveHandler(e.target)

}
})