const userInfo = () => {
    const result = prompt('Input Your Favourite Number')
    if (result) {
        const results = parseFloat(result) + 200;
        alert(results)
    }
}