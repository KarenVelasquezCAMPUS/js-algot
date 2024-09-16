// Lista de ciudades con clima y ubicación específica Autonomo

function recomendacionAutonomo(caracteristica, tipo) {

  const clima = {
    "frio": "Bogota", 
    "calido": "Monteria", 
    "templado": "Medellin"
  };

  const ubicacion = {
    "norte": "Guajira", 
    "sur": "Leticia", 
    "este": "Santander", 
    "oeste": "Antioquia"
  };

  const turismo = {
    "mar": "Santa Marta", 
    "llano": "Villavicencio", 
    "desierto": "Riohacha", 
    "valle": "Quindio"
  };

  switch(tipo) {
    case "clima":
      console.log(clima[caracteristica]);
      break;
    case "ubicacion":
      console.log(ubicacion[caracteristica]);
      break;
    case "turismo":
      console.log(turismo[caracteristica]);
    break;
    default:
      console.log("No se encontró la característica");
      break;
  }
}

recomendacionAutonomo("templado", "clima");
