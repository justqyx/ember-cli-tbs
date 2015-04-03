module.exports = {
  normalizeEntityName: function() {
    // allows us to run ember -g ember-cli-tbs and not blow up
    // because ember cli normally expects the format
    // ember generate <entitiyName> <blueprint>
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('bootstrap', '~3.3.4');
  }

};
