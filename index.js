var katzDeliLine = [];
var ticket = 0;
function takeANumber(line, name){
  line.push(name);
  var length = line.length;
  ticket += 1;
  return `Welcome, ${name}. You are number ${length} in line.`;
}

function nowServing(katzDeliLine){
  for(var i = katzDeliLine.length; i <= katzDeliLine.length; i--){
    if(katzDeliLine.length === 0){
      return "There is nobody waiting to be served!";
    } else {
      var firstPerson = katzDeliLine.shift();
      return `Currently serving ${firstPerson}.`;
    }
  }
}

function currentLine(katzDeliLine){
  var lineLength = katzDeliLine.length;
  if(lineLength === 0){
    return "The line is currently empty.";
  } else {
    var newArray = [];
    for(var i = 0; i < katzDeliLine.length; i++){
      var name = katzDeliLine[i];
      var ticketNum = lineLength - i;
      newArray.push(`${ticket - ticketNum}. ${name}`);
      var string = newArray.join(', ');
      
    }
    return `The line is currently: ${string.toString()}`;
  }
}





