const generateUnique = dataObj => {
  if(dataObj.getRole() === "Manager") {
    return`Office Number: ${dataObj.getOffice()}`;
  } else if (dataObj.getRole() === "Engineer") {
    return`GitHub: <a href="https://github.com/${dataObj.getGithub()}" target="_blank">${dataObj.getGithub()}</a>`;
  } else {
    return`School: ${dataObj.getSchool()}`;
  }
};

const generateTile = tileObj => {
  return `
    <div class="column is-one-third">
      <div class="card">
        <div class="card-content has-background-info">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${tileObj.getName()}</p>
              <p class="subtitle is-6">${tileObj.getRole()}</p>
            </div>
          </div>
        </div>
        <div class="card-content p-2">
          <div class="content">
            <div class="box py-3">
              <p>Id: ${tileObj.getId()}</p>
            </div>
            <div class="box py-3">
              <p>Email: <a href="mailto:${tileObj.getEmail()}" target="_blank">${tileObj.getEmail()}</a></p>
            </div>
            <div class="box py-3">
              <p>${generateUnique(tileObj)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
};

module.exports = pageData => {

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
      ${pageData.map(tileObj => generateTile(tileObj)).join('')}
    </div>

  </div>
</body>
</html>
  `

}