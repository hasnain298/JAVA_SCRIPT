console.log("Js Is Running!");



const posts = [
   

  {
    profilePic: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg", // Unique avatar
    name: "Muhammad Hasnain",
    date: "03-02-2026",
    caption: "Exploring the hidden gems of the city today! 🏛️",
    imgUrl: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    reactions: 152,
    comment: 24,
    shares: 82
  },
  {
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWoBiUx4vdA4ApwQhFJrYiE6B5Unrj6xv3A&s", // Unique avatar
    name: "Zain Ahmed",
    date: "04-02-2026",
    caption: "Nothing beats a fresh cup of coffee and some code. ☕",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyWoBiUx4vdA4ApwQhFJrYiE6B5Unrj6xv3A&s",
    reactions: 89,
    comment: 12,
    shares: 5
  },
  {
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtpkpW1PIgSqMA7yga62JyNtf3dVQicYE_g&s", // Unique avatar
    name: "Ayesha Khan",
    date: "05-02-2026",
    caption: "The mountain air is so refreshing! 🏔️",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJtpkpW1PIgSqMA7yga62JyNtf3dVQicYE_g&s",
    reactions: 210,
    comment: 35,
    shares: 15
  },
  {
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiiUlZsjpYkgQhaGS1lKrCPzWrp4ME8CLmA&s", // Unique avatar
    name: "Omar Farooq",
    date: "06-02-2026",
    caption: "New tech setup is finally ready for the project. 🚀",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiiUlZsjpYkgQhaGS1lKrCPzWrp4ME8CLmA&s",
    reactions: 320,
    comment: 88,
    shares: 42
  },
  {
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s", // Unique avatar
    name: "Fatima Noor",
    date: "07-02-2026",
    caption: "Sunday vibes with a good book. 📖",
    imgUrl: "https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png",
    reactions: 45,
    comment: 8,
    shares: 2
  },
  {
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s", // Unique avatar
    name: "Ali Raza",
    date: "08-02-2026",
    caption: "Just another day chasing sunsets. 🌅",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFdF5ZGd-DeMBE8euI43BKCo2OmunMSnV-A&s",
    reactions: 567,
    comment: 120,
    shares: 95
  },
  {
    profilePic: "https://i.pravatar.cc", // Unique avatar
    name: "Hina Mani",
    date: "09-02-2026",
    caption: "Street photography is all about the timing. 📸",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA-7UIYLcEK1mAwct1XgW8aSMnvm3ZEQBYgQ&s",
    reactions: 132,
    comment: 19,
    shares: 7
  },
  {
    profilePic: "https://www.equinetmedia.com/hubfs/How-to-find-b2b-blog-images.png", // Unique avatar
    name: "Bilal Sheikh",
    date: "10-02-2026",
    caption: "Dinner is served! Homemade pasta. 🍝",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpAh63HncAuJOC6TxWkGLYpS0WwNXswz9MA&s",
    reactions: 98,
    comment: 22,
    shares: 11
  },
  {
    profilePic: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg", // Unique avatar
    name: "Maryam Jameel",
    date: "11-02-2026",
    caption: "Minimalism is the key to focus. ✨",
    imgUrl: "https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg",
    reactions: 442,
    comment: 56,
    shares: 30
  },
  {
    profilePic: "https://cdn.pixabay.com/photo/2016/04/05/11/04/india-1309206_1280.jpg", // Unique avatar
    name: "Usman Ghani",
    date: "12-02-2026",
    caption: "The city lights from the rooftop are stunning. 🏙️",
    imgUrl: "https://cdn.pixabay.com/photo/2016/04/05/11/04/india-1309206_1280.jpg",
    reactions: 275,
    comment: 41,
    shares: 18
  },
  {
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AKF7LelsXtbK8YAYYdiPrDMZdFd74ZTgkQ&s", // Unique avatar
    name: "Sana Javed",
    date: "13-02-2026",
    caption: "Grateful for another beautiful morning. ☀️",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1AKF7LelsXtbK8YAYYdiPrDMZdFd74ZTgkQ&s",
    reactions: 189,
    comment: 27,
    shares: 9
  }
];




let postContainer = document.getElementById("post-container");
let createPost = document.getElementById("post");
let postInp = document.getElementById("post-input");
let storyContainer = document.getElementById("story-container");
let closePost = document.getElementById("close");
const createPostForm = document.getElementById("create-post-form");
// console.log(createPostForm);


// postInp.addEventListener("click" , () =>  {
//   createPost.style.display = "flex"
// })
closePost.addEventListener("click" , () => {
  createPost.style.display = "none"
})
createPostForm.addEventListener("click", (e) => {
  e.stopPropagation();
});

// createPostForm.addEventListener("submit" , inputPostHandler(e))


