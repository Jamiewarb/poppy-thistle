<template>
  <Wrapper>
    <span>Homepage content</span>
  </Wrapper>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Wrapper from '~/components/Layout/Wrapper.vue'

@Component({
  components: {
    Wrapper
  }
})
export default class HomePage extends Vue {}
</script>
