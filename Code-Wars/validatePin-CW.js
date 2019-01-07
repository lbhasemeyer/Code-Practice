// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
function validatePIN (pin) {
  return  (pin.length == 4 || pin.length == 6 && !pin.includes('-') && !pin.includes('+') && !pin.includes(' ')) && parseInt(pin) == pin;
}

module.exports = validatePIN;