<template>
  <div class="o-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Wrapper extends Vue {}
</script>

<style lang="scss" scoped>
$inuit-wrapper-width: 1200px !default;

@if (type-of($inuit-wrapper-width) != number) {
  @error "`#{$inuit-wrapper-width}` needs to be a number.";
}

.o-wrapper {
  @include inuit-clearfix();
  padding-right: $inuit-global-spacing-unit;
  padding-left:  $inuit-global-spacing-unit;
  margin-right: auto;
  margin-left:  auto;
  max-width: $inuit-wrapper-width;
}
</style>
