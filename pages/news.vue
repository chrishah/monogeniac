<template>
  <div class="flex flex-wrap-reverse">
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r"
      :class="{ '': news_toc && news_toc.length, 'lg:w-3/4': !doc.fullscreen }"
    >
      <article class="prose max-w-none lg:px-8 dark:text-gray-100 dark:prose-dark">
        <nuxt-content :document="doc" />
        <div class="float-right">
          <NextArticle />
        </div>
        <div
          v-for="article of articles.slice(this.$store.state.skip.value,this.$store.state.skip.value+4)"
          :key="article.slug"
        >
          <div>
            <nuxt-content :document="article" />
            <p>
              <small>Article from: {{ formatDate(article.createdAt) }}</small>
            </p>
          </div>
        </div>
        <div class="float-right">
          <NextArticle />
        </div>
      </article>
    </div>
    <ArticleToc :toc="news_toc.slice(this.$store.state.skip.value,this.$store.state.skip.value+2)" />
  </div>
</template>

<script>
export default {
  name: "NewsPageSlug",
  async asyncData({ $content, store, app, params, error }) {
    const slug = "news";
    let doc;
    let articles;

    try {
      doc = await $content(app.i18n.locale, slug).fetch();
    } catch (e) {
      return error({ statusCode: 404, message: "Page not found" });
    }

    try {
      articles = await $content(app.i18n.locale + "/articles")
        .sortBy("createdAt", "asc")
        //.skip(0)
        //.limit(1)
        .fetch();
    } catch (e) {
      return error({ statusCode: 404, message: "Page not found" });
    }

    const news_toc = articles.map((item) => {
      const toc = {};
      toc.id = item.toc[0].id;
      toc.depth = item.toc[0].depth;
      toc.text = item.toc[0].text;
      return toc;
    });

    const [prev, next] = await $content(app.i18n.locale)
      .only(["title", "slug"])
      .sortBy("position", "asc")
      .surround(slug, { before: 1, after: 1 })
      .fetch();

    return {
      articles,
      news_toc,
      doc,
      prev,
      next,
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  mounted() {},
  head() {
    return {
      title: this.doc.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.doc.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.doc.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.doc.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.doc.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.doc.description,
        },
      ],
    };
  },
};
</script>
