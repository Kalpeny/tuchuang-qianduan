<template>
  <div class="layout">
    <nav class="navbar">
      <div class="container nav-container">
        <NuxtLink to="/" class="logo">
          <span class="logo-full">老王图床</span>
          <span class="logo-short">老王</span>
        </NuxtLink>

        <div class="nav-links">
          <template v-if="!user">
            <NuxtLink to="/" class="nav-link">首页</NuxtLink>
            <NuxtLink to="/login" class="nav-link">登录</NuxtLink>
          </template>
          <template v-else>
            <NuxtLink to="/upload" class="nav-link">上传图片</NuxtLink>
            <NuxtLink to="/dashboard" class="nav-link">后台管理</NuxtLink>
            <button @click="handleLogout" class="nav-link logout-btn">退出</button>
          </template>
          <ThemeToggle />
        </div>
      </div>
    </nav>

    <main class="main-content">
      <div class="container">
        <slot />
      </div>
    </main>

    <footer class="footer">
      <div class="container footer-content">
        <p class="copyright">© {{ currentYear }} 老王图床 · 简单好用的图床服务 </p>
        <p class="copyright">❤️ Made with <a href="https://laowang.co" target="_blank" rel="noopener"
            class="footer-link">Anuuu.com</a> ·
          <a href="https://anuuu.com/buling-imgbed.html" rel="noopener" class="footer-link" target="_blank">使用教程</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { getUser, logout } = useAuth()
onMounted(() => {
  getUser()
})

const user = useState('user', () => null)

// 退出登录
const handleLogout = () => {
  logout()
  navigateTo('/login')
}

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  background-color: var(--card-background);
  padding: .5rem 0;
  box-shadow: 0 2px 4px var(--shadow-color);
  border-radius: 1.4rem;
  margin: 10px auto;
  width: 95%;
  background: rgba(var(--card-background-rgb), 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.logo-short {
  display: none;
}

@media (max-width: 768px) {
  .logo-full {
    display: none;
  }
  
  .logo-short {
    display: inline;
  }
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--primary-color);
}

.logout-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--text-color);
}

.logout-btn:hover {
  color: var(--primary-color);
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

.footer {
  background-color: var(--card-background);
  padding: 1rem 0 0.1rem 0;

  margin-top: auto;
  box-shadow: 0 -2px 4px var(--shadow-color);
}

.footer-content {
  text-align: center;
}

.footer-links {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--text-color);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary-color);
}

.divider {
  margin: 0 1rem;
  color: var(--text-color);
}

.copyright {
  color: var(--text-color-light);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--primary-color);
}

.divider {
  color: var(--text-color-light);
  opacity: 0.6;
}
</style>
