var _ = require("lodash")

var Account = function(name, type, amount) {
  this.name = name
  this.accountType = type
  this.amount = amount
}

var reeceAcc = new Account('reece', 'personal', 1200 )
var ciaranAcc = new Account('ciran', 'personal', 99000 )
var shamieAcc = new Account('shamie_bis', 'buisness', 3200 )

var Bank = function() {
  this.accounts = []
}

Bank.prototype = {
  addAccount: function(newAcc) {
    this.accounts.push(newAcc)
  },

  findingTheLargestAccount: function(accounts) {
    var arr = _.orderBy(accounts, 'amount', 'asc')
    return arr[arr.length -1]
  },

  findTotalValueOfAllAccounts: function(accounts) {
    var total = _.sumBy(accounts, function(account) {
      return account.amount;
    })
    return total;
  },

  findAverageValueOfAllAccounts: function(accounts) {
    var average = _.meanBy(accounts, function(account) {
      return account.amount;
    });
    return average;
  },

  findAmountByAccType: function(accounts, typeOf) {
    var found = _.filter(accounts, {type: typeOf})
    return this.findTotalValueOfAllAccounts(found)
  }


}

var newBank = new Bank()
newBank.addAccount(reeceAcc)
newBank.addAccount(ciaranAcc)
newBank.addAccount(shamieAcc)
var temp = newBank.findingTheLargestAccount(newBank.accounts)
var totalValue = newBank.findTotalValueOfAllAccounts(newBank.accounts)
var meanValue = newBank.findAverageValueOfAllAccounts(newBank.accounts)
var findAccAmount = newBank.findAmountByAccType('buisness')
// console.log(newBank.accounts)

console.log(temp)
console.log(totalValue)
console.log(meanValue)
console.log(findAccAmount)
