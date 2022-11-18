function saludar(nombre) {
    const time = Math.ceil((Math.random() * 2000)) + 1000;

    return new Promise(function (resolve, reject) {
        if (time < 2000) {
            reject(nombre); // Error!
        } else {
            setTimeout(function () {
                console.log(`Hola ${nombre} (después de ${time} ms)`);
                resolve(); // Exitosamente :)
            }, time);
        }
    });
}

saludar("Pepito")
    .then(function () {
        return saludar("Omar");
    })
    .then(function () {
        return saludar("Dulce");
    })
    .then(function () {
        return saludar("Fernando");
    })
    .then(function () {
        return saludar("Katia");
    })
    .catch(function (nombre) {
        console.log(`Ocurrió un error con ${nombre}`);
    });