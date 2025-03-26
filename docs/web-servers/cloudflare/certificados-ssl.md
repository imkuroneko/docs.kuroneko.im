# Generar Certificado SSL

Accedemos a nuestra cuenta de Cloudflare, seleccionamos el dominio y accedemos a la siguiente sección
> **SSL/TLS ` > ` Origin Server ` > ` Create Certificate**

![image](/web-servers/cloudflare/certificados-ssl/1.png)

`1.` Elegimos la opción de Generate private key and CSR with Cloudflare con el tipo de Private Key RSA (2048). <br>
`2.` En la lista de dominios, registramos cuales serán los dominios y/o subdominios para el cual se utilizará el certificado, el registro *.dominio.com es del tipo comodín, para que pueda ser utilizado en cualquier subdominio registrado. <br>
`3.` Por último se selecciona la validez del certificado. <br>
`4.` Hacemos click a `Create`. <br>

![image](/web-servers/cloudflare/certificados-ssl/2.png)

Una vez hecho esto obtendremos nuestro certificado de Origen (Cloudflare) `cert.pem` y la Clave Privada `cert.key`. Estos guardaremos y utilizaremos según necesitemos.

![image](/web-servers/cloudflare/certificados-ssl/3.png)