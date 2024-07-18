let products = localStorage.getItem("proincart");
let total=document.querySelector(".total tbody");

if(products ){
  let items = JSON.parse(products);
   showitem(items);
  } 
  //add product to cart page

  function showitem(productsitem){ 
    if(productsitem.length==0){
      let alltable =document.getElementById("table");
      alltable.style.display="none";
      let emptymsg=document.getElementById("empty-cart");
        emptymsg.style.display="block";
    }
    let carttable=document.querySelector(".cart-table tbody");
    productsitem.forEach(product => {
      
    let title=product.itemtitle,
    price=product.itemprice,
    img=product.itemimg ;
    quantity=product.itemquan;
    carttable.innerHTML += `<tr class="table-coulmn">
    <td class="item-name">${title}</td>
    <td><img class="cart-product-img" src="${img}" alt="img"></td>
    <td class="price">${price} $ </td> 
    <td class="quantity">${quantity}</td>   
    <td><button class="btn btn-danger  delete" >Delete</button>
      </td>
    </tr>
    ` ;
    deleteitem(title);
    //get total price function
    getTotal(title,price,quantity);
    
   });
}
//Total price
function getTotal(title,price,quantity){
  total.innerHTML+= `<tr>
  <th class="name">${title} x ${quantity} </th>
  <th class="price" data-price='${price * quantity}'>${price * quantity}$</th>
</tr> 
`
       let pricecol = document.querySelectorAll(".total tbody .price");
      let sum = 0;
      for (let i = 0; i < pricecol.length; i++) {
          sum += Number(pricecol[i].getAttribute("data-price"));  
      }
      document.getElementById("total-price").textContent = sum + "$";
     
}

//delet product
function deleteitem(title){
  let deletebtns =document.querySelectorAll(".delete");
  deletebtns.forEach(deletebtn =>{
    deletebtn.addEventListener("click",function(){ 
  if(products){
    let items = JSON.parse(products);
    if( itemsfilter =items.filter((item) => item.itemtitle !== title)){      
      if(confirm('Are You Sure To Delete this product ?!')){
        window.location.reload(); 
      }  
  localStorage.setItem("proincart",JSON.stringify(itemsfilter));  
 
  } 
 
}
})
})  
}

