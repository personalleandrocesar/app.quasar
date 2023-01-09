<template>
        <p>{{ $route.params.username }}</p>

    <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App'
})
</script>
