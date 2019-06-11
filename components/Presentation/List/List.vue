<template>
  <ul :class="classes">
    <slot />
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class List extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly bare!: boolean;
  @Prop({ type: Boolean, default: false })
  readonly inline!: boolean;

  get classes() {
    return {
      'o-list-bare': this.bare,
      'o-list-inline': this.inline
    }
  }
}
</script>

<style lang="scss" scoped>
.o-list-bare {
  list-style: none;
  margin-left: 0;
}

.o-list-bare > * {
  margin-left: 0;
}

.o-list-inline {
  margin-left: 0;
  list-style: none;
}

.o-list-inline > * {
  display: inline-block;
}
</style>
