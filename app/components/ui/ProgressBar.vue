<script setup lang="ts">
const botstore = useBotStore();
const { progressPos } = storeToRefs(botstore);
</script>
<template>
  <BProgress
    style="width: 100%"
    :value="progressPos"
    :variant="progressPos > 99 ? 'success' : 'primary'"
    show-value
  />
</template>
