<template>
  <div class="gif">
    <h1>{{title}}---{{id}}</h1>
    <img :src="url" :alt="title" />
    <h3>{{username}}</h3>
    <img :src="avatarUser" :alt="username" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    id: String,
    username: String,
    url: String,
    avatarUser: String,
  },
};
</script>

<style>
img {
  height: 100px;
  width: 100px;
}
</style>