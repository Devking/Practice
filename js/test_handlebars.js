var source   = $('#test-template').html()

var data = { users: [
    {
    	username: 'Devking', 
    	firstName: 'Wells', 
    	lastName: 'Santo', 
    	email: 'sometest@test.com',
    },
    {
    	username: 'test', 
    	firstName: 'Primary', 
    	lastName: 'User', 
    	email: 'primary@prime.com',
    },
]}

var template = Handlebars.compile(source)

$(document.body).html(template(data))