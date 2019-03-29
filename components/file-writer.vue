<template>
  <a  href="#" class="btn btn-primary" id="download" @click="downloadProduct()" download="package.json"><i class="fas fa-download mr-2"></i>Download</a>
</template>
<script>
  export default {
    name: "filewriter",
    props: ['packageJSON'],
    data() {
      return {
      }
    },
    methods: {
      downloadProduct() {
        var $packageJSON = JSON.stringify(this.packageJSON, null, 2);
        $('#download').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent($packageJSON));
      }
    }
  }
</script>