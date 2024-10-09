fetch("products.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
             <td>${product.id}</td>
              <td>${product.title}</td>
               <td>${product.description}</td>
               <td>Rs.${product.price} </td>
                <td>${product.category}</td>
                <td>${product.sold}</td>
                 <td> <img src='${product.image}'> </td>
                 <td>${product.dateOfSale}</td>
                  </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});

function searchTable() {

   var input, filter, table, tr, td, i, j, txtValue;
   input = document.getElementById('searchInput');
   filter = input.value.toUpperCase();
   table = document.getElementById('dataTable');
   tr = table.getElementsByTagName('tr');


   for (i = 1; i < tr.length; i++) {
       tr[i].style.display = 'none'; 

    
       td = tr[i].getElementsByTagName('td');
       for (j = 0; j < td.length; j++) {
           if (td[j]) {
               txtValue = td[j].textContent || td[j].innerText;
               if (txtValue.toUpperCase().indexOf(filter) > -1) {
                   tr[i].style.display = ''; 
                   break; 
               }
           }
       }
   }
};

function filterTable() {
   
   let selectedMonth = document.getElementById("monthFilter").value;

   
   let table = document.getElementById("dataTable");
   let rows = table.getElementsByTagName("tr");


   let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   
   for (let i = 1; i < rows.length; i++) {
       let dateCell = rows[i].getElementsByTagName("td")[7];
       let date = new Date(dateCell.textContent);

       
       let monthName = monthNames[date.getMonth()];

    
       if (selectedMonth === "" || monthName === selectedMonth) {
           rows[i].style.display = "";
       } else {
           rows[i].style.display = "none";
       }
   }
};
