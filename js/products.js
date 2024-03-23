// Load Products Data
fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    renderProducts(data);
  })
  .catch((error) => {
    alert("Error Product Fetching... ", error);
    console.log(error);
  });

//
function renderProducts(products) {
  const productsContainer = document.getElementById("products-container");
  const fragment = document.createDocumentFragment(); // Create a document fragment to optimize DOM manipulation

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card", "shadow");
    productCard.classList.add("m-2");
    productCard.style.width = "22rem";
    productCard.innerHTML = `
  <img src="${product.img}" class="card-img-top" alt="Product Image">
  <div class="card-body">
    <h5 class="card-title mb-3">${product.name.slice(0, 70)}...</h5>
    <ul class="list-group list-group-flush mb-3">
      <li class="list-group-item"><strong>Seller:</strong>${product.seller}</li>
      <li class="list-group-item"><strong>Price:</strong> ${product.price}</li>
      <li class="list-group-item"><strong>Stock:</strong> ${product.stock}</li>
      <li class="list-group-item"><strong>Rating:</strong> 4 stars (4896 reviews)</li>
    </ul>
    <a href="https://www.amazon.com/gp/slredirect/picassoRedirect.html/ref=pa_sp_btf_electronics_sr_pg1_1?ie=UTF8&adId=A0699155IZEFEU9092Y5&url=https%3A%2F%2Fwww.amazon.com%2FEK7000-Waterproof-Outdoor-Adventure-Mounting%2Fdp%2FB06XGZB6P3%2Fref%3Dsr_1_27%3Fs%3Delectronics%26ie%3DUTF8%26qid%3D1499124549%26sr%3D1-27-spons%26keywords%3Dcamera%26psc%3D1&qualifier=1499124549&id=8228299164163419&widgetName=sp_btf" class="btn text-white" target="_blank" style="background-color:#0BACF7">View on Amazon</a>
  </div>

        `;
    fragment.appendChild(productCard); // Append the product card to the fragment
  });

  productsContainer.appendChild(fragment); // Append the fragment to the products container at once
}
