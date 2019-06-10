<template>
  <div class="v-social-display">
    <span class="v-social-display__icon">
      <SocialIcon type="facebook" />
    </span>
    <span class="v-social-display__icon">
      <SocialIcon type="pinterest" />
    </span>
    <span class="v-social-display__icon">
      <SocialIcon type="instagram" />
    </span>
    <span class="v-social-display__icon">
      <SocialIcon type="email" />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SocialIcon from '~/components/Widgets/SocialIcon.vue'

@Component({
  components: {
    SocialIcon
  }
})
export default class SocialDisplay extends Vue {}
</script>

<style lang="scss" scoped>
.v-social-display {
  display: flex;
}

.v-social-display__icon {
  margin-top: -$inuit-global-spacing-unit-tiny;
  padding: $inuit-global-spacing-unit-tiny;
}
</style>
