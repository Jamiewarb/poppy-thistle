<template>
  <div>
    <nav class="navbar header has-shadow">
      Nav
    </nav>

    <section>
      <nuxt />
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {

}
</script>
