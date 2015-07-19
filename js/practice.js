var MainView = Backbone.View.extend({
	el: '.main',
	initialize: function () {
		console.log('I work')
		this.render()
	},

	render: function () {
		this.$el.html('I work')
	},
})

console.log('this works?')