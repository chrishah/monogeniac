![ghpages](https://github.com/chrishah/monogeniac/workflows/ghpages/badge.svg)

# Project Monogeniac Info Page

Info Page for Project Monogeniac. You can find the live page under: [https://chrishah.github.io/monogeniac/](https://chrishah.github.io/monogeniac/)

## Folder Structure for Content Editing

- Content: `content/en/`
- News: `content/en/articles/`
- Images: `static/img/`
- Map Data: `assets/data/locations.json`

## Development

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000/monogeniac
yarn dev
```

Then you can start edit the [content](./content) directory.

# Test for production

```bash
yarn generate
serve dist/ # npm install -g serve
```

For detailed explanation on how things work on nuxt/vue, check out [Nuxt.js docs](https://nuxtjs.org).
