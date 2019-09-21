<template>
  <div>
    <div class="headbar">
      MENU / SIDEBAR
      <a href="/">HOME</a> |
      <a href="/posts">POSTS/BLOG</a> |
      <a href="/about">ABOUT</a> |
    </div>
    <div class="container px-4 md:px-0 max-w-6xl mx-auto mt-32">
      <nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}


.headbar {
    position: fixed;
    top: 0;
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
    padding: 20px;
    border-bottom: 1px solid #000;
    font-size: 18px;
    background-color: #a2f5cb;
}
</style>
