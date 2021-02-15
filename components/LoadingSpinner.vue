<template functional>
  <div :class="`spinner-wrapper spinner-position-${props.position}`">
    <div class="spinner"></div>
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
@keyframes spinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spinner-wrapper {
  width: 50px;
  height: 50px;
}
.spinner-position-absolute {
  width: 0;
  height: 0;
  .spinner {
    position: absolute;
    left: calc(50% - 37.5px);
    top: calc(50% - 37.5px);
    transform: translate(-50%, -50%);
  }
}
.spinner {
  opacity: 0.4;
  background: $dark-invert;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: $dark 6px solid;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: spinner 1.5s infinite;
}
</style>
