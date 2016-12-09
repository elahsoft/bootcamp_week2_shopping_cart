function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

    ev.dataTransfer.dropEffect = "copy"
}

function drop(ev) {

     ev.preventDefault();
     var data=ev.dataTransfer.getData("Text");
            var copyimg = document.createElement("img");
            var original = document.getElementById(data);
            copyimg.src = original.src;
            copyimg.width = original.width/5;
            copyimg.height = original.height/5;
            copyimg.id = original.id;
            copyimg.ondblclick = function removeItemFromBasket(){
                        var quantity = prompt("Enter quantity you want to remove, prefix it with '-'","E.g. -2");
                        updateCartSummary2(copyimg,quantity);

                    };

    if(ev.target.id == "basket"){
        var quantity = prompt("Enter quantity.","E.g. 20");

        if(quantity !== null){
            
            //clearTimeout(updateCartTotal);
            ev.target.appendChild(copyimg);
                    
            updateCartSummary(copyimg,quantity);

            lastid = lastid + 1;
        }
    }
    else{
        ev.preventDefault();
    }
                  
                    
}

//handles removing of items from the shopping cart 
