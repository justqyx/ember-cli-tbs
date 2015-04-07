import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    renderTemplate: function() {
      this.render('modal', { outlet: 'modal' });

      // 测试有没有 modal 这个方法，以确定 bootstrap 有没有引入
      this.$('test-modal').modal('show');
    }

  }
});
