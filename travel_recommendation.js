function fetchData(text) {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            inserData(data[text]);
            console.log(data)
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function inserData(data) {
    const dataContainer = document.getElementById('result');
    dataContainer.innerHTML = '';

    data.forEach(item => {
        const recommendationDiv = document.createElement('div');
        recommendationDiv.classList.add('recommendation');

        // Image
        const image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.name;
        recommendationDiv.appendChild(image);

        // Description
        const description = document.createElement('p');
        description.textContent = item.description;
        recommendationDiv.appendChild(description);

        dataContainer.appendChild(recommendationDiv);
    });
}

function onInputChange() {
    const inputText = document.getElementById('inputText').value;
    if (inputText) {
        fetchData(inputText.toLowerCase());
    }
}

function clearSearch() {
    const dataContainer = document.getElementById('result');
    const inputText = document.getElementById('inputText');
    inputText.innerHTML = '';
    dataContainer.innerHTML = '';
}

document.getElementById('fetchButton').addEventListener('click', onInputChange);
document.getElementById('clear').addEventListener('click', clearSearch);
