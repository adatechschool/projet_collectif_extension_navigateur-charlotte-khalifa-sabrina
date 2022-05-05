function getCookies(){
    let cookies = document.cookie.split(";");
    return cookies;
  }

  getCookies(); 
  
  console.log(getCookies()); 