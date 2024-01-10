const categories = document.querySelectorAll("#categories .item");
console.log("Number of categories: " + categories.length);

categories.forEach(categorie=>{
    const title = categorie.querySelector("h2");
    const categoriesItem = categorie.querySelectorAll("ul li");
console.log("Category: " + title.textContent);
console.log("Elements: " + categoriesItem.length);
})