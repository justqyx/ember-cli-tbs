var path = require('path');

module.exports = {
  name: 'ember-cli-tbs',

  included: function(app) {
    this._super.included(app);

    var emberCLIVersion = app.project.emberCLIVersion();
    if (emberCLIVersion < '0.2.2') {
      throw new Error('ember-cli-tbs requires ember-cli version 0.2.2 or greater.\n');
    }

    var options       = app.options['ember-cli-tbs'] || {};
    var bootstrapPath = app.bowerDirectory + '/bootstrap/dist';

    // Import css files
    app.import(path.join(bootstrapPath, 'css/bootstrap.css'));
    app.import(path.join(bootstrapPath, 'css/bootstrap.css.map'), { destDir: 'assets' });

    // Import javascript files
    app.import(path.join(bootstrapPath, 'js/bootstrap.js'));

    // Import fonts files
    if (options.importBootstrapFont != false) {
      app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.eot'), { destDir: '/fonts' });
      app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.svg'), { destDir: '/fonts' });
      app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.ttf'), { destDir: '/fonts' });
      app.import(path.join(bootstrapPath, 'fonts/glyphicons-halflings-regular.woff'), { destDir: '/fonts' });
    }

    // import Bootstrap module
    app.import(path.join('vendor/ember-cli-tbs/shim.js'), {
      type: 'vendor',
      exports: { 'bootstrap': ['default'] }
    });

  }
};
