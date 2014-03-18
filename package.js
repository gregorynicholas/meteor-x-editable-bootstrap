
Package.describe({
  summary: "x-editable bootstrap plugin meteor.js package"
});


Package.on_use(function (api) {

  // package dependencies
  // --------------------------------------------------------------------------
  api.use([
    'jquery',
    'unvael-bootstrap'
  ], 'client');


  // bootstrap x-editable core lib
  // --------------------------------------------------------------------------
  api.add_files('lib/bootstrap-editable/css/bootstrap-editable.css', 'client');
  api.add_files('lib/bootstrap-editable/js/bootstrap-editable.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/editable-plugin.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/editable-utils.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/editable-container.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/editable-form.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/editable-inline.js', 'client', {bare:true});
  // api.add_files('lib/bootstrap-editable/js/editable-popover.js', 'client', {bare:true});


  // fields + input extensions
  // --------------------------------------------------------------------------
  // base input class (required)
  api.add_files('lib/bootstrap-editable/js/inputs/abstract-input.js', 'client', {bare:true});

  // api.add_files('lib/bootstrap-editable/js/inputs/list-input.js', 'client', {bare:true});
  // api.add_files('lib/bootstrap-editable/js/inputs/list-select-input.js', 'client', {bare:true});
  // api.add_files('lib/bootstrap-editable/js/inputs/list-select2-input.js', 'client', {bare:true});
  // api.add_files('lib/bootstrap-editable/js/inputs/list-checkboxes-input.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/inputs/text-input.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/inputs/textarea-input.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/inputs/html5-inputs.js', 'client', {bare:true});

  /*
  // datepicker-bootstrap lib
  api.add_files('lib/bootstrap-editable/js/bootstrap-datepicker.js', 'client', {bare:true});
  // date + datetime fields
  api.add_files('lib/bootstrap-editable/js/inputs/date-input.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/inputs/datetime-picker-input.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/inputs/datetime-input.js', 'client', {bare:true});
  api.add_files('lib/bootstrap-editable/js/inputs/combodate-input.js', 'client', {bare:true});

  // typeahead input fields
  api.add_files('lib/bootstrap-editable/js/inputs/typeahead-input.js', 'client');
  */


  // images
  // --------------------------------------------------------------------------
  api.add_files('lib/bootstrap-editable/img/clear.png', 'client');
  api.add_files('lib/bootstrap-editable/img/loading.gif', 'client');


  // image path overrides
  api.add_files('path-override.css', 'client');

});
