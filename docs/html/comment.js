// comment.js - Attach this to any HTML page to enable text selection + commenting
(function() {
  function showCommentButton(text, rect) {
    removeCommentButton();
    const btn = document.createElement('button');
    btn.textContent = 'Comment';
    btn.className = 'comment-btn';
    btn.id = 'comment-btn';
    btn.style.position = 'fixed';
    btn.style.top = `${rect.bottom + window.scrollY + 5}px`;
    btn.style.left = `${rect.left + window.scrollX}px`;
    btn.style.zIndex = 9999;
    btn.onclick = function(ev) {
      ev.preventDefault();
      showModal(text);
    };
    document.body.appendChild(btn);
    setTimeout(() => {
      document.addEventListener('mousedown', removeCommentButton, { once: true });
    }, 0);
  }
  function removeCommentButton() {
    const btn = document.getElementById('comment-btn');
    if (btn) btn.remove();
  }
  function showModal(selectedText) {
    let modal = document.getElementById('comment-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'comment-modal';
      modal.innerHTML = `
        <div class="modal-content" style="background:#232834;color:#e6eaf1;border-radius:8px;padding:2em;max-width:400px;margin:10vh auto;box-shadow:0 4px 24px #0007;">
          <h2>Comment on Selection</h2>
          <div id="selected-text" style="font-size:0.95em;background:#181c22;padding:0.7em;border-radius:4px;margin-bottom:1em;"></div>
          <textarea id="comment-input" placeholder="Enter your comment..." style="width:100%;min-height:80px;margin-bottom:1em;border-radius:6px;border:1px solid #58a6ff;background:#181c22;color:#e6eaf1;font-size:1em;padding:0.5em;"></textarea><br/>
          <button id="submit-comment">Submit</button>
          <button id="cancel-comment">Cancel</button>
        </div>
      `;
      modal.style.position = 'fixed';
      modal.style.zIndex = 10000;
      modal.style.left = 0;
      modal.style.top = 0;
      modal.style.width = '100vw';
      modal.style.height = '100vh';
      modal.style.background = 'rgba(24,28,34,0.9)';
      document.body.appendChild(modal);
      document.getElementById('cancel-comment').onclick = closeModal;
      document.getElementById('submit-comment').onclick = submitComment;
    }
    document.getElementById('selected-text').textContent = selectedText;
    modal.style.display = 'block';
    document.getElementById('comment-input').value = '';
  }
  function closeModal() {
    const modal = document.getElementById('comment-modal');
    if (modal) modal.style.display = 'none';
  }
  async function submitComment() {
    const selectedText = document.getElementById('selected-text').textContent;
    const comment = document.getElementById('comment-input').value;
    if (!comment.trim()) { alert('Please enter a comment.'); return; }
    const apiUrl = '/api/comments'; // Change if needed
    const payload = {
      page: window.location.pathname,
      selectedText,
      comment,
      timestamp: new Date().toISOString()
    };
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        alert('Comment submitted!');
        closeModal();
      } else {
        alert('Failed to submit comment.');
      }
    } catch (e) {
      alert('Error submitting comment.');
    }
  }
  document.addEventListener('mouseup', function(e) {
    const selection = window.getSelection();
    const text = selection && selection.toString().trim();
    if (text && text.length > 0) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      showCommentButton(text, rect);
    }
  });
})();
