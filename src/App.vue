<template>
  <div id="app">
    <div style="width: 600px; margin: 50px auto">
      <button @click="getContent()">getContent</button>
      <button @click="$refs.editor.setHtml('<h1>123</h1><h2>123</h2>')">setContent</button>
      <button @click="$refs.editor.appendHtml('<h1>123</h1><h2>123</h2>')">appendContent</button>
      <button @click="$refs.editor.insertHtml('<ol><li>asfasfafaf</li><li>afaf</li></ol>')">insertHtml</button>
      <vueRichTextEditor :lang-type="'CN'" :canEdit="true" ref="editor" :confirmCallBack="confirmCallBack"></vueRichTextEditor>
    </div>
    <div ref="console"></div>
  </div>
</template>

<script>
export default {
  name: "app",
  data () {
    return {
    };
  },
  mounted () {
    this.$refs.editor.setHtml("<h1>123</h1><h2>123</h2><p>132</p><a href='#45'>666</a><a href='#45'>666</a>123456123456" +
      "<img src='https://wallpapers.wallhaven.cc/wallpapers/thumb/small/th-770954.jpg'>");
  },
  methods:{
    confirmCallBack (type, str) {
      return str;
    },
    getContent () {
      this.$refs.console.innerText = this.$refs.editor.getHtml();
    }
  }
};
</script>
