let likeCount = 0;

const likeButton = document.getElementById('likeButton');
const likeCountText = document.getElementById('likeCount');

likeButton.addEventListener('click', function() {
    likeCount++;
    likeCountText.textContent = likeCount + ' likes';
});
