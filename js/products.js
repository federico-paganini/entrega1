
const URL_products = "https://japceibal.github.io/emercado-api/cats_products/";
const URL_categories = "https://japceibal.github.io/emercado-api/cats/cat.json";

async function get_categories_list(){

    const response = await fetch(URL_categories);

    if (response.ok)
    {
        var categorias = await response.json();
        return categorias;
    }
    else console.log("Hubo un eror");
}


async function get_products_por_nombre(nombre_categoria)
{
    const categorias = await get_categories_list();
    let id;
    categorias.forEach(categoria => {
        if (categoria.name === nombre_categoria)
        {
            id = categoria.id;
        }
    });
    return await get_products_por_id(id);
}


async function get_products_por_id(id)
{
    const URL = URL_products + id + ".json";
    
    const response = await fetch(URL);
    if(response.ok)
    {
        var json =  await response.json();
        return json.products;
    }
    else console.log("Hubo un error");
}


async function mostrar_products()
{
    // conseguir lo productos por nombre
    //const products = await get_products_por_nombre("Autos");

    // conseguir los productos por id 
    const products = await get_products_por_id(101);

    console.log(products);
}

mostrar_products();
