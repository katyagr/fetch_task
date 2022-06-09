function getCountryByName(countryName) {
    fetch("https://restcountries.com/v3.1/name/" + countryName)
    .then(response => response.json())
    .then(result => {
        let name = result[0].name.common;
        let popn = result[0].population;
        const displayName = document.querySelector("#countryname");
        const displayPopn = document.querySelector("#countrypopn");
        displayName.innerText = "Country name: " + name;
        displayPopn.innerText = "Country population: " + popn;
    });
};
getCountryByName("peru");