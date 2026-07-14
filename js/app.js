window.onload = function(){

  const params = new URLSearchParams(window.location.search);

  const id = params.get("id");

  if(id){

    document.getElementById("customerID").value = id;

    setTimeout(() => {
      lookupMember();
    }, 1000);

  }

}



supabaseClient.auth.getSession().then(({ data }) => {

  if (data.session) {

    document.getElementById("login").style.display = "none";
    document.getElementById("app").style.display = "block";

  }

});