const setUserInPostDialoge = () => {
  const usernameP = document.getElementById("loggedin-username");

  const userfromDb = JSON.parse(localStorage.getItem("users"));
// console.log(userfromDb[0]);

 const love =  usernameP.innerText = `${userfromDb[0].firstName} ${userfromDb[0].lastName}`;
  // console.log(love)
};

setUserInPostDialoge();



 const stories = [
  {
    fullName: "Emma Johnson",
    profilePic: "https://i.pravatar.cc/150?img=1",
    storyFile: "../assets/OIP.jpg",
  },
  {
    fullName: "Liam Carter",
    profilePic: "https://i.pravatar.cc/150?img=2",
    storyFile: "https://picsum.photos/400/700?random=2",
  },
  {
    fullName: "Sophia Martinez",
    profilePic: "https://i.pravatar.cc/150?img=3",
    storyFile: "https://picsum.photos/400/700?random=3",
  },
  {
    fullName: "Noah Williams",
    profilePic: "https://i.pravatar.cc/150?img=4",
    storyFile: "https://picsum.photos/400/700?random=4",
  },
  {
    fullName: "Ava Brown",
    profilePic: "https://i.pravatar.cc/150?img=5",
    storyFile: "https://picsum.photos/400/700?random=5",
  },
  {
    fullName: "Olivia Anderson",
    profilePic: "https://i.pravatar.cc/150?img=6",
    storyFile: "https://picsum.photos/400/700?random=6",
  },
  {
    fullName: "Ethan Miller",
    profilePic: "https://i.pravatar.cc/150?img=7",
    storyFile: "https://picsum.photos/400/700?random=7",
  },
  {
    fullName: "Isabella Garcia",
    profilePic: "https://i.pravatar.cc/150?img=8",
    storyFile: "https://picsum.photos/400/700?random=8",
  },
  {
    fullName: "James Wilson",
    profilePic: "https://i.pravatar.cc/150?img=9",
    storyFile: "https://picsum.photos/400/700?random=9",
  },
  {
    fullName: "Mia Thompson",
    profilePic: "https://i.pravatar.cc/150?img=10",
    storyFile: "https://picsum.photos/400/700?random=10",
  },
  {
    fullName: "Benjamin Moore",
    profilePic: "https://i.pravatar.cc/150?img=11",
    storyFile: "https://picsum.photos/400/700?random=11",
  },
  {
    fullName: "Charlotte Taylor",
    profilePic: "https://i.pravatar.cc/150?img=12",
    storyFile: "https://picsum.photos/400/700?random=12",
  },
  {
    fullName: "Lucas Hernandez",
    profilePic: "https://i.pravatar.cc/150?img=13",
    storyFile: "https://picsum.photos/400/700?random=13",
  },
  {
    fullName: "Amelia Clark",
    profilePic: "https://i.pravatar.cc/150?img=14",
    storyFile: "https://picsum.photos/400/700?random=14",
  },
  {
    fullName: "Henry Lewis",
    profilePic: "https://i.pravatar.cc/150?img=15",
    storyFile: "https://picsum.photos/400/700?random=15",
  },
];



// let story;
// const createStoryHTML = () => {
//     for(let i = 0; i < stories.length; i++){
//         // console.log(stories[i])
//         story = stories[i]

//     const storyHTML= ` <div class="story" style="background-image: url(${story.storyFile}));">
//                     <div class="story-profilepic">
//                  <img src="${story.profilePic}" alt="">
//                     </div>
//                     <div class="story-content">
//                    <p>${story.fullName}</p>
//                     </div>
//                 </div> `
//         storyContainer.innerHTML += storyHTML 
//     }
   
   
// }

// createStoryHTML()


const createStoryHTMLThroughMap = () => {
  const storyHTML = stories.map((story,index) => {
    return ` <div class="story" style="background-image: url(${story.storyFile}));">
                     <div class="story-profilepic">
                  <img src=${story.profilePic} alt="">
                     </div>
                     <div class="story-content">
                    <p> ${story.fullName}</p>
                     </div>
               </div>`
  })
  // console.log(storyHTML)
  storyContainer.innerHTML = storyHTML.join("")
}

createStoryHTMLThroughMap();


// Stories end here 

function myfn(post,index ) {
  // e.preventDefualt()
  console.log(post);
  
 return ` <div class="post">
                    <div class="post-header">
                        <div class="profile-post-content">
                    <div class="post-img">
                        <img  style="height: 40px; width: 40px;border-radius: 50%;"  src="${post.profilePic}" alt="">
                    </div>
                    <div class="post-name-date">
                        <p id="name">${index +1} : ${post.name}</p>
                        <p id="date">${post.date}</p>
                    </div>
                    </div>
                    <div class="post-header-icons">
                      <i class="fa-solid fa-ellipsis"></i>
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                    </div>
                    <div class="post-content">
                        <p>${post.caption}</p>
                    </div>
                    <div class="post-user-img-posted">
                        <img src="${post.imgUrl}" alt="">
                    </div>
                    <div class="post-reaction">
                   <div class="post-react-icons">
                     <i class="fa-solid fa-thumbs-up"></i>
                     <i class="fa-regular fa-face-grin-beam-sweat"></i>
                     <p>${post.reactions}</p>
                   </div>
                   <div class="post-comments">
                    <p>${post.comment}</p>
                    <p>${post.shares}</p>
                   </div>
                    </div class="post-footer">
                    <div class="post-footer-icons">
                        <div><i class="fa-regular fa-thumbs-up"></i> Like</div>
                        <div><i class="fa-regular fa-comment"></i> Comment</div>
                        <div> <i class="fa-regular fa-share-from-square"></i> Share</div>
                    </div>

                    </div>
                    </div>`
}

