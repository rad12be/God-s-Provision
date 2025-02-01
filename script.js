// Food lists with images (modify as needed)
const foodData = {
    "apple": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
    "chicken": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Chicken_legs.jpg" },
    "rice": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Cooked_Rice.jpg" },
    "carrot": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Carrot.jpg" },
    "banana": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
    "peanut": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Peanuts_%28Arachis_hypogaea%29.jpg" },
    "shrimp": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Raw_Shrimp_02.jpg" },
    "milk": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Milk_glass.jpg" },
    "gluten": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Gluten.jpg" },
    "strawberry": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" },
    "pizza": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg" },
};

function checkFood() {
    let food = document.getElementById("foodInput").value.trim().toLowerCase();
    let result = document.getElementById("result");
    let foodImage = document.getElementById("foodImage");

    if (!food) {
        result.textContent = "Please enter a food name.";
        result.style.color = "black";
        foodImage.style.display = "none";
        return;
    }

    if (foodData[food]) {
        let foodInfo = foodData[food];
        result.textContent = foodInfo.status === "allowed" 
            ? `Yes, you can eat ${food}.` 
            : `No, you cannot eat ${food}.`;
        result.style.color = foodInfo.status === "allowed" ? "green" : "red";

        foodImage.src = foodInfo.image;
        foodImage.style.display = "block";
    } else {
        result.textContent = `Food not found in the list.`;
        result.style.color = "orange";
        foodImage.style.display = "none";
    }
}

document.getElementById('foodInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkFood();  // Trigger the checkFood function when Enter is pressed
    }
});
