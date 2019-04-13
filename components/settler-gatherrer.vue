<template>
		<div id='settler-gatherrer'>
      <div class="gatherrer-steps">
        <div class="step-1">
          <adddependency @dependency-submitted="addDependency">
          </adddependency>
    		  <div class="gatherrer-basket">
            <div v-if="packageJSON.dependencies[0]">
              <span class="dependencyType">dependencies</span>
              <div class="basket-dependency collapseIsActive" :id="makeSafeForCSS(dependency.name) + 'Dependency'" v-for="(dependency, key) in packageJSON.dependencies" :key="dependency.dependencyName">

                <!-- Info -->
                <a class="basket-dependencyName" :href="dependency.links.homepage" target="_blank">{{ dependency.name }}</a>
                <span class="basket-dependencyVersion badge badge-secondary">{{ dependency.version }}</span>
                <a :href="dependency.links.npm" target="_blank"><i class="fab fa-npm"></i></a>
                <a :href="dependency.links.repository" target="_blank"><i class="fab fa-github"></i></a>
                <span class="basket-dependencyDelete" @click="$delete(packageJSON.dependencies, key);"><i class="fas fa-times"></i></span>
                <span class="basket-dependencyShowAdvanced collapsed" @click="collapseIsActive('#' + makeSafeForCSS(dependency.name) + 'Advanced')" data-toggle="collapse" :data-target="'#' + makeSafeForCSS(dependency.name) + 'Advanced'" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-angle-up"></i></span>

                <!-- Advanced options -->
                <div class="basket-dependencyAdvanced collapse" :id="makeSafeForCSS(dependency.name) + 'Advanced'">
                  <div class="dependencyAdvanced-inner">
                    <div class="form-inline">
                      <div class="form-group mr-3">
                        <label>
                          <input type="checkbox" :name="dependency.name" class="mr-2" @click="switchDependecyType(key, 0)">devDependency
                        </label>
                      </div>
                      <div class="form-group mr-3">
                        <label>
                          <input type="checkbox" class="mr-2" :checked="dependency.version.endsWith('^')" @click="toggleLatestVersion('dependencies', key, dependency.version)">latest version
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="packageJSON.devDependencies[0]">
              <span class="dependencyType">dev dependencies</span>
              <div class="basket-dependency collapseIsActive" :id="packageJSON.devDependencies.name + 'Dependency'" v-for="(dependency, key) in packageJSON.devDependencies" :key="packageJSON.devDependencies.dependencyName">

                <!-- Info -->
                <a class="basket-dependencyName" :href="dependency.links.homepage" target="_blank">{{ dependency.name }}</a>
                <span class="basket-dependencyVersion badge badge-secondary">{{ dependency.version }}</span>
                <a :href="dependency.links.npm" target="_blank"><i class="fab fa-npm"></i></a>
                <a :href="dependency.links.repository" target="_blank"><i class="fab fa-github"></i></a>
                <span class="basket-dependencyDelete" @click="$delete(packageJSON.devDependencies, key);"><i class="fas fa-times"></i></span>
                <span class="basket-dependencyShowAdvanced collapsed" @click="collapseIsActive('#' + makeSafeForCSS(dependency.name) + 'Advanced')" data-toggle="collapse" :data-target="'#' + makeSafeForCSS(dependency.name) + 'Advanced'" aria-expanded="false" aria-controls="collapseExample"><i class="fas fa-angle-up"></i></span>

                <!-- Advanced options -->
                <div class="basket-dependencyAdvanced collapse" :id="makeSafeForCSS(dependency.name) + 'Advanced'">
                  <div class="dependencyAdvanced-inner">
                    <div class="form-inline">
                      <div class="form-group mr-3">
                        <label>
                          <input type="checkbox" class="mr-2" checked :name="dependency.name" checked @click="switchDependecyType(key, 1)">devDependency
                        </label>
                      </div>
                      <div class="form-group mr-3">
                        <label>
                          <input type="checkbox" class="mr-2" :checked="dependency.version.endsWith('^')" @click="toggleLatestVersion('devDependencies', key, dependency.version)">latest version
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img v-if="!packageJSON.dependencies[0] && !packageJSON.devDependencies[0]" src="/dist/images/no-packages.svg"  class="no-packages-image">
          <div class="gatherrer-stepper">
            <!-- <a href="#" class="btn btn-link">Pre-made dependency lists</a> -->
            <a href="#help-modal" class="btn btn-link px-3" data-toggle="modal"><i class="far fa-question-circle mr-1"></i>help</a>
            <button class="btn btn-primary" @click="nextStep()">Next step</button>
          </div>
        </div>
        <div class="step-2">
          <form>
            <div class="form-row">
              <div class="form-group col-8">
                <label>
                  project name
                </label>
                <input class="form-control" placeholder="AwesomeProject" v-model="packageJSON.name">
              </div>
              <div class="form-group col-4">
                <label>
                  version
                </label>
                <input class="form-control" placeholder="1.0.0" v-model="packageJSON.version">
              </div>
            </div>
            <div class="form-group">
              <label>description</label>
              <textarea class="form-control" rows="2" placeholder="about my awesome project" v-model="packageJSON.description"></textarea>
            </div>
            <div class="form-row">
              <div class="form-group col-8">
                <label>
                  author
                </label>
                <input class="form-control" placeholder="myname" v-model="packageJSON.author">
              </div>
              <div class="form-group col-4">
                <label>
                  liscence
                </label>
                <input class="form-control" placeholder="ISC" v-model="packageJSON.license">
              </div>
            </div>
          </form>
          <div class="gatherrer-stepper">
            <button class="btn btn-primary" @click="nextStep()">Step back</button>
            <filewriter :packageJSON="packageJSON"></filewriter>
          </div>
        </div>
		</div>
  </div>
