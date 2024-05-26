var globalDynamic = {}; // Stores all key value pair

var root = document.body; // default root is document.body

// Bind all value of key value pair to element tagged with d-data attribute
function updateGlobalDynamic(){
    if(root){
        root.querySelectorAll("[d-data]")
        .forEach(tag =>{
            var elementValue = tag.getAttribute("d-data");

            // Set both text and value to be the value of key value pair
            tag.textContent = globalDynamic[elementValue];
            tag.value = globalDynamic[elementValue];
        });
    }
    else{
        console.error("root has not been defined correctly...");
    }
}

var Dynamic = {

    // Define a custom root
    root: function(newRoot){
        if(newRoot){
            root = document.querySelector(newRoot);
        }
        else{
            console.error("custom root has not been defined correctly...");
        }
    },

    store: function(storeKey){
        return{
            of: function(storeValue){

                // Set a key value pair and save it in globalDynamic object
                globalDynamic[storeKey] = storeValue;
                updateGlobalDynamic(); // Call update to cause DOM manipulate
                return{
                    value: storeValue,
                    update: function(newValue){
                        globalDynamic[storeKey] = newValue; // Update the key value pair
                        this.value = newValue; // Update the current value
                        updateGlobalDynamic();
                    }
                }
            }
        }
    },
};