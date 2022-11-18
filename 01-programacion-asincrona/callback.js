function saludar(nombre, callback) {
    const time = Math.ceil((Math.random() * 2000)) + 1000;
    setTimeout(function () {
        console.log(`Hola ${nombre} (después de ${time} ms)`);
        if (callback) {
            callback();
        }
    }, time);
}


// Callback Hell
saludar("Pepito", function () {
    saludar("Omar", function () {
        saludar("Dulce", function () {
            saludar("Fernando", function () {
                saludar("Katia");
            });
        });
    });
});