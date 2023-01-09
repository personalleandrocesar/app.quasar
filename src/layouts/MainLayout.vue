<template>
  <q-layout view="1ff Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <img alt="Quasar logo" src="~assets/logo.svg" style="width: 70px; height: 40px;">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        
        <q-toolbar-title>
        
        </q-toolbar-title>
        <q-btn flat dense round icon="notifications" aria-label="Menu" @click="toggleLeftDrawer"  />
        <div>
          <!-- version -->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      view=" Lpr lFf"
    >
      <q-list>
        <q-item-label
          header
        >
          Links de navegação
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
      
      <q-page-scroller position="bottom">
        <q-btn fab icon="keyboard_arrow_up" color="red" />
      </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import 'quasar/dist/quasar.css'

const linksList = [
  {
    title: 'Home',
    caption: 'Seus dados',
    icon: 'home',
    link: 'home'
  },
  {
    title: 'Feed',
    caption: 'Notícias',
    icon: 'record_voice_over',
    link: 'feed'
  },
  {
    title: 'Treino',
    caption: 'Rotina, sessões',
    icon: 'fitness_center',
    link: 'treino'
  },
  {
    title: 'Avaliações',
    caption: 'Antropometria',
    icon: 'monitor_heart',
    link: '/avaliacao'
  },
  {
    title: 'Agenda',
    caption: 'Eventos',
    icon: 'date_range',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Comunidade',
    caption: 'Tribo Alma Forte',
    icon: 'groups',
    link: 'https://awesome.quasar.dev'
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
