<script setup lang="ts">
import MultipleFiles from "./bot/MultipleFiles.vue";

const botstore = useBotStore();

const { formBotModal, selectedBot } = storeToRefs(botstore);

const FormSetups = {
  only_auth: MultipleFiles,
  file_auth: MultipleFiles,
  multiple_files: MultipleFiles,
  only_file: MultipleFiles,
  proc_parte: MultipleFiles,
};

const FormComponent = computed(() => {
  if (selectedBot.value) {
    return FormSetups[selectedBot.value.configuracao_form];
  }
});
</script>

<template>
  <BModal size="xl" @hide="formBotModal = false" v-model="formBotModal">
    <template #header>
      <span class="fw-bold fs-4">
        {{ selectedBot?.display_name }}
      </span>
    </template>
    <template #default>
      <BForm>
        <component :is="FormComponent" />
      </BForm>
    </template>
  </BModal>
</template>
