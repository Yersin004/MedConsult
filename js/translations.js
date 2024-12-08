const translations = {
    ru: {
        home: 'Главная',
        doctors: 'Врачи',
        aboutUs: 'О нас',
        appointments: 'Записи',
        mainTitle: 'Онлайн консультация с практикующим врачом',
        mainDescription: 'Опытный врач проведет осмотр по видеосвязи, задаст вопросы и сделает заключение',
        pricePrefix: 'от',
        currency: 'тг',
        perConsultation: 'за консультацию',
        viewDoctors: 'Посмотреть всех врачей',
        askDoctor: 'Задать вопрос врачу / 1390 тг',
        connectWithUs: 'Связаться с нами',
        quickLinks: 'Быстрые ссылки',
        services: 'Услуги',
        contact: 'Контакты',
        privacyPolicy: 'Политика конфиденциальности',
        contactInfo: 'Контактная информация',
        address: 'Алматы, Казахстан',
        copyright: '© 2024 MedConsult. Все права защищены.',
        pediatrician: 'Педиатр',
        gynecologist: 'Акушер-гинеколог',
        endocrinologist: 'Эндокринолог',
        therapist: 'Терапевт',
        dermatologist: 'Дерматолог',
        doctorCount83: '- 83 врача',
        doctorCount106: '- 106 врачей',
        doctorCount57: '- 57 врачей',
        doctorCount116: '- 116 врачей',
        doctorCount13: '- 13 врачей',
        consultationCost: 'Стоимость консультации:',
        moreDoctors: 'Более 800 врачей',
        withRealReviews: 'с реальными отзывами',
        viewAll: 'Смотреть всех',
        howItWorks: 'Как это работает?',
        chooseDoctor: 'Выберите врача',
        chooseDoctorDesc: 'Укажите удобное время и дату для онлайн консультации',
        makePayment: 'Произведите оплату',
        makePaymentDesc: 'Картой на сайте или в приложении Kaspi.kz',
        getConsultation: 'Пройдите консультацию',
        getConsultationDesc: 'Через видео/аудио звонок или чат в личном кабинете',
        reviews: 'Отзывы'
    }
};

// Initialize translations
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = 'ru';
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        element.textContent = translations.ru[key];
    });
    
    // Update copyright year
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}); 