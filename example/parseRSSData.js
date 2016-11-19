// this counts how many headlines are available for a team
function getCount(d) {
	var x=d.getElementsByTagName("item");
	// invoked using "getCount(dataName)"/>

	return x.length;
}


// grab the values of node 'n', and append the values to an array
function assignArray(d, n, r) {
    var j=(d.getElementsByTagName(r).length + 2);
	var NBAarray = new Array();

	for(var i = 0; i < j; i++) {
        // since its possible that a title or description entry from the RSS feed
        // will be empty, or have 'bad' characters, we need to do some error handling

        try {
            NBAarray[i] = d.getElementsByTagName(n).item(i).firstChild.data;
        }
        // if the node value is undefined...
        catch(e) {
            //..then assign its value as an empty string to prevent the app from crashing
            NBAarray[i] = '';
        }
	}

	return NBAarray;
}
