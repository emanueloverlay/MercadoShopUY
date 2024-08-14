<h1>MercadoShopUY</h1>

<p>Este proyecto es una WebApp sencilla que permite buscar productos en Mercado Libre UY y guardarlos en una base de datos local.
  Está construido con PHP, HTML, CSS, JAVASCRIPT y utiliza como gestor MYSQL, bajo una arquitectura MVC.
</p>

<h2>Requisitos</h2>
<ul>
    <li>PHP 7.x o superior</li>
    <li>MySQL 8</li>
    <li>Servidor web (Apache)</li>
    <li>Conexión a Internet (para interactuar con la API de MercadoLibre)</li>
</ul>

<h2>Instalación</h2>
<ol>
    <li>Clonar el repositorio en el servidor local:</li>
    <pre><code>git clone https://github.com/emanueloverlay/MercadoShopUY.git</code></pre>
    <li>Configurar la base de datos:</li>
    <pre><code>
      Importa el archivo MercadoShopUY.sql en tu base de datos MySQL.
      Configurar la conexión a la base de datos:
      Abrir el archivo app/core/Database.php y actualizar las credenciales de la base de datos
      (host, user, pass, db, port) con la configuración de MySQL.
    </code></pre>
</ol>

<h2>Uso</h2>
<ol>
    <li>Abrir la aplicación en un navegador.</li>
    <li>Seleccionar una categoría de productos del SELECT.</li>
    <li>Guardar los productos en la BD local haciendo clic en el botón <strong>Guardar en BD</strong>.</li>
</ol>

![imagen](https://github.com/user-attachments/assets/b5a4b040-eae0-41fb-a56a-bdc995d8156a)


<h2>Estructura del Proyecto</h2>
<ul>
    <li><code>app/controllers/productController.php</code> - Controlador de la aplicación.</li>
    <li><code>app/core/Database.php</code> - Configuración de la base de datos.</li>
    <li><code>app/models/Product.php</code> - Modelo de la aplicación.</li>
    <li><code>public/assets/</code> - Archivos CSS, JS.</li>
    <li><code>public/index.html</code> - Interfaz principal de la aplicación.</li>
    <li><code>MercadoShopUY.sql</code> - Script SQL para la creación de la BD y tabla necesaria.</li>
</ul>
