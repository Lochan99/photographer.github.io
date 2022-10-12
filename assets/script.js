VanillaTilt.init(document.querySelector(".vanilla"), {
  max: 25,
  speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".vanilla"));

const toggleNavbar = () =>{
  const navbar_links = document.getElementById("navbar-links");
  navbar_links.classList.toggle("resposive_nav")
}