let elmBodyTable = document.getElementById("table-body-table");
let listUser = [
  {
    email: "Johnnie63@example.com",
    Firstname: "Greyson",
    Lastname: "Hilpert",
    id: "1",
  },
  {
    email: "Timmy76@example.org",
    Firstname: "Loraine",
    Lastname: "Gerhold",
    id: "2",
  },
  {
    email: "Audreanne13@example.com",
    Firstname: "Karli",
    Lastname: "Terry",
    id: "3",
  },
  {
    email: "Linnea_Koepp12@example.org",
    Firstname: "Arnold",
    Lastname: "Lehner",
    id: "4",
  },
  {
    email: "Adrain.Von15@example.net",
    Firstname: "Virginia",
    Lastname: "Lockman",
    id: "5",
  },
  {
    email: "Adelbert90@example.org",
    Firstname: "Mohammad",
    Lastname: "Zemlak",
    id: "6",
  },
  {
    email: "Tyrique.Murazik49@example.org",
    Firstname: "Dayne",
    Lastname: "Senger",
    id: "7",
  },
  {
    email: "Monte95@example.net",
    Firstname: "Luna",
    Lastname: "Thiel",
    id: "8",
  },
  {
    email: "Elva_Kub90@example.net",
    Firstname: "Dario",
    Lastname: "Kutch",
    id: "9",
  },
  {
    email: "Mohamed42@example.net",
    Firstname: "Oleta",
    Lastname: "Koepp",
    id: "10",
  },
  {
    email: "Bonita.Corkery77@example.org",
    Firstname: "Bonnie",
    Lastname: "Moen",
    id: "11",
  },
  {
    email: "Furman13@example.net",
    Firstname: "Deja",
    Lastname: "Casper",
    id: "12",
  },
  {
    email: "Jaquelin70@example.net",
    Firstname: "Ricardo",
    Lastname: "Conroy",
    id: "13",
  },
  {
    email: "Easton77@example.com",
    Firstname: "Miguel",
    Lastname: "O'Keefe",
    id: "14",
  },
  {
    email: "Delphine_Boehm39@example.net",
    Firstname: "Lilian",
    Lastname: "Boehm",
    id: "15",
  },
  {
    email: "Giovanny_Tromp43@example.net",
    Firstname: "Mateo",
    Lastname: "Waelchi",
    id: "16",
  },
  {
    email: "Arvid67@example.org",
    Firstname: "Dakota",
    Lastname: "Flatley",
    id: "17",
  },
  {
    email: "Rosalinda.Dibbert98@example.com",
    Firstname: "Aaliyah",
    Lastname: "Okuneva",
    id: "18",
  },
  {
    email: "Frederick37@example.org",
    Firstname: "Ila",
    Lastname: "Medhurst",
    id: "19",
  },
  {
    email: "Stefan.Durgan6@example.net",
    Firstname: "Janis",
    Lastname: "Stoltenberg",
    id: "20",
  },
  {
    email: "Winfield.Langosh@example.org",
    Firstname: "Amya",
    Lastname: "Rodriguez",
    id: "21",
  },
  {
    email: "Sedrick_Parisian@example.net",
    Firstname: "Tamia",
    Lastname: "Altenwerth",
    id: "22",
  },
  {
    email: "Ernesto.Luettgen@example.net",
    Firstname: "Quinten",
    Lastname: "Jacobi",
    id: "23",
  },
  {
    email: "Davonte.Wolf@example.org",
    Firstname: "Flossie",
    Lastname: "Wolf",
    id: "24",
  },
  {
    email: "Yoshiko75@example.net",
    Firstname: "Amie",
    Lastname: "Deckow",
    id: "25",
  },
  {
    email: "Laura92@example.org",
    Firstname: "Eloy",
    Lastname: "Stoltenberg",
    id: "26",
  },
  {
    email: "Gerardo.Schaden84@example.net",
    Firstname: "Audrey",
    Lastname: "Upton",
    id: "27",
  },
];

function formatUser(user) {
  let stringTr = `<tr>
        <td>${user.Firstname}</td>
        <td>${user.Lastname}</td>
        <td>${user.email}</td>
    </tr>
    `;
  return stringTr;
}

let tempRow = "";
listUser.map((user) => {
  tempRow += formatUser(user);
});

elmBodyTable.innerHTML = tempRow;
