var toggleMenu = () => {
  
  let bm = document.getElementsByClassName("burgerMenu")[0]; 
  
  if (bm.classList.contains("open")) 
  {
    bm.classList.remove("open");
  } 
  else
  {
    bm.classList.add("open");
  }
  
};
