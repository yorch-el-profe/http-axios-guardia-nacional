const select = document.getElementById("breeds");
const image = document.getElementById("random-image");
const btn = document.getElementById("get-image");

/*
    axios.get(url, {
        headers: {

        },
        params: {

        }
    });
    
    axios.post(url, data, {
        headers: {

        },
        params: {

        }
    })
*/

async function fetchBreeds() {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        renderBreeds(Object.keys(response.data.message));
    } catch (e) {

    }
}

function renderBreeds(breeds) {
    for (let breed of breeds) {
        const option = document.createElement("option"); // <option/>
        option.innerText = breed; // <option>Raza</option>
        option.setAttribute("value", breed); // <option value="Raza">Raza</option>
        select.appendChild(option);
    }
}

fetchBreeds();

// ---------------------------------

async function fetchBreed(breed) {
    try {
        const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        renderImage(response.data.message);
    } catch (e) {

    }
}

function renderImage(url) {
    image.src = url;
}

btn.addEventListener("click", function () {
    fetchBreed(select.value);
});