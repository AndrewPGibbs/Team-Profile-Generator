function render(employees) {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">


      </head>
      <body>
        <header>
          <h1>My Team</h1>
        </header>
        <main>
          <div class="card-container">
            ${employees
              .map((employee) => {
                let icon, extraInfo;
                switch (employee.getRole()) {
                  case 'Manager':
                    icon = '<i class="fas fa-mug-hot"></i>';
                    extraInfo = `Office Number: ${employee.getOfficeNumber()}`;
                    break;
                  case 'Engineer':
                    icon = '<i class="fas fa-glasses"></i>';
                    extraInfo = `GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
                    break;
                  case 'Intern':
                    icon = '<i class="fas fa-user-graduate"></i>';
                    extraInfo = `School: ${employee.getSchool()}`;
                    break;
                  default:
                    icon = '';
                    extraInfo = '';
                }
                return `
                  <div class="card">
                    <div class="card-header">
                      <h2>${employee.getName()}</h2>
                      <h3>${employee.getRole()}</h3>
                    </div>
                    <div class="card-body">
                      <p>ID: ${employee.getId()}</p>
                      <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
                      <p>${extraInfo}</p>
                    </div>
                    <div class="card-footer">
                      ${icon}
                    </div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </main>
      </body>
    </html>
  `;
  return html;
}
module.exports = render;