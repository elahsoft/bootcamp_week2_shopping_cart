		function databaseInitializer(){
    			// Get a reference to the database service
  				var myDatabase = firebase.database();
		    	return myDatabase;
		    }


		function getAllCategories(){

				var categories = [];

		    	//get the category child
		    	var categoryObjectRef = databaseHandle.ref('product_category');

		    	var i = 0;

				categoryObjectRef.once("value", function(snap) {
		    		
		    		snap.forEach(function(childSnapshot) {
		    			
		        		categories[i] = childSnapshot.val().category_name;

		        		i = i + 1;
		   		 			});


		    			updateMenu(categories,getAllProducts);

					});


				
			}

		function getAllProducts(){

			var products = [];

			var i = 0;

					//get the category child
		    	var productObjectRef = databaseHandle.ref('bootcampshoppingcarts');

		    	console.log(1);

				productObjectRef.orderByChild("category_id").on("value", function(snapshot) {
					
					snapshot.forEach(function(childSnapshot) {
		        		products[i] = childSnapshot.val();

		        		i = i + 1;
		   		 			});
	  						console.log(products);
	  						showProducts(products);
					});
			

			}


		function getSelectedProducts(category_id){


			var products = [];

			var i = 0;

				//get the category child
		    	var productObjectRef = databaseHandle.ref('products');

				productObjectRef.orderByChild("category_id").equalTo("category_"+category_id).on("value", function(snapshot) {
					
					snapshot.forEach(function(childSnapshot) {
		        		products[i] = childSnapshot.val();
		        		i = i + 1;
		   		 			});
	  						console.log(products);
	  						showProducts(products);
					});

		}

		function authenticate(){

			var user = firebase.auth().currentUser;

			if (user) {
			  // User is signed in, allow access to index page

				return true;

			} else {
			  // No user is signed in.
			  return false;
			}
		}