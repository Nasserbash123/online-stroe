
let products = localStorage.getItem("proincart");
let productsinfo=document.querySelector(".products-info");
let total=document.querySelector("table tbody");
if(products ){
    let items = JSON.parse(products);
    show(items);
    } 

    function show(productsitem){ 
        
        productsitem.forEach(product => {
        let title=product.itemtitle,
        price=product.itemprice,
        img=product.itemimg ;  
        quantity=product.itemquan;
        productsinfo.innerHTML += `
        <div class="product-item">
                      <img src="${img}" alt="">
                      <h5 class="p-3 my-4">${title}  x ${ quantity}</h5>
                      <h5 class="p-3 my-4">${price * quantity}$</h5>
                    </div>
                    <hr>
        ` ;
       
        getTotal(title,price,quantity);
      
       });
    }
    function getTotal(title,price,quantity){
      total.innerHTML+= `<tr>
      <th>${title}</th>
      <th class="price" id="itemprice" data-price='${price * quantity}'>${price * quantity}$</th>
    </tr> 
    `
   
           let pricecol = document.querySelectorAll(".total tbody .price");
          let sum = 0;
          for (let i = 0; i < pricecol.length; i++) {
              sum += Number(pricecol[i].getAttribute("data-price"));  
          }
         let shippingrate= parseInt( document.getElementById("shipping").getAttribute("data-shipping"));

         document.getElementById("total-price").innerHTML = sum + 0 + shippingrate + "$" ;
         
       
    }
    