<script setup lang="ts">
import CrawJUD2 from "@/assets/img/crawjud2.ico";

defineProps({
  width: {
    type: Number,
    default: 40,
    required: false,
  },
  height: {
    type: Number,
    default: 40,
    required: false,
  },
});
</script>

<template>
  <img :src="CrawJUD2" alt="" :width="width" :height="height" />
</template>
