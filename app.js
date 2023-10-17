//API 
const url = "https://api.adviceslip.com/advice";

//event to get the advice date
window.buttonGeneratorOne.addEventListener("click", () => {
  getAdvice();
});

//create the function to get the advice data
const getAdvice = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      window.headerTitleNumber.innerHTML = `#${data.slip.id}`;//get data in header
      window.contentAdvice.innerHTML = `"${data.slip.advice}"`;//get data in paragraph
    })
    .catch((error) => console.log(error));
};

getAdvice();
