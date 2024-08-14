<?php

require_once '../models/Product.php';

// Verifica si la solicitud es de tipo POST.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Si es POST, se crea una instancia de ProductController y se llama al método save().
    $controller = new ProductController();
    $controller->save();
} else {
    echo "Método de solicitud no válido.";
}


// Definición de la clase ProductController.
class ProductController
{
    private $model;

    // Constructor de la clase, que crea una instancia de la clase Product.
    public function __construct()
    {
        $this->model = new Product();
    }

    public function save()
    {
        // Obtiene los valores enviados por el formulario mediante POST.
        $id = $_POST['id'];
        $title = $_POST['title'];
        $price = $_POST['price'];
        $thumbnail = $_POST['thumbnail'];
        $permalink = $_POST['permalink'];

        // Llama al método saveProduct() del modelo Product para guardar o actualizar el producto.
        $result = $this->model->saveProduct($id, $title, $price, $thumbnail, $permalink);

        // Se devuelve el resultado en formato JSON.
        echo json_encode($result);
    }
}