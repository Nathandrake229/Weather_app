   const request = require('request');
   const yargs = require('yargs');
   const geocode=require('./geocode/geocode.js');
   const weather=require('./weather.js');
   argv= yargs.options({
   	address:{
   		describe:'get address',
   		demand:true,
   		alias:'a',
   		string:true
   	}
   })
   .help()
   .alias('help','h')
   .argv;
   //console.log(argv);
   geocode.geocodeAddress(argv.a, (errortext, res)=>{
   	if(errortext)
   		{
   			console.log(errortext);
   		}
   	else{
   		console.log(JSON.stringify(res, undefined, 2));
   		weather.getweather(res.Latitude,res.Longitude );
   	}
   	
   	
   });
   	