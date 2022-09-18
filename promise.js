const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (hasilSetelahMenonton) => {
  return new Promise((resolve, reject) => {
    if (hasil == 'tidak marah'){
      resolve('2')
    } else {
      reject('4')
    }
  });
};

module.exports = {
  promiseOutput,
};
