class WeatherSource {
    static async getCuaca(provinsi, kota) {
        const response = await fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${provinsi}/${kota}`);
        const responseJson = await response.json();
        return responseJson;
    }

    static async getProvinsi() {
        const response = await fetch(`https://api.binderbyte.com/wilayah/provinsi?api_key=2c37d29493b6870ca7a0db15f0e7b94e434e210cc61135749ba4cf39fca82910`)
        const responseJson = await response.json();
        const formProvinsi = document.querySelector('#provinsi');
        return responseJson;
    }

    static async getCityFromProv(prov) {
        const response = await fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${prov}`)
        const responseJson = await response.json();
    }

    static async getLatestEarthquake() {
        const response = await fetch(`https://mycorsproxy-gempa.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
        const responseJson = await response.json();

        const responseList = await fetch(`https://mycorsproxy-gempa.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
        const responseListJson = await responseList.json();
        return [responseJson, responseListJson];
    }    

}

export default WeatherSource;

