const body = document.querySelector("body");
const form = document.querySelector(".form")
const input = document.querySelector("input")
const searchBtn = document.querySelector(".search-btn")

const profile = document.querySelector(".profile-pic")
const profileName = document.querySelector(".name")
const userName = document.querySelector(".username")
const joined = document.querySelector(".joined")
const bio = document.querySelector(".bio")
const repos = document.querySelector(".repos")
const followers = document.querySelector(".followers")
const following = document.querySelector(".following")
const location = document.querySelector(".location")
const website = document.querySelector(".website")
const twitter = document.querySelector(".twitter")
const company = document.querySelector(".company")

const light = document.querySelector(".light");
const dark = document.querySelector(".dark");


light.addEventListener("click", () => {

light.classList.add("hidden");
dark.classList.remove("hidden");
document.body.classList.add("light");
})

dark.addEventListener("click", () => {
    
dark.classList.add("hidden");
light.classList.remove("hidden");
document.body.classList.remove("light")
})


searchBtn.addEventListener("click", e => {
    e.preventDefault();

const notAvailable = document.querySelectorAll(".notAvailable");

notAvailable.forEach(link => {
    link.classList.remove("notAvailable")
})

const url = `https://api.github.com/users/${input.value}`;
async function getUrl() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data)

    profile.src = `${data.avatar_url}`
    profileName.innerHTML = `${data.name}`;

    if (data.name == null) {
        profileName.innerHTML = `Name not found`
    }

    userName.innerHTML = `@${data.login}`;

    const dateJoined = data.created_at.slice(0, data.created_at.length - 10)

    joined.innerHTML = `Joined ${dateJoined}`;
    bio.innerHTML = `${data.bio}`;

    if (data.bio == null) {
        bio.innerHTML =`This profile has no bio`;
    }
    
    repos.innerHTML = `<span class="heading">Repos</span> <br>${data.public_repos}`;
    followers.innerHTML = `<span class="heading">Followers</span> <br>${data.followers}`;
    following.innerHTML = `<span class="heading">Following</span> <br>${data.following}`;

    location.innerHTML = `<span class="icon"><img src="assets/icon-location.svg" alt="location icon"></span> ${data.location}`;

    if (data.location == null) {
        location.innerHTML = `<span class="icon"><img src="assets/icon-location.svg" alt="location icon"></span>
        Not Available`;
        location.classList.add("notAvailable")
    }

    twitter.innerHTML = `<span class="icon"><img src="assets/icon-twitter.svg" alt="twitter icon" /></span> ${data.twitter}`;

    if (data.twitter == undefined) {
        twitter.innerHTML = `<span class="icon"><img src="assets/icon-twitter.svg" alt="twitter icon" /></span>
        Not Available`;
        twitter.classList.add("notAvailable")
    }

    company.innerHTML = `<span class="icon"><img src="assets/icon-company.svg" alt="company icon" /></span> ${data.company}`;

    if (data.company == null) {
        company.innerHTML = `<span class="icon"><img src="assets/icon-company.svg" alt="company icon" /></span>
        Not Available`;
        company.classList.add("notAvailable")
    }

    website.innerHTML = `<span class="icon"><img src="assets/icon-website.svg" alt="website icon" /></span> ${data.blog}`;

    if (data.blog == "") {
        website.innerHTML = `<span class="icon"><img src="assets/icon-website.svg" alt="website icon" /></span>
        Not Available`
        website.classList.add("notAvailable")
    }

}
getUrl()
})