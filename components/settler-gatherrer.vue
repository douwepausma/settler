<template>
		<div id='settler-gatherrer'>
      <div class="gatherrer-steps">
        <div class="step-1">
          <adddependency @dependency-submitted="addDependency">
          </adddependency>
    		  <div class="gatherrer-basket">
            <div class="basket-dependency collapseIsActive" :id="dependency.name + 'Dependency'" v-for="dependency in dependencies" :key="dependency.dependencyName">

              <!-- Info -->
              <a class="basket-dependencyName" :href="dependency.links.homepage" target="_blank">{{ dependency.name }}</a>
              <span class="basket-dependencyVersion badge badge-secondary">{{ dependency.version }}</span>
              <a :href="dependency.links.npm" target="_blank"><i class="fab fa-npm"></i></a>
              <a :href="dependency.links.repository" target="_blank"><i class="fab fa-github"></i></a>
              <span class="basket-dependencyDelete" @click="removeDependency(dependency.name)"><i class="fas fa-times"></i></span>
              <span class="basket-dependencyShowAdvanced collapsed" @click="collapseIsActive('#' + dependency.name + 'Advanced')" data-toggle="collapse" :data-target="'#' + dependency.name + 'Advanced'" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-angle-up"></i></span>

              <!-- Advanced options -->
              <div class="basket-dependencyAdvanced collapse" :id="dependency.name + 'Advanced'">
                <div class="form-group">
                  <input type="checkbox" value="1" v-model="dependency.devDependency">
                  {{ dependency }}
                </div>
                test
              </div>
            </div>
          </div>
          <img v-if="!dependencies[0]" src="/dist/images/no-packages.svg" width="300" height="auto" class="m-auto">
          <div class="gatherrer-stepper">
            <a href="#" class="btn btn-link">Pre-made dependency lists</a>
            <button class="btn btn-primary" @click="nextStep()">Next step</button>
          </div>
        </div>
        <div class="step-2">
          <form>
            <div class="form-group">
              <input class="form-control" placeholder="author name">
            </div>
          </form>
          <div class="gatherrer-stepper">
            <button class="btn btn-primary" @click="nextStep()">Step back</button>
            <button class="btn btn-primary"><i class="fas fa-download mr-2"></i>Download</button>
          </div>
        </div>
		</div>
  </div>
</template>
<script>
  import adddependency from './add-dependency.vue';

  export default {
    name: "settlergatherrer",
    data() {
      return {
        dependencies: []
     }
    },
    components: {
      adddependency
    },
    methods: {
        addDependency(dependency) {
          this.dependencies.push(dependency);
        },
        removeDependency(dependencyName) {
          var removeIndex = this.dependencies.map(function(item){return item.dependencyName;}).indexOf(dependencyName);
          this.dependencies.splice(removeIndex, 1);
        },
        nextStep() {
          $('.step-1').toggleClass('done');
          $('.settler-hills').toggleClass('slide');
        },
        collapseIsActive($dependencyElement) {
          $($dependencyElement).on("show.bs.collapse", function(){
            $($dependencyElement).parent().removeClass('collapseIsActive');
          });
          $($dependencyElement).on("hidden.bs.collapse", function(){
            $($dependencyElement).parent().addClass('collapseIsActive');
          });
        }
    }
  }
  // $('document').ready(function() {
  //   $('.basket-dependencyShowAdvanced').on('click', function() {
  //     $(this).parent().toggleClass('collapseActive');
  //   });
  // });
</script>