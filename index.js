function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(a, b) {
  return Math.abs(a - b) * 264
}

function calculatesFarePrice(a, b) {
  let dist = distanceTravelledInFeet(a, b)
  switch (true) {
    case (dist <= 400):
      return 0
    case (dist < 2000):
      return (dist - 400) * 0.02
    case (dist <= 2500):
      return 25
    default:
      return "cannot travel that far"
  }
}