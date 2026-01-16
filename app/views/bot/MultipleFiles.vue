<script setup lang="ts">
const botstore = useBotStore();
const { formBot } = storeToRefs(botstore);
</script>

<template>
  <BContainer>
    <BInputGroup label="Planilha" class="mb-3">
      <BFormFile @click="botstore.openFileXlsx" v-model="formBot.Xlsx" />
    </BInputGroup>
    <BInputGroup label="Outros Arquivos" class="mb-3">
      <BFormFile
        @click="botstore.openFiles"
        v-model="formBot.Anexos"
        multiple
      />
    </BInputGroup>
  </BContainer>
</template>
