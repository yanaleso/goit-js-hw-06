const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerRef = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const itemRef = document.createElement('li');
  itemRef.textContent = ingredient;
  itemRef.classList.add('item');

  return itemRef;
});

ingredientsContainerRef.append(...elements);