function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  if (losAngeles) {
    let losAngelesDateElement = losAngeles.querySelector(".date");
    let losAngelesTimeElement = losAngeles.querySelector(".time");
    let losAngelesTime = moment().tz(`America/Los_Angeles`);
    losAngelesDateElement.innerHTML = losAngelesTime.format(" MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let tokyo = document.querySelector("#tokyo");
  if (tokyo) {
    let tokyoDateElement = tokyo.querySelector(".date");
    let tokyoTimeElement = tokyo.querySelector(".time");
    let tokyoTime = moment().tz(`Asia/Tokyo`);
    tokyoDateElement.innerHTML = tokyoTime.format(" MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let london = document.querySelector("#london");
  if (london) {
    let londonDateElement = london.querySelector(".date");
    let londonTimeElement = london.querySelector(".time");
    let londonTime = moment().tz(`Europe/Lisbon`);
    londonDateElement.innerHTML = londonTime.format(" MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCityChange(event) {
  let cityZone = event.target.value;
  if (cityZone === "current") {
    cityZone = moment.tz.guess();
  }
  let cityDate = moment().tz(cityZone);
  let cityName = cityZone.replace("_", " ").split("/")[1];
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `<div class="city">
          <span class="date">${cityDate.format(" MMMM Do YYYY")}</span>
          <span class="time">${cityDate.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</span>
          <h2>${cityName}</h2>
        </div>`;
}

let updateCity = document.querySelector("#userCity");
updateCity.addEventListener("change", updateCityChange);
setInterval(updateTime, 1000);
