<script>
  let first_name = "";
  let last_name = "";

  let email = "";
  let password = "";
  let username = "";

  async function handleForm(event) {
    event.preventDefault(); //Stops page from refreshing

    let data = {
      first_name,
      last_name,
      email,
      password,
      username
    };

    data = JSON.stringify(data);

    console.log(data);

    let reData = await fetch("http://localhost:3000/user/registerUser", {
      method: "POST",

      headers: {
        "Content-type": "application/json"
      },
      body: data
    });

    reData = await reData.json();

    if (reData.message === "useradded") {
      //TODO:redirect user to login page

      console.log("user added successfully");
    }
  }
</script>

<style>
  .form-container {
    background: #fff;
    padding: 30px;
    border-radius: 7px;
    box-shadow: 10px 10px 30px lightgrey;
    margin-top: 150px;
  }

  .buttonstyle {
    background-color: rgb(11, 118, 206);
    color: #fff;
  }
  .header {
    font-family: inherit;
    font-style: bold;
    text-shadow: 2px;
    align-items: center;
    margin-left: 10px;
  }
  .form-group {
    margin: 20px;
  }
</style>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RESGISTER FORM</title>
</head>
<body>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 ">
        <form on:submit={handleForm} class="form-container">
          <div class="form-group">
            <h1 class="header">REGISTER</h1>

            <div class="col">
              <input
                type="text"
                bind:value={username}
                class="form-control"
                placeholder="username"
                required />
            </div>

            <div class="col">
              <input
                type="text"
                bind:value={first_name}
                class="form-control"
                placeholder="First name"
                required />
            </div>

            <div class="col">
              <input
                type="text"
                bind:value={last_name}
                class="form-control"
                placeholder="Last name"
                required />
            </div>

            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              bind:value={email}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            <!-- </div>
                    <div class="form-group"> -->
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              bind:value={password}
              class="form-control"
              id="exampleInputPassword1"
              required />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn buttonstyle">Submit</button>
        </form>

      </div>
    </div>
  </div>
</body>
