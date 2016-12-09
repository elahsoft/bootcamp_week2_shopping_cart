
/*function updateMenu(categories ){

	var htmll = "";

	//set the menu of the app to the first four category names.
	for(var i = 0; i < 4; i++)
		if(categories[i].length > 15){
			htmll = htmll+"<div class='col-md-3 menu_item'><a href='javascript:getSelectedProducts("+(i+1)+")' id='menu1'>"+ categories[i]+"</a></div>";
		}
		else{
			htmll = htmll+"<div class='col-md-2 menu_item'><a href='javascript:getSelectedProducts("+(i+1)+")' id='menu1'>"+ categories[i]+"</a></div>";
		}

		htmll = htmll+"<div class='col-md-2 menu_item'><a href='#''><img src='images/cart_ico.png' alt='shopping_cart_icon' class='cart_ico'/></a></div>";

		$("#menu").html(htmll);


}

function confirmUserLoginStatus(){

	var authStatus = authenticate();

        if(!authStatus){

          //ask user to supply authentication details

          var email = prompt("Please Enter Andela set Email for the system", "Email");

          var password = prompt("Please enter the associated password for the email just entered","Password");

          if(email !== null && password !== null){

	          firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
					  // Handle Errors here.
					  var errorCode = error.code;
					  var errorMessage = error.message;
					  // ...

					  alert("Error Message is: Incorrect Email or Password! Please try again!");

					  redirect("http://localhost:5000/error.html");

				});
	        }
	        else{

	        	alert("Error Message is: It seems you are clicking the cancel button, please do login!");
	        	redirect("http://localhost:5000/error.html");

	        }


      }
}

function redirect(page_absolute_url){

	//redirect to an error page with a link for re-login
	window.location = page_absolute_url;
}

function showProducts(products_objects){
	
	var htmll = $(main_store).html();

	var i =1;

	for(var j = 0; j< 2; j++){

		var p_image = products_objects[j].product_image;
		var p_name = products_objects[j].product_name;
		var p_quantity = products_objects[j].product_quantity;
		var p_sp = products_objects[j].product_selling_price;
		var p_descr = products_objects[j].product_description;

		console.log(p_name);

		htmll = htmll+"<div class='row product-item'><div class='col-md-5'"+" id=store"+i+" ondrop='drop(event)' ondragover='allowDrop(event)'>";

		htmll = htmll+ "<img class='store' src='images/"+p_image;

		htmll = htmll + "' alt="+"Product Image "+i;

		htmll = htmll + " id=image"+i;

		htmll = htmll + " draggable='true' ondragstart='drag(event)' id='drag'></div><div class='col-md-7'><h3>";

		htmll = htmll + p_name+"</h3><p>Quantity:";

		htmll = htmll + p_quantity+"</p><p>Product Description: "

		htmll = htmll + p_descr+"</p><p>Price: #";

		htmll = htmll + p_sp;

		htmll = htmll + "</p></div></div>";        

		i = i + 1;

		


	}



	$(main_store).html(htmll);
	
}
*/

//shows codes for my systems main functions

