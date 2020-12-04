const fs = require('fs');

function countPasswords(passwords){
  const passed = passwords.filter(password=>checkPassword(password))
  return passed.length
}

function countPasswordsTwo(passwords){
  const passed = passwords.filter(password=>checkPasswordTwo(password))
  return passed.length
}


function checkPassword(password){
    let [times, middle, str] = password.split(' ')
    let letters = str.split('')
    // console.log(letters)
    let[n1, n2] = times.split('-').map(n=>Number(n))
    // console.log(n1,n2)
    let char = middle[0];
    // console.log(char)
    let count = 0;

    for(let i =0; i<letters.length;i++){
      if(letters[i]===char){
        count+=1
        // console.log(count)
      }
    }
    if(count>=n1 && count<=n2){
      // console.log(true)
      return true;
    }

    // console.log(false)
    return false;
}

function checkPasswordTwo(password){
  let [times, middle, str] = password.split(' ');
  let letters = str.split('');
  let[n1, n2] = times.split('-').map(n=>Number(n));
  let char = middle[0];
  // console.log(n1-1,n2-1)
  // console.log(letters)
  // console.log(char)
  if(letters[n1-1]===char && letters[n2-1]!==char){
    console.log(true)
    return true
  } else if (letters[n2-1]===char && letters[n1-1]!==char){
    console.log(true)
    return true
  } else {
    console.log(false)
    return false;
  }
}


async function readData(){
    await fs.readFile('02-12-data', "utf8", (err,data)=>{
      if(err){
        console.log(err)
        return;
      }
      const lines = data.split("\n");
      // console.log(lines)
      console.log(countPasswordsTwo(lines))
 })
}

readData();

// console.log(checkPassword('3-14 n: crnnrgpmxxlrfljk'))
