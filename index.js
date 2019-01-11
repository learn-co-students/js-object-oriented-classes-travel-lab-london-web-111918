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

  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  };

  yearsExperienceFromBeginningOf(endDate) {
    endDate = new Date(endDate)
    return parseInt(endDate.getFullYear()) - parseInt(this.startDate.getFullYear())
  };

};

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  };

  blocksTravelled() {
    const vertical = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
    const horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    return vertical + horizontal
  };

  estimatedTime(peak) {
    if (peak)
    return this.blocksTravelled() / 2
    else
    return this.blocksTravelled() / 3
  };

};
