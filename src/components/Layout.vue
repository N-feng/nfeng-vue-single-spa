<template>
  <nav>
    <a-layout id="components-layout-demo-custom-trigger" style="height: 100vh">
      <a-layout-sider :collapsed="collapsed" style="background: #fff">
        <Menu :routes="routes" />
      </a-layout-sider>
    </a-layout>
  </nav>
</template>
<script>
  import Menu from './Menu.vue';
  export default {
    components: { Menu },
    data() {
      return {
        collapsed: false,
        routes: JSON.parse(localStorage.getItem("router")) || []
      };
    },
    created() {
      window.myBus &&
        window.myBus.on("setCollapsed", ({ detail }) => {
          this.collapsed = detail;
        });
    }
  };
</script>
<style scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  /* css var comes from the styleguide */
  width: var(--navbar-width);
  background-color: white;
  transition: left 0.2s ease-in-out;
  box-shadow: 0.2rem 0 0.2rem var(--light-gray);
  z-index: 1000;
}
</style>
