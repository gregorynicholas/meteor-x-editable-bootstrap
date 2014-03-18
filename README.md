meteor-x-editable
-----------------

smart package x-editable in-place editor bootstrap plugin meteor.js package


* meteor.js (0.7.0.1): https://github.com/meteor/meteor
* bootstrap.js (3.0): getbootstrap.com/javascript/
* x-editiable (1.5.1 2013-11-04): http://vitalets.github.io/x-editable/


textarea example
----------------

#### template

    <p id="textArea" class="editable" data-type="textarea" data-placeholder="Enter text" data-emptytext="Click to enter text" data-rows="4">{{textArea}}</p>


#### rendered callback

    $(template.find('#textArea.editable:not(.editable-click)')).editable('destroy').editable({
      success: function(response, newValue) {
        <do something with newValue - usually a collection.update call>
    }});


**note** the `:not(..)` selector + the `destroy` method call prevent multiple
instances of editable controls while allowing the control to remain reactive.
one could use the `{{#constant}}<editable>{{/constant}}` wrapper pattern to
allow for a single editable initialization
