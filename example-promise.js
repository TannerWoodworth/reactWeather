function getTempCallback (location, callback) {
	callback(undefined, 78);
	callback('City not found!');
}

getTempCallback('Pittsburgh', function(error, temp) {
	if (error) {
		console.error(error)
	} else {
		console.log('Success!', temp)
	}
});

function getTempPromise(location) {
	return new Promise(function(resolve, reject) {
		resolve(100);
		reject('City Not Found!');
	});
}

getTempPromise('Pittsburgh').then(function(temp) {
	console.log('Promise success!', temp)
}, function(error) {
	console.error('Err', error)
})