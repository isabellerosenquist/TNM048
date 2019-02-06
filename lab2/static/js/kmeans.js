/**
* k means algorithm
* @param data
* @param k
* @return {Object}
*/

function kmeans(data, k) {

    //Implement the algorithm here..
    //Remember to reference any code that you have not implemented yourself! 

	  this.data = data;
	  var centroids = []; //2
	  var assignment = []; //kmr vara data.length
	  var clusters = [k];
	  // var iterations = 0;
	  var datlength = data.length;
	  //console.log(datlength)
	  var cenLength = centroids.length;
	  //console.log(cenLength)
	  data = StringToInt(data);
	   
	   
	  
	//Just nu plotas k=2 centroider random
	for(i = 0; i < k; i++){
	  var pos = Math.floor(Math.random(0, 1) * data.length);  //array måste vara heltal
	  centroids.push(data[pos]);
	  console.log(pos);
	}
	
	var myCents = closestCentroid(data, centroids, distances);
	console.log(myCents);
	
	//Beräknar den euclidiska distansen
	function distances(v1, v2){
		var total = 0;
		//console.log(v1)
		total = Math.pow(v2.A - v1.A, 2) + Math.pow(v2.B - v1.B, 2) + Math.pow(v2.C - v1.C, 2);
		
		return Math.sqrt(total);
	}
		
	//Gör om data strings till floats
	function StringToInt(data){
		for(i = 0; i < data.length; i++){
			data[i].A = parseFloat(data[i].A);
			data[i].B = parseFloat(data[i].B);
			data[i].C = parseFloat(data[i].C);
			//console.log(data[i])
		}
		//console.log(data) //Blir rätt!
		return data;
	}
	
	//Vill Räkna ut vilka data som tillhör vilken centroid 
	//För att skapa cluster
	function closestCentroid(data, centroids, distances){
		var min = Infinity; //jättestort tal
		var index = 0;
		var dist = [];
		var cents = [];
		//Tar tex data 1 och kollar om det är kortast till cent 1 eller 2
		for(i = 0; i < datlength; i++){
			//console.log(datlength)
			v1 = data[i];
			//console.log("Data: " + v1);
			for(j = 0; j < k; j++){
				v2 = centroids[j];
			//	console.log("Centroid: " + v2) //Två object med A,B,C
				 //printar inte ut!!!!!!!!!!!!!!!
				//Vill kolla vilka punkter som tillhör centroid 1 och vilkan som tillhör centroid 2
				//Måste kolla distancen från både A,B,C
				myDistance = distances(v1, v2);
				dist.push(myDistance);

				//console.log(dist)

				//Kan kalla på 3 ggr eller spara A,B,C och se till att distance klarar av uträkningen											
				//console.log(distA)

				
				//Kolla om det är minst avstånd till centroid 1 eller 2 
				if(myDistance < min){
					min = myDistance;
					index = j;
					//console.log(index)
					cents[i] = index;
				} 
				else
				{
					cents[i] = index;
				}
			
			}
			
			
			//Nu har vi gjort en array med distancerna mellan centroid 1 och sen centr 2 och sen cen 1 .. osv för varje data 
			
			//next step
			//Ta distance mellan alla data som tillhör centroid 1 och 2 
			//uppdatera centroidernas pos så de hamnar i mitten av clustret(3dim)
		}
		console.log("Distances: " + dist);
		console.log("Length of distances: " + dist.length);
		//console.log(cen1);
		//console.log(cen2);
		console.log("Cents: " + cents);
		//return index;
		return cents;
		
	}
	
	centerCluster(centroids, myCents, data);
	
	var results_assignments = [];
	
	//Assign to cluster
	
	//Recalculate the position to the center of the cluster

	function centerCluster(centroids, myCents, data)
	{
			var centroid1 = [];
			var centroid2 = [];

			console.log(myCents.length);

			for(i = 0; i < myCents.length; i++)
			{
				//console.log(myCents[i]);
				if (myCents[i] == 1)
				{
					//console.log("Centriod 2!");
					//console.log(i);
					centroid2.push(i);
				} else{
					centroid1.push(i);
				}

			}
			console.log(centroid1);
			console.log(centroid2);

			//centroid1.sort();
			//centroid2.sort();

			//console.log(centroid1);
			//console.log(centroid2);

			//console.log(centroid1[0]);
			//console.log(data[centroid1].A.max);
			//console.log(data[centroid1[0]].A);
			findMinMax(centroid1,centroid2,data);

/*
			var c1min = data.[centroid1[0]];
			var c1max = data.[centroid1.max()];

			var c2min = data.[centroid2[0]];
			var c2max = data.[centroid2.max()]; 

			console.log(c1min);
			console.log(c1max);
			console.log(c2min);
			console.log(c2max);*/


	}

	//find min and max value for every data A, B, C in centorid1 and centroid2
	function findMinMax(centroid1, centroid2, data){

		//Kolla om någon av arrayerna är tom
		//Vad händer om all data tillhör cent 1 eller cent 2

		if ((centroid1) != 0)
		{
			var minAcen1 = data[centroid1[0]].A; 
			var minBcen1 = data[centroid1[0]].B; 
			var minCcen1 = data[centroid1[0]].C; 
			var maxAcen1 = 0;
			var maxBcen1 = 0;
			var maxCcen1 = 0;

			for(i = 0; i < centroid1.length; i++)
			{
				if(data[centroid1[i]].A < minAcen1)
				{
					maxAcen1 = minAcen1;
					minAcen1 = data[centroid1[i]].A;

				}
				if(data[centroid1[i]].B < minBcen1)
				{
					maxAcen1 = minAcen1;
					minBcen1 = data[centroid1[i]].B;
				}
				if(data[centroid1[i]].C < minCcen1)
				{
					maxAcen1 = minAcen1;
					minCcen1 = data[centroid1[i]].C;
				}
			}

		}

		if((centroid2) != 0)
		{

			var minAcen2 = data[centroid2[0]].A; 
			var minBcen2 = data[centroid2[0]].B; 
			var minCcen2 = data[centroid2[0]].C; 
			var maxAcen2 = 0;
			var maxBcen2 = 0;
			var maxCcen2 = 0;

			for(i = 0; i < centroid2.length; i++)
			{
				if(data[centroid2[i]].A < minAcen2)
				{
					maxAcen2 = minAcen2;
					minAcen2 = data[centroid2[i]].A;

				}
				if(data[centroid2[i]].B < minBcen2)
				{
					maxAcen2 = minAcen2;
					minBcen2 = data[centroid2[i]].B;
				}
				if(data[centroid2[i]].C < minCcen2)
				{
					maxAcen2 = minAcen2;
					minCcen2 = data[centroid2[i]].C;
				}
			}
		}
			
			console.log("Cen1, Min A: " + minAcen1);
			console.log("Cen1, Min B: " + minBcen1);
			console.log("Cen1, Min C: " + minCcen1);

			console.log("Cen1, Max A: " + maxAcen1);
			console.log("Cen1, Max B: " + maxBcen1);
			console.log("Cen1, Max C: " + maxCcen1);

			console.log("------------------------");

			console.log("Cen2, Min A: " + minAcen2);
			console.log("Cen2, Min B: " + minBcen2);
			console.log("Cen2, Min C: " + minCcen2);

			console.log("Cen2, Max A: " + maxAcen2);
			console.log("Cen2, Max B: " + maxBcen2);
			console.log("Cen2, Max C: " + maxCcen2);

	}
	
	return {assignments:results_assignments};
	
};


