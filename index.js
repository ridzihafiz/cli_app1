import inquirer from "inquirer";

console.log(`
=======================================
Welcome to my apps
=======================================
`);

inquirer
  .prompt([
    {
      name: "fullname",
      message: "input your full name",
    },
    {
      name: "age",
      message: "input your age",
    },
    {
      name: "married",
      message: "Are you married?",
      type: "list",
      choices: ["Yet", "Yes", "Rather not to say"],
    },
  ])
  .then((ans) => {
    console.clear();
    console.log(`
    --------------------------------
    Full Name    : ${ans.fullname}
    Age          : ${ans.age}
    Married      : ${ans.married}
    --------------------------------
    `);
  });
