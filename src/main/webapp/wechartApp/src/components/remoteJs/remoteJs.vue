
<template>
  
</template>

<script type="text/ecmascript-6">
// 专门用来引用外部js
  export default {
  components: {
   'remoteJs': {
    render(createElement) {
      return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
    },
    props: {
      src: { type: String, required: true },
    },
  },
  },
}
</script>