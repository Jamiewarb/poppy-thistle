<template>
  <span class="v-social-icon">
    <img
      :alt="type"
      class="v-social-icon__image"
      :src="`/social/${type}.svg`"
    >
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SocialIcon extends Vue {
  @Prop({ type: String, required: true })
  type!: string
}
</script>

<style lang="scss" scoped>
.v-social-icon {
  align-items: center;
  border-radius: 50%;
  border: 1px solid color('black');
  display: flex;
  height: 30px;
  justify-content: center;
  width: 30px;
}

.v-social-icon__image {
  height: 15px;
  width: 15px;
}
</style>
