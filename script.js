
function loadoven() {
    
  let tmold=Number(prompt("el molde tiene 4 cavidades o 5?"));
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

// Recibo por parámetro el array
function productListByHTML(productos) {
  // contenedor asignado
  let contenedor = document.getElementById("mold");

  // Recorremos el array y por cada item para el option
  for (const producto of productos) {
    // contenedor individual
    let option = document.createElement("option");

    option.innerHTML = `<option value=${produto.mold}>${prodcuto.name}</option>`;

    //agregamos al contenedor  desde el HTML
    contenedor.appendChild(option);
  }
}
