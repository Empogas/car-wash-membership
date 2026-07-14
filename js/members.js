async function lookupMember() {

  let id = document.getElementById("customerID").value;

  const { data, error } = await supabaseClient
    .from("Members")
    .select("*")
    .eq("customer_id", id)
    .single();

  if (error || !data) {
    document.getElementById("result").innerHTML =
      "<hr><div class='expired'>NOT FOUND</div>";
    return;
  }

  const today = new Date();
  const expiration = new Date(data.expires_at);

  const difference = expiration - today;

  const daysRemaining = Math.ceil(
    difference / (1000 * 60 * 60 * 24)
  );

  document.getElementById("result").innerHTML = `

<div class="membership-card">

<img src="assets/emporium-logo.png" width="250">

<h2>${data.first_name} ${data.last_name}</h2>

<hr>

<div class="${daysRemaining > 0 ? "active" : "expired"}">
${daysRemaining > 0 ? "🟢 ACTIVE MEMBER" : "🔴 EXPIRED"}
</div>

<p>Plate: ${data.license_plate}</p>

<p>Vehicle: ${data.vehicle_color} ${data.vehicle_make} ${data.vehicle_model}</p>

<p>Expires: ${data.expires_at}</p>

<p>⏳ ${daysRemaining > 0 ? daysRemaining + " days remaining" : "Expired"}</p>

<img class="card-qr" src="${data.qr_image}" width="150">

</div>

`;
}