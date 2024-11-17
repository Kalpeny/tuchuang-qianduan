export default defineNuxtConfig({
    // 禁用服务端渲染
    ssr: false,

    // 开发模式的端口配置
    devServer: {
        port: 3000
    },

    // 运行时配置
    runtimeConfig: {
        public: {
            apiBase: ''
        }
    },
    nitro: {
        preset: 'cloudflare_pages',
    },

    // 应用级配置
    app: {
        head: {
            title: '老王图床',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '老王图床 - 基于 Cloudflare 全家桶(Workers/Pages/D1/R2)打造的简单好用的个人图片托管解决方案' },
                { name: 'keywords', content: '图床,Cloudflare,Workers,Pages,D1,R2,图片托管,图片上传,免费图床' },
                { name: 'author', content: '优优Anuuu.com' },
                { property: 'og:title', content: '老王图床 - 简单好用的个人图片托管方案' },
                { property: 'og:description', content: '基于 Cloudflare 全家桶(Workers/Pages/D1/R2)打造的简单好用的个人图片托管解决方案' },
                { property: 'og:type', content: 'website' },
                { name: 'robots', content: 'index,follow' }
            ],
        }
    },
    css: [
        '@/assets/css/main.css'
    ],
}) 
