<template>
  <div class="fullscreen bg-brand-blue text-white text-center q-pa-md flex flex-center">
    <div >
      <div style="font-size: 3em">
        ERRO 404
      </div>

      <div class="text-h4" style="opacity:.6">
        Oops. Nada aqui...
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/home"
        label="Voltar"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
