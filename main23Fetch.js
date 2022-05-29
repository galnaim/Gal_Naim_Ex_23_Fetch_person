const pic = fetch("https://randomuser.me/api/")

const showPersonbtn = document.querySelector("#show-user-btn")

showPersonbtn.onclick = function(){

const Sagoor = pic.then(function(closedPic){
    return closedPic.json();
})
Sagoor.then(function(openedPic){
    const details =  openedPic.results[0];
    const canvas = document.querySelector(".show-User")
    let userphoto = document.createElement("img")
    userphoto.src = details.picture.medium
    canvas.append(userphoto)

    let username = document.createElement("div")
    username.innerHTML = details.name.first
    canvas.append(username)

    let userage = document.createElement("div")
    userage.innerHTML = odetails.dob.age
    canvas.append(userage)

    console.log(openedPic.results[0].name.first);
});
}
