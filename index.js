import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

{/* <html>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"> </script>

<script>

    $(function() {

   $.getJSON('binancecoin.json', function(data) {
       $.each(data.person, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.id + "</td>" +
           "<td>" + f.coin_prices + "</td>" + "<td>" + f.Date + "</td>" + "<tr>"
           $(tblRow).appendTo("#userdata tbody");
     });

   })

})
</script>
</head>

<body>

<div class="wrapper">
<div class="profile">
   <table id= "userdata" border="2">
  <thead>
            <th>id</th>
            <th>Coin Prices</th>
            <th>Date</th>
        </thead>
      <tbody>

       </tbody>
   </table>

</div>
</div>

</body>
</html>  */}