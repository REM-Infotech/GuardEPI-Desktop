<script setup lang="ts">
import { BToast } from "bootstrap-vue-next";

const useToast = toastStore();
const { showToast, toastContent } = storeToRefs(useToast);
</script>

<template>
  <div class="toast-container position-fixed p-3 top-0 end-0">
    <BToast v-model="toastContent.timeout">
      <template #title>
        {{ toastContent.title }}
      </template>
      <template #default>
        {{ toastContent.body }}
      </template>
    </BToast>
  </div>
</template>

<style lang="css" scoped>
.toast-app {
  position: fixed;
}
</style>
