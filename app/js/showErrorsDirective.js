angular.module('mylinkApp', []).
  directive('showErrors', function() {
    return {
      restrict: 'A',
      require:  '^form',
      link: function (scope, el, attrs, formCtrl) {
        scope.$on('show-errors-check-validity', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        });
        // find the text box element, which has the 'name' attribute
        var inputEl   = el[0].querySelector("[firstname]");
        var inputEl   = el[1].querySelector("[lastname]");
        var inputEl   = el[2].querySelector("[username]");
        var inputEl   = el[3].querySelector("[email]");
        var inputEl   = el[4].querySelector("[password]");
        // convert the native text box element to an angular element
        var inputNgEl = angular.element(inputEl);
        // get the name on the text box so we know the property to check
        // on the form controller
        var inputName = inputNgEl.attr('firstname');
        var inputName = inputNgEl.attr('lastname');
        var inputName = inputNgEl.attr('username');
        var inputName = inputNgEl.attr('email');
        var inputName = inputNgEl.attr('password');

        // only apply the has-error class after the user leaves the text box
         inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        })
      }
    }
  });