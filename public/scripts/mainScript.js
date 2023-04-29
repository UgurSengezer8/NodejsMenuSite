function yemekEkle(params) {
    const elem = document.createElement("div")
    document.getElementById('erey').innerHTML +=`<div><input type='hidden' name=yemeks value='${params}'></div>`;
}