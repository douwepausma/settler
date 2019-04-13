<template>
  <a  href="#" class="btn btn-primary mt-3 mt-sm-0" id="download" @click="downloadProduct()" download="package.json"><i class="fas fa-download mr-2"></i>Download</a>
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
        var packageJSON = JSON.parse(JSON.stringify(this.packageJSON));
        var finalPackageJSON = jQuery.extend(true, {}, packageJSON);;
        finalPackageJSON.dependencies = {};
        finalPackageJSON.devDependencies = {};

        packageJSON.dependencies.forEach(function(dependency) {
          finalPackageJSON.dependencies[dependency.name] = dependency.version;
        });
        packageJSON.devDependencies.forEach(function(dependency) {
          finalPackageJSON.devDependencies[dependency.name] = dependency.version;
        });

        finalPackageJSON = JSON.stringify(finalPackageJSON, null, 2);
        $('#download').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(finalPackageJSON));
      }
    }
  }
</script>