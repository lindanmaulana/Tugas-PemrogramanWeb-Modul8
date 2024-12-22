const dataUser = {
    username: "user123",
    password: "admin123"
}

const handleSubmit = (e) => {
    e.preventDefault()
    const username = e.target.username.value
    const password = e.target.password.value

    if(username === dataUser.username && password === dataUser.password) {
        alert("Berhasil")
    } else {
        alert("Gagal")
    }
}