function initData(){

	var database = [
	  [
	    {
	      "category_name" : "Fashion",
	      "id" : 1,
	      "status" : 1
	    },
	    {
	      "category_name:" : "Electronics",
	      "id" : 2,
	      "status" : 1
	    },
	    {
	      "category_name" : "Kitchen Equipments and Wares",
	      "id" : 3,
	      "status" : 1
	    },
	    {
	      "category_name" : "Sports Equipments & Materials",
	      "id" : 4,
	      "status" : 1
	    }
	  ],
	  [
	    {
	      "category_id" : "category_3",
	      "id" : 1,
	      "product_description" : "The Linsan Halogen oven uses efficient convention heating and high air flow cooking to replicate your traditional cooking methods with superb result-50% faster while using 75% less electricity.It roasts,bakes,grills,fry food tender and crispy with little or no oil. It defrosts and can oven cook frozen food straight from the freezer.  it has a 12L capacity which can be extented to 17L with the Extender for larger cooking.Easy to operate and clean with the non stick protective head.Also comes with two racks,tong,Instruction manual and extender.  This super -handy oven syystem will quickly become an indispensible part of your kitchen",
	      "product_image" : "ovens.png",
	      "product_name" : "Linsan Halogen Oven-Red",
	      "product_quantity" : 50,
	      "product_selling_price" : 17000,
	      "status" : 1
	    },
	    {
	      "category_id" : "category_3",
	      "id" : 2,
	      "product_description" : "The high quality stainless steel blades and 360° stir stick ensure the best texture and blends of ice, fruit, yogurt and ice cream to create delicious smoothies to enjoy any time. And when it's all ready to serve, there's a handy tap for pouring your smoothies into your favourite glasses.  The Kenwood SB266 silver smoothie machine has a powerful 500W motor, 1.5 litre capacity and 2 speeds plus pulse.  Patented 360° spatula stir stick for maximum mixing efficiency. Free recipe book included - full of nutritional, quick and fun recipes.",
	      "product_image" : "blenders.png",
	      "product_name" : "Kenwood Smoothie Blender",
	      "product_quantity" : 50,
	      "product_selling_price" : 19000,
	      "status" : 1
	    },
	    {
	      "category_id" : "category_1",
	      "id" : 3,
	      "product_description" : "This is just what you are looking for, easy to walk in and ultra-wearable. These classic UK made shoes are the ultimate way to update your wardrobe for the season. A range of high-performance technologies deliver comfort and protection while our traditional craftsmanship is fused with contemporary design for an unbeatable finish.  COLOUR: NAVY Blue Leather",
	      "product_image" : "leatherShoess.png",
	      "product_name" : "Leather Shoes - Navy Blue",
	      "product_quantity" : 50,
	      "product_selling_price" : 12000,
	      "status" : 1
	    },
	    {
	      "category_id" : "category_1",
	      "id" : 4,
	      "product_description" : "Fashion fantabulous new release of ladies Italian shoe and bag very high quality. A set of shoe for your all kinds of occasions. Very comfortable slippers. Very dressy and gives you a different look. Red colour same as picture. Sizes 38/39/40/41/42/43.",
	      "product_image" : "shoenbags.png",
	      "product_name" : "Ladies Italian Leather Shoe & Bag - Red",
	      "product_quantity" : 50,
	      "product_selling_price" : 23500,
	      "status" : 1
	    },
	    {
	      "category_id" : "category_2",
	      "id" : 5,
	      "product_description" : "Experience crystal-clear programming from your TV with SYINIX’s Clean View. By applying Clean View’s auto noise-removal technology, it removes digital and analog noise that is seen on the screen. The Analog Noise Filter enhances the picture quality by deleting visual noise from both air and cable sources. Sit back, relax and watch TV with the best clarity.",
	      "product_image" : "tvs.png",
	      "product_name" : "Syinix - 32\" TV",
	      "product_quantity" : 50,
	      "product_selling_price" : 65000,
	      "status" : 1
	    },
	    {
	      "category_id" : "category_2",
	      "id" : 6,
	      "product_description" : "GUI/ Menu (Language)\t    Option     Video DAC\t    148MHZ/12bit     NTSC/PAL Hz\t    60Hz / 50Hz     Resolution\t    upto 1080p24/60Hz     VBI - WSS/CGMS-A/Closed Caption/Macrovsion\t    Yes     NTSC⇔PAL Conversion\t    Yes     HDMI 1.4\t    Yes     Deep Colour\t    Yes     Audio Return Channel (ARC)\t    Yes     xvYCC\t    Yes     Last Scene memory\t    Yes     Photo Zoom\t    Yes     Video Enhancement\t    Yes     Text-based Subtitle\t    Yes     2bit/ 8bit Sub-picture\t    Yes     Ch\t    5.1     Power Output - Total\t    1000W     Power Output - Front L/R\t    167W x 2     Power Output - Center\t    167W     Power Output - Surround\t    167W x 2     Power Output - Sub-Woofer\t    167W (Passive)     3D / 2D\t    Yes / Yes     Wired (Ethernet)\t    Yes     DLNA(Smart Share)\t    DMP/ DMR (Mobile to TV Streaming)",
	      "product_image" : "homeTheaters.png",
	      "product_name" : "LG AUD Home Theatre BH6230S",
	      "product_quantity" : 50,
	      "product_selling_price" : 68600,
	      "status" : 1
	    },
	   {
	      "category_id" : "category_4",
	      "id" : 7,
	      "product_description" : "The Slazenger Xcel Ultimate Tennis Rackets are ideal for intermediate and advanced players seeking to improve their game. • The Slazenger Xcel Ultimate Tennis Rackets provide great power and control and features Cushion Grommets located in the racket bridge to dampen string vibration for more comfort and control.",
	      "product_image" : "rackets.png",
	      "product_name" : "Slazenger Lawn Tennis Racket",
	      "product_quantity" : 50,
	      "product_selling_price" : 29500,
	      "status" : 1
	    },
	    {
	      "category_id" : "category_4",
	      "id" : 1,
	      "product_description" : "Outdoor clay courts are not normally used in areas with high rainfall, as they take a relatively long time to dry, hence reducing the time available for play. Clay courts cannot be used during frosty weather.",
	      "product_image" : "lawntennisballs.png",
	      "product_name" : "Joerex Sports Lawn Tennis Ball",
	      "product_quantity" : 50,
	      "product_selling_price" : 2570,
	      "status" : 1
	    }
	  ]
	];

	return database;

}

