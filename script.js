
Dynamic.root("#root"); // Set the default mount point as root

//                  store a key of "count" and value of 0
var count = Dynamic.store("count").of(0);
console.log(count);

document.querySelector("#addButton")
    .addEventListener("click", function(){
        // console.log("Update count...");
        count.update(
            count.value = count.value +1
        );
    }
);