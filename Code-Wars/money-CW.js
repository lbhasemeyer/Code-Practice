// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
//
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'
//
// Note that the principal is not taxed but only the year's accrued interest

function money(principal, interest, tax, desired) {
  let years = 0;
  while(principal < desired){
    let yearsInterest = principal * interest;
    let yearsTax = yearsInterest * tax;
    principal = principal + yearsInterest - yearsTax;
    years++;
  }
  return years;
}

module.exports = money;