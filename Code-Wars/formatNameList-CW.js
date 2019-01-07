// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''

function formatNameList(names){
  let nameResult = '';
  names.forEach(function(name, index) {
      nameResult = nameResult + (name['name']);
    if(index === names.length - 2){
      nameResult = nameResult + ' & ';
    } else if(index !== names.length - 1) {
      nameResult = nameResult + ', ';
    }
  });
  return nameResult;
}


module.exports = formatNameList;