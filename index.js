class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  startDate() {
    return Date()
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }

}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const beginHorizontal = this.beginningLocation.horizontal
    const endHorizontal = this.endingLocation.horizontal
    const beginVertical = this.beginningLocation.vertical
    const endVertical = this.endingLocation.vertical
    const beginIndex = eastWest.indexOf(beginHorizontal)
    const endIndex = eastWest.indexOf(endHorizontal)
    const horizontalTravel = endIndex - beginIndex
    const verticalTravel = endVertical - beginVertical
    return horizontalTravel + verticalTravel
  }

  estimatedTime(peak = !true) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }


}
