<template>
  <SocialDisplay />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SocialDisplay from '~/components/Social/SocialDisplay.vue'

@Component({
  components: {
    SocialDisplay
  }
})
export default class NavSocial extends Vue {}
</script>
