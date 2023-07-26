
export const getProductsFiltered = (products, name="") => {
  console.log('*** ',products);
  console.log('-----  ',name);
  name = name.toLowerCase().trim()

  if( name.length == 0) return products

  // return products.filter( user => user.name.toLocaleLowerCase().includes(name))
  return products.filter(o =>
    Object.keys(o).some(k => o[k].toLowerCase().includes(name.toLowerCase())));
}
