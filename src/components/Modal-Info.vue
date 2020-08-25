<template >
  <div class="modal">
    <sui-modal v-model="show">
      <sui-modal-header>{{title}}</sui-modal-header>
      <sui-modal-content image>
        <sui-image wrapped size="medium" :src="url" />
        <sui-modal-description>
          <sui-header>Informações gerais</sui-header>
          <p>
            <b>Usuário:</b>
            {{username}}
          </p>
          <p>
            <b>Gif encontrado em:</b>
            <a :href="foundOn" target="_blank">{{foundOn}}</a>
          </p>
          <p>
            <b>Classificação:</b>
            {{rating}}
          </p>
          <p>
            <b>Data do carregamento:</b>
            {{uploadDate}}
          </p>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button negative @click="$emit('close')">Fechar</sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import ratingDictionary from "@/utils/rating-dictionary";
export default {
  name: "modal",
  props: {
    open: Boolean,
    item: Object,
  },

  computed: {
    show: (vue) => {
      return vue.open;
    },
    title: (vue) => {
      let title =
        vue.item.title == "" ? "Sem título" : vue.item.title.toUpperCase();
      return title;
    },
    url: (vue) => {
      return vue.item.images.downsized_medium.url;
    },
    username: (vue) => {
      return vue.item.username == ""
        ? "Usuário desconhecido"
        : vue.item.username;
    },
    foundOn: (vue) => {
      return vue.item.source_post_url;
    },
    rating: (vue) => {
      let rating = ratingDictionary[vue.item.rating.toUpperCase()];
      return rating;
    },
    uploadDate: (vue) => {
      return new Date(vue.item.import_datetime).toLocaleDateString();
    },
  },
};
</script>