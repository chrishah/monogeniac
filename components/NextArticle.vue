<template>
  <div>
    <button v-if="this.$store.state.skip.value>0" @click="start()">Now</button>
    <button v-else disabled class="text-gray-500">Now</button>
    |
    <button v-if="this.$store.state.skip.value>0" @click="previous()">Previous</button>
    <button v-else disabled class="text-gray-500">Previous</button>
    |
    <button v-if="this.$store.state.skip.more" @click="next()">Older</button>
    <button v-else disabled class="text-gray-500">Older</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      skip: (state) => state.skip,
    }),
  },
  methods: {
    ...mapMutations({
      next: "skip/next",
      previous: "skip/previous",
      start: "skip/start",
    }),
  },
};
</script>
