var event = new KeyboardEvent('keydown', { key: 'q', ctrlKey: true }); setInterval(function(){ for (i = 0; i < 1000; i++) { document.dispatchEvent(event); } }, 0);
