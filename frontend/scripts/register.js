function callRegister()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var email = document.getElementById("email").value;
    if (password != cpassword)
    {
        alert("Password and Confirm Password must be same");
        return;
    }
    var data = {
        name: username,
        password: password,
        email: email
    };
    fetch("http://127.0.0.1:5000/api/user", {
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
            document.getElementById("status").innerHTML = "Successfully Registered! <a href='/'>Login here.</a>";
        }
    }).catch((err) => {
        console.log(err);
    });
}