
const handlerBarsContext = {
    "/index.html": {
        "todo": "Add some variables here for the partials",
        "sucursal": "sucursales.hbs",
        "pastelesperso": "pastelesperso.hbs",
        "header": "header.hbs",
        "footer": "footer.hbs",
        "index": "index.hbs"
    },
   
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;