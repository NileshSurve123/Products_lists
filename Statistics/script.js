const January = {
    item_sold : 2,
    item_not_sold : 4,
    price: 5284,

}
const February= {
    item_sold : 1,
    item_not_sold : 2,
    price: 179,

}
const March = {
    item_sold : 1,
    item_not_sold : 2,
    price: 798,

}
const April = {
    item_sold : 2,
    item_not_sold : 1,
    price: 167,

}
const May = {
    item_sold : 2,
    item_not_sold : 4,
    price: 1250,

}
const June = {
    item_sold : 4,
    item_not_sold : 6,
    price: 7699,

}
const July = {
    item_sold : 2,
    item_not_sold : 4,
    price: 1319,

}
const August = {
    item_sold : 2,
    item_not_sold : 0,
    price: 899,

}
const September = {
    item_sold : 4,
    item_not_sold : 3,
    price: 1920,

}
const October = {
    item_sold : 3,
    item_not_sold : 3,
    price: 1447,

}
const November = {
    item_sold : 1,
    item_not_sold : 4,
    price: 29,

}
const December = {
    item_sold : 2,
    item_not_sold : 1,
    price: 529,

};


function filterTable() {
    const dropdown = document.getElementById("monthFilter");
    const selectedMonth = dropdown.value;
    const table = document.getElementById("dataTable");
    const rows = table.getElementsByTagName("tbody")[0].getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const monthCell = rows[i].getElementsByTagName("td")[0];
        if (selectedMonth === "" || monthCell.textContent === selectedMonth) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
 };
 