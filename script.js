document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display blog posts dynamically (You can replace this with your actual blog data)
    const blogPosts = [
        { title: 'Pierwszy post', content: 'Hej, jestem studentem 3 roku Informatyki Stosowanej na uczelni Ekonimicznej w Krakowie.' },
        { title: 'Drugi post', content: 'Hej to znowu ja, przygotowuję tą strone hobbistycznie, uczę się nowych rzeczy, testuje, jest to moja lekka odskocznia gdzie mogę zrobić coś dla siebie.' }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });

});
