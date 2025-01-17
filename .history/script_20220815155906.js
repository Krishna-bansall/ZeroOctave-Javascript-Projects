const nav = document.querySelector(".nav");
const md = document.getElementById("md-text");
md.innerHTML = marked.parse(
	"# Marked in the browser\n\nRendered by **marked**.\n\n## Heading 2"
	"# Marked in the browser\n\nRendered by **marked**.\n\n## Heading 2"
);

let projects = [];
const experi = document.getElementById("cardd");
const searchBar = document.getElementById("searchbar");

searchBar.addEventListener("keyup", (e) => {
	const searchString = e.target.value;
	const filteredProjects = projects.filter((projects) => {
		return projects.name.toLowerCase().includes(searchString.toLowerCase());
	});

	console.log(filteredProjects);
	displayProjects(filteredProjects);
});

const getProject = fetch("cards.json")
	.then((response) => response.json())
	.then((data) => {
		projects = data;
		displayProjects(projects);
		console.log(projects);
	});
const handleChange = (id) => {
	console.log("clicked", id);
};
const displayProjects = (projects) => {
	const htmlString = projects.map((project, id) => {
		return `<div class="stylebox">
	  <p class="card-heading">${project.name}</p>
       <div class="image" >
           <img src="${project.image}" alt="">
        </div>
        <div class="card-data">
           <button id="btnn" onclick={handleChange(${id})} class="btnn">Check Out!</button>
        </div>
 
    </div>`;
	});

	experi.innerHTML = htmlString;
};

getProject();
