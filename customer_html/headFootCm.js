
        function loadContent(url, elementId) {
            fetch(url)
            // fetch(newUrl)
                .then(response => response.text())
                // .then(data => {document.getElementById(elementId).innerHTML = data;})
                .then(data => {
                        let element = document.getElementById(elementId);
                    if (element) {
                        element.innerHTML = data;
                        // if (callback) callback();
                    } else {
                        console.error(`Element with ID '${elementId}' not found in the DOM!`);
                    }
                })
                .catch(error => console.error(`Error loading '${url}':`, error));
            }
    
        // Load Header
        loadContent('/project/customer_html/header.html', 'head');
        // loadContent('header.html', 'head',attachNavEventListeners);

        // Load who we are
        loadContent('/project/customer_html/whoWeAre.html', 'who');

        // Load Footer
        loadContent('/project/customer_html/footer.html', 'foot');



        
        


       
        