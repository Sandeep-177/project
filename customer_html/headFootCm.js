        // Function to load HTML content into an element
        function loadContent(url, elementId) {
            fetch(url)  
            .then(response => response.text())  
            .then(data => document.getElementById(elementId).innerHTML = data);
        }
    
        // Load Header
        loadContent('/customer_html/header.html', 'head');

        // Load who we are
        loadContent('/customer_html/whoWeAre.html', 'who');

        // Load Footer
        loadContent('/customer_html/footer.html', 'foot');


       
        