
function getTextInsideFirstLiTag() {
  var firstLi = document.querySelector('li');
  if (firstLi) {
    return firstLi.textContent;
  } else {
    return ''
  }
}
const textInsideFirstLi = getTextInsideFirstLiTag();
console.log(textInsideFirstLi); 




function getTextInsideLiTags(html) {
 
  const liElements = document.querySelectorAll('li');
  const texts = [];

  liElements.forEach(function(li) {
    texts.push(li.textContent);
  });
  return texts;
}

var htmlCode =
 `<ul><li class="list-item green" data-test-id="1">green</li>
<li class="list-item red" data-test-id="2">red</li>
<li class="list-item orange" data-test-id="3">yellow</li>
<li class="list-item blue" data-test-id="4">blue</li>
<li class="list-item white" data-test-id="5">orange</li></ul>`;
var textsInsideLiTags = getTextInsideLiTags(htmlCode);
console.log(textsInsideLiTags);





function getTextInsideListItems(html) {

  let listItems = document.querySelectorAll('.list-item');
  let texts = [];

  listItems.forEach(function(item) {
    texts.push(item.textContent);
  });
  return texts;
}

var htmlCode = `<ul>
  <li class="list-item green" data-test-id="1">green</li>
  <li class="list-item red" data-test-id="2">red</li>
  <li class="list-item orange" data-test-id="3">yellow</li>
  <li class="list-item blue" data-test-id="4">blue</li>
  <li class="list-item white" data-test-id="5">orange</li>
</ul>`;

let textsInsideListItems = getTextInsideListItems(htmlCode);
console.log(textsInsideListItems); 





function getClassValuesInsideListItems(html) {

  let listItems = document.querySelectorAll('.list-item');
  let classValues = [];

  listItems.forEach(function(item) {
    classValues.push(item.getAttribute('class'));
  });

  return classValues;
}
var htmlCode = `<ul>
  <li class="list-item green" data-test-id="1">green</li>
  <li class="list-item red" data-test-id="2">red</li>
  <li class="list-item orange" data-test-id="3">yellow</li>
  <li class="list-item blue" data-test-id="4">blue</li>
  <li class="list-item white" data-test-id="5">orange</li>
</ul>`;

let classValuesInsideListItems = getClassValuesInsideListItems(htmlCode);
console.log(classValuesInsideListItems); 






function getDataTestIdValuesInsideListItems(html) {

  let listItems = document.querySelectorAll('.list-item');
  let dataTestIdValues = [];

  listItems.forEach(function(item) {
    dataTestIdValues.push(item.getAttribute('data-test-id'));
  });

  return dataTestIdValues;
}

var htmlCode = `<ul>
  <li class="list-item green" data-test-id="1">green</li>
  <li class="list-item red" data-test-id="2">red</li>
  <li class="list-item orange" data-test-id="3">yellow</li>
  <li class="list-item blue" data-test-id="4">blue</li>
  <li class="list-item white" data-test-id="5">orange</li>
</ul>`;

const dataTestIdValuesInsideListItems = getDataTestIdValuesInsideListItems(htmlCode);
console.log(dataTestIdValuesInsideListItems);





function getBrokenDataTestIdAttributes(html) {
 
  let listItems = document.querySelectorAll('.list-item');

  let brokenDataTestIdAttributes = Array.from(listItems).map(function(item) {
    let classList = item.classList;
    let text = item.textContent.trim();
    let dataTestId = item.getAttribute('data-test-id');

    if (!classList.contains(text)) {
      return dataTestId;
    }
  }).filter(function(attribute) {
    return attribute !== undefined;
  });

  return brokenDataTestIdAttributes;
}
var htmlCode = `<ul>
  <li class="list-item green" data-test-id="1">green</li>
  <li class="list-item red" data-test-id="2">red</li>
  <li class="list-item orange" data-test-id="3">yellow</li>
  <li class="list-item blue" data-test-id="4">blue</li>
  <li class="list-item white" data-test-id="5">orange</li>
</ul>`;

const brokenDataTestIdAttributes = getBrokenDataTestIdAttributes(htmlCode);
console.log(brokenDataTestIdAttributes);






const listItems = document.querySelectorAll('.list-item');

listItems.forEach((element) => {
  const dataTestId = element.getAttribute('data-test-id');
  const text = element.textContent;
  element.textContent = `${dataTestId} ${text}`;
});






const secretLoginInput = document.getElementById('secret-login');
secretLoginInput.value = 'You were hacked';


