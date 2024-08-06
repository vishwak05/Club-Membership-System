document.addEventListener('DOMContentLoaded', function() {
    const profileSection = document.getElementById('profile-section');
    
    // Example user data
    const user = {
        isLoggedIn: false, // Change this to true if the user is logged in
        username: 'Sai Vishwak',
        profilePicture: '"C:\Users\vishw\Downloads\Sai Vishwak profile.jpg"'
    };
    
    if (user.isLoggedIn) {
        profileSection.innerHTML = `
            <img src="${user.profilePicture}" alt="Profile Picture">
            <span class="username">${user.username}</span>
        `;
    } else {
        profileSection.innerHTML = `
            <a href="login.html" class="sign-in">Login/SignUp</a>
        `;
    }
});
