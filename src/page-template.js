const generateUnique = dataObj => {
  if(dataObj.title === "Manager") {
    return`Office Number: ${dataObj.office}`;
  } else if (dataObj.title === "Engineer") {
    return`GitHub: <a href="https://github.com/${dataObj.github}">${dataObj.github}</a>`;
  } else {
    return`School: ${dataObj.school}`;
  }
};

const generateTile = tileObj => {
  return `
    <div class="column is-one-third">
      <div class="card">
        <div class="card-content has-background-info">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${tileObj.name}</p>
              <p class="subtitle is-6">${tileObj.title}</p>
            </div>
          </div>
        </div>
        <div class="card-content p-2">
          <div class="content">
            <div class="box py-3">
              <p>Id: ${tileObj.id}</p>
            </div>
            <div class="box py-3">
              <p>Email: <a href="mailto:${tileObj.email}">${tileObj.email}</a></p>
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
  
  // Code to destructure array if needed
  // const manager = pageData[0];
  // const engineerArray = pageData.filter(key => key.hasOwnProperty('github'));
  // const internArray = pageData.filter(key => key.hasOwnProperty('school'));

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