// Rating System
const sendRating = () => {
  let heart = document.querySelector('input[name="rate"]:checked').value;
  let list = JSON.parse(localStorage.getItem('rating') || '[]');
  let name = document.getElementById('form4Example1');
  let mail = document.getElementById('form4Example2');
  let message = document.getElementById('form4Example3');

  list = [
    ...list,
    {
      rating: [
        {
          name: name.value,
          mail: mail.value,
          message: message.value,
          heart: heart,
        },
      ],
    },
  ];

  localStorage.setItem('rating', JSON.stringify(list));
};

const button = document.getElementById('button-send');
button.addEventListener('click', sendRating);
