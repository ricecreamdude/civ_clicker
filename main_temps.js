//Initiate game

//To Do:

//Build a constructor for various resources:
//  wood
//  food
//  stone
//  supply

//  Resource constructor
//  Upgrade constructor

//Utility Functions
var clog = function(text) {
  console.log(text)
}

//Food and Farmer
var reFood = {
  name: 'foodCount',
  amount: 0,
  click: function() {
    this.amount += 1
    updateDisplay(this)
    clog('Food count: ' + this.amount)
  },
  spend: function(num) {
    this.amount -= num
    updateDisplay(this)
    clog('Spent ' + num + ' food!')
    clog('Food count: ' + this.amount)
  },
  add: function(num) {
    this.amount += num
    updateDisplay(this)
  }
}

var reFarmer = {
  name: 'farmerCount',
  amount: 0,
  cost: 5,
  rate: 0,
  rateMultiplier: 1,
  buy: function() {
    if (this.cost <= reFood.amount) {
      reFood.spend(this.cost)
      this.amount += 1
      updateDisplay(this)
      this.updateRate()
      this.increaseCost()
    } else clog('too expensive bro')
  },
  increaseCost: function() {
    this.cost = Math.floor(this.cost * 1.2)
    document.getElementById('farmerCost').innerText = this.cost
  },
  updateRate: function() {
    this.rate = Math.floor(this.amount * this.rateMultiplier)
    document.getElementById('farmerRate').innerText = this.rate
    console.log(this.rate)
  },
  generate: function(rate) {
    reFood.add(rate)
    clog('Farmers farmed ' + reFarmer.amount + ' food!')
  },
  add: function(rate) {
    updateDisplay(this)
  }
}

//Update View
function updateDisplay(resource) {
  document.getElementById(resource.name).innerText = resource.amount
}

//Game 'Engine'
window.setInterval(function() {
  reFarmer.generate(reFarmer.rate)
}, 500)

//////////////////////////////////TEST ZONE/////////////////////////////////////
//////////////TEST ZONE//////////////////////////////////TEST ZONE//////////////
//////////////////////////////////TEST ZONE/////////////////////////////////////
//////////////TEST ZONE//////////////////////////////////TEST ZONE//////////////
//Upgrade data for food
var upgradeData = {
  name: 'Selective Breeding',
  description: 'Farmers begin to replant the strongest, healthiest crops',
  bonus: '+50% Food Production',
  cost: 100,
  resource: reFood,
  multiplier: 0.5
}

//Resource Factory
//Possible that using 'this' causes the code to break in this instance
const Resource = () => {
  return {
    name: 'foodCount',
    amount: 0,
    click: function() {
      this.amount += 1
      updateDisplay(this)
      clog('Food count: ' + this.amount)
    },
    spend: function(num) {
      this.amount -= num
      updateDisplay(this)
      clog('Spent ' + num + ' food!')
      clog('Food count: ' + this.amount)
    },
    add: function(num) {
      this.amount += num
      updateDisplay(this)
    }
  }
}

//Upgrade Object Class into its own constructor class
var upgrade = {}

class Resource {
  constuctor(name, button) {
    this.name = name //String name
    this.amount = 0 //Self explanitory
    this.button = button //Bind button class here, is this even possible?
    this.rate = 0 //Upgraded rate per tick
  }
  //Binds to click function
  click() {
    this.amount += 1
  }
}

//resource instantiation - Load all resource class objects
