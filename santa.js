function deliverPresents(houses) {
  if (houses.length === 0) return 0 
  
  first = houses[0]
  rest = houses.slice(1, houses.length)
  console.log('Delivering presents to ' + houses[0]) 
  deliverPresents(rest)
}

module.exports = deliverPresents
