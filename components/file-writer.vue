<template>
  <a  href="#" class="btn btn-primary" id="download" @click="downloadProduct()" download="package.json"><i class="fas fa-download mr-2"></i>Download</a>
</template>
<script>
  export default {
    name: "filewriter",
    props: ['packageJSON'],
    data() {
      return {
        finalPackageJSON: {
          name: this.packageJSON.name,
          version: this.packageJSON.version,
          description: this.packageJSON.description,
          dependencies: {},
          devDependencies: {},
          author: this.packageJSON.author,
          license: this.packageJSON.license
        }
      }
    },
    methods: {
      downloadProduct() {
        var packageJSON = JSON.parse(JSON.stringify(this.packageJSON));

        packageJSON.dependencies.forEach(function(dependency) {
          this.finalPackageJSON.dependencies[dependency.name] = dependency.version;
        }.bind(this));
        packageJSON.devDependencies.forEach(function(dependency) {
          this.finalPackageJSON.devDependencies[dependency.name] = dependency.version;
        }.bind(this));

        var finalPackageJSON = JSON.stringify(this.finalPackageJSON, null, 2);
        $('#download').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(finalPackageJSON));
        console.log('done');
      }
    }
  }
</script>