let productswishlist = localStorage.getItem("wishlist");
let wishlisttable=document.querySelector(".wishlist-table tbody");
if(productswishlist ){
    let productsInWishlist = JSON.parse(productswishlist);
    showiteminwishlist(productsInWishlist);
    } 
    //add product to cart page
    function showiteminwishlist(wishlistitem){ 
      if(wishlistitem.length==0){
        let alltable =document.getElementById("table");
        alltable.style.display="none";
        let emptymsg=document.getElementById("empty-wishlist");
          emptymsg.style.display="block";
      }
      wishlistitem.forEach(item => {
      let itemtitle=item.itemtitle,
      price=item.itemprice,
      img=item.itemimg ;
      wishlisttable.innerHTML += `<tr class="table-coulmn">
      <td class="item-name">${itemtitle}</td>
      <td><img class="cart-product-img" src="${img}" alt="img"></td>
      <td class="price">${price} $ </td>   
      <td><button class="btn btn-danger  delete" >Delete</button>
        </td>
      </tr>
      ` ;
      deleteitem(itemtitle)
      //get total price function
      
     });
  }
  function deleteitem(title){
    let deletebtns =document.querySelectorAll(".delete");
    deletebtns.forEach(deletebtn =>{
      deletebtn.addEventListener("click",function(){
        console.log("ok");
    if(productswishlist){
      let items = JSON.parse(productswishlist);
      if( itemsfilter =items.filter((item) => item.itemtitle !== title)){      
        if(confirm('Are You Sure To Delete this product ?!')){
          window.location.reload(); 
        }  
    localStorage.setItem("wishlist",JSON.stringify(itemsfilter));  
   
    } 
   
  }
  })
  })  
  }
  
  