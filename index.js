class Profile {
    constructor(profile) { 
      this.profile = profile; 
    }
  
    render() {
    
      let html = `
        <div class="details">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="">
          <div class="profileview">
            <h2>${this.profile.name}</h2>
            <h3>${this.profile.username}</h3>
            <p>${this.profile.email}</p>
            <h2>${this.profile.address.city}</h2> <!-- fix the property name to address.city -->
            <p>${this.profile.address.street}</p>
            <p>${this.profile.address.suite}</p>
            <p>${this.profile.address.zipcode}</p>
            <p>${this.profile.address.geo.lat}</p> <!-- fix the property name to address.geo.lat -->
            <p>${this.profile.address.geo.lng}</p> <!-- fix the property name to address.geo.lng -->
            <p>${this.profile.phone}</p>
            <p>${this.profile.website}</p>
            <h2>${this.profile.company.name}</h2> <!-- fix the property name to company.name -->
            <p>${this.profile.company.catchPhrase}</p>
            <p>${this.profile.company.bs}</p>
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
          const postItem = document.createElement('li');
          postItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          `;
          this.postList.appendChild(postItem);
        });
      });
  }
}

const posts = new Posts();
    
   