// Initial list of freelancers used to display.
const freelancers = [
  { name: "Mr. Sagan", price: 96, occupation: "Astonomer" },
  { name: "Dr. Einstein", price: 55, occupation: "Physicist" },
  { name: "Prof. R. Franklin", price: 58, occupation: "Biologist" },
  { name: "Prof. Hubble", price: 53, occupation: "Astrophysicist" },
  { name: "Dr. Webb", price: 24, occupation: "Telescope" },
  { name: "Prof. Hubbard", price: 76, occupation: "Biochemist" },
];

// Max number of freelancers that can be listed.
const maxFreelancers = 12;

// 
const addFreelanceIntervalID = setInterval(addFreelancer, 1000);

render();

// Function that will render the list of freelancers and associated price and occupation to user.
function render() {
  const freelancerList = document.querySelector("#freelancerList");
  const listElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.classList.add(freelancer.freelancers);
    return element;
  });
//   freelancerList.replaceChildren(...freelancersElements);
}

function addFreelancer() {
  const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelanceIntervalID);
  }
  freelancers.push({freelancer, name: ""})
}

// Max number of freelancers that can be listed.




console.log("The code above has finished running.");

