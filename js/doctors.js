document.addEventListener('DOMContentLoaded', function() {
    // Filter tags functionality
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            filterTags.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tag
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const doctorCards = document.querySelectorAll('.doctor-card');
        
        doctorCards.forEach(card => {
            const doctorName = card.querySelector('h3').textContent.toLowerCase();
            const specialty = card.querySelector('.specialty').textContent.toLowerCase();
            
            if (doctorName.includes(searchTerm) || specialty.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Consultation button functionality
    const consultButtons = document.querySelectorAll('.btn-consult');
    consultButtons.forEach(button => {
        button.addEventListener('click', function() {
            const doctorCard = this.closest('.doctor-card');
            const doctorName = doctorCard.querySelector('h3').textContent;
            const timeSlots = doctorCard.querySelectorAll('.time-slot');
            
            if (timeSlots.length > 0) {
                const firstSlot = timeSlots[0].textContent;
                alert(`Подтвердите запись к врачу ${doctorName} на ${firstSlot}`);
                // Here you would typically open a modal or redirect to a booking page
            }
        });
    });

    // Profile button functionality
    const profileButtons = document.querySelectorAll('.btn-profile');
    profileButtons.forEach(button => {
        button.addEventListener('click', function() {
            const doctorCard = this.closest('.doctor-card');
            const doctorName = doctorCard.querySelector('h3').textContent;
            // Here you would typically redirect to the doctor's profile page
            alert(`Переход на страницу профиля врача ${doctorName}`);
        });
    });

    // Price range functionality
    const priceRange = document.querySelector('input[type="range"]');
    const minPriceInput = document.querySelector('.price-inputs input:first-child');
    const maxPriceInput = document.querySelector('.price-inputs input:last-child');

    function updatePriceInputs() {
        const value = priceRange.value;
        minPriceInput.value = value;
    }

    priceRange.addEventListener('input', updatePriceInputs);

    // Experience filter functionality
    const experienceCheckboxes = document.querySelectorAll('.filter-group:first-child input[type="checkbox"]');
    experienceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const doctorCards = document.querySelectorAll('.doctor-card');
            doctorCards.forEach(card => {
                const experience = card.querySelector('.experience').textContent;
                const years = parseInt(experience.match(/\d+/)[0]);
                
                let showCard = false;
                experienceCheckboxes.forEach(cb => {
                    if (cb.checked) {
                        if (cb.parentElement.textContent.includes('До 5 лет') && years <= 5) showCard = true;
                        if (cb.parentElement.textContent.includes('5-10 лет') && years > 5 && years <= 10) showCard = true;
                        if (cb.parentElement.textContent.includes('Более 10 лет') && years > 10) showCard = true;
                    }
                });
                
                if (!Array.from(experienceCheckboxes).some(cb => cb.checked)) showCard = true;
                card.style.display = showCard ? 'block' : 'none';
            });
        });
    });
}); 