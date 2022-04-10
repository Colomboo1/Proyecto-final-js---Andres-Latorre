// SE POPULA EL SELECT ANTES DE QUE CARGUE LA PAGINA
window.onload = () => {
  populateProducts();
};

// SE POPULA EL SELECT DINAMICAMENTE CON PRODUCTOS PROVENIENTES DEL ARRAY EN ARRAY.JS
const populateProducts = () => {
  const products = document.getElementById("productList");
  productos.forEach(producto => {
      const option = document.createElement("option");
      option.value = producto.id;
      option.innerText = producto.nombre;
      products.appendChild(option);
  });
};
const valueList = document.getElementById("productList").value;
const getElementOfList = () => {
      const nombres= productos.filter((name) =>name.id === valueList);
      console.log(nombres);
}

function loadoven() {
  
  let tmold=document.getElementById("productList").value;
  console.log("tmold ", tmold)
  let blow=Number(prompt("a cuantos golpes va la divisora?"));
  let time=Number(prompt("cuanto es el tiempo de horneo"));
  let loader= parseInt(((blow/tmold)*time)/32);
  console.log(tmold,blow,time)
  return (
      alert(loader+" Son los moldes que debe cargar")
  )   
} 

function moldcount(){
  
  let tmold=Number(prompt("el molde tiene 4 cavidades o 5?"));
  let blow=Number(prompt("a cuantos golpes va la divisora?"));
  let countmold= parseInt(blow/tmold);
  return (
      alert("deben pasar "+ countmold + " moldes por minuto")
  )    
}


function masstime(){
  let mass=Number(prompt("cuantos kilos de baja?"));
  let blow=Number(prompt("a cuantos golpes va la divisora?"));
  let product=Number(prompt("a cuanto pesa el producto?"));
  let totaldrop= parseInt(((mass*1000)/product)/blow);
  return (
      alert("son: "+ totaldrop + " minutos de IPFM")
  )
}

const resumeProducts = () => {
const nombres= productos.map((name) =>name.nombre);
console.log(nombres);
//alert(` Los productos para elegir son: \n ${nombres} `)
}
