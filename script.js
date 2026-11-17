function showMessage() {
    document.getElementById("message").innerHTML =
        "Welcome! Your website is working.";
}

async function getData() {
    try {
        const response = await fetch("/api");

        const result = await response.json();

        document.getElementById("data").innerHTML =
            result.message;

    } catch (error) {
        document.getElementById("data").innerHTML =
            "Unable to connect to server.";
    }
}