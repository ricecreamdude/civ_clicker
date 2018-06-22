//Initiate game

//To Do:

//Build a constructor for various resources:
//  wood
//  food
//  stone
//  supply

//  Resource constructor
//  Upgrade constructor

//Upgrade data for food

var upgradeData = {}

//Utility Functions
var clog = function(text) {
  console.log(text)
}

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

function updateDisplay(resource) {
  document.getElementById(resource.name).innerText = resource.amount
}

window.setInterval(function() {
  reFarmer.generate(reFarmer.rate)
}, 500)
