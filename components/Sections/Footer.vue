<template>
  <footer class="v-footer">
    <Wrapper>
      Footer
    </Wrapper>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Wrapper from '~/components/Layout/Wrapper.vue'

@Component({
  components: {
    Wrapper
  }
})
export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
.v-footer {
  background-color: blue;
}
</style>
