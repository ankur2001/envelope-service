var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();
module.exports = api;


api.get('/liveStatus', function () {	
	var Status = require('./controllers/Status');	
	var finalResponse = Status.getLiveStatus()
  return finalResponse;
});


api.get('/envStatus', function () {
	var DocusignEnv = require('./service/docusignAPICall');
	var finalResponse = DocusignEnv.envStatus();
	 return finalResponse.then(function(res){
		  console.log("response in app")
		  console.log("response in app.1",res)
		  console.log("response in app.1.1",res.data)
		  return res;		  
	  }).catch(function(err){
		  console.log("error in app")
		  console.log("error in app.1",err)
		  return err;
	  })
});


api.post('/senEnv', function () {
	var DocusignEnv = require('./service/docusignAPICall');
	var finalResponse = DocusignEnv.sendEnv();
	 return finalResponse.then(function(res){
		  console.log("response in app")
		  console.log("response in app.2",res)
		  console.log("response in app.2.2",res.data)
		  return res;		  
	  }).catch(function(err){
		  console.log("error in app")
		  console.log("error in app.2",err)
		  return err;
	  })
});
