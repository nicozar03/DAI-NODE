const url = require("url");
const parsearURL = URL => {
    try {
        const urlObject = url.parse(URL, true);
        return {
            host: urlObject.host,
            pathname: urlObject.pathname,
            params: urlObject.query,
        };
    }
    catch(e) {
        console.error(e);
    }
}
console.log(parsearURL("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo?"));