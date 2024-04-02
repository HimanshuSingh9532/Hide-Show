let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");
let inputId = document.getElementById("input-id");
let mainId = document.getElementById("main-id");

const show = () => {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "./image/eye-open.png ";
      setTimeout(() => {
      alert("Please Hide Your Password ");
    }, 4000);
  } else {
    password.type = "password";
    eyeicon.src = "./image/eye-close.png ";
    
  }
};

//alert("hi");
