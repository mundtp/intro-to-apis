// https://congress.api.sunlightfoundation.com/legislators?apikey=1eea8e0530b342fdb324ce1eea2c59af
var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=1eea8e0530b342fdb324ce1eea2c59af')

var containerNode = document.querySelector('#container')

function handleData (data){

console.log(data)
for (var i = 0; i < data.results.length; i++){
	var divNode = document.createElement('div')
	divNode.style.width = '33.33%'
	divNode.style.border = '8px solid white'
	divNode.style.padding = '8px'

	var h1Node = document.createElement('h1')
	h1Node.textContent = data.results[i].first_name + ' ' + data.results[i].last_name

	var h2Node = document.createElement('h2')
	h2Node.textContent = data.results[i].title + ' -- ' + data.results[i].party + '-' + data.results[i].state_name

	var emailNode = document.createElement('li')
	emailNode.textContent = "email: " + data.results[i].oc_email

	var websiteNode = document.createElement('li')
	websiteNode.textContent = "website: " + data.results[i].website
		
	var facebookNode = document.createElement('li')
	facebookNode.textContent = "facebook: " + data.results[i].facebook_id

	var twitterNode = document.createElement('li')
	twitterNode.textContent = "twitter: " + data.results[i].twitter_id

	var h3Node = document.createElement('h3')
	h3Node.textContent = "Term End: " + data.results[i].term_end



	divNode.appendChild(h1Node)
  	divNode.appendChild(h2Node)
  	divNode.appendChild(emailNode)
  	divNode.appendChild(websiteNode)
  	divNode.appendChild(facebookNode)
  	divNode.appendChild(twitterNode)
  	divNode.appendChild(h3Node)
  	containerNode.appendChild(divNode)
	 
}
}



promise.then(handleData)