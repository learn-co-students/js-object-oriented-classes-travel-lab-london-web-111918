class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

const eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
]

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    const beginHori = this.beginningLocation.horizontal
    const endHori = this.endingLocation.horizontal
    const beginVert = this.beginningLocation.vertical
    const endVert = this.endingLocation.vertical

    const beginIndex = eastWest.indexOf(beginHori)
    const endIndex = eastWest.indexOf(endHori)

    const horiTravel = endIndex - beginIndex
    const vertTravel = endVert - beginVert

    return horiTravel + vertTravel
  }

  estimatedTime(peak = false) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
