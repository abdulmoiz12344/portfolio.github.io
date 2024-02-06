document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        var formData = new FormData(this);

        fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Handle success
            alert("Form submitted successfully!");
            // Optionally, clear the form fields
            this.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle error
            alert("There was an error submitting the form. Please try again later.");
        });
    });
