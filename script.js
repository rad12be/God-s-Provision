// Food lists with images (modify as needed)
const foodData = {
    "almond": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Almonds.png"},
    "amaranth": { status: "allowed", image: "https://theveganatlas.com/wp-content/uploads/2020/09/Amaranth-grain-sm.jpg"},
    "anredera cordifolia (madeira vine)": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Anredera_cordifolia.jpg"},
    "apricot": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Apricot-fruit.jpg" },
    "artichoke": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Artichoke.jpg" },
    "arugula": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Eruca_sativa_1.jpg" },
    "asparagus": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Asparagus-officinalis-flowers.jpg" },
    "avocado": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Avocado-sliced.jpg" },
    "avocado oil": { status: "allowed", image: "" },
    "peanut": { status: "allowed", image: "https://commons.wikimedia.org/w/index.php?curid=100537017"},
    
    "rice": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Cooked_Rice.jpg" },
    "corn": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Corn_on_the_cob.jpg" },
    "wheat": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Gluten.jpg" },
     
    "banana": { status: "allowed", image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },


    "cashew": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/CashewSnack.jpg" },
    "orange": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg" },
    "papaya": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Papaya_-_longitudinal_section.jpg/1280px-Papaya_-_longitudinal_section.jpg"},
    "strawberry": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" },
    "mangoe": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Mangos_-_single_and_halved.jpg"},
    "walnut": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/Walnuts_no_shell.jpg" },
    "pumpkin": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Connecticut_Field_cultivar_of_Cucurbita_pepo.jpg"},
    "tea": { status: "restricted", image: "https://www.earth.com/assets/_next/image/?url=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2024%2F02%2F08140346%2Fdrinking-tea_every-day_delays-aging_mint-tea_1m-1400x850.jpg&w=1200&q=75"},
    "chilis": { status: "restricted", image: "https://www.melissas.com/cdn/shop/files/2-pounds-image-of-long-hot-peppers-vegetables-36635062435884_600x600.jpg?v=1708971940" },
    "acorn squash": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Acorn_squash.jpg" },
    "apple": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
    "asparagus setaceus (lace fern)": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Asparagus_setaceus.jpg" },
    "blueberries": { status: "restricted", image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Blueberries.jpg" },    
};

function normalizeFoodName(food) {
    food = food.trim().toLowerCase();
    
    // Simple pluralization/singularization rule (not perfect)
    if (food.endsWith("s")) {
        let singular = food.slice(0, -1);
        if (foodData[singular]) return singular; // Convert plural to singular if found
    } else {
        let plural = food + "s";
        if (foodData[plural]) return plural; // Convert singular to plural if found
    }

    return food;
}

function checkFood() {
    let foodInput = document.getElementById("foodInput").value.trim().toLowerCase();
    let food = normalizeFoodName(foodInput);
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
