// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])  --->  returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])  --->  returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])  --->  returns 'Bart'
// list([])  --->  returns ''

function formatNameList(names){
  if(names.length === 1){
    return names[0]['name'];
  }
  let result = '';
  names.forEach(function(name, index) {
    if(index < names.length-1){
      result += (name['name'] + ', ');
    } else {
      result = result.slice(0, result.length-2) + ' &' + ' ' + name['name'];
    }
  });
  return result;

  // let nameResult = '';
  // names.forEach(function(name, index) {
  //     nameResult = nameResult + (name['name']);
  //   if(index === names.length - 2){
  //     nameResult = nameResult + ' & ';
  //   } else if(index !== names.length - 1) {
  //     nameResult = nameResult + ', ';
  //   }
  // });
  // return nameResult;
}


module.exports = formatNameList;