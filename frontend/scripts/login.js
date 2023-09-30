function callLogin()
{
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var data = {
        email: email,
        password: password
    };
    console.log(data);
    fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.error)
        {
            alert(data.error);
        }
        else
        {
            localStorage.setItem("userInfo", JSON.stringify(data));
            window.location.href = "/home";
        }
    }).catch((err) => {
        console.log(err);
    });
}