request=require('request');
const geocodeAddress = (address, callback)=>{
	var str=encodeURIComponent(address);
   request({
   	url:'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBy0s-cviGUDDrOp5-pXWClbTDwmwDvaks&address='+str,
   	json:true
   },(error, response, body)=>{
   		
   		//console.log(JSON.stringify(body,undefined,2));
   		//console.log(JSON.stringify(error,undefined,2));
   		if(error){callback("unable to connect");}
   		else if(body.status==="ZERO_RESULTS"){callback("unable to find address");}
   		else{
   			 
   			callback(undefined, {
   				Address: body.results[0].formatted_address,
   				Latitude: body.results[0].geometry.location.lat,
   				Longitude: body.results[0].geometry.location.lng
   			})
   		
   }});   
}
module.exports={geocodeAddress};