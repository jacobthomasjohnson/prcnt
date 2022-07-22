/*     Functions     */

const bodyPadInit = () => {

  const body = document.querySelector('body')
  const header = document.querySelector('.header-main')

  body.style.paddingTop = header.clientHeight + 'px'

}

const addActivity = () => {

  // Clone first div (which is display:none) and append to form.
  // Find length of array, add one to last element, then push new number to last position.
  // Assign specific ID that matches with array's value

  const form = document.querySelector('.activity-form');

  let lastActivity = form.lastElementChild;

  let newNum = data.numArray[data.numArray.length - 1] + 1;

  data.numArray.push(newNum);

  const activity = data.cloneDiv;

  const newActivity = activity.cloneNode(true);

  newActivity.querySelector('.activity-delete').id = 'delete-' + newNum;

  newActivity.className = 'activity-wrapper activity-' + newNum;
  newActivity.id = '';

  newActivity.childNodes[5].addEventListener('click', () => {
    deleteActivity(newNum);
  });

  lastActivity.after(newActivity);

  console.log(data.numArray)


}

const deleteActivity = (num) => {

  // Find position of num in array and delete it's position.
  // Find div with num ID and delete it.

  if(num == 1) {
    console.log('nothing to delete');
  } else {

    const deleteBtn = document.querySelector('#delete-' + num);
    const activity = deleteBtn.parentNode;

    deleteBtn.replaceWith(deleteBtn.cloneNode(true)); // Remove event listener

    activity.remove();

    let pos = data.numArray.indexOf(num);

    console.log(num);

    if(pos > -1) {
      data.numArray.splice(pos, 1);
    }

  }

  console.log(data.numArray)



}

const data = {

  cloneDiv: document.querySelector('.activity-1'),
  numArray: [1]

}

document.querySelector('.activity-delete').addEventListener('click', (target) => {
  let str = target.target.id;
  let act = str.split('-').pop();
  deleteActivity(act);
  console.log('Attempt to delete ' + act)
});







/*     Event Listeners     */

document.addEventListener('DOMContentLoaded', () => {

  bodyPadInit();

});

document.querySelector('.add').addEventListener('click', () => {

  addActivity();

});