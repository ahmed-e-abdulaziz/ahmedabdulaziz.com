<template functional>
  <div :class="`spinner-wrapper spinner-position-${props.position}`">
    <div class="spinner spinner5"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    position: { type: String, default: 'relative' }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}

// SPINNERS STYLES
.spinner {
  // Common styles
  width: 14rem;
  height: 0.5rem;
  // Individual styles
  &.spinner5 {
    overflow: hidden;
    position: relative;
    height: 0.5rem;
    background: rgba($white, 0.25);
    &::before {
      content: '';
      position: absolute;
      left: -130%;
      width: 100%;
      height: 100%;
      background: rgba($black, 0.3);
      animation: spinner 0.5s linear infinite;
    }
  }
}

// ANIMATIONS
@keyframes spinner {
  0% {
    left: -130%;
    background: rgba($black, 0.3);
  }
  100% {
    left: 130%;
    background: rgba($black, 0.3);
  }
}

.spinner-wrapper {
  width: 14rem;
  height: 0.5rem;
}
.spinner-position-absolute {
  width: 0;
  height: 0;
  .spinner {
    position: absolute;
    left: calc(50%);
    top: calc(50%);
    transform: translate(-50%, -50%);
  }
}
</style>
