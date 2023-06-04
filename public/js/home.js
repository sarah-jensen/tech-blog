document.addEventListener('DOMContentLoaded', () => {
    const blogCards = document.querySelectorAll(".blog-card");
    
    blogCards.forEach((card) => {
        const blogId = card.dataset.id;
        card.addEventListener('click', () => {
            console.log('view blog', blogId);
            window.location.href = `/viewPost/${blogId}`;
        });
    });
});