function showFashion(){

	var htmll = "<div class='row'><h2> Available Products </h2></div>";

	htmll = htmll+"<div class='row product-item'>";

	for(var i=2;i < 4; i++){

		var p_image1 = database[1][i].product_image;

		
		htmll = htmll+"<div class='col-md-6' id='store"+i+ "'ondrop='drop(event)' ondragover='allowDrop(event)'>";
	            
	    htmll = htmll + "<div class='row'><img src=images/"+p_image1+" alt='image' id=id"+i+ " draggable='true' ondragstart='drag(event)' class='product_image'/>";
	            
	    htmll = htmll + "<p> #"+database[1][i].product_selling_price+"</p><a href='javascript:showProductDetails(id"+i+")'>"+database[1][i].product_name+"</a>";

	    htmll = htmll + "<p> "+database[1][i].product_quantity+" items in store</p></div></div>";

	    
	   
	}

	 htmll = htmll + "</div>";

    $(main_store).html(htmll);

}

function showElectronics(){

	var htmll = "<div class='row'><h2> Available Products </h2></div>";

	htmll = htmll+"<div class='row product-item'>";

	for(var i=4;i < 6; i++){

		var p_image1 = database[1][i].product_image;

		
		htmll = htmll+"<div class='col-md-6' id='store"+i+ "'ondrop='drop(event)' ondragover='allowDrop(event)'>";
	            
	    htmll = htmll + "<div class='row'><img src=images/"+p_image1+" alt='image' id=id"+i+ " draggable='true' ondragstart='drag(event)' class='product_image'/>";
	            
	    htmll = htmll + "<p> #"+database[1][i].product_selling_price+"</p><a href='javascript:showProductDetails(id"+i+")'>"+database[1][i].product_name+"</a>";

	    htmll = htmll + "<p> "+database[1][i].product_quantity+" items in store</p></div></div>";

	    
	   
	}

	 htmll = htmll + "</div>";

    $(main_store).html(htmll);

}

