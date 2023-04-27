let studentname = "Joey";
let studentMajor = "English";

let studentmajors = {
    Biology: {
       Departmentoffice: "Science Bldg, Room 310",
       Majorcode: "BIOL"
    },
    ComputerScience: {
        Departmentoffice: "Sheppard Hall, Room 314",
        Majorcode: "CSCI"
     },
     "English": {
        Departmentoffice: "Kerr Hall, Room 201 ",
        Majorcode: "ENG"
     },
     History: {
        Departmentoffice: "Kerr Hall, Room 114",
        Majorcode: "HIST"
     },
     Marketing: {
        Departmentoffice: "Westly Hall, Room 310",
        Majorcode: "MKT"
     }
};


    console.log("Student: " + studentname);
    console.log("Major: " + studentMajor);
    console.log("Major Code: " + studentmajors.English.Majorcode);
    console.log("Advising Location: " + studentmajors.English.Departmentoffice);
