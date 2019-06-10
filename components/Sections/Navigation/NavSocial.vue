<template>
  <div>
    <SocialDisplay />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SocialDisplay from '~/components/Widgets/Social/SocialDisplay.vue'

@Component({
  components: {
    SocialDisplay
  }
})
export default class NavSocial extends Vue {}
</script>

<style lang="scss" scoped>
.v-nav-social {
}
</style>
