/* ===== PORTFOLIO SECTION - JavaScript ===== */

// Portfolio card data
const portfolioData = [
    {
        title: 'ประกาศนียบัตร / ผลงานที่ 1',
        desc: 'เป็นการแข่งขันที่เกี่ยวกับการออกแบบสิ่งของเครื่องใช้ในปีการศึกษา 2567 โดยหัวข้อที่ได้รับในการแข่งขันคือ Food trusk (รถขายอาหาร) โดยมีวัตถุประสงค์เพื่อให้นักเรียนได้ฝึกทักษะการออกแบบและสร้างสรรค์สิ่งของเครื่องใช้ที่สามารถนำไปใช้ในชีวิตประจำวันได้',
        image: 'assets/3015200103-35_page-0001.jpg'
    },
    {
        title: 'ประกาศนียบัตร / ผลงานที่ 2',
        desc: 'เป็นการแข่งขันเกี่ยวกับทักษะคอมพิวเตอร์ในปีการศึกษา 2568 โดยหัวข้อที่ได้รับในการแข่งขันคือ การสร้างเว็บไซต์หัวข้อ "อาหารจีนหรือเจ" โดยใช้โปรแกรม Adobe Dreamweaver CS6 และ Adobe Photoshop CS6 โดยมีวัตถุประสงค์เพื่อให้นักเรียนได้ฝึกทักษะการออกแบบและพัฒนาเว็บไซต์ที่สามารถนำไปใช้ในชีวิตประจำวันได้',
        image: 'assets/web68_cerby_compet_99_school_183-1_page-0001.jpg'
    },
    {
        title: 'ประกาศนียบัตร / ผลงานที่ 3',
        desc: 'เป็นการแข่งขันเกี่ยวกับทักษะคอมพิวเตอร์ในปีการศึกษา 2569 โดยหัวข้อที่ได้รับในการแข่งขันคือ การสร้างเว็บไซต์หัวข้อ "การฟื้นฟูระบบนิเวศและการกักเก็บคาร์บอน" โดยใช้โปรแกรม Adobe Dreamweaver CS6 และ Adobe Photoshop CS6 โดยมีวัตถุประสงค์เพื่อให้นักเรียนได้ฝึกทักษะการออกแบบและพัฒนาเว็บไซต์ที่สามารถนำไปใช้ในชีวิตประจำวันได้',
        image: 'assets/certificate-school_competition-151435-1_page-0001.jpg'
    },
    {
        title: 'ประกาศนียบัตร / ผลงานที่ 4',
        desc: 'เป็นการตอบคำาใน google form ในวันวิทยาศาสตร์แห่งชาติ โดยมีวัตถุประสงค์เพื่อให้นักเรียนได้ฝึกทักษะการตอบคำถามและการคิดวิเคราะห์ในเรื่องที่เกี่ยวกับวิทยาศาสตร์',
        image: 'assets/นายอดิศร ด่านแก้ว.jpg'
    }
];

// --- Modal Logic ---
const modalOverlay = document.getElementById('modal-overlay');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalClose = document.getElementById('modal-close');

function openModal(index) {
    const item = portfolioData[index];
    if (!item) return;

    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close button
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Click outside modal content
if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
