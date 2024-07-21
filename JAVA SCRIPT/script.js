document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit-button');
    const saveButton = document.getElementById('save-button');
    const cancelButton = document.getElementById('cancel-button');
    const profileForm = document.getElementById('profile-form');

    let originalValues = {};

    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const inputField = document.getElementById(targetId);
            
            if (inputField.disabled) {
                originalValues[targetId] = inputField.value;
                inputField.disabled = false;
                saveButton.disabled = false;
                cancelButton.disabled = false;
            }
        });
    });

    saveButton.addEventListener('click', () => {
        const inputs = profileForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.disabled = true;
        });
        saveButton.disabled = true;
        cancelButton.disabled = true;
        alert('Profile updated successfully!');
    });

    cancelButton.addEventListener('click', () => {
        const inputs = profileForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = originalValues[input.id];
            input.disabled = true;
        });
        saveButton.disabled = true;
        cancelButton.disabled = true;
    });
});
function previewImage(event) {
    const file = event.target.files[0];
    const fileType = file.type;
    const fileSize = file.size;

    const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!validImageTypes.includes(fileType)) {
        alert("Please upload a valid image file (JPEG, PNG, GIF).");
        return;
    }

    if (fileSize > maxSize) {
        alert("File size exceeds the maximum limit of 2MB.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('profileImage');
        output.src = reader.result;
    };
    reader.readAsDataURL(file);
}
