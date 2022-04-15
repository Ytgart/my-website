const PhotoAlbum = {
    data() {
        return {
            index: -1,
            photos: [
                {
                    title: "Водопад",
                    photo: "/images/1.jpg",
                    alt: "Водопад",
                },
                {
                    title: "Водопад 2",
                    photo: "/images/2.jpg",
                    alt: "Водопад 2",
                },
                {
                    title: "Замок",
                    photo: "/images/3.jpg",
                    alt: "Замок",
                },
                {
                    title: "Зелень",
                    photo: "/images/4.jpg",
                    alt: "Зелень",
                },
                {
                    title: "Лампа",
                    photo: "/images/5.jpg",
                    alt: "Лампа",
                },
                {
                    title: "Лампа 2",
                    photo: "/images/6.jpg",
                    alt: "Лампа 2",
                },
                {
                    title: "Зеленый фон",
                    photo: "/images/7.jpg",
                    alt: "Лампа 2",
                },
                {
                    title: "Пещера",
                    photo: "/images/8.jpg",
                    alt: "Пещера",
                },
                {
                    title: "Закат",
                    photo: "/images/9.jpg",
                    alt: "Закат",
                },
                {
                    title: "Дерево",
                    photo: "/images/10.jpg",
                    alt: "Дерево",
                },
                {
                    title: "Закат 2",
                    photo: "/images/11.jpg",
                    alt: "Закат 2",
                },
                {
                    title: "Остановка",
                    photo: "/images/12.jpg",
                    alt: "Остановка",
                },
                {
                    title: "Наушники",
                    photo: "/images/13.jpg",
                    alt: "Наушники",
                },
                {
                    title: "Гитара",
                    photo: "/images/14.jpg",
                    alt: "Гитара",
                },
                {
                    title: "Гитара 2",
                    photo: "/images/15.jpg",
                    alt: "Гитара 2",
                }
            ],
        };
    },
};

const app = Vue.createApp(PhotoAlbum);

app.component("album-item", {
  props: ["package"],
  emits: ["click"],
  template: `
        <span class="album-item" @click="$emit('click')">
            <img :src="package.photo" :alt="package.alt" :title="package.title">
        </span>
    `,
  data() {
    return {
      isOpened: false
    };
  }
});

app.component("img-popup", {
  props: ["photos", "index"],
  emits: ["close"],
  template: `
        <teleport to="body">
        <div class="img_popup">
            <img :src="photos[id].photo" :alt="photos.alt" @click="$emit('close')">
            <h2>{{photos[id].title}}</h2>
            <p>{{photos[id].comment}}</p>

            <div class="fullPhotoControlls">
                <button type="button" class="to_left" @click="previous">&#8249;</button>
                <button type="button" class="to_right" @click="next">&#8250;</button>
            </div>
        </div>
    </teleport>
    `,
  data() {
    return {
      id: this.$props.index
    };
  },
  methods: {
    previous: function () {
      if (!this.id) {
        this.id = this.$props.photos.length - 1;
      } else {
        this.id--;
      }
    },
    next: function () {
      if (this.id === this.$props.photos.length - 1) {
        this.id = 0;
      } else {
        this.id++;
      }
    }
  }
});

app.mount("#app");
