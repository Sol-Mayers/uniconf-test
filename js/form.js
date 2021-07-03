let checkSuccess = new Vue({
  el: '#mainform',
  data: {
    userInfo: {
      name: '',
      email: '',
      text: '',
    }
  },
  methods: {
    insertNameToPopup: function() {
      console.log(this.userInfo.name);
    }
  },
});
