<template>
  <div class="home">
    <sui-segment inverted vertical>
      <div class="container-images">
        <img
          class="logo-finxi"
          src="http://finxi.com.br/novo/wp-content/themes/d84067ea7e4685194da993d02d218782/images/finxi-logo.svg"
        />
        <img class="logo-star-wars" src="./../assets/logo-star-wars.png" />
      </div>
    </sui-segment>
    <sui-segment inverted vertical aligned="center">
      <div class="ui text container">
        <h1>Está pronto para matar o Lord Sith?</h1>
        <h2>Busque por temas que ele não vá aguantar e irá rachar de rir</h2>
      </div>
    </sui-segment>
    <sui-segment inverted vertical aligned="center">
      <sui-container>
        <sui-input large action left v-model="query" @keyup.enter="search()" placeholder="Buscar"></sui-input>
        <sui-button icon="search" basic color="yellow" style="margin:10px" @click="search()"></sui-button>
      </sui-container>
    </sui-segment>
    <sui-container aligned="center">
      <sui-grid :columns="3">
        <Gif v-for="item in items" :item="item" :key="item.id" />
      </sui-grid>
      <sui-segment inverted aligned="center" v-if="loading">
        <sui-icon name="spinner" loading />
      </sui-segment>
      <sui-segment inverted aligned="center" v-if="finished">
        <strong>Não há mais gifs a ser carregado, busque por outro tema e termine de matar Lord Sith de rir! 😂</strong>
      </sui-segment>
    </sui-container>
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import Observer from "@/components/Observer";
import Gif from "@/components/Gif-Card.vue";
import { getGifs } from "@/services";
export default {
  name: "Home",
  components: { Observer, Gif },
  data: () => ({
    items: [],
    query: "",
    page: 0,
    finished: false,
    loading: false,
  }),
  methods: {
    async search() {
      this.items = await getGifs(this.query, this.page);
      this.finished = false;
    },
    async intersected() {
      if (this.items.length && !this.finished) {
        this.loading = true;
        let items = await getGifs(this.query, (this.page += 12));
        items.length < 12 ? (this.finished = true) : (this.finished = false);
        this.items = [...this.items, ...items];
        this.loading = false;
      }
    },
  },
};
</script>

<style>
.container-images {
  display: flex;
  justify-content: space-around;
}
h1,
h2 {
  color: #ffc31f;
}
.logo-finxi,
.logo-star-wars {
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
}
</style>