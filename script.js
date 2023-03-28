function mixColors(color1,color2){
  switch(color1 + color2){
    case 'redblue':
    case 'bluered':
      return 'purple';
    case 'redyellow':
    case 'yellowred':
      return 'orange';
    case 'blueyellow':
    case 'yellowblue':
      return 'green';
    default:
      return 'Invalid color combination'
  }
}
console.log(mixColors('red', 'blue'))
console.log(mixColors('blue','red'))