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
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let startHori = this.beginningLocation['horizontal']
    let startVert = this.beginningLocation['vertical']
    let endHori = this.endingLocation['horizontal']
    let endVert = this.endingLocation['vertical']

    let startIndex = eastWest.indexOf(startHori);
    let endIndex = eastWest.indexOf(endHori);

    let horiDist = Math.abs(startIndex - endIndex)
    let vertDist = Math.abs(startVert - endVert)

    return horiDist + vertDist
  }

  estimatedTime(peakHour = false){
    if (peakHour) {
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }
}

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endYear){
    return endYear - this.startDate.getFullYear()
  }

}
