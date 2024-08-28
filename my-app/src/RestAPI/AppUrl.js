class AppUrl{
    static baseURL = "http://127.0.0.1:8000";
    static apiURL = this.baseURL + "/api";
    static newBarcode = this.apiURL + "/product/newbarcode";
    static product = this.apiURL + "/product/barcode";
}

export default AppUrl;