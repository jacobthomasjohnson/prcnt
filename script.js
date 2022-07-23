/*     Objects     */

const data = {

  cloneDiv: document.querySelector('.activity-1'),
  numArray: [1]

}

/*     Functions     */

const init = () => {

  const bodyPadding = () => {

    const body = document.querySelector('body')

    const header = document.querySelector('.header-main')

    body.style.paddingTop = header.clientHeight + 'px'

  }

  const bodyMarginBottom = () => {

    const app = document.querySelector('.app')

    const submit = document.querySelector('.submit');

    app.style.paddingBottom = submit.clientHeight * 2 + 'px'

  }

  bodyPadding()
  bodyMarginBottom()

}

const addActivity = () => {

  // Clone first div (which is display:none) and append to form.
  // Find length of array, add one to last element, then push new number to last position.
  // Assign specific ID that matches with array's value

  const form = document.querySelector('.activity-form');

  let lastActivity = form.lastElementChild; // Selects the last activity div in line

  let newNum = data.numArray[data.numArray.length - 1] + 1; // Finds the ID of the new activity

  data.numArray.push(newNum); // Pushes new activity to array list

  const newActivity = data.cloneDiv.cloneNode(true); // Clones default div for repurpose

  newActivity.querySelector('.activity-delete').id = 'delete-' + newNum; // Add unique ID to delete button

  newActivity.className = 'activity-wrapper activity-' + newNum; // Add unique class names to wrapper

  newActivity.id = ''; // Remove ID from new activity div

  newActivity.childNodes[5].addEventListener('click', () => { // Select new activity delete button and add listener

    deleteActivity(newNum); // Add delete functionality to delete button for new activity

  });

  lastActivity.after(newActivity); // Insert new activity after the latest activity

  console.log(data.numArray) // Display array data

}

const deleteActivity = (num) => {

  // Find position of num in array and delete it's position.
  // Find div with num ID and delete it.

  const deleteBtn = document.querySelector('#delete-' + num);

  const activity = deleteBtn.parentNode;

  deleteBtn.replaceWith(deleteBtn.cloneNode(true)); // Remove event listener

  activity.remove();

  let pos = data.numArray.indexOf(num);

  console.log(num);

  if(pos > -1) {

    data.numArray.splice(pos, 1);

  }

  console.log(data.numArray)

}



const submit = () => {

  let total = data.numArray.length - 1;

  let activities = document.querySelectorAll('.activity-wrapper');

  let outOf = 24;

  for(const act of activities) {

    if(!act.classList.contains('activity-1')) {

      switch(act.childNodes[3].options.selectedIndex) {
        case 0:
          console.log(act.childNodes[1].value + ' for less than one hour');
          console.log(1 / outOf + '%');
          break;
        case 1:
          console.log(act.childNodes[1].value + ' for 1-2 hour(s)');
          console.log(1 / outOf + '% to ' + 2 / outOf + '%');
          break;
        case 2:
          console.log(act.childNodes[1].value + ' for 2-4 hours');
          console.log(2 / outOf + '% to ' + 4 / outOf + '%');
          break;
        case 3:
          console.log(act.childNodes[1].value + ' for 4-8 hours');
          console.log(4 / outOf + '% to ' + 8 / outOf + '%');
          break;
        case 4:
          console.log(act.childNodes[1].value + ' for 8+ hours');
          console.log(8 / outOf + '%');
          break;
      }

    }

  }

}

const submitBtn = document.querySelector('.submit');

submitBtn.addEventListener('click', () => {

  submit();

})

const ham = document.querySelector('.ham');

const menu = document.querySelector('.menu');

ham.addEventListener('click', () => {

  if(!menu.classList.contains('active')) {

    menu.classList.add('active');

  } else {

    menu.classList.remove('active');

  }

});

const link = (src) => {

  window.location.href = src;

}



/*     Event Listeners     */

document.addEventListener('DOMContentLoaded', () => {

  init();

});

document.querySelector('.add').addEventListener('click', () => {

  addActivity();

});