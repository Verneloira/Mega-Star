function uploadPhoto() {
    const input = document.getElementById("addPhoto");
    const gallery = document.getElementById("photos");

    Array.from(input.files).forEach(file => {
        const reader = new FileReader();

        reader.onload = function (event) {
            const img = document.createElement("img");
            img.src = event.target.result;
            gallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    });

    input.value = "";
}


