<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>form</title>
	<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<h1>Registration Form</h1>
		<div class="col-lg-8 m-auto d-block">
		 <form name="myForm" method="post" action="./asets/submit.html" 
              onsubmit="return validation()" >
				<div class="form-group">
					<label>First Name:</label>
					<input type="text" name="First name" class="form-control">
				</div>
				<div class="form-group">
					<label>Last Name:</label>
					<input type="text" name="Last name" class="form-control">
				</div>
				<div class="form-group">
					<label>Email:</label>
					<input type="Email" name="Email id" class="form-control">
				</div>
				<div class="form-group">
					<label>Phone:</label>
					<input type="text" name="mobile" class="form-control">
				</div>
				<div class="form-group">
					<label>Gender:</label>
					<div class="form-check-inline">
 				 <label class="form-check-label">
   				 <input type="radio" class="form-check-input" name="optradio">Male
   				  <input type="radio" class="form-check-input" name="optradio">Female
 			 </label>
			</div>
			
 		
						
					</button>
				</div>
				<div class="form-group">
					
					<label>country</label>
                <select type="text" value="" class="form-control" name="Subject">
                    <option>Select</option>
                    <option>Bulgaria</option>
                    <option>Ethiopia</option>
                    <option>France</option>
                    <option>India</option>
                </select>
 
				</div>
				<div class="form-group">
					
         		 <input class="form-group-input" type="checkbox" value=""class="form-control" ><b>Declaration:</b>
  					<label class="form-check-label" for="flexCheck">hereby declare that the information given above and in the
					enclosed documents is true to the best of my knowledge and belief and nothing has been concealed therein. I am well aware of the fact that if the information given by me is proved false/not true, I will have to face the punishment as per the your rules.
  					</label>

				</div>
				<div class="form-group">
					<button type="button" class="btn btn-primary">Submit</button>
				</div>
				
				
			</form>
	</div>
  <script>
    function validation(){

    }
  </script>

</body>
</html>