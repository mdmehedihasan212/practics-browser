const confirmBtn = () => {
    const userComment = confirm('Do you want to see the location of your website?')
    console.log(userComment);
    if (userComment === true) {
        console.log('https://web.programming-hero.com/');
    }
}