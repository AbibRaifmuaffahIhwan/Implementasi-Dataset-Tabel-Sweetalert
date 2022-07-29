var nameError = document.getElementById("nameeror");
var emailError = document.getElementById("emaileror");
var alamatError = document.getElementById("alamateror");
var tinggiError = document.getElementById("tinggieror");
var beratError = document.getElementById("berateror");

function validatename(){
    var name = document.getElementById("bioname").value;

    if(name.length == ""){
        nameError.innerHTML = "Nama tidak boleh kosong";
        return false;
    }
    else{
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    }
}

function validateemail(){
    var email = document.getElementById("bioemail").value;

    if(email.length == ""){
        emailError.innerHTML = "Email tidak boleh kosong";
        return false;
    }
    else{
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    } 
}

function validatealamat(){
    var alamat = document.getElementById("bioalamat").value;

    if(alamat.length == ""){
        alamatError.innerHTML = "Alamat tidak boleh kosong";
        return false;
    }
    else{
    alamatError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    } 
}

function validatetinggi(){
    var tinggi = document.getElementById("biotinggi").value;

    if(tinggi.length == ""){
        tinggiError.innerHTML = "Tinggi tidak boleh kosong";
        return false; 
    }
    else{
    tinggiError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    } 
}
function validateberat(){
    var berat = document.getElementById("bioberat").value;

    if(berat.length == ""){
        beratError.innerHTML = "Berat tidak boleh kosong";
        return false; 
    }
    else{
    beratError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    } 
}






