request=require('request');
const getweather=(lat,lon,callback)=>{
request({
   			url: `https://api.darksky.net/forecast/b898c0a45137bee6e43ef117bdf30a17/${lat},${lon}`,
   			json:true
   		},(error, response, body)=>{
   			if(error){console.log("error has occured")}
   				else{
   			console.log(body.currently.temperature+"F");
   		}});};
module.exports={
	getweather
}