function showKitchen(){

	var htmll = "<div class='row'><h2> Available Products </h2></div>";

	htmll = htmll+"<div class='row product-item'>";

	for(var i=0;i < 2; i++){

		var p_image1 = database[1][i].product_image;

		
		htmll = htmll+"<div class='col-md-6' id='store"+i+ "'ondrop='drop(event)' ondragover='allowDrop(event)'>";
	            
	    htmll = htmll + "<div class='row'><img src=images/"+p_image1+" alt='image' id=id"+i+ " draggable='true' ondragstart='drag(event)' class='product_image'/>";
	            
	    htmll = htmll + "<p> #"+database[1][i].product_selling_price+"</p><a href='javascript:showProductDetails(id"+i+")'>"+database[1][i].product_name+"</a>";

	    htmll = htmll + "<p> "+database[1][i].product_quantity+" items in store</p></div></div>";

	    
	   
	}

	 htmll = htmll + "</div>";

    $(main_store).html(htmll);

}

function showSports(){

	var htmll = "<div class='row'><h2> Available Products </h2></div>";

	htmll = htmll+"<div class='row product-item'>";

	for(var i=6;i < 8; i++){

		var p_image1 = database[1][i].product_image;

		
		htmll = htmll+"<div class='col-md-6' id='store"+i+ "'ondrop='drop(event)' ondragover='allowDrop(event)'>";
	            
	    htmll = htmll + "<div class='row'><img src=images/"+p_image1+" alt='image' id=id"+i+ " draggable='true' ondragstart='drag(event)' class='product_image'/>";
	            
	    htmll = htmll + "<p> #"+database[1][i].product_selling_price+"</p><a href='javascript:showProductDetails(id"+i+")'>"+database[1][i].product_name+"</a>";

	    htmll = htmll + "<p> "+database[1][i].product_quantity+" items in store</p></div></div>";

	    
	   
	}

	 htmll = htmll + "</div>";

    $(main_store).html(htmll);

}

function showAll(){


	var htmll = "<div class='row'><h2> Available Products </h2></div>";

	htmll = htmll+"<div class='row product-item'>";

	for(var i=0;i < 8; i++){

		var p_image1 = database[1][i].product_image;

		htmll = htmll+"<div class='col-md-6' id='store"+i+ "'ondrop='drop(event)' ondragover='allowDrop(event)' id="+i+">";
	            
	    htmll = htmll + "<div class='row'><img src=images/"+p_image1+" alt='image' id=id"+i+ " draggable='true' ondragstart='drag(event)' class='product_image'/>";
	            
	    htmll = htmll + "<p> #"+database[1][i].product_selling_price+"</p><a href='javascript:showProductDetails(id"+i+")'>"+database[1][i].product_name+"</a>";

	    htmll = htmll + "<p> "+database[1][i].product_quantity+" items in store</p></div></div>";

	    if(i%2!==0){
	    	htmll = htmll+"</div><div class='row product-item'>"
	    }
	    
	   
	}

	 htmll = htmll + "</div>";

    $(main_store).html(htmll);

}

function showProductDetails(idstring){
	var id = idstring.id.substring(2);

	console.log(idstring.id);

	var htmll = "<div class='row' ondrop='drop(event)' ondragover='allowDrop(event)'><h2>"+database[1][id].product_name +"</h2></div>";

	htmll = htmll + "<div class='row'><img src=images/"+database[1][id].product_image+" alt='image' id=id"+id+ "class='product_image' draggable='true' ondragstart='drag(event)'/></div>";
	htmll = htmll+"<div class='row'>Price: "+database[1][id].product_selling_price+"</div>";
	htmll = htmll+"<div class='row'>Product Description:<p> "+database[1][id].product_description+"</p></div>";

	$(main_store).html(htmll);

}

