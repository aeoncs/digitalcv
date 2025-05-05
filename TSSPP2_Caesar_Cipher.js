    // create a function for a random number generator
    function randomNumGen(dice){
        let randomNum = Math.floor(Math.random()*dice);
        return randomNum;
    }
        // define our alphabet string and sends a random num to the console for debug purposes(lets you know page refreshed)
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    console.log(randomNumGen(alphabet.length));
    
     
    
    
    function encrypt(message, shift) {
             // creates a string to add each character to
        let encryptedMessage = '';
        let letterCount = 0;
        let randomChar = alphabet[randomNumGen(alphabet.length)];
            // runs a for loop going through the length of the message
        for (let i = 0; i < message.length; i++) {
            // ANY VARIABLE HERE WILL CHANGE WITH EACH ITERATION OF THE LOOP
            // char will change with each iteration of the loop, taking the next index
            // create lowerChar, conversion of char to lowercase
            // create isUpperCase to check if char matches lowerChar, since char doesnt actually change values with tolowercase.
            // create an index variable for lowerchar that corresponds to alphabet
    
        const char = message[i];
        const lowerChar = char.toLowerCase();
        const isUpperCase = char !== lowerChar;
        const index = alphabet.indexOf(lowerChar);
    
        
    
              // checks if the letterCount var is < 2 and if it is, adds 1 to the count
              if (letterCount < 2){
                letterCount++;
            } 
    
                // if letter count is not less than 2, finds a random character, adds the random character to the encrypted string and sets the letter count to 1.
            else {
                randomChar = alphabet[randomNumGen(alphabet.length)];
                encryptedMessage += randomChar;
                letterCount = 1;
            }
        
          
    
            // check if index variable is -1, meaning not contained in alphabet. if so just add char to encrypted msg
          if (index === -1) {
            encryptedMessage += char;
          }
            // if index isnt -1 do this
          else {
    
            // create a var for the new index, use the modulo operator (%) with alphabet.length to wrap around if index exceeds length of alphabet
            // create a var for the shiftedChar which is the new index of the alphabet
    
            const newIndex = (index + shift) % alphabet.length;
            const shiftedChar = alphabet[newIndex];
      
            // Preserve case
            if (isUpperCase === true){
                encryptedMessage += shiftedChar.toUpperCase();
            }
            else{
                encryptedMessage += shiftedChar;
            }  
          }
       }
      return encryptedMessage;
    }
    
    
    function decrypt(encryptedMessage, shiftValue){
            // creates a string to add each character to
        let decryptedMessage = '';
        let letterCount = 0;
    
            // starts a for loop to iterate through each char of the message
        for (let i = 0; i < encryptedMessage.length; i++){
            const char = encryptedMessage[i];
            const lowerChar = char.toLowerCase();
            const isUpperCase = char !== lowerChar;
            const index = alphabet.indexOf(lowerChar);
    
            // checks to see of letterCount is 3 and != 0, if it is, removes the last letter in the string and resets letter count to 1
        if (letterCount === 3 && letterCount != 0)
            {
                decryptedMessage = decryptedMessage.slice(0, -1);
                letterCount = 1; 
            } 
           else 
            {
                letterCount++;
            }
        
              // check if index variable is -1, meaning not contained in alphabet. if so just add char to decrypted msg
          if (index === -1) 
            {
            decryptedMessage += char;
            }
            // if index isnt -1 do this
          else {
            // create a var for the new index, use the modulo operator (%) with alphabet.length to wrap around if index exceeds length of alphabet
            // create a var for the shiftedChar which is the new index of the alphabet
    
            let newIndex = (index - shiftValue);
    
            // solution for avoiding negative indexes - inspired by https://stackoverflow.com/a/77951927 (only the while loop)
            // checks if new index is less than 0, adds alphabet.length to it
            while (newIndex < 0){
                newIndex += alphabet.length;
            }
    
            // for wrapping around if index exceeds message.length
            newIndex %= alphabet.length;
            const shiftedChar = alphabet[newIndex];
                
    
                if (isUpperCase === true)
                {
                    decryptedMessage += shiftedChar.toUpperCase();
                }
                else
                {
                    decryptedMessage += shiftedChar;
                }
    
    
        }
    
    }
    return decryptedMessage;
    }