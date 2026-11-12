<script setup>
import { onMounted } from "vue";
import Home from "./pages/Home.vue";
import Login from "./pages/Login.vue";
import { user } from "./stores/user.js";

const isLoginPage = window.location.pathname === "/login";

onMounted(() => {
  user.init();
});
</script>

<template>
  <div>
    <nav>
      <a href="/">Idea tracker</a>
      <div>
        <template v-if="user.current">
          <span>{{ user.current.email }}</span>
          <button type="button" @click="user.logout()">Logout</button>
        </template>
        <a v-else href="/login">Login</a>
      </div>
    </nav>
    <main>
      <Login v-if="isLoginPage" />
      <Home v-else />
    </main>
  </div>
</template>
