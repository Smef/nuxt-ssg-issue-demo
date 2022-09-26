// https://v3.nuxtjs.org/api/configuration/nuxt.config
import axios from "axios";
import path from "path";

const getPostRoutes = async () => {

    const endpoint = 'https://jsonplaceholder.typicode.com/posts'
    const response = await axios.get(endpoint)
    let articles = response.data.slice(0, 10);

    let slugs = articles.map((each) => {
        return '/articles/' + each.id
    })

    return slugs
}

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    alias: {
        'components': path.resolve('components'),
    },
    hooks: {
        async 'nitro:config'(nitroConfig) {
            if (nitroConfig.dev) {
                return
            }
            let slugs = await getPostRoutes();
            nitroConfig.prerender.routes.push(...slugs)
            return
        }
    }
})
