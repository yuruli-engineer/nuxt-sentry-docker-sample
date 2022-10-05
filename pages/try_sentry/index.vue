<template>
  <button @click="clickErrorButton">Raise error!</button>
</template>
<script>
export default {
  async asyncData({ app }) {
    throw Error("yuruli server3 error dayo!")
    // const response = await app.$axios.get('https://example.com/api/blog')
    // return {
    //   posts: response.data
    // }
  },
  mounted() {
    console.log(`this.$config.baseURL=${this.$config.baseURL}`)
    console.log(`this.$config.secretKey=${this.$config.secretKey}`)
    console.log(`process.env.BASE_URL=${process.env.BASE_URL}`)
    console.log(`process.env.SECRET_KEY=${process.env.SECRET_KEY}`)
    console.log(`process.env.NODE_ENV=${process.env.NODE_ENV}`)
  },
  methods: {
    clickErrorButton() {
      console.log('Error button clicked')
      throw Error("yuruli error dayo!")
    }
  }
}
</script>
