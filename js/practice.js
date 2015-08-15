
var MainView = Backbone.View.extend({
	el: '.main',
	initialize: function () {
		console.log('I work')
		this.render()
	},

	render: function () {
		debugger
		this.$el.html('I work')
		return this
	},
})

console.log('this works?')

var mainViewer = new MainView()
