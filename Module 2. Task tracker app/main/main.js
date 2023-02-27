window.addEventListener('load', () => {
    const form = document.querySelector('#new-task_form');
    const input = document.querySelector('.new-task_input');
    const listEl = document.querySelector('#tasks');
    const sortButton = document.querySelector('.regulate');
    const  plusButton = document.querySelector('#new-task_create')


    plusButton.addEventListener('click', () => {
      input.classList.toggle('visible');
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const task = input.value;
      const taskEl = document.createElement('li');
      taskEl.classList.add('task');
      listEl.classList.add('border');
      input.value = '';

      // If task is empty, return without doing anything
      if (task === '') {
        return;
      }
  
      const taskInputEl = document.createElement('input');
      taskInputEl.type = 'text';
      taskInputEl.classList.add('text');
      taskInputEl.value = task;
      taskInputEl.setAttribute('readonly', 'readonly');



        // Sort funksiyasinin elave edilmesi

let sortOrder = 'asc';

sortButton.addEventListener('click', () => {


sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';

// Hazırki sortorder-ə əsasən css-in toggle olunması
const isSortedAsc = sortOrder === 'asc';
const isSortedDesc = sortOrder === 'desc';

if (isSortedAsc) {
 
  sortButton.classList.add("up");
} else if (isSortedDesc) {
  sortButton.classList.remove("up"); 
} 

// Sort edilmə
const taskEls = Array.from(listEl.querySelectorAll('.task'));
taskEls.sort((a, b) => {
  const aText = a.querySelector('.text').value.toLowerCase();
  const bText = b.querySelector('.text').value.toLowerCase();
  return sortOrder === 'asc'
    ? aText.localeCompare(bText)
    : bText.localeCompare(aText);
});

// Listin təmizlənib sort olunmuş listin əlavə edilməsi
while (listEl.firstChild) {
  listEl.removeChild(listEl.firstChild);
}
taskEls.forEach(taskEl => {
  listEl.appendChild(taskEl);
});

});



      //
  
      const taskActionsEl = document.createElement('div');
      taskActionsEl.classList.add('actions');
  
      const taskEditEl = document.createElement('svg');
      taskEditEl.classList.add('edit');
      
      taskEditEl.innerHTML = '<svg class="edit_svg" fill= "#C4C4C4" width="20" height="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 494.936 494.936" xml:space="preserve" stroke="#C4C4C4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"></path> <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"></path> </g> </g> </g></svg>';
      taskActionsEl.appendChild(taskEditEl);
      

      const taskDeleteEl = document.createElement('svg');
      taskDeleteEl.classList.add('delete');
      taskDeleteEl.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/><path d="M6 6L14 14" stroke="#C4C4C4"/><path d="M6 14L14 6" stroke="#C4C4C4"/></svg>'
  
      
  
      taskActionsEl.appendChild(taskDeleteEl);
  
      taskEl.appendChild(taskInputEl);
      taskEl.appendChild(taskActionsEl);
  
      listEl.appendChild(taskEl);
  
      


      taskEditEl.addEventListener('click', () => {
        
        if (taskInputEl.hasAttribute('readonly')) {
          taskInputEl.removeAttribute('readonly');
          taskInputEl.focus();
          taskEditEl.innerHTML = '<svg fill="#c4c4c4" height="18px" width="18px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#c4c4c4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "></polygon> </g></svg>'
          
        } else {
          taskInputEl.setAttribute('readonly', true);
          taskEditEl.innerHTML = '<svg class="edit_svg" fill= "#C4C4C4" width="20" height="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64px" height="64px" viewBox="0 0 494.936 494.936" xml:space="preserve" stroke="#C4C4C4"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157 c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21 s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741 c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"></path> <path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069 c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963 c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692 C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107 l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005 c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"></path> </g> </g> </g></svg>';
        }
});

  taskDeleteEl.addEventListener('click', () => {
  listEl.removeChild(taskEl);
      });
    });

  });
  