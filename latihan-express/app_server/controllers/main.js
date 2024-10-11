//CONTROLLER INDEX
const index = (req ,res) => {
    res.render("index",{title: "express MVC"});
}

//controllers kontak
const kontak = (req,res) => {
    res.render("kontak", {title: "ini halaman kontak"});
}

//controllers halaman profil
const profil = (req,res) => {
    res.render("profil", {title: "ini halaman profil"});
}

module.exports= {index, kontak, profil};