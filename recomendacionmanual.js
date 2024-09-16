// Lista de ciudades con clima y ubicación específica Manual

function recomendacionmanual() {
  var clima = {
    "Bogota": "frio", 
    "Monteria": "calido", 
    "Medellin": "templado"
  };

  var ubicacion = {
    "Guajira": "norte", 
    "Leticia": "sur", 
    "Santander": "este", 
    "Antioquia": "oeste"
  };

  var turismo = {
    "Santa Marta": "mar", 
    "Villavicencio": "llano", 
    "Riohacha": "desierto", 
    "Quindio": "valle"
  };

  switch("clima") {
    case "clima":
      console.log(Object.keys(clima).find(key => clima[key] === "frio"));
      break;
    case "ubicacion":
      console.log(Object.keys(ubicacion).find(key => ubicacion[key] === "norte"));
      break;
    case "turismo":
      console.log(Object.keys(turismo).find(key => turismo[key] === "valle"));
    break;
  }
}

recomendacionmanual();
