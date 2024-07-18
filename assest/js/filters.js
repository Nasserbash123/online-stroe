$(document).ready(function(){
      
  
   $('.sort').change(function(){
    var val = $('.sort option:selected').val();
    if(val==="By-Name"){
      $('.card').sort(function(a, b) {
        return $(a).find(".card-title").text() < $(b).find(".card-title").text() ? -1 : 1;
      }).appendTo('.products');    
    }
    else if(val==="By-Price-l-to-h"){
      $('.card').sort(function(a, b) {
        return $(a).find(".card-price").text() < $(b).find(".card-price").text() ? -1 : 1;
      }).appendTo('.products');    
    }
    else if(val==="By-Price-h-to-l"){
      $('.card').sort(function(a, b) {
        return $(a).find(".card-price").text() > $(b).find(".card-price").text() ? -1 : 1;
      }).appendTo('.products');    
    }

}); 

$('.sort').change(function(){
  var val = $('.sort option:selected').val();
  if(val==="By-Name"){
    $('.product').sort(function(a, b) {
      return $(a).find(".card-title").text() < $(b).find(".card-title").text() ? -1 : 1;
    }).appendTo('.list-display');    
  }
  else if(val==="By-Price-l-to-h"){
    $('.product').sort(function(a, b) {
      return $(a).find(".card-price").text() < $(b).find(".card-price").text() ? -1 : 1;
    }).appendTo('.list-display');    
  }
  else if(val==="By-Price-h-to-l"){
    $('.product').sort(function(a, b) {
      return $(a).find(".card-price").text() > $(b).find(".card-price").text() ? -1 : 1;
    }).appendTo('.list-display');    
  }

}); 

  });
  