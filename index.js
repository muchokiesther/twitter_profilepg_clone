class Profile {
    constructor(profile) { 
      this.profile = profile; 
    }
  
    render() {
    
      let html = `
        <div class="details">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNM1_a0KoW78kq15dGXxEmwcM6mXzMI2Hr5A&usqp=CAU" alt="">
          <div class="profileview">
          <div class ="p_dets">
            <h2>${this.profile.name } <ion-icon name="checkmark-circle" ></h2> 
            <h3>${this.profile.username}</h3>
            <p>${this.profile.email}</p>
            </div>
            <h2>${this.profile.address.city}</h2> 
            <div class ="content">
            <p>${this.profile.address.street}</p>
            <p>${this.profile.address.suite}</p>
            <p>${this.profile.address.zipcode}</p>
            <p>${this.profile.address.geo.lat}</p> 
            <p>${this.profile.address.geo.lng}</p> 
            <h4>${this.profile.phone}</h4>
            <p>${this.profile.website}</p>
            </div>
            <h2>${this.profile.company.name}</h2> 
            <div class = "company_dets">
            <p>${this.profile.company.catchPhrase}</p>
            <p>${this.profile.company.bs}</p>
            </div>
          
            <div class="title_emoji">
            <div class ="titless">
            <p><ion-icon name="bag-remove-outline"></ion-icon>Science and Technology<ion-icon name="information-circle-outline"></ion-icon></p>
            <p><ion-icon name="location-outline"></ion-icon>Ethereum</p>
            <p><ion-icon name="link-outline"></ion-icon>Vitto.cc</p>
            </div>
            <p><ion-icon name="calendar-outline"></ion-icon>Joined August 2020</p>
          </div>
          <div class ="followingcount">
          <p> <b>322</b> <span>following</span></p>
          <p> <b>110.8K</b> <span> followers </span></p>
          </div>
          </div>
        </div>
      `;
  
      return html;
    }
  }
  
  class ProfilePage {
    async render() {
      let profiles = await this.fetchProfiles();
      let html = '';
      for (let profile of profiles) {
        const profileHTML = new Profile(profile).render();
        html += profileHTML; 
      }
      return html;
    }
  
    async fetchProfiles() { 
      const response = await fetch('http://localhost:3001/profiles'); 
      const profiles = await response.json();
      return profiles;
    }
  }
  
  class t_profile{
    static async Init (){
        let profilepage = new ProfilePage()
        let htmlProfile = await profilepage.render()
       // console.log(htmlProfile);
        let t_profile = document.querySelector('.t_profile')
        t_profile.innerHTML=htmlProfile
    }
  }

   t_profile.Init()


   class Posts {
  constructor() {
    this.viewButton = document.getElementById('viewbtn');
    this.postList = document.getElementById('tweets');
    this.viewButton.addEventListener('click', () => {
      this.fetchPosts();
    });
  }

  fetchPosts() {
    fetch('  http://localhost:3001/posts')
      .then(response => response.json())
      .then(posts => {
        this.postList.innerHTML = '';
        posts.forEach(post => {
          const postItem = document.createElement('p');
          postItem.innerHTML = `
          <div class="posts">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNM1_a0KoW78kq15dGXxEmwcM6mXzMI2Hr5A&usqp=CAU" alt="">
         
          <div class ="text_cont">
          <h5>Leanne Graham <ion-icon name="checkmark-circle" ></ion-icon></h5>
          <h4>${post.title}</h4>
          <p>${post.body}</p>
          </div>
            </div>
          `;
          this.postList.appendChild(postItem);
        });
      });
  }
}

const posts = new Posts();
    
   