<template>
  <nav class="v-nav">
    <Wrapper>
      <div class="u-relative">
        <NavSocial class="v-nav__social" />
        <NavContent class="v-nav__content" />
        <NavControls class="v-nav__controls" />
        <NavLinks class="v-nav__links" />
      </div>
    </Wrapper>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Wrapper from '~/components/Layout/Wrapper.vue'
import NavSocial from './NavSocial.vue'
import NavContent from './NavContent.vue'
import NavControls from './NavControls.vue'
import NavLinks from './NavLinks.vue'

@Component({
  components: {
    Wrapper,
    NavSocial,
    NavContent,
    NavControls,
    NavLinks
  }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.v-nav {
  margin: spacing-unit() 0;
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
