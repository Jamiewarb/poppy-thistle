<template>
  <div class="v-social-display">
    <span class="v-social-display__icon">
      <SocialIcon
        url="https://facebook.com/"
        type="facebook"
      />
    </span>
    <span class="v-social-display__icon">
      <SocialIcon
        url="https://pinterest.com/"
        type="pinterest"
      />
    </span>
    <span class="v-social-display__icon">
      <SocialIcon
        url="https://instagram.com/"
        type="instagram"
      />
    </span>
    <span class="v-social-display__icon">
      <SocialIcon
        v-if="!!adminEmail"
        :url="`mailto:${adminEmail}`"
        type="email"
      />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SocialIcon from './SocialIcon.vue'

@Component({
  components: {
    SocialIcon
  }
})
export default class SocialDisplay extends Vue {
  adminEmail: string = process.env.adminEmail
}
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
