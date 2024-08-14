<?php

class Database
{
    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $db = 'MercadoShopUY';
    private $port = 3306;
    private $mysqli;

    public function connect()
    {
        $this->mysqli = new mysqli($this->host, $this->user, $this->pass, $this->db, $this->port);
        if ($this->mysqli->connect_error) {
            die('Error de conexión: ' . $this->mysqli->connect_error);
        }

        return $this->mysqli;
    }
}
