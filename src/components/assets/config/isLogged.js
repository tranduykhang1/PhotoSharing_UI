   let res = false;
   if (localStorage.getItem('token')) {
       res = true
   } else {
       res = false
   }
   export default res