const createPostThroughHTMLMap = () => { 
  const post = posts.map((post,index) => {
    return myfn(post,index)
  })

  postContainer.innerHTML = post.join("")
} 

// createPostThroughHTMLMap()

const postHTML = (post) => {
  console.log(post);
  
  return `<div class="post">
                    <div class="post-header">
                        <div class="profile-post-content">
                    <div class="post-img">
                    <img  style="height: 40px; width: 40px;border-radius: 50%;"  src=${post.profilePic}alt="">
                    </div>
                    <div class="post-name-date">
                        <p id="name"> ${post.name}</p>
                        <p id="date">${post.date}</p>
                    </div>
                    </div>
                    <div class="post-header-icons">
                      <i class="fa-solid fa-ellipsis"></i>
                    <i class="fa-solid fa-xmark"></i>
                    </div>
                    </div>
                    <div class="post-content">
                        <p>${post.caption}</p>
                    </div>
                    <div class="post-user-img-posted">
                        <img src="${post.imgUrl}" alt="">
                    </div>
                    <div class="post-reaction">
                   <div class="post-react-icons">
                     <i class="fa-solid fa-thumbs-up"></i>
                     <i class="fa-regular fa-face-grin-beam-sweat"></i>
                     <p>${post.reactions}</p>
                   </div>
                   <div class="post-comments">
                    <p>${post.comment}</p>
                    <p>${post.shares}</p>
                   </div>
                    </div class="post-footer">
                    <div class="post-footer-icons">
                        <div><i class="fa-regular fa-thumbs-up"></i> Like</div>
                        <div><i class="fa-regular fa-comment"></i> Comment</div>
                        <div> <i class="fa-regular fa-share-from-square"></i> Share</div>
                    </div>

                    </div>
                    </div>`
}

 const createPostHTMLThroughMap = () => {
 let postHTMLForContainer = posts.map((post) => postHTML(post))
// console.log(postHTMLForContainer)
 postContainer.innerHTML = postHTMLForContainer.join("")
//  console.log(postContainer);
 console.log(postHTMLForContainer);
 
 }

createPostHTMLThroughMap()

const inputPostHandler = () => {
  // event.preventDefualt()
  const caption = document.getElementById("caption");
  const imageUrl = document.getElementById("image-url");
  const getUserfromDbForInputs = JSON.parse(localStorage.getItem("users")) || [];
  let user = getUserfromDbForInputs[0]
  console.log(user)
  console.log(caption)
// e.preventDefault(); 
  const newObj = {
    // e.preventDefault()
    inputUserName :`${user.firstName}  ${user.lastName}`,
    profilePic : `https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg`,
    date : "19 Jan 2025",
    caption : caption.value,
    imageUrl : imageUrl.value,
    reactions : 0,
    comment : 0,
    shares :0
  }

  posts.unshift(newObj)
  localStorage.setItem("posts" , JSON.stringify(posts));
 createPostHTMLThroughMap();

  // postContainer.style.display = "none";

  
}
let postBtn = document.getElementById("postbtn")
postBtn.addEventListener("click" , (e) => {
  e.preventDefault()
  inputPostHandler()
  // postHTML()

} )

//  console.log(user)
  // console.log(postContainer);
// profilePic: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg", // Unique avatar
//     name: "Muhammad Hasnain",
//     date: "03-02-2026",
//     caption: "Exploring the hidden gems of the city today! 🏛️",
//     imgUrl: "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
//     reactions: 152,
//     comment: 24,
//     shares: 82

// inputPostHandler()
// const handleCreatePost = () => {
//   // e.preventDefault()
//   const caption = document.getElementById("caption");
//   const imageUrl = document.getElementById("image-url");
//   const user = JSON.parse(localStorage.getItem("users")) || [];
//   console.log(user)

//   const newObj = {
//     name : ``,
//     profilePic: `https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpgxxxxxxxxxgrvdfs`,
//     date : `29 Jan 2026`,
//     caption : caption.value,
//     imageUrl : imageUrl.value,
//     reactions : 0,
//     comment: 0,
//     shares : 0,
//   }

//   posts.unshift(newObj);
//   localStorage.setItem(posts, JSON.stringify("posts"))


// createPostHTMLThroughMap()

// }
// handleCreatePost()