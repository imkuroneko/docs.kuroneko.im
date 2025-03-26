# Servidor MariaDB 

`1.` Instalar servicio
```shell
sudo apt install -y mariadb-server
```

`2.` Realizar las configuraciones necesarias
```shell
sudo mysql_secure_installation

# 1. ingresar pass actual de root: (enter)
# 2. switch a autenticación "unix_socket":  No
# 3. definir password: Yes
# 4. cargar la pass (enter) repetir pass (enter)
# 5. remover usuarios anonimos: Yes
# 6. deshabilitar logueo root: Yes
# 7. remover database prueba: Yes
# 8. recargar privilegios: Yes
```

# Crear Usuarios
`1.` Creación del usuario
```shell
CREATE USER 'new_user'@'localhost' IDENTIFIED VIA mysql_native_password;
```

`2.` Definir pass
```shell
SET PASSWORD FOR 'new_user'@'localhost' = PASSWORD('new_password');
```

`3.` Definir los privilegios según se necesite (este permitirá manipular todas las bases de datos)
```shell
GRANT ALL PRIVILEGES ON *.* TO 'new_user'@'localhost';
```

`4.` Recargar los privilegios
```shell
FLUSH PRIVILEGES;
```

---

# Importar SQL (vía terminal)
`1.` Abrir CLI de MariaDB
```shell
mariadb
```

`2.` Abrir la base de datos
```shell
USE nombre_base_de_datos;
```

`3.` Cargar archivo SQL
```shell
source /path/al/archivo.sql;
```

> **Otras opciones de gestionar serían vía software (HeidiSQL) o web (phpMyAdmin) en caso de haber configurado lo necesario para sus usos.