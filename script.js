const imageUrl = "https://skoop-dev-code-agent.s3.us-east-1.amazonaws.com/n8n-continue%2Faigen-1775012896795%2Fassets%2Fhello_world_graphic-1775013023122.png";

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('image-container');
    const img = new Image();

    img.onload = () => {
        container.innerHTML = '';
        container.appendChild(img);
    };

    img.onerror = () => {
        container.innerHTML = '<p>Error loading image.</p>';
    };

    img.src = imageUrl;
});
