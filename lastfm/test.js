var baseAddress = 'http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks'

var user = '&user=' // fill in username here
var api = '&api_key=' // fill in api key here
var format = '&format=json'
var limit = '&limit=200'

var address = baseAddress + user + api + format + limit

$.get(address, function(data) {

	var tracks = data.recenttracks.track

	$('.main').append('<b>My Recently Played Tracks</b><br /><ol class="list"></ol>')

	tracks.forEach(function (track) {
		$('.list').append('<li>' + track.name + ' - ' + track.artist['#text'] + '</li>')
	})

})
