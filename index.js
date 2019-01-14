class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(endingYear) {
    return endingYear - this.startDate.getFullYear()
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

  blocksTravelled(){
    // get the vertical distnace using parse interval
    // get the horixtonal dist using index of
    // add

    const beginningLocationHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
    const beginningLocationVertical = parseInt(this.beginningLocation.vertical)
    const endingLocationHorizontal = eastWest.indexOf(this.endingLocation.horizontal)
    const endingLocationVertical = parseInt(this.endingLocation.vertical)

    const horizontalDistance = endingLocationHorizontal - beginningLocationHorizontal
    const verticalDistance = endingLocationVertical - beginningLocationVertical

    return horizontalDistance + verticalDistance
  }
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
