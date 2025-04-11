
const handlerBarsContext = {
    "/index.html": {
        "todo": "Add some variables here for the partials",
        "index": "index.hbs",
        "header": "header.hbs",
        "sucursal": "sucursales.hbs",
        "pastelesperso": "pastelesperso.hbs",
        "Otros": "Otros.hbs",
        "footer": "footer.hbs",
        "pasteleshelados": "pasteleshelados.hbs",
        "reseñas": "reseñas.hbs"
       
        
    },
   
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;