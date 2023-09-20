/*Use forEach to console log each name to the console. You are allowed to call console.log seven times.
*Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you 
are only allowed to call console.log seven times.
*Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
*Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 7, 7]
*Using toSorted to sort all provinces alphabetically.
*Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of
 provinces left. The final value should be 3
*Create a boolean array by using map and some to determine whether a name contains an S character. The result should
 be [true, true, false, true, true, false]
*Using only reduce, turn the above into an object that indicates the province of an individual. In other words: */


const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Use forEach to console log each name to the console.
names.forEach(function (names) {
  console.log(names);
});



// Use forEach to console log each name with a matching province.
names.forEach(function(names, index){
  console.log(`${names} (${provinces[index]})`);
});



// Using map, loop over all province names and turn the string to all uppercase.
const uppercaseProvinces = provinces.map(function(province){
    return province.toUpperCase();
});

console.log(uppercaseProvinces);



// Create a new array with map that has the amount of characters in each name.
const nameLengths = names.map(function(name) {
    return name.length;
});
console.log(nameLengths);




// Using sort to sort all provinces alphabetically.
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);



// Use filter to remove all provinces that have the word 'Cape' in them.
const filteredProvinces = provinces.filter(function (province) {
   return province.includes('Cape');
});

console.log(filteredProvinces.length);




// Create a boolean array by using map and some to determine whether a name contains an 'S' character.
const hasSCharacter = names.map(function(name) {
    return name.split('').some(function(char) {
      return char === 'S';
    });
  });
console.log(hasSCharacter);




// Using only reduce, turn the above into an object that indicates the province of an individual.
const nameToProvince = names.reduce(function(result, name, index){
  result[name] = provinces[index];
  return result;
}, {});
console.log(nameToProvince);




// Additional exercises:
const products = [
    { product: 'banana', price: "2" },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: "8" },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
  // Task 1: Use forEach to console.log each product name
  products.forEach(function(item){
    console.log(item.product);
  });
  



  // Task 2: Use filter to filter out products with names longer than 5 characters
  const filteredProducts = products.filter(function(item) {
    return item.product.length <= 5;
  });
  
  console.log(filteredProducts);



  
  // Task 3: Use filter and map to convert prices to numbers and remove products with no prices, then use reduce to calculate the combined price
 const validProducts = products
  .filter(function(product) {
    return product.price !== '' && !isNaN(Number(product.price));
  })
  .map(function(product) {
    return { ...product, price: Number(product.price) };
  });

const totalPrice = validProducts.reduce((acc, product) => acc + product.price, 0);
console.log('Total Price:', totalPrice);


  
  // Task 4: Use reduce to concatenate all product names
  const concatenatedNames = products.reduce((acc, curr, index) => {
    if (index === products.length - 1) {
      return acc + ' and ' + curr.product;
    } else {
      return acc + curr.product + ', ';
    }
  }, '');
  
  console.log(concatenatedNames);



  
  // Task 5: Use reduce to calculate the highest and lowest-priced items
  const priceStats = products.reduce( function
    (acc, curr) {
      const price = parseFloat(curr.price);
      if (price > acc.highest) {
        acc.highest = price;
        acc.highestName = curr.product;
      }
      if (price < acc.lowest) {
        acc.lowest = price;
        acc.lowestName = curr.product;
      }
      return acc;
    },
    { highest: -Infinity, highestName: '', lowest: Infinity, lowestName: '' }
  );
  
  console.log(`Highest: ${priceStats.highestName}. Lowest: ${priceStats.lowestName}`);

  
  // Task 6: Recreate the object with changed keys using Object.entries and reduce
  const recreatedProducts = products.reduce(function(acc, curr) {
    const { product, price } = curr;
    acc.push({ name: product, cost: price });
    return acc;
  }, []);
  
  console.log(recreatedProducts);
