window.onload = () => {

    // Referencias a los elementos del DOM necesarios
    const categorySelect = document.getElementById('category-select');
    const inputSearch = document.getElementById('search-input');
    let productListTBody = document.getElementById('product-list');


    categoryList();

    // Evento change del menú desplegable que se ejecuta cuando el usuario selecciona una categoría
    categorySelect.addEventListener('change', function () {
        const categoryId = this.value;
        loadProductList(categoryId, productListTBody);
    });

    // Evento change del input para buscar productos cuando el usuario seleccionó una categoria
    inputSearch.addEventListener('keyup', function () {
        productListTBody.innerHTML = "";
        for (let productoFiltrado of productos) {
            let title = productoFiltrado.title.toLowerCase();
            if (title.indexOf(inputSearch.value.toLowerCase()) !== -1) {
                productListTBody.innerHTML += `
                <tr>
                    <td>${productoFiltrado.title}</td>
                    <td><a href="${productoFiltrado.permalink}" target="_blank">Ver Producto</a></td>
                    <td><img src="${productoFiltrado.thumbnail}" alt="${productoFiltrado.title}" style="width: 50px;"></td>
                    <td>$${productoFiltrado.price}</td>
                    <td><button class="action-btn" onclick="saveProductBD('${productoFiltrado.id}')">Guardar en BD</button></td>
                </tr>
            `;
            }
        }
    });


}

let productos = [];


// Función para obtener la lista de categorías desde la API de MercadoLibre
async function categoryList() {
    try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLU');
        const data = await response.json();

        // Recorre las categorías obtenidas y crea un elemento <option> para cada una
        data.categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.name;
            document.getElementById('category-select').appendChild(option);
        });
    } catch (error) {
        console.error('Error al cargar las categorías:', error);
    }
}

// Función para cargar la lista de productos desde la API de MercadoLibre para una categoría específica
async function loadProductList(categoryId, productListTBody) {
    try {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLU/search?category=${categoryId}`);
        const data = await response.json();

        productListTBody.innerHTML = '';

        // Recorre los productos obtenidos y se crea una fila para cada producto en la tabla
        data.results.forEach(product => {
            const row = `
                <tr>
                    <td>${product.title}</td>
                    <td><a href="${product.permalink}" target="_blank">Ver Producto</a></td>
                    <td><img src="${product.thumbnail}" alt="${product.title}" style="width: 50px;"></td>
                    <td>$${product.price}</td>
                    <td><button class="action-btn" onclick="saveProductBD('${product.id}')">Guardar en BD</button></td>
                </tr>
            `;

            productListTBody.innerHTML += row;
            productos = data.results;
        });
    } catch (error) {
        console.error('Error al cargar las categorías:', error);
    }
}

// Función para guardar un producto específico en la BD, se envia por parametros el id del producto
async function saveProductBD(id) {
    const productInfo = await getProduct(id);
    const formData = new FormData();

    formData.append('id', productInfo.id);
    formData.append('title', productInfo.title);
    formData.append('price', productInfo.price);
    formData.append('thumbnail', productInfo.thumbnail);
    formData.append('permalink', productInfo.permalink);


    try {
        // Solicitud POST al servidor para guardar el producto en la BD
        const response = await fetch('http://localhost/MercadoShopUY/app/controllers/productController.php', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        alert(data);
    } catch (error) {
        console.error('Error al guardar el producto:', error);
    }
}

// Función para obtener la información de un producto mediante su ID desde la API de MercadoLibre
async function getProduct(id) {
    try {
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar el producto:', error);
    }
}

function searchProducts() {

}