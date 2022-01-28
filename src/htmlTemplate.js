module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header class="bg-danger py-4 mb-5">
            <h1 class="text-center text-white">My Team</h1>
        </header>
        <main>
            <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
            ${createCards(team)}
            </div>
            </div>
        </main>
    </body>
</html>`;
};

const createCards = (team) => {
    const managerPrompt = (manager) => {
    return `
    <div class="card m-3 shadow" style="width: 300px">
            <div class="card-header bg-primary text-white">
                <p class="h3">${manager.getName()}</p>
                <p class="h4 fas fa-mug-hot mr-1">${manager.getRole()}</p>
            </div>
            <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="font-weight-bold">ID: ${manager.getId()}</span>
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold">Email: ${manager.getEmail()}</span>
                </li>
                <li class="list-group-item">
                    <span class="font-weight-bold">Office: ${manager.officeNumber}</span>
                </li>
            </ul>
            </div>
        </div>`;
    };
    const internPrompt = (intern) => {
        return `
        <div class="card m-3 shadow" style="width: 300px">
            <div class="card-header bg-primary text-white">
                <p class="h3">${intern.getName()}</p>
                <p class="h4 fas fa-user-graduate mr-1">${intern.getRole()}</p>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="font-weight-bold id">ID: ${intern.getId()}</span>
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold">Email: ${intern.getEmail()}</span>
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold">School: ${intern.school}</span>
                    </li>
                </ul>
            </div>
        </div>`;
    };
    const engineerPrompt = (engineer) => {
        return `
        <div class="card m-3 shadow" style="width: 300px">
            <div class="card-header bg-primary text-white">
                <p class="h3 name">${engineer.getName()}</p>
                <p class="h4 fas fa-glasses mr-1">${engineer.getRole()}</p>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group">
                    <li class="list-group-item">
                        <span class="font-weight-bold">ID: ${engineer.getId()}</span>
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold">Email: ${engineer.getEmail()}</span>
                    </li>
                    <li class="list-group-item">
                        <span class="font-weight-bold">GitHub: ${engineer.github}</span>
                    </li>
               </ul>
          </div>
        </div>`;
    };
    const htmlArr = [];

    htmlArr.push(
        team
        .filter((employee) => employee.getRole() === 'Manager')
        .map((manager) => managerPrompt(manager))
        .join('')
    );

    htmlArr.push(
        team
        .filter((employee) => employee.getRole() === 'Engineer')
        .map((engineer) => engineerPrompt(engineer))
        .join('')
    );

    htmlArr.push(
        team
        .filter((employee) => employee.getRole() === 'Intern')
        .map((intern) => internPrompt(intern))
        .join('')
    );

    return htmlArr.join('');
};
