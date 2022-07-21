/*     Functions     */

const bodyPadInit = () => {

  const body = document.querySelector('body')
  const header = document.querySelector('.header-main')

  body.style.paddingTop = header.clientHeight + 'px'

}

const addActivity = () => {

  data.latestNum = data.latestNum + 1;

  const form = document.querySelector('.activity-form');
  const activity = data.latestActivity;
  const submit = document.querySelector('.submit');
  const newActivity = activity.cloneNode(true);

  newActivity.querySelector('.activity-delete').id = 'delete-' + data.latestNum;

  newActivity.className = 'activity-wrapper activity-' + data.latestNum;

  activity.after(newActivity);

  data.latestActivity = newActivity;

  console.log(newActivity)
  console.log(newActivity.querySelector('.activity-delete'))
  

}

const deleteActivity = (num) => {

  const deleteBtn = document.querySelector('#delete-' + num);
  const activity = deleteBtn.parentNode;

  activity.remove();

}

const data = {

  latestActivity: document.querySelector('.activity-1'),
  latestNum: 1

}







/*     Event Listeners     */

document.addEventListener('DOMContentLoaded', () => {

  bodyPadInit();

});

document.querySelector('.add').addEventListener('click', () => {

  addActivity();

  console.log('add')

});