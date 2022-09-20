const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (stat) => {
    var x =0;
    await promiseTheaterIXX().then((value) => 
    {
        value.forEach(emosi => {
            if (emosi.hasil==stat)
            {
                x+=1;
            }
        });
    });
    await promiseTheaterVGC().then((value) => 
    {
        value.forEach(emosi => {
            if (emosi.hasil==stat)
            {
                x+=1;
            }
        });
    });
    return x;
};

module.exports = {
  promiseOutput,
};
