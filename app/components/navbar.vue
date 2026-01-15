<script setup lang="ts">
import MaterialSymbolsCloseRounded from "~icons/material-symbols/close-rounded?width=24px&height=24px";
import MaterialSymbolsMinimizeRounded from "~icons/material-symbols/minimize-rounded?width=24px&height=24px";
import MaterialSymbolsOpenInFullRounded from "~icons/material-symbols/open-in-full-rounded?width=24px&height=24px";

const sidebar = useSidebar();
const route = useRoute();
const isLoaded = computed(() => route.name && route.name !== "/");

const minimizeApp = async () => {
  await window.windowApi.minimizeWindow();
};

const maximizeApp = async () => {
  await window.windowApi.maximizeWindow();
};

const closeApp = async () => {
  await window.windowApi.closeWindow();
};
</script>

<template>
  <div class="heading drag-window">
    <Transition name="navbar-anim">
      <BNavbar
        v-if="isLoaded"
        v-b-color-mode="'dark'"
        toggleable="lg"
        variant="primary"
      >
        <BNavbarBrand
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCrawJUD"
          aria-controls="offcanvasCrawJUD"
          class="no-drag"
        >
          NavBar
        </BNavbarBrand>
        <BNavbarNav class="no-drag ms-auto mb-2 mb-lg-0">
          <div class="d-flex gap-1">
            <BButton
              @click="minimizeApp"
              variant="outline-secondary"
              class="d-flex flex-column align-items-center"
            >
              <MaterialSymbolsMinimizeRounded class="fw-bold" />
            </BButton>
            <BButton
              @click="maximizeApp"
              variant="outline-warning"
              class="d-flex flex-column align-items-center"
            >
              <MaterialSymbolsOpenInFullRounded class="fw-bold" />
            </BButton>
            <BButton
              @click="closeApp"
              variant="outline-danger"
              class="d-flex flex-column align-items-center"
            >
              <MaterialSymbolsCloseRounded class="fw-bold" />
            </BButton>
          </div>
        </BNavbarNav>
      </BNavbar>
    </Transition>
  </div>
</template>

<style lang="css" scoped>
.heading {
  width: 100%;
}

.navbar-anim-enter-active,
.navbar-anim-leave-active {
  transition: all 0.3s ease;
}

.navbar-anim-enter-from,
.navbar-anim-leave-to {
  opacity: 0;
}
</style>
