let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate){
    this.name = name,
    this.startDate = new Date(startDate)
  }

yearsExperienceFromBeginningOf(year) {
  year = new Date(year)
  return parseInt(year.getFullYear()) - parseInt(this.startDate.getFullYear())
}


}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation,
    this.endingLocation = endingLocation
  }

blocksTravelled(){
  const begLocationHorizontal = eastWest.indexOf(this.beginningLocation.horizontal)
  const endLocationHorizontal = eastWest.indexOf(this.endingLocation.horizontal)
  const begLocationVertical = parseInt(this.beginningLocation.vertical)
  const endLocationVertical = parseInt(this.endingLocation.vertical)
  return (endLocationHorizontal-begLocationHorizontal) + (endLocationVertical- begLocationVertical)

}

estimatedTime(peak){
  if (peak){
    return this.blocksTravelled() / 2
  }
  else {
    return this.blocksTravelled() / 3
  }
}

}
