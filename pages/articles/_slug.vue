<template>
  <div class="flex flex-wrap-reverse">
    <div
      class="w-full py-4 lg:pt-8 lg:pb-4 dark:border-gray-800 lg:border-l lg:border-r"
      :class="{ '': article.toc && article.toc.length, 'lg:w-3/4': !article.fullscreen }"
    >
      <article
        class="prose max-w-none lg:px-8 dark:text-gray-100 dark:prose-dark"
      >
        <nuxt-content :document="article" />
      </article>
    </div>
        <ArticleToc v-if="article.toc && article.toc.length" :toc="article.toc" />
  </div>
</template>

<script>
export default {
  name: "NewsSlug",

  async asyncData({ $content, store, app, params, error }) {
    const slug = params.slug || "index";

    let article;
    let news_folder = app.i18n.locale + "/articles";
    try {
      article = await $content(news_folder, slug).fetch();
    } catch (e) {
      return error({ statusCode: 404, message: "Page not found" });
    }

    const [prev, next] = await $content(app.i18n.locale)
      .only(["title", "slug"])
      .sortBy("position", "asc")
      .surround(slug, { before: 1, after: 1 })
      .fetch();

    return {
      article,
      prev,
      next,
    };
  },
  mounted() {
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
