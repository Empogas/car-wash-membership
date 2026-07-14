async function login() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const remember = document.getElementById("rememberMe").checked;

const { data, error } = await supabaseClient.auth.signInWithPassword({
  email: email,
  password: password,
  options: {
    persistSession: remember
  }
});

  if (error) {
    document.getElementById("loginMessage").innerHTML = error.message;
    return;
  }

  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";

}


async function logout() {

  await supabaseClient.auth.signOut();

  document.getElementById("app").style.display = "none";
  document.getElementById("login").style.display = "block";

}