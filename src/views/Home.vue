<template>
  <div>
    <Gif v-for="item in items" v-bind="item" :key="item.id" />
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import Observer from "@/components/Observer";
import Gif from "@/components/Gif.vue";
import { getRandomGif } from "@/services";
export default {
  name: "App",
  components: { Observer, Gif },
  data: () => ({
    items: [],
  }),
  methods: {
    async intersected() {
      for (let i = 0; i < 5; i++) {
        const item = await getRandomGif();
        this.items.push({
          title: item.title == "" ? "Sem título" : item.title,
          id: item.id,
          username:
            item.username == "" ? "Usuário desconhecido" : item.username,
          url: item.image_original_url,
          avatarUser: item.user
            ? item.user.avatar_url
            : "../assets/no_image.png",
        });
      }
      console.log(this.items);
    },
  },
};
</script>

<style>
</style>