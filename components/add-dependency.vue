<template>
	<form @submit.prevent>
      <div class="form-group">
        <input @keyup="onSearch" v-model="searchParams.text" autocomplete="off" id="packageSearchBox" class="form-control" placeholder="Search for packages">
        <ul class="auto-complete">
  			 	<li v-for="dependencies in dependencyHits" @click="onSubmit(dependencies.package)">{{ dependencies.package.name}}</li>   
  			</ul>
      </div>
  </form>
</template>
<script>
  export default {
    name: "adddependency",
    data() {
      return {
      	dependencyHits: [],
      	searchParams: {
          text: null,
    			size: 5
        }
      }
    },
    methods: {
    	onSearch: _.debounce(function() {

    		var vm = this;

    		$.ajax({
    			dataType: 'json',
    			url: 'https://registry.npmjs.com/-/v1/search',
    			data: vm.searchParams,
    			complete: function(data) {
    				vm.loading = false;
    				vm.dependencyHits = data.responseJSON.objects;
    			}.bind(vm)
    		})
    	}, 250),

    	onSubmit(dependency) {
        dependency.devDependency = false;
		    this.$emit('dependency-submitted', dependency)
		    this.searchParams.text = null,
		    this.dependencyHits = null
    	}
    }
  }
  $('document').ready(function(){
    $('#packageSearchBox').on('blur',function(){
      setTimeout(function(){
        $('.auto-complete').addClass('d-none');
      }, 200);
    });
    $('#packageSearchBox').on('focus',function(){
      setTimeout(function(){
        $('.auto-complete').removeClass('d-none');
      }, 200);
    });
  });
</script>