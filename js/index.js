const btn_share = document.querySelector("#btn-share");
const bubble = document.querySelector("#bubble");
const profile_container = document.querySelector("#profile-container");
const bubble_responsive = document.querySelector("#bubble-responsive");
const btn_share_responsive = document.querySelector('#btn-share-responsive')

btn_share.addEventListener("click", () => {
  if (screen.width <= 455) {
    bubble_responsive.classList.toggle("block");
  } else {
    bubble.classList.toggle("block");
  }
});

btn_share_responsive.addEventListener('click', () => {
    bubble_responsive.classList.toggle('block');
})