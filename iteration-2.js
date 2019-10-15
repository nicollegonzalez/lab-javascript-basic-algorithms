// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Nicolle"
// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1)
// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Nicolle"
// 1.4 Print "The navigator's name is YYYY".
console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print: - The Driver has the longest name, it has XX characters or - Yo, navigator got the longest name, it has XX characters or - Wow, you both got equally long names, XX characters!
let hackerLength1 = hacker1.length;
let hackerLength2 = hacker2.length;
switch (true) {
  case (hackerLength1>hackerLength2):
    text = `The Driver has the longest name, it has ${hackerLength1} characters`;
    break;
  case (hackerLength1<hackerLength2):
    text = `Yo, navigator got the longest name, it has ${hackerLength2} characters`;
    break;
  default:
    text = `Wow, you both got equally long names, ${hackerLength1} characters`;
}


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverStr = "";
for(let i = 0; i < hackerLength1-1; i++){
  driverStr += hacker1[i] + " ";
  if(i === hackerLength1-2){
    driverStr += hacker1[i+1]
  }
}
console.log(`"${driverStr.toUpperCase()}"`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorStr="";
for(let i = (hackerLength2 -1); i >= 0; i--){
  navigatorStr += hacker2[i];
}
console.log(`"${navigatorStr}"`)

// 3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?
const nameArr = [hacker1,hacker2];
const sortedArr = nameArr.slice().sort();
switch (true) {
  case (hacker1.toUpperCase() === hacker2.toUpperCase()):
    text = `What?! You both got the same name?`;
    break;
  case (nameArr[0] === sortedArr[1]):
    text = `Yo, the navigator goes first definitely.`;
    break;
  default:
    text = `The driver's name goes first.`;
}

// Bonus Time!
// Generate 3 paragraphs. Store the text in a variable type of string.
const loremIpsum =`
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.

Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.

Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus.
`
// Make your program count the number of words in the string.
function wordCount(str){
  let strCopy = str.trim();
  let replaceArr = ["\n\n","\n"]
  
  replaceArr.forEach((ele)=>{
    strCopy = strCopy.replace(ele," ");
  })
  strCopy = strCopy.split(" ")

return strCopy.length;
}
wordCount(loremIpsum);

// Make your program count the number of times the Latin word et appears.
function etCount(str){
  let strCopy = str.toLowerCase().trim();
  let replaceArr = [/[!@#$%^&*(),.?":{}|<>]/g,/,/g,/\n/g,/[ ]{2,}/gi]
  
  replaceArr.forEach((ele)=>{
    strCopy = strCopy.replace(ele," ");
  })
  strCopy = strCopy.split(" et ")

return strCopy.length -1;
}
etCount(loremIpsum);