</template>
<script>
  import adddependency from './add-dependency.vue';
  import filewriter from './file-writer.vue';

  export default {
    name: "settlergatherrer",
    data() {
      return {
        packageJSON: {
          name: 'projectName',
          version: '1.0.0',
          description: 'package.json generated by www.settler.dev',
          // main: 'webpack.dev.js',
          dependencies: [],
          devDependencies: [],
          // scripts: {
          //  "development": "webpack --config webpack.dev.js",
          //  "production": "webpack --config webpack.prod.js"
          //},
          author: "settler",
          license: "ISC"
        }
     }
    },
    components: {
      adddependency,
      filewriter
    },
    methods: {
        addDependency(dependency) {
          this.packageJSON.dependencies.push(dependency);
        },
        switchDependecyType(index, direction) {
          if(!direction) {
            var from = this.packageJSON.dependencies;
            var to = this.packageJSON.devDependencies;
          } else {
            var from = this.packageJSON.devDependencies;
            var to = this.packageJSON.dependencies;
          }
          
          var dependency = from[index];
          to.push(dependency);
          this.$delete(from, index);
        },
        toggleLatestVersion(dependencyType, index, version) {
          if (version.endsWith('^')) {
            version = version.replace('^', '');
            this.packageJSON[dependencyType][index].version = version;
            console.log(version);
          } else {
            version += '^';
            this.packageJSON[dependencyType][index].version = version;
            console.log(version);

          }
        },
        nextStep() {
          $('.step-1').toggleClass('done');
          $('.settler-hills').toggleClass('slide');
        },
        collapseIsActive(dependencyElement) {
          $(dependencyElement).on("show.bs.collapse", function(){
            $(dependencyElement).parent().removeClass('collapseIsActive');
          });
          $(dependencyElement).on("hidden.bs.collapse", function(){
            $(dependencyElement).parent().addClass('collapseIsActive');
          });
        },
        makeSafeForCSS(name) {
          return name.replace(/[^a-z0-9]/g, function(s) {
              var c = s.charCodeAt(0);
              if (c == 32) return '-';
              if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
              return '__' + ('000' + c.toString(16)).slice(-4);
          });
        }
    }
  }
</script>