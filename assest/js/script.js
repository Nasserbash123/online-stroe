
   
//page.onload

//mobile-sidemenu-toggle
mobilesidemenu();
function mobilesidemenu() {
    let toggle_btns = document.querySelectorAll(".mobile-menu-btn-toggle"),
    close_btn= document.getElementById("mobile-menu-btn-close"),
    mobile_sidemenu=document.getElementById("moblie-toggle-sidebar");
    toggle_btns.forEach(btn => {
        btn.addEventListener("click",function(){
            mobile_sidemenu.classList.add("mobile_sidemenu_active");
        });
        });
    close_btn.addEventListener("click",function(){
        mobile_sidemenu.classList.remove("mobile_sidemenu_active");
    });
}

//
// changeNavbarColor();
// function changeNavbarColor(){
// let navbar=document.querySelectorAll(".navbar");


// window.addEventListener("scroll", function () {
//     if(window.scrollY >=100){
//         navbar.forEach(element => {
//             element.classList.add("active")
//         });

// }else{
//     navbar.forEach(element => {
//         element.classList.remove("active")
//     });
  
// }
// })
//    }
   
//
fillColorsCricle();
   function fillColorsCricle() {
            let cricles = document.querySelectorAll(' .colors');
            cricles.forEach(cricle => {
                let color = cricle.getAttribute("id");
                cricle.style.backgroundColor = color;
                });
   }
//
quickview();
function quickview(){
let quicks_view=document.querySelectorAll(".quick-view"),
quick_view_buttons=document.querySelectorAll(".quick_view_button "),
quick_view_buttons_close=document.querySelectorAll(".quick-view .close");

    quick_view_buttons.forEach((quick_view_button)=>{
        quick_view_button.addEventListener("click",function(){
            let buttonID = quick_view_button.getAttribute("id");
            quicks_view.forEach(quick_view =>{
                if(buttonID===quick_view.getAttribute("id")){
                quick_view.classList.add("active-quick-view");
            }
            })
        })
    })
    quick_view_buttons_close.forEach((quick_view_button_close)=>{
        quick_view_button_close.addEventListener("click",function(){
            quicks_view.forEach(quick_view =>{
                quick_view.classList.remove("active-quick-view");
            })
        })
    })}
   
//
productDisplayStyle();
    function productDisplayStyle() {
        let girdStyle=document.querySelector(".display-icon .gird"),
            threegirdStyle=document.querySelector(".display-icon .three-gird"),
            twogirdStyle=document.querySelector(".display-icon .two-gird"),
            listStyle=document.querySelector(".display-icon .list"),
            parent=document.querySelector(".product-items .row"),
            cards=document.querySelectorAll(".product-items .card");
            cardsdescription=document.querySelectorAll(".card .descripton");
            icons=document.querySelectorAll(".display-icon .disply-style")
            icons.forEach(icon => {
                icon.addEventListener("click",function () {
                    icons.forEach(icon =>{
                        icon.classList.remove("active")
                    })
                    icon.classList.add("active")
                })
               
                });
            listStyle.addEventListener("click",function () {
                parent.classList.add("list-display");
                cards.forEach(card => {
                    card.className='';
                    card.classList.add("product");
                    card.classList.add("d-block");
                    card.classList.add("d-lg-flex");
                });
                cardsdescription.forEach(description => {
                    description.style.display='block' 
                });
            })
             girdStyle.addEventListener("click",function () {
                parent.classList.add("row");
                parent.classList.remove("list-display");
                cards.forEach(card => {
                    card.className='';
                    card.classList.add("card");
                    card.classList.add("col-md-4");
                    card.classList.add("col-lg-3"); 
                    card.classList.add("col-sm-6"); 
                });
                cardsdescription.forEach(description => {
                    description.style.display='none' 
                });
            })
            threegirdStyle.addEventListener("click",function () {
                parent.classList.add("row");
                parent.classList.remove("list-display");
                cards.forEach(card => {
                    
                    card.className='';
                    card.classList.add("card");
                    card.classList.add("col-sm-4");

                });
                cardsdescription.forEach(description => {
                    description.style.display='none' 
                });
            })
            twogirdStyle.addEventListener("click",function () {
                parent.classList.add("row");
                parent.classList.remove("list-display");
                cards.forEach(card => {
                    card.className='';
                    card.classList.add("card");
                    card.classList.add("col-sm-6");

                });
                cardsdescription.forEach(description => {
                    description.style.display='none' 
                });
            })
    }
//
mobileFilter();
function mobileFilter() {
        let openButton = document.querySelector('.sort-by .filter');
        let closeButton = document.querySelector('.mobile-filter .close');
        let mobile_filter = document.querySelector('.mobile-filter ');
        openButton.addEventListener('click',function () {
            console.log("ok");
            mobile_filter.classList.add("active");
        })
        closeButton.addEventListener('click',function () {
            mobile_filter.classList.remove("active");
        })
}
  
//price-range-slider
price_range_slider();
function price_range_slider() {
    const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

}
   
   
