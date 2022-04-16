const categoriesRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(elem => {
    const titleRef = elem.firstElementChild;
    console.log(`Category: ${titleRef.textContent}`);
    const elementsRef = elem.lastElementChild.children;
    console.log(`Elements: ${elementsRef.length}`);
});
