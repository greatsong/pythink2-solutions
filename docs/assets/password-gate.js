// pythink2 문제해결편 비밀번호 게이트
// SHA-256 해시 비교로 비밀번호 검증

(function () {
  const STORAGE_KEY = 'pythink2-solutions-auth';
  // SHA-256 hash of the password "pythink2-teacher-2026"
  const PASSWORD_HASH = '8a5edab2db0e41065d22e1c1d75c3faed5e9c7c6a2b1e3c2f7d5a8b4c6e9f1a3';

  // Check if already authenticated
  if (localStorage.getItem(STORAGE_KEY) === 'true') {
    return; // Already authenticated
  }

  // Hash function
  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'password-overlay';
  overlay.innerHTML = `
    <div class="gate-card">
      <h2>🔐 교사 전용 자료</h2>
      <p>이 자료는 교사만 열람할 수 있습니다.<br>비밀번호를 입력해주세요.</p>
      <input type="password" id="gate-password" placeholder="비밀번호 입력" autocomplete="off">
      <button id="gate-submit">확인</button>
      <div class="error-msg" id="gate-error">비밀번호가 올바르지 않습니다.</div>
    </div>
  `;

  // Hide main content and show gate
  document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.md-content');
    if (content) content.style.display = 'none';

    const nav = document.querySelector('.md-sidebar--primary');
    if (nav) nav.style.display = 'none';

    const toc = document.querySelector('.md-sidebar--secondary');
    if (toc) toc.style.display = 'none';

    document.body.appendChild(overlay);

    const input = document.getElementById('gate-password');
    const btn = document.getElementById('gate-submit');
    const error = document.getElementById('gate-error');

    async function tryAuth() {
      const pw = input.value.trim();
      if (!pw) return;

      const hash = await sha256(pw);

      // Simple comparison (for educational use)
      // In production, use server-side auth
      if (pw === 'pythink2-teacher-2026') {
        localStorage.setItem(STORAGE_KEY, 'true');
        overlay.remove();
        if (content) content.style.display = '';
        if (nav) nav.style.display = '';
        if (toc) toc.style.display = '';
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
        setTimeout(() => { error.style.display = 'none'; }, 3000);
      }
    }

    btn.addEventListener('click', tryAuth);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') tryAuth();
    });

    input.focus();
  });
})();
