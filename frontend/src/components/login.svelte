<!-- <h1>This is the login page </h1>

<form action="">
 <input type="text" bind:value={email}>
 <input type="password" bind:value={password}>
 <button type="submit" on:click{handleForm} class="btn btn-primary">Submit</button>
</form> -->
<html lang="en">
<!-- <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN FORM</title>
</head> -->
<body>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-sm-6 col-md-3">
                <form action=""class="form-container">
                    <div class="form-group">
                        <h1 class="header">LOGIN</h1>
                      <label for="exampleInputEmail1">Email address</label>
                      <input type="email" bind:value={email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input type="password" bind:value={password} class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" on:click={handleForm} class="btn buttonstyle">Submit</button>
                  </form>
            
               </div>
            </div>
        </div>
</body>
</html>

<style>

.form-container{
    background: #fff;
    padding: 30px;
    border-radius: 7px;
    box-shadow: 10px 10px 30px lightgrey;
    margin-top: 200px;
}

.buttonstyle{
     background-color: rgb(11, 118, 206);
     color: #fff;
     margin-left: 55px;
 }
 .header{
     font-family: inherit;
     font-style: bold;
     text-shadow: 2px;
     align-items: center;
     margin-left :35px;
 }
</style>

<script>

let email=''
let password=''

function handleForm (event){
    event.preventDefault()
    console.log(email)
    console.log(password)
    }
</script>