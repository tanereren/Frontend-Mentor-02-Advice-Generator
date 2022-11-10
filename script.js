window.addEventListener("load", () => {
  let adviceDiv = document.querySelector(".advice");
  let adviceNum = document.querySelector(".adviceNum");
  let API = document.querySelector(".api-button");

  const randomNumber = () => {
    return Math.floor(Math.random() * 224) + 1;
  };

  const getData = () => {
    fetch(`https://api.adviceslip.com/advice/${randomNumber()}`)
      .then((response) => response.json())
      .then((data) => {
        let output = "";
        let output2 = "";

        output += `<p>"${data.slip.advice}"</p>`;
        output2 += `<p>Advice #${data.slip.id}</p>`;

        adviceDiv.innerHTML = output;
        adviceNum.innerHTML = output2;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getData();
  API.addEventListener("click", getData);
});
