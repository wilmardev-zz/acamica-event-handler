const jsonButtonOnClick = () => {
  const jsonTest = loadJsonTest();
  alert(JSON.stringify(jsonTest));
};

const localStorageOnClick = () => {
  const jsonTest = loadJsonTest();
  localStorage.setItem("JsonTest", JSON.stringify(jsonTest));
  alert("Show the application section in the devtools");
};

const showDataLocalStorage = () => {
  const jsonInfo = localStorage.getItem("JsonTest");
  alert(jsonInfo);
};

const deleteDataLocalStorage = () => {
  localStorage.removeItem("JsonTest");
  alert("JsonTest has be removed");
};

const saveInfoIntoSessionStorage = () => {
  const jsonTest = loadJsonTest();
  sessionStorage.setItem("JsonTestSession", JSON.stringify(jsonTest));
  alert("Info saved into Session Storage");
};

const loadJsonTest = () => {
  return {
    Course: "DWFS",
    Session: 33,
    Day: "Thursday"
  };
};

const inputJson = document.getElementById("json-button");

const inputJsonEvent = event => {
  console.log(event);
  // Para remover el evento
  inputJson.removeEventListener("keydown", inputJsonEvent);
};

inputJson.addEventListener("keydown", inputJsonEvent);

// Saber con qué click hice el mouse down
const button = document.getElementById("local-storage-button");
button.addEventListener("mousedown", event => {
  console.log(event);
  switch (event.button) {
    case 0:
      alert("Izq");
      break;
    case 1:
      alert("Medio");
      break;
    case 2:
      alert("Derecho");
      break;
  }
});

window.onload = () => {
  window.addEventListener("click", () => {
    console.log("Segundo Momento");
  });

  document.body.addEventListener("click", event => {
    console.log("Primer Momento");
    console.log(event.target.innerHTML);
    // Que el evento no se propage hacia el padre
    event.stopPropagation();
  });
};
