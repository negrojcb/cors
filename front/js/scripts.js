const charactersContainer = document.getElementById("charactersContainer");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const searchInput = document.getElementById("searchInput");
const API_URL = "http://localhost:3000/characters";

searchBtn.addEventListener("click", async () => {
  const searchValue = searchInput.value.trim().toLocaleLowerCase();
  if (searchValue) {
    const characters = await fetchCharactersByName(searchValue);
    renderCharacters(characters);
  }
});

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  loadAllCharracters();
});

// Dejamos la página en blanco

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  charactersContainer.innerHTML = "";
});

const fetchAllCharacters = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchCharactersByName = async (name) => {
  try {
    const response = await fetch(`${API_URL}/${name}`);
    const data = await response.json();
    if (data.error) {
      return [];
    }
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const renderCharacters = (characters) => {
  if (!characters || characters.length === 0) {
    charactersContainer.innerHTML =
      "<p>No se ha encontrado ningún personaje</p>";
    return;
  }
  const result = characters.map((character) => {
    const template = ` 
    <li>
    <h2>Name: ${character.name}</h2>
    <img src=${character.image} alt=${character.name}>  
    </li>
    `;
    return template;
  });
  charactersContainer.innerHTML = result.join("");
};

const loadAllCharacters = async () => {
  const characters = await fetchAllCharacters();
  renderCharacters(characters);
};

loadAllCharacters();

//Solución de clase
//https://github.com/CarlosDiazGirol/front-rick-finalizado
