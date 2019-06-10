<template>
  <nav class="v-nav">
    <Wrapper>
      <div class="u-relative">
        <NavSocial class="v-nav__social" />
        <NavContent class="v-nav__content" />
        <NavControls class="v-nav__controls" />
      </div>
    </Wrapper>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Wrapper from '~/components/Layout/Wrapper.vue'
import NavSocial from '~/components/Sections/Navigation/NavSocial.vue'
import NavContent from '~/components/Sections/Navigation/NavContent.vue'
import NavControls from '~/components/Sections/Navigation/NavControls.vue'

@Component({
  components: {
    Wrapper,
    NavSocial,
    NavContent,
    NavControls
  }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.v-nav {
  margin-top: $inuit-global-spacing-unit;
}

.v-nav__social,
.v-nav__controls {
  position: absolute;
  top: 0;
}

.v-nav__social {
  left: 0;
}

.v-nav__controls {
  right: 0;
}
</style>
