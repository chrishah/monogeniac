<template>
  <ul :class="socialclass">
    <li class="mr-4">
      <a
        href="https://twitter.com/monogeniac"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        name="Twitter"
        class="block hover:text-green-500 mr-2"
      >
        <IconTwitter class="w-6 h-6" />
      </a>
    </li>
    <li class="mr-4">
      <a
        href="https://github.com/chrishah/monogeniac"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        name="Github"
        class="block hover:text-green-500 mr-4"
      >
        <IconGithub class="w-6 h-6" />
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    socialclass: {
      type: String,
      required: true,
    },
  },
};
</script>
