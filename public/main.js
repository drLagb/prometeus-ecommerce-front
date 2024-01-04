function printError(violations){
    return violations.map((item)=>{
        return `impacto: ${item.impact} 
        problema: ${item.id} 
        descripcion: ${item.description} 
        url de ayuda: ${item.helpUrl}
        nodos: ${item.nodes.map(nodo => nodo.html).join("\n")}`;
    }).join("\n")
}

function printIncomplete(incompletes){
    return incompletes.map((item)=>{
        return `impacto: ${item.impact} 
        problema: ${item.id} 
        descripcion: ${item.description} 
        url de ayuda: ${item.helpUrl}
        nodos: ${item.nodes.map(nodo => nodo.html).join("\n")}`;
    }).join("\n")
}

function runAxel(){
    axe
        .run()
        .then(result =>{
            console.log(result);
        })
        .catch(err => {
          console.error('Something bad happened:', err.message);
        });
}

axe
  .run()
  .then(results => {
    if (results.violations.length) {
        throw new Error(`page: ${results.url}\nincomplete: ${printIncomplete(results.incomplete)}\nviolations: ${printError(results.violations)}`);
    }
  })
  .catch(err => {
    console.error('Something bad happened:', err.message);
  });