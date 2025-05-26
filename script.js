function openNotebook() {
    document.querySelector('.landing').classList.add('hidden');
    document.querySelector('.notebook-container').classList.remove('hidden');
  }
  
  let currentPage = 1;
  const totalPages = 3;
  
  function nextPage() {
    const current = document.getElementById(`page${currentPage}`);
    current.classList.add('hidden');
  
    currentPage++;
    if (currentPage <= totalPages) {
      const next = document.getElementById(`page${currentPage}`);
      next.classList.remove('hidden');
    } else {
      alert("That's the end! I hope you liked it 💖");
    }
  }
  