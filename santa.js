function deliverPresents(houses) {
  if (houses.length === 0) return 0 
  
  var first = houses[0]
  var rest = houses.slice(1, houses.length)
  console.log('Delivering presents to ' + houses[0]) 
  deliverPresents(rest)
}

module.exports = deliverPresents
