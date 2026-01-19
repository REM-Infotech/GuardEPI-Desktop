<script setup lang="ts">
import ExecucoesView from "@/views/execucoes/ExecucoesView.vue";
import LogsView from "@/views/execucoes/LogsView.vue";
</script>

<template>
  <BContainer class="mt-5" fluid>
    <BRow class="row-execucoes">
      <BCol class="col-execucoes" md="6" lg="6" sm="6" xl="6" xxl="6">
        <ExecucoesView />
      </BCol>
      <BCol class="col-execucoes" md="6" lg="6" sm="6" xl="6" xxl="6">
        <LogsView />
      </BCol>
    </BRow>
  </BContainer>
</template>

<style lang="css" scoped>
[app-theme="dark"] {
  --bg-header-footer-exec: var(--color-flirt-800);
  --bg-body-exec: var(--color-flirt-900);
}

[app-theme="light"] {
  --bg-header-footer-exec: var(--color-flirt-200);
  --bg-body-exec: var(--color-flirt-300);
}
.col-execucoes {
  padding: 25px;
  height: calc(100dvh - 140px);
}
</style>
