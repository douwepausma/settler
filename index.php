<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/css/master.css" rel="stylesheet">
    <link href="/favicon.svg" rel="shortcut icon">
  </head>
  <body id="page">
    <div id="settler" class="full-page">
      <div class="settler-hills"></div>
        <div class="container-big">
          <div class="row">
            <div class="col-md-6 page-title">
              <h1 class="display-3">all you need to get settled.</h1>
              <p>
                settler will help you gather every dependency you need to settle your new place on the internet.
              </p>
              <a href="#settler-about" class="btn btn-outline smooth-scroll">Learn more</a>
            </div>
            <div class="col-md-6 pb-3 pb-md-0">
              <settlergatherrer></settlergatherrer> 
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="settler-about" class="full-page d-flex">
      <div class="container">
        <div class="row h-100 align-items-center justify-content-center">
          <div class="col-md-6 my-5 text-center">
            <img width="80%" height="auto" src="/dist/images/astronaut.svg">
          </div>
          <div class="col-md-5 mb-5">
            <h2>about settler</h2>
            <div class="hr-custom"></div>
            <p>
              settler is an online package.json builder for now, in the future I hope to be adding other functionality like integrating Webpack, add scripts and more!
            </p>
            <p>
              if you come along any bugs, please notify me by making an issue on the settler Github page.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <img class="footer-image" src="/dist/images/cave.svg" width="100%" height="auto">
      <div class="container footer-content">
        <div class="row align-items-center">
          <div class="col-12 col-md-9">
            built and designed by <a href="https://github.com/douwepausma" class="text-white" target="_blank">@douwepausma</a> with Vue
          </div>
          <div class="col-12 col-md-3 text-md-right footer-links">
            <a href="https://github.com/douwepausma" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="help-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Instructions</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>1. Search for packages in the search-bar and click on one of the packages in the auto-complete to add them.</p>
            <p>2. Click on the <i class="fas fa-angle-down"></i>  icon to see more options like moving the dependency to devDependecies and always update the dependency to latest version.</p>
            <p>3. Fill in your package.json details.</p>
            <p>4. Click on "Download" to download your package.json file.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <script type="text/javascript" src="/dist/js/bundle.js"></script>
  </body>
</html>