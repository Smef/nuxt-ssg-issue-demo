<script setup>
import {useRuntimeConfig} from "#app";
import {useAsyncData, useFetch} from "nuxt/app";

const config = useRuntimeConfig()
const route = useRoute()


const slug = route.params.slug

const endpoint = 'https://jsonplaceholder.typicode.com/posts/' + slug

/**
 * Hits the payload for client-side nav, but hits the CMS when reloading or direct navigation through entering a URL
 * Removing the `key` option resolves this
 * */
const {data: article} = await useFetch(endpoint, {
    key: route.fullPath,
})

// const {data: article} = await useAsyncData(route.fullPath, () => {
//   return  $fetch(endpoint)
// })


</script>


<template>
    <div>
        <div class="">
            <h2 class="text-4xl font-bold text-cyan-600">{{ article.title }}</h2>
            <div class="my-5">
                <div>{{article.body}}</div>
            </div>
        </div>
    </div>
</template>
