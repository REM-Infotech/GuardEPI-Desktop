<script setup lang="ts">
const botNs = socketio.socket("/bot");
const execucaoStore = useExecutionStore();
const execToRef = storeToRefs(execucaoStore);
const { queryExecucao, execucoes, execucao, listagemExecucoes } = execToRef;

const bodyListagem = ref<elementRef>(null as unknown as elementRef);
const hoveredExecId = ref();
const SetExec = ref(false);

botNs.emit("listagem_execucoes", (data: Execucoes) => {
  if (!data) return;
  listagemExecucoes.value = data;
});

botNs.on("connect", () => {
  botNs.emit("listagem_execucoes", (data: Execucoes) => {
    if (!data) return;
    listagemExecucoes.value = data;
  });
});

async function performSelecaoExec(e: Event, exec: Execucao) {
  e.preventDefault();
  botNs.disconnect();
  if (SetExec.value) return;
  if (execucao.value === exec) return;
  SetExec.value = true;
  execucao.value = exec;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  SetExec.value = false;
  botNs.connect();
}
</script>

<template>
  <div class="card cardListagemExecucao">
    <div class="card-header headerListagemExecucao">
      {{
        execucao.id_execucao
          ? `Execução selecionada:  ${execucao.id_execucao}`
          : "Execuções"
      }}
    </div>
    <BFormFloatingLabel
      class="mt-2 mb-2"
      label-size="md"
      label="Filtre aqui"
      for="inputFiltro"
    >
      <BFormInput
        id="inputFiltro"
        placeholder="Filtro de execução"
        v-model="queryExecucao"
      />
    </BFormFloatingLabel>
    <div class="body-listagem card-body">
      <TransitionGroup
        name="list"
        class="list-group"
        tag="div"
        :ref="
          (el) => {
            bodyListagem = el;
          }
        "
      >
        <BListGroupItem
          class="d-flex justify-content-between align-items-start"
          v-for="exec in execucoes"
          :key="exec.Id"
          :active="hoveredExecId === exec.Id"
          @mouseenter="hoveredExecId = exec.Id"
          @mouseleave="hoveredExecId = null"
          @click="async (e: Event) => performSelecaoExec(e, exec)"
          active-class="active"
        >
          <div class="ms-2 me-auto">
            <div class="fw-bold">{{ exec.id_execucao }}</div>
            {{ exec.status }}
          </div>
          <!-- <BBadge variant="primary" pill>14</BBadge> -->
        </BListGroupItem>
      </TransitionGroup>
    </div>
    <div
      class="card-footer footerListagemExecucao d-flex justify-content-between"
    ></div>
  </div>
</template>

<style lang="css" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.cardListagemExecucao {
  height: 100%;
}

.headerListagemExecucao {
  background-color: var(--bg-header-footerListagemExecucao);
}

.bodyListagemExecucao {
  background-color: var(--bg-bodyListagemExecucao) !important;
}

.footerListagemExecucao {
  background-color: var(--bg-header-footerListagemExecucao) !important;
}

.body-listagem {
  overflow: auto;
}
</style>
