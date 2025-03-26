#### `1.` Descargar recursos por steamcmd
Descargamos SteamCMD desde [este sitio](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip) y lo extraemos en una carpeta, posteriormente lo ejecutamos para que se descarguen los recursos necesarios de este.

::: info La estructura quedaría como:
```
L:/steamcmd
  ├─ steamcmd.exe
  └─ (todos los archivos descargados por el cliente)
```
:::


#### `2.` Descarga del juego
Una vez se descarguen todos los recursos, tenemos que acceder de forma anonima a Steam abriendo `steamcmd.exe` con este comando:
```shell
login anonymous
```

Luego descargamos todos los recursos necesarios para el servidor
```shell
app_update 380870 validate
```
Y aguardamos hasta que aparezca el mensaje de `Success! App "380870" fully installed.`


#### `3.` Whitelist de puertos
Los puertos necesarios a whitelistear en el Firewall para la entrada y salida de datos son los siguientes:
- `16261` (UDP)
- `16261` (UDP)


#### `4.` Iniciador del servidor
En la carpeta del juego encontraremos 3 archivos ejecutables, según como prefieras, deberás ejecutar uno de estos...
- `StartServer32.bat` : Para iniciar el servidor (con Steam) en la versión 32 bits.
- `StartServer64.bat` : Para iniciar el servidor (con Steam) en la versión 64 bits.
- `StartServer64_nosteam.bat` : Para iniciar el servidor (sin Steam) en la versión 64 bits.

::: Info Recursos:
Según prefieras, puedes crear una copia de uno de estos archivos para así poder realizar las modificaciones que prefieras en los parámetros, cómo pueden ser:
- `-Xms` (config de límite de memoria)
- `-Xmx` (config de límite de memoria)
Como también agregar parámetros
- `-servername "Nombre del Server"`
:::


#### `5.` Iniciar el servidor
Al iniciar el servidor por primera vez, nos indicará que se creará un usuario `admin`, para el cual nos solicitará ingresemos la contraseña que deseemos. <br>
También indicará que todos los datos serán guardados en `C:/Users/tu_usuario/Zomboid/*`.