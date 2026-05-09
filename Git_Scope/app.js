const input_data = document.querySelector(".input-data");
const searchBtn = document.querySelector(".search-btn");
const userName = document.querySelector(".username");
const userBio = document.querySelector(".bio");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const userProfile = document.querySelector(".profileimage");
const repos = document.querySelector(".repos");
const repoContainer = document.querySelector(".repo-container");
const container = document.querySelector(".container");
const bodyDetails = document.querySelector(".body-details");

bodyDetails.style.display = "none";

 function checkId() {

    let value = input_data.value;
    if(value === ""){
        alert("Please enter github username");
        return;
    }

     
    let url = `https://api.github.com/users/${value}`;

    fetch(url)
    .then((response) =>{
        return response.json();
    })

    .then((data)=>{
        console.log(data);

         if(data.message === "Not Found"){

            alert("User not found");
            return;
        }

                // container expand
        container.classList.add("active");

        // details show
        bodyDetails.style.display = "flex";


        userName.innerText = data.login;
        userBio.innerText = data.bio;
        followers.innerText = `${data.followers} Followers`;
        following.innerText = `${data.following} Following`;

        userProfile.src = data.avatar_url;
        repos.innerText = `${data.public_repos} Repos`;

        input_data.value = "";

    });

    // fetch repositories
    fetch(`https://api.github.com/users/${value}/repos`)

    .then((response)=>{
        return response.json();
    })

    .then((repoData)=>{

        console.log(repoData);

        // old repos remove
        repoContainer.innerHTML = "";

        // repo names show
        repoData.forEach((repo)=>{

            repoContainer.innerHTML += `
            
            <p>${repo.name}</p>
            
            `;

        });

    });

}


searchBtn.addEventListener("click",()=>{
    checkId();

    
})

input_data.addEventListener("keypress",(event)=>{

    if(event.key === "Enter"){

        checkId();

    }

});