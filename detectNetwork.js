// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long  
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  var prefix = Number(cardNumber.substring(0, 2));
  var prefix3 = Number(cardNumber.substring(0, 3));
  var prefix4 = Number(cardNumber.substring(0, 4));
  var prefix6 = Number(cardNumber.substring(0, 6));

  if( (prefix === 38 || prefix === 39) && (cardNumber.length === 14) ){
  		return 'Diner\'s Club';
  } 
  if( (prefix === 34 || prefix === 37) && (cardNumber.length === 15) ){		
  		return 'American Express';
  }	
  if( (prefix >= 51 && prefix <= 55) && (cardNumber.length === 16) ){		
  		return 'MasterCard';			
  }
  if( (prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 || prefix4 === 6333 || prefix4 === 6759 || prefix6 === 564182 || prefix6 === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) ){    
      return 'Switch';      
  }
  if( (prefix === 41) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) ){		
  		return 'Visa';	
  }
  if( (prefix4 === 6011) || (prefix === 65) || (prefix3 >= 644 && prefix3 <= 649 ) && (cardNumber.length === 16 || cardNumber.length === 19) ){		
  		return 'Discover';			
  }
  if( (prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304) && (cardNumber.length >= 12 && cardNumber.length <= 19) ){		
  		return 'Maestro';			
  }
    if( (prefix6 >= 622126 && prefix6 <= 622925 ) || (prefix3 >= 624 && prefix3 <= 626) || (prefix4 >= 6282 && prefix4 <= 6288) && (cardNumber.length >= 16 && cardNumber.length <= 19) ){		
  		return 'China UnionPay';			
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
}
