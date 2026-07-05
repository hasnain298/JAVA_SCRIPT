console.log("Js Is Running!");







function Product(image, title, desc, price, stock, likes, reviews) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.stock = stock;
    this.likes = likes;
    this.reviews = reviews;
  }





  
  var p1 = new Product(
    "https://www.01net.com/app/uploads/2025/09/Apple-iPhone-17-Pro-2.jpg",
    "IPhone 17 Pro Max",
    "This is the newly launched iphone 17 pro max in orange color.",
    600000,
    1290,
    19202,
    [
      {
        name: "John Doe",
        rating: 4.5,
        comment: "This is a nice product",
      },
      {
        name: "Jane Doe",
        rating: 3.5,
        comment: "This is a bad product",
      },
      {
        name: "Sufiyan Doe",
        rating: 2.1,
        comment: "This is a not better than samsung",
      },
    ]
  );












var p2 = new Product(
    "https://www.01net.com/app/uploads/2025/09/Apple-iPhone-17-Pro-2.jpg",
    "IPhone 17 Pro Max 2",
    "This is the newly launched iphone 17 pro max in orange color.",
    610000,
    190,
    1202,
    [
      {
        name: "John Doe",
        rating: 3.5,
        comment: "This is a nice product",
      },
      {
        name: "Jane Doe",
        rating: 2.5,
        comment: "This is a bad product",
      },
      {
        name: "Sufiyan Doe",
        rating: 2.1,
        comment: "This is a not better than samsung",
      },
    ]
  );

  var products = [p1, p2];
  // console.log(products)



  let a = document.getElementById("container-item");



// console.log(product)


for(let i =0; i <p2.reviews; i++){
  console.log(p2.reviews[i])
}



a.innerHTML = `<div class="image">
    <!-- bg image -->
  </div>
  <div class="IPhone">
    <h3>IPhone 17 Pro Max</h3>
    <p>Description : This Phone Is Very Best  </p>
    <p>Price : 450000</p>
  </div>
  <div class="like-reveiws">
  <p>
    Likes : 3029 
  </p>
  <p>Reveiws : 20782</p>
  </div>
    </div>`



    let b = document.getElementById("container-item-2");


// b.innerHTML = 



