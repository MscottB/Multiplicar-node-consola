//Requires
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log(`============================`.red);
    console.log(`   ==== Tabla de ${base} ====`.green);
    console.log(`============================`.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El digito "${base}" no es un numero base`);
            return;
        }
        if (!Number(limite)) {
            reject(`El digito "${limite}" no es un numero limite`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += (`${base} * ${i} = ${base * i}\n`);

        }

        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, (data), (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}-al-${limite}.txt ha sido creado`)

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}