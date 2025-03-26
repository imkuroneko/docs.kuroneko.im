# Instalación de FiveM

::: warning INFO PREVIA
Este tutorial se lleva a cabo utilizando el path `K:/Minecraft` para el proyecto. <br>
_*Por lo que tendrás que realizar cambios de ser necesarios si utilizarás otro path._
<br><br>
Tu servidor deberá tener como mínimo 4Gb de RAM para que funcione correctamente, deberás asignar lo posible siempre y cuando no dejes sin recursos a los procesos necesarios del sistema operativo.
:::

<br>

#### `1.` Instalación de Java
Descarga Java desde [este sitio](https://www.oracle.com/java/technologies/downloads/#jdk22-windows) y realiza la instalación del mismo. <br>
Una vez instalado deberás reiniciar tu computadora/servidor.

#### `2.` Descarga de Minecraft
Descarga Minecraft desde [este sitio](https://www.minecraft.net/en-us/download/server) y guardalo en la carpeta deseada.

#### `3.` Extraer recursos para aceptar EULA
Ejecutaremos por primera vez el archivo `server.jar` para así extraer todos los recursos necesarios, con esto posteriormente tendremos los siguientes recursos:
```
K:/Minecraft
  ├─ libraries/
  ├─ logs/
  ├─ eula.txt
  ├─ server.jar
  └─ server.properties
```

#### `4.` Aceptación del EULA
Abriremos el archivo eula.txt y encontraremos lo siguiente:
```shell
eula=false
```
Esto tendremos que modificarlo de la siguiente forma y guardar los cambios:
```shell
eula=true
```

#### `4.` Iniciar servidor (post EULA)
Una vez aceptado el EULA en el paso anterior, ejecutamos nuevamente el archivo `server.jar` para que se descarguen todos los recursos necesarios.

#### `5.` Iniciar servidor (a futuro)
Para poder definir el máximo de recursos de nuestro servidor (4Gb de RAM) junto a otros detalles, crearemos un nuevo archivo `start.bat` en la carpeta del servidor, aquí guardaremos lo siguiente:
```bat
TITLE MinecraftServer
cls
:loop
    java -Xmx4096M -Xms4096M -jar server.jar nogui
goto :loop
pause
```

<br>

::: danger INFO
Dependiendo de la situación, deberás habilitar el acceso a tu servidor (al puerto que esté definido en `server.properties`) en el Firewall de Windows para poder acceder al mismo
:::