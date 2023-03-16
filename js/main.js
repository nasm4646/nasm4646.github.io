//1 COMPLETE VARIABLE AND FUNCTION DEFINITIONS

// variable to store enter custom name
const customName = document.getElementById('customname');
// generate random story button
const randomize = document.querySelector('.randomize');
// takes an array and returns one of the items from it at random
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2 RAW TEXT STRINGS

//store long text in StoryText variable

var StoryText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

//store other sets of strings in arrays
const insertX = ["Gem the Unicorn", "Hagrid", "your mom"];

const insertY = ["fairytopia", "Narnia", "Wisconsin"];

const insertZ = ["flew into the sky", "tripped and fell down the stairs", "turned into a great, big pumpkin"];

//3 EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

//adds click event

randomize.addEventListener('click', result);

//adds result function

function result() {

    //Create a new variable called newStory, and set its value to equal storyText
    var newStory = StoryText;

    //Create three new variables called xItem, yItem, and zItem, and make them equal to the
    //result of calling randomValueFromArray() on your three arrays 

    var xItem = randomValueFromArray(insertX);

    var yItem = randomValueFromArray(insertY);

    var zItem = randomValueFromArray(insertZ);

    //replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz: — 
    //with the strings stored in xItem, yItem, and zItem
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    //If a value has been entered into the customName text input, replace Bob in the story with that custom name
    newStory = newStory.replaceAll("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    //replace 300 w calculation and concatenate stone
    const weight = Math.round(300 * 0.07143) + ' stone';
    //same w degrees and add centigrade
    const temperature =  Math.round((94-32)*5/9) + ' centigrade';
    //string replacement
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}