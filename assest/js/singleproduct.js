singlePageGallery();
function singlePageGallery() {
let product_pic=document.querySelector(".product-gallery .main-pic "),
     product_pic_link=document.querySelector(".product-gallery .main-pic-link "),
    product_gallery=document.querySelectorAll(".product-gallery .gallery-pic");
    product_gallery.forEach((product_gallery_img)=>{
        product_gallery_img.addEventListener("click",function(){
            product_gallery.forEach(product_gallery_img => {
                product_gallery_img.classList.remove("active");            
                });
            this.classList.add("active");
            let img_src=product_gallery_img.getAttribute("src");
             product_pic.setAttribute("src", img_src);
             product_pic_link.setAttribute("href", img_src);
        })
    });
    let slideRight = document.getElementById("slideRight"),
    slideLeft = document.getElementById("slideLeft");
    slideLeft.addEventListener("click",function(){
       document.querySelector(".product-gallery-img").scrollLeft -=100
    });
    slideRight.addEventListener("click",function(){
       document.querySelector(".product-gallery-img").scrollLeft +=100
    });
}
// 
tabs();
function tabs() {
    let tabButtons=document.querySelectorAll(".button-tab"),
     tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

tabButtons.forEach((tab,index)=>{
    tab.addEventListener("click",function(){
        tabPanels.forEach((tabPanel)=>{
            tabPanel.classList.remove("active");
    });
    tabButtons.forEach((tabButton)=>{
        tabButton.classList.remove("active");
});
tabButtons[index].classList.add("active");
tabPanels[index].classList.add("active");
    })
});
}


  //
  rating();
  function rating() {
    let ratestars = document.querySelectorAll(".Rating-star");
  ratestars.forEach((ratestar)=>{
      ratestar.addEventListener("click",function(){
          this.classList.add("checked")
      })
  })
  }
  