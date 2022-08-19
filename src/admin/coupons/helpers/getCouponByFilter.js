// REVIEW CODE...

export const getCouponByFilter = (coupons, name="") => {
  console.log('*** ',coupons);
  name = name.toLowerCase().trim()
  console.log('-----  ',name);

  if( name.length == 0) return coupons

  // return coupons.filter( user => user.name.toLocaleLowerCase().includes(name))
  return coupons.filter(o =>
    Object.keys(o).some(k => o[k].toLowerCase().includes(name.toLowerCase())));
}
