
export const getUserByName = (users, name="") => {
  console.log('*** ',users);
  console.log('-----  ',name);
  name = name.toLowerCase().trim()

  if( name.length == 0) return users

  // return users.filter( user => user.name.toLocaleLowerCase().includes(name))
  return users.filter(o =>
    Object.keys(o).some(k => o[k].toLowerCase().includes(name.toLowerCase())));
}
