# Instalación de FiveM

::: warning INFO PREVIA
Esta guía solo cubre el proceso de instalación y montaje de FiveM; no cubre la instalación y configuración del motor de base de datos (lo cual también es un paso requerido para que el servidor funcione).

Este paso es importante porque será necesario guardarlo en tu archivo de config del proyecto (caso que sea nuevo) o para poder realizar la configuración del proyecto al crear un servidor nuevo desde el txAdmin.
:::

<br>

#### `1.` Descargar la última versión del artifact
Puedes guiarte y encontrar la versión recomendada en [este sitio](https://artifacts.jgscripts.com). <br>
(Los enlaces de `Latest Recommended` y `Latest Optional` no funcionan correctamente y apuntan a versiones anteriores (ya obsoletas).

#### `2.` Extraer los recursos del archivo comprimido
Vamos a la ubicación donde tendremos nuestro proyecto, en mi caso (por comodidad y orden), opté por crear una partición de disco exclusiva para FiveM y para descomprimir los recursos en una carpeta llamada `server`, quedando así todos los recursos para su funcionamiento dentro de este. (descomprimir dentro de una carpeta todo es práctico para cuando tengas que actualizar el artifact de tu servidor de FiveM, ya que será mas ordenado todo).

#### `3.` Crear una carpeta donde subir todos los recursos de tu servidor
Creamos la carpeta donde guardaremos todos los recursos, en mi caso lo llamé `server_data`. Quedando la estructura como:
```
├─ server/
│  └─ * (todos los recursos del artifact)
└─ server_data
```

#### `4.` Crear el servicio para FiveM (en caso de hostear varios servidores en el equipo, recuerda usar nombres distintos)
Debemos acceder al ejecutable del servidor que está disponible en la carpeta server y ejecutarlo una sola vez.
```shell
K:/server/FXServer.exe
```
Una vez inicialice, se abrirá una nueva ventana del navegador para acceder al txAdmin, donde debemos seguir todos los pasos para crear una instalación nueva (de cero) de un servidor o si queremos utilizar los recursos que ya tengamos _(que deberás subirlo previamente a la carpeta `server_data`)_.

#### `5.` Iniciar servidor FiveM (a futuro)
Una vez realizado todo el proceso del punto `4`, encontraremos que en nuestro lugar de instalación (fuera de la carpeta `server`) que se ha creado automáticamente un archivo bash (en este caso `start_8216_default.bat` _ya que en el momento de instalación utilicé el artifact 8216_).