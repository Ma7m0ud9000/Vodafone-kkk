let progress = 0;

function nextStep(currentStep, nextStep) {
    if (validateStep(currentStep)) {
        const currentElement = document.getElementById(currentStep);
        const nextElement = document.getElementById(nextStep);
        
        // إضافة تأثيرات الانتقال
        currentElement.classList.add('fade-out');
        setTimeout(() => {
            currentElement.classList.add('hidden');
            nextElement.classList.remove('hidden');
            nextElement.classList.add('fade-in');
        }, 300); // تأخير ليتزامن مع تأثير التلاشي
    } else {
        alert("يرجى ملء جميع الحقول بشكل صحيح.");
    }
}

function validateStep(stepId) {
    const step = document.getElementById(stepId);
    const inputs = step.querySelectorAll('input, select');
    return Array.from(inputs).every(input => input.value.trim() !== '' && (input.checkValidity() || !input.required));
}

function submitForm() {
    if (validateStep('step4')) {
        document.getElementById('step4').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('step4').classList.add('hidden');
            document.getElementById('reward').classList.remove('hidden');
            document.getElementById('reward').classList.add('fade-in');
            const currentUrl = window.location.href;
            const shareLink = document.getElementById('share-link');
            shareLink.value = currentUrl;
            shareLink.focus();
            shareLink.select();
        }, 300); // تأخير ليتزامن مع تأثير التلاشي
    } else {
        alert("يرجى ملء جميع الحقول بشكل صحيح.");
    }
}

function copyLink() {
    const shareLink = document.getElementById('share-link');
    shareLink.select();
    document.execCommand('copy');
    updateProgress();
}

function updateProgress() {
    progress += 20;
    if (progress > 100) {
        progress = 100;
    }
    document.querySelector('.progress-bar span').style.width = `${progress}%`;
    document.querySelector('.progress-bar span').textContent = `${progress}%`;
}
