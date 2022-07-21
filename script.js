/*     Functions     */

const bodyPadInit = () => {

  const body = document.querySelector('body')
  const header = document.querySelector('.header-main')

  body.style.paddingTop = header.clientHeight + 'px'

}

const addActivity = () => {

  const form = document.querySelector('.activity-form');
  const activity = data.latestActivity;
  const submit = document.querySelector('.submit');
  const newActivity = activity.cloneNode(true);

  activity.after(newActivity);

}

const data = {

  latestActivity: document.querySelector('#activity-default')

}









/*     Event Listeners     */

document.addEventListener('DOMContentLoaded', () => {

  bodyPadInit();

});

document.querySelector('.add').addEventListener('click', () => {

  addActivity();

  console.log('add')

});