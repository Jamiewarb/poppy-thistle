<template>
  <div>
    <Navbar />

    <main>
      <nuxt />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Navbar from '~/components/Navigation/Navbar.vue'
import Footer from '~/components/Navigation/Footer.vue'

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class DefaultLayout extends Vue {}
</script>
