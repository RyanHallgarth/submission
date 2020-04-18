var form = new Vue({
  el: "#form",
  data: {
    name: "",
    age: "",
    email: "",
    comment: "",
    messName: "",
    messAge: "",
    messEmail: "",
    messComment: "",
    submitAlert: "",
    nameValid: false,
    ageValid: false,
    emailValid: false,
    valid: false,
    max: 250
  },

  methods: {
    validation: function () {
      if (this.nameValid && this.ageValid && this.emailValid) {
        this.valid = true;
        this.submitAlert = "Submitted";
      } else {
        this.valid = false;
        this.submitAlert = "Not Submitted";
      }
    }
  },

  watch: {
    name: function () {
      if (this.name.length < 2) {
        this.nameValid = false;
        this.messName = "Must be at least 2 characters long";
      } else {
        this.nameValid = true;
        this.messName = "";
      }
    },

    age: function () {
      if (isNaN(this.age)) {
        this.ageValid = false;
        this.messAge = "This isn't a number, Homie. Input a number";
      } else if (this.age <= 18) {
        this.ageValid = false;
        this.messAge = "Must be above the age of 18";
      } else {
        this.ageValid = true;
        this.messAge = "";
      }
    },

    email: function () {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.email)) {
        this.emailValid = false;
        this.messEmail = "E-mail currently invalid";
      } else if (re.test(this.email)) {
        this.emailValid = true;
        this.messEmail = "";
      }
    }
  }
});