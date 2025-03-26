# Instalación de FiveM

::: warning INFO PREVIA
Esta guía solo cubre el proceso de instalación y montaje de FiveM; no cubre la instalación y configuración del motor de base de datos (lo cual también es un paso requerido para que el servidor funcione).
:::

::: tip AVISO
En el contexto de ubicación (path), esta guía se realizó de forma que el servidor esté alojado en el path `/home/fivem`
:::

<br>

#### `1.` Descargar la última versión del artifact disponible aqui utilizando wget.
```shell
wget https://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/5579-b0ef467e749bbf861edcfa89766b2c5faf8e9151/fx.tar.xz
```

> Puedes guiarte y encontrar la versión recomendada en [este sitio](https://artifacts.jgscripts.com)
> (Los enlaces de `Latest Recommended` y `Latest Optional` no funcionan correctamente y apuntan a versiones anteriores (ya obsoletas)

#### `2.` Extraer los recursos del archivo comprimido
```shell
tar -xvf fx.tar.xz
```

#### `3.` Crear una carpeta donde subir todos los recursos de tu servidor
```shell
mkdir server_data
```

#### `4.` Crear el servicio para FiveM (en caso de hostear varios servidores en el equipo, recuerda usar nombres distintos)
```shell
sudo nano /lib/systemd/system/fivem.service
```

#### `5.` Pegar el siguiente contenido (recuerda cambiar el path en ExecStart y la descripción)
```yaml
[Unit]
Description=FiveM server

[Service]
Type=forking
User=root
ExecStart=/home/fivem/fivem_start.sh

[Install]
WantedBy=multi-user.target
```
#### `6.` Crear el SH para iniciar el servidor de FiveM
```shell
nano /home/fivem/fivem_start.sh
```

#### `7.` Pegar el siguiente contenido (recuerda cambiar el path en ExecStart y la descripción)
```shell
#!/bin/bash
screen -dm bash -c "cd /home/fivem/server_data && bash /home/fivem/run.sh"
```

#### `8.` Modificar los permisos del archivo fivem_start.sh
```shell
chmod +x /home/fivem/fivem_start.sh
```

#### `9.` Recargar lista de servicios en el daemon
```shell
systemctl daemon-reload
```

#### `10.` Iniciar el servicio creado
```shell
systemctl start fivem
```

#### `11.` Habilitar el servicio creado para que se ejecute al iniciar el host
```shell
systemctl enable fivem
```