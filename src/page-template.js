const generateTile = dataArray => {
  for (i = 0; i < dataArray.length; i++) {
    return `
      <div class="column is-one-third">
        <div class="card">
          <div class="card-content has-background-info">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">${dataArray[i].name}</p>
                <p class="subtitle is-6">Manager</p>
              </div>
            </div>
          </div>
          <div class="card-content p-2">
            <div class="content">
              <div class="box py-3">
                <p>Id: 122</p>
              </div>
              <div class="box py-3">
                <p>Email: <a href="mailto:steven.bendrick@gmail.com">steven.bendrick@gmail.com</a></p>
              </div>
              <div class="box py-3">
                <p>Office number: 33</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}

module.exports = pageData => {
  // Code to destructure array if needed
  // const manager = pageData[0];
  // const engineerArray = pageData.filter(key => key.hasOwnProperty('engineerGithub'));
  // const internArray = pageData.filter(key => key.hasOwnProperty('internSchool'));

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
  <title>Team Roster</title>
</head>
<body>

  <header class="hero is-primary has-background-grey-dark has-text-centered mb-6">
    <div class="hero-body">
      <p class="title">
        My Team
      </p>
    </div>
  </header>

  <div class="container is-max-widescreen">
    
    <div class="columns is-multiline is-centered">

      <div class="column is-one-third">
        <div class="card">
          <div class="card-content has-background-info">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">Manager</p>
              </div>
            </div>
          </div>
          <div class="card-content p-2">
            <div class="content">
              <div class="box py-3">
                <p>Id: 122</p>
              </div>
              <div class="box py-3">
                <p>Email: <a href="mailto:steven.bendrick@gmail.com">steven.bendrick@gmail.com</a></p>
              </div>
              <div class="box py-3">
                <p>Office number: 33</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</body>
</html>
  `

}