addLayer("gf", {
    name: "giga flop", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "GF", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
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
        if (hasUpgrade('mf', 15)) mult = mult.times(upgradeEffect('mf', 15))
      
        return mult
    
        
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "f: giga flop ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
        {key: "", description: "alt + f4: fre bobux "},
    ],
    
    
    passiveGeneration() { 
        return hasUpgrade("fp", "13") ? 1 : 0; 
      },
    upgrades: {
11: {
    title: "flopping hard",
    description: "2x flops",
    cost: new Decimal(2),
    

    


},
12: {
    title: "flop inflation ",
    description: "0.5^ flops based on giga flops",
    cost: new Decimal(5),

    effect() {
       
        return player[this.layer].points.add(1).pow(0.5)
       
    },

  
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect


    },
    13: {
        title: "flop inflation^2",
        description: "0.1^ giga flops based on flops",
        cost: new Decimal(15),
        effect() {
            return player.points.add(1).pow(0.1)
      
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
    
    
        },

        14: {
            title: "0.001% of floppas power",
            description: "1.15^ flops",
            cost: new Decimal(50),

        
           
        


            
        },
        21: {
            title: "floppa power upgrade 1",
            description: "1.03^ flops",
            cost: new Decimal(2500),
            
        },
        22: {
            title: "floppa power upgrade 2",
            description: "1.03^ flops",
            cost: new Decimal(2.5e4),
            
        },
        23: {
            title: "floppa power upgrade 3",
            description: "1.03^ flops",
            cost: new Decimal(2.5e5),
            
        },
          24: {
            title: "floppa power upgrade 4",
            description: "1.03^ flops",
            cost: new Decimal(2.5e9),
            
        },

        25: {
            title: "floppa power upgrade 5",
            description: "1.03^ flops",
            cost: new Decimal(2.5e10),
            
        },
        26: {
            title: "floppa power upgrade 6",
            description: "1.03^ flops",
            cost: new Decimal(5e12),
            
        },
        27: {
            title: "floppa power upgrade 7",
            description: "1.03^ flops",
            cost: new Decimal(1e14),
            
        },
       
        91: {
            title: "dev test power",
            description: "10x flops",
            cost: new Decimal(0),
unlocked: false
        

            
        }
    
    






    },

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
    requires: new Decimal(250), // Can be a function that takes requirement increases into account
    resource: "mega flops", // Name of prestige currency
    baseResource: "flops", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.45, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        if (hasUpgrade('mf', 13)) mult = mult.times(upgradeEffect('mf', 13))
        if (hasUpgrade('fp', 11)) mult = mult.times(upgradeEffect('fp', 11))
        if (hasMilestone('fp', 2)) mult = mult.times(milestoneEffect('fp', 2))
        
      
 
 
       
        return mult
    },
   

    layerShown(){return true},
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "m: mega flop ", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
   
    ],

   


    passiveGeneration() { 
        return hasMilestone("fp", "11") ? 1 : 0; 
      },
    milestones:
    {
    11 : {
      requirementDescription: "1,000 mega flops",
                done() {return player[this.layer].best.gte(1e3)},
                effectDescription: "keep giga flop upgrades on reset (broken so have 2x flops instead :( )"
    },

  
    },
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
                return player.points.add(1).pow(0.12)
          
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        
            
        
        
        },

        14: {
            title: "0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001% of floppa power's power",
            description: "2x flop gain weeee",
            cost: new Decimal(300),

            

        
        
        
        },

        15: {
            title: "flop inflation^4",
            description: "giga flop gain boosted by mega flops",
            cost: new Decimal(2500),
            effect() {
       
                return player[this.layer].points.add(1).pow(0.750)
               
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        

        
        
        
        },
    },
    layerShown(){return true}
}),

addLayer("fp", {
    name: "floppa power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "FP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#492e17",
    requires: new Decimal(50e3), // Can be a function that takes requirement increases into account
    resource: "floppa power", // Name of prestige currency
    baseResource: "flops", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.85, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
    
       
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "f: get more floppa power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
   
    ],
    milestones:
    {
    1 : {
      requirementDescription: "10 floppa power",
                done() {return player[this.layer].best.gte(10)},
                effectDescription: "get 2x flops"
    },

    2 : {
        requirementDescription: "15 floppa power",
                  done() {return player[this.layer].best.gte(15)},
                  effectDescription: "get 1.5x giga flops"
      },
      11: {
        requirementDescription: "25 floppa power",
                  done() {return player[this.layer].best.gte(25)},
                  effectDescription: "gain 100% of mega flops per second"
      },
    },
    upgrades: {
        11: {
            title: "flop power to the power of 1.2",
            description: "0.05^ mega flops",
            cost: new Decimal(3),
    
            
            effect() {
                return player.points.add(1).pow(0.05)
          
            },
        
        },

        12: {
            title: "flop inflation^3",
            description: "12.5x flops ",
            cost: new Decimal(7),
         
        
        
          
        
        },

        
        13: {
            title: "passive generation",
            description: "gain 100% giga flops/s",
            cost: new Decimal(10),
        
        
          
        
        },
     
       
    },
    layerShown(){return true}
}),


addLayer("cat", {
    name: "cat", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#DFCB61",
    requires: new Decimal(50e99), // Can be a function that takes requirement increases into account
    resource: "cats", // Name of prestige currency
    baseResource: "mega flops", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.85, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
    
       
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "c: catsr", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
   
    ],
    milestones:
    {
    1 : {
      requirementDescription: "",
                done() {return player[this.layer].best.gte(100000000000)},
                effectDescription: "",
                unlocked: false
    },

    },
    upgrades: {
        11: {
            title: "",
            description: "",
            cost: new Decimal(3),
    
            },
        
 

     
       
    },
    layerShown(){return true}
})



