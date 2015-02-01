FView.registerView('Scrollview', famous.views.Scrollview);

Template.test.helpers({
  items: function () {
    var items = [
      {name: "Dom", age: 27, gender: "male"},
      {name: "Cher", age: 26, gender: "female"},
      {name: "Turtle", age: 10, gender: "female"},
      {name: "Pumpkin", age: 10, gender: "male"},
    ];
    return items;
  },
});