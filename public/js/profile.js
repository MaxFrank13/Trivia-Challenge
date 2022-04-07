const generateQuizForm = document.querySelector('.generate-quiz');
const categorySelect = document.querySelector('#category');
const difficultySelect = document.querySelector('#difficulty');
// const typeSelect = document.querySelector('#type');
const quizForm = document.querySelector('.generate-quiz');

const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log(`${categorySelect.value}/${difficultySelect.value}`);
  document.location.replace(`quiz/${categorySelect.value}/${difficultySelect.value}`);
};

quizForm.addEventListener('submit', handleFormSubmit);

const createCategories = (categories) => {
  categories.forEach(category => {
    const newOption = document.createElement('option');
    newOption.value = category.id;
    newOption.textContent = category.category_name;
    categorySelect.appendChild(newOption);
  });
};

const createDifficulties = (difficulties) => {
  difficulties.forEach(difficulty => {
    const newOption = document.createElement('option');
    newOption.value = difficulty.id;
    newOption.textContent = difficulty.difficulty_name;
    difficultySelect.appendChild(newOption);
  });
};

// const createTypes = (types) => {
//   types.forEach(type => {
//     const newOption = document.createElement('option');
//     newOption.value = type.id;
//     newOption.textContent = type.display_name;
//     typeSelect.appendChild(newOption);
//   });
// };

const getFormData = async () => {
  const response = await fetch('/api/form/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json();
  console.log(data);
  createCategories(data.categories);
  createDifficulties(data.difficulties);
  // createTypes(data.types);
};

getFormData();





// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-project-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
