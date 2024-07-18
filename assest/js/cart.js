//var

let addbtns=document.querySelectorAll(".add-to-cart"),
    productImg=document.querySelectorAll(".main-image"),
    productTitles=document.querySelectorAll(".card-title"),
    productPrice=document.querySelectorAll(".card-price"),
    proquantity=document.querySelectorAll(".quantitiy"),
    addbtnswishlist=document.querySelectorAll(".wishlist"),

    cartviewcontent=document.getElementById("cart-view-content");  
    // 
    let products=  localStorage.getItem("proincart") ? JSON.parse(localStorage.getItem("proincart")) :[] ;
    let allitem=[];    
    function addtocart(){   
  addbtns.forEach((addbtn,index)=>{
          let title=  productTitles[index].innerText;
          let price=  parseInt(productPrice[index].innerText);
          let img=   productImg[index].getAttribute("src");
          let quantity = 1;
      addbtn.addEventListener("click",function(){
      showMsg();
      let items={
        itemtitle : title,
        itemprice : price,
        itemimg : img,
        itemquan:quantity
      };
      let myproducts =  allitem.find(i => i.itemtitle===title);
      products=[...products];
      let unique = products.find(item=>item.itemtitle === title);
      if (unique) {
        items.quantity+=1;
      }else{                                        
        products.push(items);
        localStorage.setItem("proincart",JSON.stringify(products));       
      }
      if (myproducts) {         
          
        myproducts.itemquan++;
      }else{
        allitem.push(items);
       
      }
      cartviewcontent.innerHTML=""
      allitem.forEach(element => {
      cartviewcontent.innerHTML += `<div class="cart-product   d-flex justify-content-around">
      <img src="${element.itemimg}" alt="">
      <h5 class="title my-4">${element.itemtitle}</h5>
      <h6 class="cart-view-price my-4">${element.itemprice}$</h6>
     <h6 class="cart-view-quan my-4">${element.itemquan}</h6>
     <hr>
  </div>
  `  
});
   
    
  
    
    
    
    
    
  
      })         
  }); 
   }
   
   function showMsg(){
    setTimeout(function myGreeting() {
      document.getElementById("alert").style.display="block"
    },100);      
    setTimeout (function myGreeting() {
      document.getElementById("alert").style.display="none"
    },2000)
   }
  addtocart()  
  addtowishlist();  
  let productswishlist= localStorage.getItem("wishlist") ? JSON.parse(localStorage.getItem("wishlist")) : [] ;    
    function addtowishlist(){   
      addbtnswishlist.forEach((addbtn,index)=>{
          let title=  productTitles[index].innerText;
          let price=  parseInt(productPrice[index].innerText);
          let img=   productImg[index].getAttribute("src");
      addbtn.addEventListener("click",function(){
        showMsgwishlist();
      let items={
        itemtitle : title,
        itemprice : price,
        itemimg : img
      };
     productswishlist=[...productswishlist,items];
     localStorage.setItem("wishlist",JSON.stringify(productswishlist));
      
      })         
  }); 
   }
   function showMsgwishlist(){
    setTimeout(function myGreeting() {
      document.getElementById("alert-wislist").style.display="block"
    },100);      
    setTimeout (function myGreeting() {
      document.getElementById("alert-wislist").style.display="none"
    },2000)
   }