	

	var formView = Backbone.View.extend({
			tagName : 'form',
			events : {
				'submit' : 'submitFormEvent',
				//'click .cancel' : 'cancelForm'
			},
			submitFormEvent : function(evt){
				evt.preventDefault();
				alert("Hello");
			},
			render : function(){
				var tpl = $('#tpl_form').html();
				this.$el.html(_.template(tpl));
				return this;
			}
	});

	/*
	var view = new formView();	
	var property_container = document.getElementById('propertyContainer');
	property_container.appendChild(view.render().el);
	*/
