function toggleMenu() {
  var links = document.querySelector('.nav-links');
  links.classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.querySelector('.nav-links').classList.remove('open');
  });
});

function animateBars() {
  var bars = document.querySelectorAll('.skill-bar');
  if (bars.length === 0) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var bar = entry.target;
        var width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(function(bar) {
    observer.observe(bar);
  });
}

animateBars();

var sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
  sendBtn.addEventListener('click', function() {
    var name    = document.getElementById('fname').value.trim();
    var email   = document.getElementById('femail').value.trim();
    var subject = document.getElementById('fsubject').value.trim();
    var msg     = document.getElementById('fmsg').value.trim();
    var msgEl   = document.getElementById('formMsg');

    msgEl.style.display = 'none';

    if (!name || !email || !msg) {
      msgEl.textContent   = 'Please fill in all required fields.';
      msgEl.style.color   = '#e00';
      msgEl.style.display = 'block';
      return;
    }

    var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      msgEl.textContent   = 'Please enter a valid email address.';
      msgEl.style.color   = '#e00';
      msgEl.style.display = 'block';
      return;
    }

    msgEl.textContent   = '✓ Message sent! I will get back to you soon.';
    msgEl.style.color   = '#2a9d5c';
    msgEl.style.display = 'block';

    document.getElementById('fname').value    = '';
    document.getElementById('femail').value   = '';
    document.getElementById('fsubject').value = '';
    document.getElementById('fmsg').value     = '';
  });
}
