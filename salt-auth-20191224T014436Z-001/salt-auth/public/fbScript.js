
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function () {
  FB.init({
    appId: '827178304339896',
    cookie: true,
    xfbml: true,
    version: 'v3.1'
  });
  FB.AppEvents.logPageView();

  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};

function statusChangeCallback(response) {
 
  
  if (response.status === 'connected') {
    const { userID, accessToken } = response.authResponse;

    document.querySelector('#userID').value = userID;
    document.querySelector('#token').value = accessToken;
    document.querySelector('form button').click();

  } else { 
    document.getElementById('status').innerHTML = 'Please log' + 'into this app.';
  }
}

function checkLoginState() {
  console.log('checkLoginState');
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

// function testAPI() {
//   console.log('Welcome! Fetching your information ....');
//   FB.api('/me', response => {
//     console.log('Successful login for:' + response.name);
//     document.getElementById('status').
//       innerHTML = 'Thanks for logging in,' + response.name + '!';
//   });
// }

function logout() {
  FB.logout ( function ( response ) { 
    console.log('person loged out',   response.a);
   }); 
}
