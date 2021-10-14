// this is for the pre loader.
let delay;
const pre_Loader = () => {
  delay = setTimeout(reveal, 2000);
};
const reveal = () => {
  document.getElementById("pre-loader").style.display = "none";
  document.getElementById("table-wrapper").style.display = "block";
};

// country api.
$("#btnCountryRun").click(function () {
  $.ajax({
    url: "libs/php/countryInfoApi.php",
    type: "POST",
    dataType: "json",
    data: {
      country: $("#selCountry").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#Continent").html(result["data"][0]["continent"]);
        $("#Capital").html(result["data"][0]["capital"]);
        $("#Languages").html(result["data"][0]["languages"]);
        $("#Population").html(result["data"][0]["population"]);
        $("#Area").html(result["data"][0]["areaInSqKm"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("please Try again");
    },
  });
});
// end of country info api.

// get timezone
$("#btnTimezoneRun").click(function () {
  $.ajax({
    url: "libs/php/timezone.php",
    type: "POST",
    dataType: "json",
    data: {
      lat: $("#lat").val(),
      lng: $("#lng").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#outputCountryName").html(result["data"]["countryName"]);
        $("#outputTimezoneId").html(result["data"]["timezoneId"]);
        $("#outputTime").html(result["data"]["time"]);
        $("#outputSunrise").html(result["data"]["sunrise"]);
        $("#outputSunset").html(result["data"]["sunset"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("please Try again");
    },
  });
});
// end of timezone

// get weather api
$("#btnWeatherRun").click(function () {
  $.ajax({
    url: "libs/php/weather.php",
    type: "POST",
    dataType: "json",
    data: {
      north: $("#north").val(),
      south: $("#south").val(),
      east: $("#east").val(),
      west: $("#west").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#outputDate").html(
          result["data"]["weatherObservations"][0]["datetime"]
        );
        $("#outputStationName").html(
          result["data"]["weatherObservations"][0]["stationName"]
        );
        $("#outputTemperature").html(
          result["data"]["weatherObservations"][0]["temperature"]
        );
        $("#outputHumidity").html(
          result["data"]["weatherObservations"][0]["humidity"]
        );
        $("#outweatherCondition").html(
          result["data"]["weatherObservations"][0]["weatherCondition"]
        );
        $("#outputWindSpeed").html(
          result["data"]["weatherObservations"][0]["windSpeed"]
        );
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("please Try again");
    },
  });
});

// end of weather api.
