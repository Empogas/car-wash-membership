function startScanner(){

const scanner = new Html5Qrcode("reader");

scanner.start(
  { facingMode: "environment" },
  {
    fps: 10,
    qrbox: 250
  },
  (decodedText)=>{

    const url = new URL(decodedText);

    const id = url.searchParams.get("id");

    document.getElementById("customerID").value = id;

    scanner.stop();

    lookupMember();

  }
);

}