function updateCartSummary(image,quantity){

	quantity = parseInt(quantity);

	//updates the cart summary
	if(quantity > 0){
			//make sure we have enough stock in store
			if(database[1][image.id].product_quantity > 0){
					var qua = parseInt(quantity);

						if(qua < database[1][image.id].product_quantity){

								var htmll =$(selected).html();

								//reduce quantity in database
								database[1][image.id].product_quantity = database[1][image.id].product_quantity - qua;



								htmll = htmll+ "<p>Product Name: " +database[1][image.id].product_name+" </p> <p>Price: #"+database[1][image.id].product_selling_price+" </p>";

								htmll = htmll+"<p>Quantity: "+qua+"</p><p class='cart_item_end'>Amount: #"+(qua * database[1][image.id].product_selling_price);

								cartTotal = cartTotal + (qua * database[1][image.id].product_selling_price);

								updateCartTotal();

								$(selected).html(htmll);

								cartItemsQuantity[image.id] = qua;
						
						
					}
					else{
					alert("Amount greater than the amount we have in store!");
					location.reload();
				}

											
										}

			
			else{
				alert("No Stock to sell!");
				location.reload();
			}

	}
	else{

					alert("Invalid Amount!");
					location.reload();
				}

}


function updateCartSummary2(image,quantity){

				//makes sure quantity of deduction is entered with a "-" prefix
				var pref = parseInt(quantity);

				if(pref < 0){
				
						var qua1 = parseInt(quantity.substring(1));
	

						//makes sure that the quantity to be deducted is not greater than the quantity in cart already
						if(qua1 <= cartItemsQuantity[image.id]){

							//find its difference with the quantity enter; plus because user entered in -ve to indicate removal operation
							var qua = parseInt(quantity);
							var newQuantity = cartItemsQuantity[image.id] + qua;

						

										if(newQuantity == 0){
											$("#"+image.id).remove();
											console.log(image.id);
										}

										cartItemsQuantity[image.id] = newQuantity;

										//reduce total by the removed quantities amount
										cartTotal = cartTotal - (qua*-1*database[1][image.id].product_selling_price);
										
										//updates the database with the quantity removed for the selected item; - because quantity was entered in -ve
										database[1][image.id].product_quantity = database[1][image.id].product_quantity - qua;

										var htmll ="";

										//loop through the cartItemsQuantity to generate current cart summary
										for(var i=0;i<cartItemsQuantity.length;i++){

											//if we have a cart quantity for a product > 0; we should show it
											if(cartItemsQuantity[i] > 0){
													htmll = htmll+ "<p>Product Name: " +database[1][i].product_name+" </p> <p>Price: #"+database[1][i].product_selling_price+" </p>";


													htmll = htmll+"<p>Quantity: "+cartItemsQuantity[i]+"</p><p class='cart_item_end'>Amount: #"+(cartItemsQuantity[i] * database[1][i].product_selling_price);

											}


										}
										
										updateCartTotal();

										$(selected).html(htmll);

										}
										else{
											alert("Amount is greater than the amount we have in the cart!");
											//location.reload();
										}
							}
							else{
								//alert lack of -ve
								alert("Quantity should be entered with a '-' prefix");
							}
									
}

function updateCartTotal(){

		$(total).html("Total: #"+cartTotal);
	}



function removeItemFromCart(id){

	if($("#"+id).remove())
		return true;
}

function removeItemFromBasket(id){

	var quantity = prompt("Enter quantity you want to remove","E.g. 2");

	updateCartTotal(quantity,id);
}

function showCartSummaryAlert(){

	var htmll = "";

	//loop through all cart items and show their amount
	for(var i=0;i<cartItemsQuantity.length;i++){

			//if we have a cart quantity for a product > 0; we should show it
			if(cartItemsQuantity[i] > 0){
					htmll = htmll+ database[1][i].product_name+": " +cartItemsQuantity[i]+" = "+(cartItemsQuantity[i] * database[1][i].product_selling_price)+"\n ";

			}


		}

		htmll = htmll+" Total : "+cartTotal;

		alert(htmll);

}

