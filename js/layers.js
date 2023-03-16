addLayer("gf", {
    name: "giga flop", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "GF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#b26b50",
    requires: new Decimal(5), // Can be a function that takes requirement increases into account
    resource: "giga flops", // Name of prestige currency
    baseResource: "flops", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('gf', 13)) mult = mult.times(upgradeEffect('gf', 13))
       
        return mult
    
        
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "f: giga flop ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        {key: "", description: "alt + f4: fre bobux "}
    ],

    upgrades: {
11: {
    title: "flopping hard",
    description: "2x flops",
    cost: new Decimal(2),


    


},
12: {
    title: "flop inflation ",
    description: "1.25^ flops based on giga flops",
    cost: new Decimal(5),

    effect() {
        return player[this.layer].points.add(1).pow(1.25)
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect


    },
    13: {
        title: "flop inflation^2",
        description: "0.1^ giga flops based on flops",
        cost: new Decimal(35),
        effect() {
            return player.points.add(1).pow(0.1)
      
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    
    
        },

        21: {
            title: "0.001% of floppas power",
            description: "1.25^ flops",
            cost: new Decimal(100),

        
           
        


            
        }
    






    },
    layerShown(){return true}
}),

addLayer("mf", {
    name: "mega flop", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "MF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#85523f",
    requires: new Decimal(12500), // Can be a function that takes requirement increases into account
    resource: "mega flops", // Name of prestige currency
    baseResource: "flops", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('mf', 13)) mult = mult.times(upgradeEffect('mf', 13))
       
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "m: mega flop ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
   
    ],

    upgrades: {
        11: {
            title: "mega flop",
            description: "3x flops",
            cost: new Decimal(2),
        
        
            
        
        
        },
        12: {
            title: "FLOP W",
            description: "10x flops",
            cost: new Decimal(4),
        
        
            
        
        
        },
        13: {
            title: "mega floppy",
            description: "weeeeeeee mega flops go brrr ",
            cost: new Decimal(7),
        
            effect() {
                return player.points.add(1).pow(0.2)
          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        
            
        
        
        },
    },
    layerShown(){return true}
})

