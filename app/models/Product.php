<?php

require_once '../core/Database.php';

// Definición de la clase Product.
class Product
{
    private $db;

    // Constructor de la clase, que crea una instancia de la clase Database
    //y se la asigna a la variable db.
    public function __construct()
    {
        $this->db = (new Database())->connect();
    }

    public function saveProduct($id, $title, $price, $thumbnail, $permalink)
    {

        // Consulta SQL para verificar si el producto ya existe en la BD.
        $query = "SELECT id FROM products WHERE id = '$id'";
        $result = $this->db->query($query);

        // Evalua si el producto ya existe (el resultado tiene 1 o más filas).
        if ($result->num_rows > 0) {

            $query = "UPDATE products SET title='$title', price='$price', thumbnail='$thumbnail', permalink='$permalink' WHERE id='$id'";

            //Si se ejecuta con éxito la consulta de actualización, retorna un mensaje confirmatorio
            // en caso contrario, se retorna el error.
            if ($this->db->query($query) === TRUE) {
                return "Producto actualizado con éxito.";
            } else {
                return "Error: " . $this->db->error;
            }

        } else {
            // Si el producto no existe, se realiza la consulta SQL de inserción de datos.
            $query = "INSERT INTO products (id, title, price, thumbnail, permalink) VALUES ('$id', '$title', '$price', '$thumbnail', '$permalink')";

            //Si se ejecuta con éxito la consulta de inserción, retorna un mensaje confirmatorio
            // en caso contrario, se retorna el error.
            if ($this->db->query($query) === TRUE) {
                return "Producto registrado con éxito.";
            } else {
                return "Error: " . $this->db->error;
            }
        }
    }
}
