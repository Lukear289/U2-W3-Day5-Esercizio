const apiUrl =
  'https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/';

fetch(apiUrl, {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFhNDJmODE4N2U1YzAwMTgxNGM2MmUiLCJpYXQiOjE3MDU2NTcwODEsImV4cCI6MTcwNjg2NjY4MX0.G2vgXvS5eES0VUSb4vMvY3JUTinPGDeWOr9Qq4QzoVY',
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (response.ok) {
      throw new Error('Errore nella richiesta API');
    }
    return response.json();
  })
  .then((data) => {
    successCallback(data);
  })
  .catch((error) => {
    errorCallback(error);
  });

document.addEventListener('DOMContentLoaded', () => {
  fetchEvents();
});

function fetchEvents() {
  const events = [
    {
      name: '',
      description: '',
      brand: '',
      imageUrl:
        'https://allforpadel.com/2517-large_default/adidas-kimbal-lime.jpg',
    },
    {},
    {},
  ];

  const eventsRow = document.getElementById('immagini-row');

  eventsRow.innerHTML = '';

  events.forEach((event) => {
    const card = document.createElement('div');
    card.className = 'col-md-4';

    card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${event.title}</h5>
            <p class="card-text">Data: ${event.date}</p>
            <button class="btn btn-success" onclick="showEventDetails(${event.id})">Dettagli</button>
          </div>
        </div>
      `;

    eventsRow.appendChild(card);
  });
}

function showEventDetails(eventId) {
  alert(`Visualizza dettagli per l'evento con ID: ${eventId}`);
}
