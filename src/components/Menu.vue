<template>
  <a-menu mode="vertical" :style="{ lineHeight: '64px', height: '100%' }">
    <template v-for="item in routes">
      <a-menu-item v-if="!item.menus.length" :key="item.menuCode">
        <div @click="handleLink(item)">
          <span>{{ item.menuName }}</span>
        </div>
      </a-menu-item>
      <SubMenu
        v-else
        :key="item.menuCode"
        :menu-info="item"
        @handleLink="handleLink"
      />
    </template>
    <a-menu-item key="vite">
      <div @click="handleLink({url: '/vite-example'})">
        <a-icon type="user" />
        <span>viteApp</span>
      </div>
    </a-menu-item>
    <a-menu-item key="login">
      <div @click="handleLink({url: '/login'})">
        <a-icon type="user" />
        <span>Login</span>
      </div>
    </a-menu-item>
  </a-menu>
</template>

<script>
import SubMenu from './SubMenu.vue'

/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export default {
  components: { SubMenu },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleLink(item) {
      const routePath = item.url;
      const target = item.target;
      if (target === "_blank") {
        if (isExternal(routePath)) window.open(routePath);
        else if (this.$route.path !== routePath) window.open(routePath);
      } else {
        if (isExternal(routePath)) window.location.href = routePath;
        else if (this.$route.path !== routePath) this.$router.push(routePath);
      }
    }
  }
};
</script>
