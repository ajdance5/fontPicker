var myApp = angular.module('myApp', []);


myApp.controller('MyController', function MyController($scope) {



		$scope.fonts = [
		{	
			class : "muller-narrow",
			fontName: "Muller Narrow",
			1: true,
			heading: false,
			body: true,
			slab: false,
			script: false,
			serif: false,
			sanSerif: true,
			fontTypes : [
						{
						typeName : "Regular",
						typeClass: "muller-narrow"
						},
						{
						typeName : "Italic",
						typeClass : "muller-narrow-italic "
						},
						{
						typeName : "Bold",
						typeClass : "muller-narrow-bold"
						},
						{
						typeName : "Bold Italic",
						typeClass : "muller-narrow-bold-italic"
						}
					]
		},
		{
				class : "phenomenaregular",
				fontName: "Phenomena",
				1: true,
				heading: true,
				body: true,
				slab: false,
				script: false,
				serif: false,
				sanSerif: true,
				fontTypes : [
						{
						typeName : "Regular",
						typeClass: "phenomenaregular"
						},
						{
						typeName : "Thin",
						typeClass : "phenomenathin"
						},
						{
						typeName : "Extra Light",
						typeClass : "phenomenaextralight"
						},
						{
						typeName : "Light",
						typeClass : "phenomenalight"
						},
						
						{
						typeName : "Bold",
						typeClass : "phenomenabold"
						},
						{
						typeName : "Extra Bold",
						typeClass : "phenomenaextrabold"
						},
						{
						typeName : "Black",
						typeClass : "phenomenablack"
						}
					]			
		},
		{
				class : "choplinmedium-demo",
				fontName: "Choplin",
				1: true,
				heading: true,
				body: false,
				slab: true,
				script: false,
				serif: true,
				sanSerif: false,
				fontTypes : [
						{
						typeName : "Regular",
						typeClass: "choplinmedium-demo"
						},
						{
						typeName : "Extra Light",
						typeClass : "choplinextralight-demo"
						}
					]			
		}
		]
});