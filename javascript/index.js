function updateTime() {
  let losAngeles = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngeles.querySelector(".date");
  let losAngelesTimeElement = losAngeles.querySelector(".time");
  let losAngelesTime = moment().tz(`America/Los_Angeles`);
  losAngelesDateElement.innerHTML = losAngelesTime.format(" MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let tokyo = document.querySelector("#tokyo");
  let tokyoDateElement = tokyo.querySelector(".date");
  let tokyoTimeElement = tokyo.querySelector(".time");
  let tokyoTime = moment().tz(`Asia/Tokyo`);
  tokyoDateElement.innerHTML = tokyoTime.format(" MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  let lisbon = document.querySelector("#lisbon");
  let lisbonDateElement = lisbon.querySelector(".date");
  let lisbonTimeElement = lisbon.querySelector(".time");
  let lisbonTime = moment().tz(`Europe/Lisbon`);
  lisbonDateElement.innerHTML = lisbonTime.format(" MMMM Do YYYY");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
