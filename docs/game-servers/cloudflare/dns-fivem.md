# Registros DNS para Minecraft

Esto ayudará para poder utilizar un subdominio para el acceso a tu servidor.

> **Disclaimer:** Esto no protegerá al 100% de ataques e igual podrá ser fácil de obtener la dirección IP del servidor

```yaml
tipo:        CNAME
nombre:      subdominio
destino:     ip o subdominio del servidor
proxy:       ON
TTL:         auto
```
```yaml
tipo:        SRV
servicio:    _cfx._udp.subdominio
TTL:         auto
prioridad:   0
peso:        0
puerto:      30120 (o el puerto definido)
destino:     ip del servidor o proxy de acceso
```