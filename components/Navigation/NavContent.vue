<template>
  <div class="v-nav-content">
    <NavLogo class="v-nav-content__logo" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavLogo from './NavLogo.vue'

@Component({
  components: {
    NavLogo
  }
})
export default class NavContent extends Vue {}
</script>

<style lang="scss" scoped>
.v-nav-content {
  display: flex;
  justify-content: center;
  padding: spacing-unit('large') 0 spacing-unit();
}
</style>
