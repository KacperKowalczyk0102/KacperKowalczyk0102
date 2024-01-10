document.addEventListener('DOMContentLoaded', function () {
    // Fetch and display blog posts dynamically (You can replace this with your actual blog data)
    const blogPosts = [
        { title: 'First Post', content: 'This is my first blog post.' },
        { title: 'Second Post', content: 'Another blog post to share my thoughts.' }
    ];

    const blogPostsContainer = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // You can add code here to handle the form submission (e.g., send data to a server)
        alert('Form submitted! (This is just a placeholder)');
    });
});
