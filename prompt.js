const userInfo = () => {
    const result = prompt('Input Your OTP')
    if (result) {
        const results = parseFloat(result) + 200;
        alert(results)
    }
}