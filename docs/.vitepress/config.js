import { defineConfig } from "vitepress"

export default defineConfig({
    // Titulo
    title: "🐈 NekoDocs",

    // Descripción
    description: "Una mini wiki de recursos para servidores web y de juegos",

    // Paths
    base: "/",
        // cloudflare pages => '/'
        // github pages     => '/nombre_repo/'
        // dominio          => 'https://dominio.com/'
        // subdominio       => 'https://sub.dominio.com/'

    srcDir: "../docs",      // Donde se encuentran los archivos de la documentación
    outDir: "../dist",      // Donde estará la carpeta del proyecto exportado

    themeConfig: {
        // Logo
        logo: "/logo.svg",

        // Titulo
        siteTitle: "🐈 NekoDocs",

        // Navbar
        nav: [
            { text: "Inicio", link: "/" },
            { text: "Acerca de", link: "/acerca-de" },
            { text: "Servidores Web", link: "/web-servers/" },
            { text: "Servidores de Juegos", link: "/game-servers/" },
        ],

        // Secciones con menús propios
        sidebar: {
            "/web-servers/": [
                {
                    text: "Servidores Web",
                    items: [
                        {
                            text: "🐧 Ubuntu",
                            collapsed: true,
                            items: [
                                {
                                    text: "🎲 Misc",
                                    collapsed: true,
                                    items: [
                                        { text: "🕐 Zona Horaria", link: "/web-servers/subcategoria-1/seccion-1" },
                                        { text: "👥 Crear Usuarios", link: "/web-servers/subcategoria-1/seccion-2" },
                                    ],
                                },
                                {
                                    text: "📦 Servicios",
                                    collapsed: true,
                                    items: [
                                        {
                                            text: "🥫 Base de Datos",
                                            collapsed: true,
                                            items: [
                                                { text: "MySQL", link: "/web-servers/subcategoria-1/seccion-1" },
                                            ],
                                        },
                                        {
                                            text: "🔐 VPN",
                                            collapsed: true,
                                            items: [
                                                { text: "Tailwind", link: "/web-servers/subcategoria-1/seccion-1" },
                                                { text: "OpenVPN", link: "/web-servers/subcategoria-1/seccion-2" },
                                            ],
                                        },
                                        {
                                            text: "♻️ Proxy",
                                            collapsed: true,
                                            items: [
                                                { text: "NGINX", link: "/web-servers/subcategoria-1/seccion-1" },
                                                { text: "Caddy Server", link: "/web-servers/subcategoria-1/seccion-2" },
                                            ],
                                        },
                                        { text: "🔐 CertBot", link: "/web-servers/subcategoria-2/seccion-2" },
                                    ],
                                },
                            ],
                        },
                        {
                            text: "🪟 Windows",
                            collapsed: true,
                            items: [
                                {
                                    text: "📦 Servicios",
                                    collapsed: true,
                                    items: [
                                        {
                                            text: "🥫 Base de Datos",
                                            collapsed: true,
                                            items: [
                                                { text: "MySQL", link: "/web-servers/subcategoria-1/seccion-1" },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            text: "🟢 NodeJS",
                            collapsed: true,
                            items: [
                                { text: "💾 Instalación", link: "/web-servers/subcategoria-2/seccion-1" },
                                { text: "👮🏻‍♀️ pm2", link: "/web-servers/subcategoria-2/seccion-2" },
                            ],
                        },
                        {
                            text: "🔥 Cloudflare",
                            collapsed: true,
                            items: [
                                { text: "🔐 Certificado SSL", link: "/web-servers/cloudflare/certificados-ssl" },
                            ],
                        },
                    ],
                },
            ],
            "/game-servers/": [
                {
                    text: "Servidores de Juegos",
                    items: [
                        {
                            text: "🐧 Ubuntu",
                            collapsed: true,
                            items: [
                                { text: "FiveM", link: "/game-servers/ubuntu/fivem" },
                            ],
                        },
                        {
                            text: "🪟 Windows",
                            collapsed: true,
                            items: [
                                { text: "FiveM", link: "/game-servers/windows/fivem" },
                                { text: "Minecraft (Original)", link: "/game-servers/windows/minecraft-original" },
                                { text: "Minecraft (PaperMc)", link: "/game-servers/windows/minecraft-papermc" },
                                { text: "Project Zomboid", link: "/game-servers/windows/project-zomboid" },
                            ],
                        },
                        {
                            text: "🔥 Cloudflare",
                            collapsed: true,
                            items: [
                                { text: "DNS Minecraft", link: "/game-servers/cloudflare/dns-minecraft" },
                                { text: "DNS FiveM", link: "/game-servers/cloudflare/dns-fivem" },
                            ],
                        },
                    ],
                },
            ],
        },

        // Social links
        socialLinks: [
            { icon: "github", link: "https://github.com/imkuroneko" },
            { icon: "twitch", link: "https://twitch.tv/im_kuroneko" },
            { icon: "telegram", link: "https://t.me/imkuroneko" },
        ],

        // Footer
        footer: {
            message: "Potenciado con café ☕ y el poder de VitePress",
            copyright: "Copyright © " + new Date().getFullYear(),
        },

        // Habilitar modo claro/oscuro
        appearance: true,

        // Markdown para códigos
        markdown: {
            theme: {
                light: 'github-light',
                dark: 'github-dark'
            }
        }
    },

    // Custom head elements
    head: [
        [
            "link", { rel: "icon", href: "/favicon.png" }
        ]
    ],
})

