// membuat aplikasi sederhana untuk data warga
// membuat beberapa pertanyaan

import inquirer from "inquirer";
import fs from "fs";

console.clear();
console.log(`
================================
Data Warga Vila Nusa Indah
================================
`);

inquirer
  .prompt([
    {
      name: "fullname",
      message: "Nama Lengkap",
    },
    {
      name: "dob",
      message: "Tempat, tanggal lahir",
    },
    {
      name: "id",
      message: "No KTP",
    },
    {
      name: "phone",
      message: "HP",
    },
    {
      name: "address",
      message: "Alamat saat ini",
    },
    {
      name: "married",
      message: "Apakah Anda sudah menikah?",
      type: "list",
      choices: ["Menikah", "Belum Menikah", "Janda/Duda"],
    },
  ])
  .then((ans) => {
    console.clear();
    let result = `
-------------------------------------
  Nama Lengkap      : ${ans.fullname}
  Tempat, Tgl Lahir : ${ans.dob}
  No KTP            : ${ans.id}
  HP                : ${ans.phone}
  Nama Lengkap      : ${ans.address}
  Nama Lengkap      : ${ans.married}
-------------------------------------
  `;

    // buat nama file
    let fileName = ans.fullname;

    //  menulis data result ke dalam sebuah file txt
    fs.writeFileSync(`./storage/${fileName}.txt`, result, "utf-8");

    // tampilkan ke console result
    console.log(result);
  });
