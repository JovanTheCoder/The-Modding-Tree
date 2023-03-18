let modInfo = {
	name: "the flopper tree",
	id: "69420hahafunny",
	author: "a floppa",
	pointsName: "flops",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.01",
	name: "flopping",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v1.01</h3><br>
	-new layer <br>
	-i figured out milestones<br>
	-new everything basically`

let winText = `how did u flop so hard`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('gf', 11)) gain = gain.times(2)
	if (hasUpgrade('gf', 12)) gain = gain.times(upgradeEffect('gf', 12))
	if (hasUpgrade('mf', 11)) gain = gain.times(3)
	if (hasUpgrade('gf', 14)) gain = gain.pow(1.15)
	if (hasUpgrade('mf', 12)) gain = gain.times(10)
	if (hasUpgrade('gf', 91)) gain = gain.times(100)
	if (hasUpgrade('fp', 12)) gain = gain.times(12.5)
	if (hasUpgrade('mf', 14)) gain = gain.times(2)
	if (hasMilestone('fp', 1)) gain = gain.times(2)
	if (hasUpgrade('gf', 21)) gain = gain.pow(1.03)
	if (hasUpgrade('gf', 22)) gain = gain.pow(1.03)
	if (hasUpgrade('gf', 23)) gain = gain.pow(1.03)
	if (hasUpgrade('gf', 24)) gain = gain.pow(1.03)
	if (hasUpgrade('gf', 25)) gain = gain.pow(1.03)
	if (hasUpgrade('gf', 26)) gain = gain.pow(1.03)
	if (hasUpgrade('gf', 27)) gain = gain.pow(1.03)
	
	if (hasMilestone('mf', 11)) gain = gain.times(2)
	
	
	
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e6966565656"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}