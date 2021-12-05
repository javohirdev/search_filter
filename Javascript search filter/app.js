const items = document.querySelector(".items");
const searchInput = document.getElementById("search");
var users = []

const getItem = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {res.json()
            .then(res => {
                users = res;
                viewResults(users)
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
};

searchInput.addEventListener('input', e => {
    const element = e.target.value.toLowerCase()
    // console.log(element)
    const searchFunc = users
        .filter(user => user.name
        .toLowerCase()
        .includes(element))
    viewResults(searchFunc)
})

const viewResults = (arr) => {
    let output = "";

    arr.forEach(({ name, username }) => (output += `
        <tr>
            <td>
                <div class="results">
                    <div>
                        <h1>
                            ${name}
                        </h1>
                    </div>
                    <div>
                        <p>
                            ${username}
                        </p>
                    </div>
                </div>
            </td>
        </tr>
    `));
    items.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", getItem);