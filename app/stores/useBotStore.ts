export default defineStore("useBotStore", () => {
  const formBotModal = ref(false);
  const selectedBot = ref<BotCrawJUD>();
  const queryBot = ref("");
  const listagemBots: Ref<BotCrawJUD[]> = ref([]);
  const queryLower = computed(() => queryBot.value.toLowerCase());
  const listagem: ComputedRef<BotCrawJUD[]> = computed(() =>
    listagemBots.value.filter(
      (item) =>
        item.display_name.toLowerCase().includes(queryLower.value) ||
        item.sistema.toLowerCase().includes(queryLower.value)
    )
  );

  const formBot = reactive<{ Xlsx: File | null; Anexos: File[] | null }>({
    Xlsx: null,
    Anexos: null,
  });

  const openFileXlsx = async (e: Event) => {
    e.preventDefault();
    const file = await fileDialog.openFileXlsx();
    if (file) {
      formBot.Xlsx = file;
    }
  };

  const openFiles = async (e: Event) => {
    e.preventDefault();
    const files = await fileDialog.openFiles();
    if (files) {
      formBot.Anexos = files;
    }
  };

  async function load() {
    try {
      const response = await api.get<BotPayload>("/bot/listagem");

      if (response.data && response.data.listagem) {
        listagemBots.value = response.data.listagem;
      }
    } catch {}
  }

  return {
    selectedBot,
    formBotModal,
    listagemBots,
    listagem,
    queryBot,
    load,
    openFileXlsx,
    openFiles,
    formBot,
  };
});
