<template>
  <div class="gif">
    <sui-card>
      <sui-card-content class="content-title" name="gif-card">
        <strong class="title">{{title}}</strong>
      </sui-card-content>
      <sui-image :src="url" :alt="title" />
      <sui-card-content style="margin:10px">
        <span class="right floated">
          <sui-icon name="heart outline like" class="like" @click="likes++" />
          {{likes}}
        </span>
        <span class="left floated">
          <sui-icon name="comment" />
          {{comments}} comentários
        </span>
      </sui-card-content>
      <sui-button inverted attached="bottom" @click="open=true">
        <sui-icon name="add" />Mais informações
      </sui-button>
    </sui-card>
    <Modal :open="open" @close="closed" :item="item" />
  </div>
</template>

<script>
import Modal from "./Modal-Info";
export default {
  name: "gif-card",
  props: { item: Object },
  components: { Modal },
  data: () => ({
    likes: Math.ceil(Math.random() * 100),
    comments: Math.ceil(Math.random() * 10),
    open: false,
  }),
  methods: {
    closed() {
      this.open = !this.open;
    },
  },
  computed: {
    title: (vue) => {
      let title =
        vue.item.title == "" ? "Sem título" : vue.item.title.toUpperCase();
      return title;
    },
    id: (vue) => {
      return vue.item.id;
    },
    url: (vue) => {
      return vue.item.images.downsized_medium.url;
    },
  },
};
</script>

<style>
.gif {
  margin: 50px 30px 50px 30px;
}
.image {
  width: 100%;
  height: 300px;
}
.ui.card .image img {
  width: 100%;
  height: 100%;
}
.ui.card {
  background: black;
  border: black;
  border-radius: 10px 10px 0 0;
  -webkit-box-shadow: 0px 0px 30px 1px rgba(255, 195, 31, 0.15);
  -moz-box-shadow: 0px 0px 30px 1px rgba(255, 195, 31, 0.15);
  box-shadow: 0px 0px 30px 1px rgba(255, 195, 31, 0.15);
}
.content-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
span {
  color: whitesmoke;
}
.title {
  color: whitesmoke;
  text-align: center;
}
.like {
  cursor: pointer;
}
.like:hover {
  color: red;
}
.ui.card > :first-child,
.ui.cards > .card > :first-child {
  margin: 5px;
  height: 60px;
  width: 290px;
}
</style>