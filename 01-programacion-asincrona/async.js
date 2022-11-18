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

async function main(){
    try {
        await saludar("Pepito");
        await saludar("Omar");
        await saludar("Dulce");
        await saludar("Fernando");
        await saludar("Katia");
    } catch(e){
        console.log("Ocurrió un error!");
    }
}

main();