function submitReview() {
  const input = document.getElementById('reviewInput');
  const reviewList = document.getElementById('reviewList');
  if (input.value.trim()) {
    const li = document.createElement('li');
    li.textContent = input.value;
    reviewList.appendChild(li);
    input.value = '';
  }
}