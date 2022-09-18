const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput =async(hasil)  => {
  return new Promise((resolve, reject) => {
    if (hasil == 'marah'){
      resolve('2')
    } else {
      reject('4')
    };
  });
};

module.exports = {
  promiseOutput,
};
