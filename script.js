document.addEventListener('DOMContentLoaded', function() {
    
    // --- DATA ---
    const resources = [
        { id: 1, title: 'Algebraic Expressions - Complete Guide', standard: 'Std X', subject: 'Maths', type: 'Video', description: 'Master algebraic expressions with step-by-step explanations.', rating: 4.8, views: '2.1k', materials: {
            videos: [
                { title: 'Algebraic Expressions - Part 1', link: '#', duration: '15:23' },
                { title: 'Solving Polynomials', link: '#', duration: '18:05' },
            ],
            notes: [ { title: 'Complete Chapter Notes', link: '#' } ],
            quizzes: [ { title: 'Practice Quiz on Expressions', link: '#' } ]
        }},
        { id: 2, title: 'Organic Chemistry Notes', standard: 'Std XII', subject: 'Chemistry', type: 'Notes', description: 'Comprehensive notes covering all organic chemistry topics.', rating: 4.6, views: '1.8k', materials: {
            videos: [ { title: 'Introduction to Organic Chemistry', link: '#', duration: '12:45' } ],
            notes: [ { title: 'Summary of Important Reactions', link: '#' }, { title: 'Detailed Notes with Diagrams', link: '#' } ],
            quizzes: [{ title: 'Organic Chemistry MCQ Practice', link: '#' }]
        }},
        { id: 3, title: 'Geography Quiz - Indian Climate', standard: 'Std IX', subject: 'Geography', type: 'Quiz', description: 'Test your knowledge of Indian climate patterns and monsoons.', rating: 4.7, views: '950', materials: {
            videos: [],
            notes: [ { title: 'Timeline of Key Events', link: '#' } ],
            quizzes: [ { title: 'Quiz on the French Revolution', link: '#' }, { title: 'Test your knowledge on Unification of Germany', link: '#' } ]
        }},
        { id: 4, title: 'English Literature Analysis', standard: 'Std XII', subject: 'English', type: 'Notes', description: 'Detailed analysis of prescribed poems and prose for board exams.', rating: 4.9, views: '1.5k', materials: {
            videos: [ { title: 'Poetry Analysis: Important Techniques', link: '#', duration: '22:10' }, { title: 'The Derivative as a Slope', link: '#', duration: '19:30' } ],
            notes: [ { title: 'Poem-by-Poem Detailed Notes', link: '#' } ],
            quizzes: [ { title: 'Poetry Comprehension Quiz', link: '#' } ]
        }},
        { id: 5, title: 'Physics Laws and Principles', standard: 'Std XII', subject: 'Physics', type: 'Video', description: 'Understanding fundamental laws of physics with real-world examples.', rating: 4.8, views: '2.3k', materials: {
            videos: [ { title: 'Newton\'s Laws Explained', link: '#', duration: '14:55' } ],
            notes: [ { title: 'summary and Key Formulas', link: '#' } ],
            quizzes: [ { title: 'Thermodynamics Quiz', link: '#' } ]
        }},
        { id: 6, title: 'History Timeline Practice', standard: 'Std X', subject: 'History', type: 'Quiz', description: 'Interactive timeline activities covering key events, figures, and turning points of the French Revolution.', rating: 4.5, views: '1.2k', materials: {
            videos: [],
            notes: [ { title: 'French Revolution', link: '#' } ],
            quizzes: [ { title: 'Quiz on the French Revolution', link: '#' } ]
        }},
        { id: 7, title: 'Basic Python, Java, HTML/JS tutorials', standard: 'Std XII', subject: 'Computer Science', type: 'Notes', description: 'Detailed analysis and explanations of commonly asked Python programs for board exams, with step-by-step logic breakdowns.', rating: 4.2, views: '1.5k', materials: {
            videos: [ { title: 'Introduction to Python Syntax', link: '#', duration: '22:10' }, { title: 'The Derivative as a Slope', link: '#', duration: '19:30' } ],
            notes: [ { title: 'Walkthrough: File Handling Program', link: '#' } ],
            quizzes: [ { title: 'Functions & Loops Practice Test', link: '#' } ]
        }},
         { id: 8, title: 'Indian Economy basics, current trends', standard: 'Std X', subject: 'Economics', type: 'Quiz', description: 'Quiz and notes covering fundamental concepts of the Indian economy, GDP, sectors, and recent economic trends.', rating: 4.5, views: '1.2k', materials: {
            videos: [],
            notes: [ { title: 'Basics of the Indian Economy', link: '#' }, { title: 'Recent Economic Developments', link: '#' } ],
            quizzes: [ { title: 'Quiz on the Indian Economy', link: '#' } ]
        }},

    ];

    const skills = [
        { id: 1, name: 'Basic Coding (Python)', description: 'Learn the fundamentals of programming with Python, one of the most popular and versatile languages. Perfect for beginners with no prior experience.', materials: {
            videos: [ { title: 'Python for Absolute Beginners', link: '#', duration: '45:10' }, { title: '10 Python Projects for Beginners', link: '#', duration: '1:12:43' } ],
            notes: [ { title: 'Python Syntax Cheatsheet', link: '#' }, { title: 'Common Python Data Structures', link: '#' } ],
            quizzes: [ { title: 'Beginner Python Quiz', link: '#' } ]
        }},
        { id: 2, name: 'Financial Literacy', description: 'Understand the basics of budgeting, saving, investing, and managing money. These essential life skills will help you build a secure financial future.', materials: {
            videos: [ { title: 'Budgeting 101', link: '#', duration: '08:30' } ],
            notes: [ { title: 'The 50/30/20 Budgeting Rule Explained', link: '#' } ],
            quizzes: []
        }},
        { id: 3, name: 'Digital Marketing', description: 'Discover how businesses use social media, SEO, and online advertising to reach customers. A valuable skill in today\'s digital world.', materials: {
            videos: [ { title: 'What is SEO?', link: '#', duration: '10:15' } ],
            notes: [ { title: 'Glossary of Digital Marketing Terms', link: '#' } ],
            quizzes: [ { title: 'Social Media Marketing Quiz', link: '#' } ]
        }},
        { id: 4, name: 'Public Speaking', description: 'Gain confidence and learn how to structure and deliver compelling presentations. Improve your communication skills for school and your future career.', materials: {
            videos: [],
            notes: [ { title: '5 Tips for Overcoming Stage Fright', link: '#' } ],
            quizzes: []
        }}
    ];
    
    const careers = [
        { id: 1, name: 'Dr. Alisha Fernandes', field: 'Marine Biologist', image: 'https://placehold.co/400x400/94a3b8/ffffff?text=AF', quote: 'Goa\'s coastline is a living laboratory. Curiosity is your greatest tool.' , story: 'Dr. Fernandes works at the National Institute of Oceanography, studying the impact of climate change on Goa\'s coral reefs. "My advice to students," she says, "is to explore the world around you. Science isn\'t just in textbooks; it\'s in every wave and every shell on the beach. Ask questions, stay curious, and never stop learning."' },
        { id: 2, name: 'Rohan Kulkarni', field: 'Software Developer', image: 'https://placehold.co/400x400/64748b/ffffff?text=RK', quote: 'Problem-solving is the core of coding. It\'s a language of logic.', story: 'Rohan is a lead developer at a tech startup in Verna. He builds mobile applications for global clients. "I started by learning Python from free online resources," he shares. "The tech industry in Goa is growing fast. If you have a passion for building things and solving puzzles, a career in software development can be incredibly rewarding. Start small, build projects, and never be afraid to break things."' },
        { id: 3, name: 'Priya Naik', field: 'Hotelier & Entrepreneur', image: 'https://placehold.co/400x400/94a3b8/ffffff?text=PN', quote: 'Hospitality is about creating experiences and sharing our culture.', story: 'Priya runs a successful boutique hotel in Anjuna that focuses on sustainable tourism. "I studied hospitality management, but my real education came from working in every department, from housekeeping to the front desk," she explains. "To succeed in tourism, you must have a genuine love for people and a passion for sharing the best of Goan culture. It\'s hard work, but very fulfilling."' },
        { id: 4, name: 'Sameer Sawant', field: 'Graphic Designer', image: 'https://placehold.co/400x400/64748b/ffffff?text=SS', quote: 'Design is visual storytelling. It connects brands with people.', story: 'Sameer runs his own design studio in Margao, creating brand identities for local businesses. "I was always drawing in my notebooks," he says. "I taught myself design software through online tutorials. My advice is to build a strong portfolio. Your work speaks for itself. Be inspired by Goa\'s unique visual culture—the colors, the architecture, the nature—and bring that into your designs."' }
    ];

    let discussions = [
        { id: 1, title: 'Having trouble with Trigonometry proofs. Any tips?', author: 'Priya S.', category: 'Std X Maths', replies: 3 },
        { id: 2, title: 'Best resources for preparing for the Physics practicals?', author: 'Rahul K.', category: 'Std XII Science', replies: 5 },
        { id: 3, title: 'What are some good side-projects for learning Python?', author: 'Amit P.', category: 'Skill Up', replies: 8 },
        { id: 4, title: 'How to manage time effectively during exam season?', author: 'Sneha M.', category: 'General', replies: 12 },
        { id: 5, title: 'Can anyone explain the concept of molarity in Chemistry?', author: 'Varun G.', category: 'Std XI Science', replies: 4 },
    ];
    
    const announcements = [
        { date: 'July 21, 2025', title: 'Std XII HSSC Examination Timetable Released', description: 'The Goa Board of Secondary and Higher Secondary Education has released the final timetable for the upcoming HSSC examinations.', link: '#' },
        { date: 'July 18, 2025', title: 'Goa University Admissions for PG Courses Open', description: 'Goa University has started the application process for various post-graduate courses for the academic year 2025-26.', link: '#' },
        { date: 'July 15, 2025', title: 'GBSHSE Scholarship Application Deadline Extended', description: 'The deadline for the GBSHSE merit-based scholarship has been extended to August 5, 2025.', link: '#' }
    ];

    const opportunities = {
        scholarships: [
            { title: 'Goa Scholars Scheme', description: 'Merit-based scholarship for students pursuing higher education', amount: '₹50,000 per year', due: 'March 31, 2025', link: '#' },
            { title: 'Post-Matric Scholarship for SC/OBC Students', description: 'Financial assistance for students from reserved categories', amount: '₹25,000 per year', due: 'April 15, 2025', link: '#' }
        ],
        events: [
            { title: 'State Level Science Fair - Registrations Open', description: 'Showcase your innovative science projects at the state level', location: 'Panaji, Goa', dates: 'Registration until Feb 28, 2025', link: '#' },
            { title: 'Annual Inter-School Debate Competition', description: 'Participate in Goa\'s biggest inter-school debate championship', location: 'Multiple venues', dates: 'March 15-16, 2025', link: '#' }
        ]
    };

    const standards = [...new Set(resources.map(r => r.standard))];
    const subjects = [...new Set(resources.map(r => r.subject))];

    // --- ELEMENTS ---
    const mainContent = document.getElementById('main-content');
    const resourceDetailPage = document.getElementById('resource-detail-page');
    const resourceDetailContent = document.getElementById('resource-detail-content');
    const skillDetailPage = document.getElementById('skill-detail-page');
    const skillDetailContent = document.getElementById('skill-detail-content');
    const communityPage = document.getElementById('community-page');
    const plannerPage = document.getElementById('planner-page');
    const todoPage = document.getElementById('todo-page');
    const resourceGrid = document.getElementById('resource-grid');
    const filterStandard = document.getElementById('filter-standard');
    const filterSubject = document.getElementById('filter-subject');
    const noResults = document.getElementById('no-results');
    const skillsAccordion = document.getElementById('skills-accordion');
    const careersGrid = document.getElementById('careers-grid');
    const announcementsGrid = document.getElementById('announcements-grid');
    const opportunitiesGrid = document.getElementById('opportunities-grid');
    const modal = document.getElementById('career-modal');
    const modalContent = document.getElementById('modal-content');
    const studyToolsMenu = document.getElementById('study-tools-menu');
    const studyToolsDropdown = document.getElementById('study-tools-dropdown');
    const recentDiscussionsContainer = document.getElementById('recent-discussions');
    const fullDiscussionListContainer = document.getElementById('full-discussion-list');
    const askQuestionFormContainer = document.getElementById('ask-question-form-container');

    // --- RENDER FUNCTIONS ---
    function renderResources(filteredResources) {
        resourceGrid.innerHTML = '';
        if (filteredResources.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            const typeInfo = {
                'Video': { icon: 'fa-solid fa-video', tag: 'Video Lesson', color: 'bg-blue-100 text-blue-600' },
                'Notes': { icon: 'fa-solid fa-file-alt', tag: 'Study Notes', color: 'bg-green-100 text-green-600' },
                'Quiz': { icon: 'fa-solid fa-brain', tag: 'Practice Test', color: 'bg-purple-100 text-purple-600' }
            };
            
            filteredResources.forEach((resource, index) => {
                const card = document.createElement('div');
                card.className = 'resource-card block bg-white rounded-xl shadow-md overflow-hidden p-6 cursor-pointer';
                card.dataset.id = resource.id;
                const info = typeInfo[resource.type] || { icon: 'fa-solid fa-file', tag: 'Resource', color: 'bg-slate-100 text-slate-600' };
                
                card.innerHTML = `
                    <div class="flex justify-between items-center mb-4">
                        <i class="${info.icon} text-blue-500 text-2xl"></i>
                        <span class="text-xs font-bold ${info.color} px-3 py-1 rounded-full">${info.tag}</span>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 leading-tight mb-1">${resource.title}</h3>
                        <p class="text-sm text-slate-500 mb-2">${resource.standard} • ${resource.subject}</p>
                        <p class="text-slate-600 text-sm mb-4">${resource.description}</p>
                    </div>
                    <div class="flex justify-between items-center text-sm text-slate-500 border-t border-slate-200 pt-4">
                        <span class="font-semibold"><i class="fa-solid fa-star text-amber-400 mr-1"></i> ${resource.rating}</span>
                        <span class="font-semibold">${resource.views} views</span>
                    </div>
                `;
                 card.addEventListener('click', () => showResourcePage(resource.id));
                resourceGrid.appendChild(card);
            });
        }
    }

    function populateFilters() {
        standards.forEach(std => {
            const option = document.createElement('option');
            option.value = std;
            option.textContent = std;
            filterStandard.appendChild(option);
        });
        subjects.forEach(sub => {
            const option = document.createElement('option');
            option.value = sub;
            option.textContent = sub;
            filterSubject.appendChild(option);
        });
    }
    
    function renderSkills() {
        skillsAccordion.innerHTML = '';
        skills.forEach(skill => {
            const item = document.createElement('div');
            item.className = 'border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm';
            item.innerHTML = `
                <button class="w-full text-left p-5 flex justify-between items-center skill-accordion-header" aria-expanded="false">
                    <span class="font-bold text-lg text-slate-800">${skill.name}</span>
                    <span class="text-xl text-blue-500 skill-icon"><i class="fa-solid fa-plus"></i></span>
                </button>
                <div class="px-5 pb-5 bg-white border-t border-slate-200 hidden skill-accordion-content">
                    <p class="text-slate-600 mb-4 pt-4">${skill.description}</p>
                    <button data-id="${skill.id}" class="font-bold text-blue-600 hover:underline start-learning-btn">Start Learning →</button>
                </div>
            `;
            skillsAccordion.appendChild(item);
        });
    }
    
    function renderCareers() {
        careersGrid.innerHTML = '';
        careers.forEach((career, index) => {
            const card = document.createElement('div');
            card.className = 'career-card text-center bg-white p-6 rounded-xl shadow-md cursor-pointer';
            card.innerHTML = `
                <img src="${career.image}" alt="${career.name}" class="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-slate-200">
                <h3 class="font-bold text-lg text-slate-800">${career.name}</h3>
                <p class="text-blue-600 font-semibold">${career.field}</p>
                <p class="text-sm text-slate-500 mt-3 italic">"${career.quote}"</p>
            `;
            card.addEventListener('click', () => showCareerModal(career.id));
            careersGrid.appendChild(card);
        });
    }

    function renderDiscussions(container, discussionList) {
        container.innerHTML = '';
        discussionList.forEach((discussion, index) => {
            const discussionEl = document.createElement('div');
            discussionEl.className = 'bg-white p-6 rounded-xl shadow-md border border-slate-200 cursor-pointer hover:border-blue-500 transition-colors';
            discussionEl.innerHTML = `
                <h4 class="font-semibold text-lg text-blue-700 pointer-events-none">${discussion.title}</h4>
                <p class="text-sm text-slate-500 mt-1 pointer-events-none">Asked by <span class="font-medium text-slate-700">${discussion.author}</span> in <span class="font-medium text-slate-700">${discussion.category}</span> - ${discussion.replies} replies</p>
            `;
            container.appendChild(discussionEl);
        });
    }

    function renderAnnouncements() {
        announcementsGrid.innerHTML = '';
        announcements.forEach((announcement, index) => {
            const item = document.createElement('div');
            item.className = 'bg-white p-6 rounded-xl shadow-md border border-slate-200 announcement-card';
            item.innerHTML = `
                <p class="text-sm font-semibold text-blue-600 mb-1">${announcement.date}</p>
                <h3 class="font-bold text-xl text-slate-800 mb-2">${announcement.title}</h3>
                <p class="text-slate-600 mb-4">${announcement.description}</p>
                <a href="${announcement.link}" class="font-bold text-blue-600 hover:underline">Read More →</a>
            `;
            announcementsGrid.appendChild(item);
        });
    }

    function renderOpportunities() {
        opportunitiesGrid.innerHTML = '';

        // Render Scholarships
        const scholarshipsHTML = `
            <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
                <h3 class="font-bold text-2xl mb-6 text-slate-800 flex items-center gap-3"><i class="fa-solid fa-award text-blue-500"></i> Scholarships</h3>
                <div class="space-y-6">
                    ${opportunities.scholarships.map(item => `
                        <div class="border-t border-slate-200 pt-6 first:border-t-0 first:pt-0">
                            <a href="${item.link}" target="_blank" class="flex justify-between items-start">
                                <h4 class="font-bold text-lg text-blue-700 hover:underline">${item.title}</h4>
                                <i class="fa-solid fa-arrow-up-right-from-square text-slate-400"></i>
                            </a>
                            <p class="text-slate-600 mt-1">${item.description}</p>
                            <div class="flex justify-between items-end mt-4 text-sm">
                                <p class="font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">${item.amount}</p>
                                <p class="font-semibold text-slate-500">Due: ${item.due}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Render Events
        const eventsHTML = `
            <div class="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
                <h3 class="font-bold text-2xl mb-6 text-slate-800 flex items-center gap-3"><i class="fa-solid fa-calendar-check text-blue-500"></i> Events & Competitions</h3>
                <div class="space-y-6">
                    ${opportunities.events.map(item => `
                        <div class="border-t border-slate-200 pt-6 first:border-t-0 first:pt-0">
                            <a href="${item.link}" target="_blank" class="flex justify-between items-start">
                                <h4 class="font-bold text-lg text-blue-700 hover:underline">${item.title}</h4>
                                <i class="fa-solid fa-arrow-up-right-from-square text-slate-400"></i>
                            </a>
                            <p class="text-slate-600 mt-1">${item.description}</p>
                            <div class="flex justify-between items-end mt-4 text-sm">
                                <p class="font-semibold text-slate-500">${item.location}</p>
                                <p class="font-bold text-blue-600">${item.dates}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        opportunitiesGrid.innerHTML = scholarshipsHTML + eventsHTML;
    }

    function renderResourceDetails(resource) {
        let contentHTML = `
            <h2 class="text-4xl md:text-5xl font-extrabold text-slate-800 mb-2">${resource.title}</h2>
            <div class="flex items-center gap-2 mb-12">
                <span class="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full">${resource.standard}</span>
                <span class="text-sm font-medium bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">${resource.subject}</span>
            </div>
        `;

        const sections = {
            videos: { title: 'Video Lessons', icon: 'fa-solid fa-play' },
            notes: { title: 'Study Notes', icon: 'fa-solid fa-file-lines' },
            quizzes: { title: 'Quizzes & Practice', icon: 'fa-solid fa-question-circle' }
        };

        for (const [type, details] of Object.entries(sections)) {
            if (resource.materials[type] && resource.materials[type].length > 0) {
                contentHTML += `<h3 class="text-2xl font-bold text-slate-700 mb-4 mt-10 flex items-center gap-3"><i class="${details.icon} text-blue-500"></i> ${details.title}</h3>`;
                contentHTML += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
                resource.materials[type].forEach(item => {
                    contentHTML += `
                        <a href="${item.link}" target="_blank" class="block bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all duration-300">
                            <p class="font-bold text-blue-700">${item.title}</p>
                            ${item.duration ? `<p class="text-sm text-slate-500 mt-1">Duration: ${item.duration}</p>` : ''}
                        </a>
                    `;
                });
                contentHTML += '</div>';
            }
        }
        resourceDetailContent.innerHTML = contentHTML;
    }

    function renderSkillDetails(skill) {
        let contentHTML = `<h2 class="text-4xl md:text-5xl font-extrabold text-slate-800 mb-10">${skill.name}</h2>`;
        const sections = {
            videos: { title: 'Video Lessons', icon: 'fa-solid fa-play' },
            notes: { title: 'Study Notes', icon: 'fa-solid fa-file-lines' },
            quizzes: { title: 'Quizzes & Practice', icon: 'fa-solid fa-question-circle' }
        };

        for (const [type, details] of Object.entries(sections)) {
            if (skill.materials[type] && skill.materials[type].length > 0) {
                contentHTML += `<h3 class="text-2xl font-bold text-slate-700 mb-4 mt-10 flex items-center gap-3"><i class="${details.icon} text-blue-500"></i> ${details.title}</h3>`;
                contentHTML += '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
                skill.materials[type].forEach(item => {
                    contentHTML += `
                        <a href="${item.link}" target="_blank" class="block bg-slate-50 p-4 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-white hover:shadow-lg transition-all duration-300">
                            <p class="font-bold text-blue-700">${item.title}</p>
                            ${item.duration ? `<p class="text-sm text-slate-500 mt-1">Duration: ${item.duration}</p>` : ''}
                        </a>
                    `;
                });
                contentHTML += '</div>';
            }
        }
        skillDetailContent.innerHTML = contentHTML;
    }

    // --- INTERACTION LOGIC ---
    function filterAndRender() {
        const selectedStandard = filterStandard.value;
        const selectedSubject = filterSubject.value;
        const filtered = resources.filter(resource => {
            const matchesStandard = selectedStandard === 'all' || resource.standard === selectedStandard;
            const matchesSubject = selectedSubject === 'all' || resource.subject === selectedSubject;
            return matchesStandard && matchesSubject;
        });
        renderResources(filtered);
    }
    
    skillsAccordion.addEventListener('click', function(e) {
        const header = e.target.closest('.skill-accordion-header');
        if (header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.skill-icon i');
            const isVisible = !content.classList.contains('hidden');
            
            content.classList.toggle('hidden');
            header.setAttribute('aria-expanded', !isVisible);
            icon.className = isVisible ? 'fa-solid fa-plus' : 'fa-solid fa-minus';
            return;
        }

        const learnButton = e.target.closest('.start-learning-btn');
        if(learnButton && learnButton.dataset.id) {
            showSkillPage(learnButton.dataset.id);
        }
    });

    function showCareerModal(careerId) {
        const career = careers.find(c => c.id === careerId);
        if (!career) return;

        modalContent.innerHTML = `
            <div class="p-8 text-center">
                <img src="${career.image}" alt="${career.name}" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg">
                <h2 class="text-3xl font-bold text-slate-800">${career.name}</h2>
                <p class="text-lg text-blue-600 font-semibold">${career.field}</p>
            </div>
            <div class="p-8 bg-slate-50 rounded-b-xl">
                <p class="text-slate-600 text-lg italic border-l-4 border-blue-300 pl-4 mb-6">"${career.quote}"</p>
                <h3 class="font-bold text-slate-800 mb-2">My Journey & Advice:</h3>
                <p class="text-slate-700 whitespace-pre-line leading-relaxed">${career.story}</p>
                <div class="mt-8 text-center">
                    <button id="connect-professional-btn" class="btn-gradient text-white font-bold py-3 px-8 rounded-full">
                        <i class="fa-solid fa-paper-plane mr-2"></i>Connect with ${career.name.split(' ')[0]}
                    </button>
                </div>
            </div>
            <button id="close-modal" class="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-2xl">&times;</button>
        `;
        
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
        }, 10);
        
        document.getElementById('close-modal').addEventListener('click', hideCareerModal);
        document.getElementById('connect-professional-btn').addEventListener('click', () => {
            alert(`Messaging feature to connect with ${career.name} is coming soon!`);
            hideCareerModal();
        });
    }

    function hideCareerModal() {
        modal.classList.add('opacity-0');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideCareerModal();
        }
    });
    
    // --- PAGE NAVIGATION ---
    function hideAllPages() {
        mainContent.classList.add('hidden');
        resourceDetailPage.classList.add('hidden');
        skillDetailPage.classList.add('hidden');
        plannerPage.classList.add('hidden');
        todoPage.classList.add('hidden');
        communityPage.classList.add('hidden');
    }

    function showPage(pageElement) {
        hideAllPages();
        pageElement.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    function showResourcePage(resourceId) {
        const resource = resources.find(r => r.id === parseInt(resourceId));
        if (resource) {
            renderResourceDetails(resource);
            showPage(resourceDetailPage);
        }
    }

    function showSkillPage(skillId) {
        const skill = skills.find(s => s.id === parseInt(skillId));
        if(skill) {
            renderSkillDetails(skill);
            showPage(skillDetailPage);
        }
    }
    
    function showCommunityPage() {
        renderDiscussions(fullDiscussionListContainer, discussions);
        showPage(communityPage);
    }

    function showMainPage() {
        showPage(mainContent);
    }
    
    document.querySelectorAll('a.nav-link, #study-tools-dropdown a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if(href.startsWith('#')) {
                 e.preventDefault();
                if (href === '#planner') {
                    showPage(plannerPage);
                } else if (href === '#todo') {
                    showPage(todoPage);
                } else {
                    showMainPage();
                    setTimeout(() => {
                        const section = document.querySelector(href);
                        if (section) {
                           section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 50);
                }
            }
        });
    });

    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', showMainPage);
    });
    
    document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        showMainPage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- COMMUNITY PAGE LOGIC ---
    document.getElementById('view-all-discussions-btn').addEventListener('click', showCommunityPage);
    document.getElementById('ask-question-btn').addEventListener('click', () => {
        askQuestionFormContainer.classList.toggle('hidden');
    });
    document.getElementById('cancel-question-btn').addEventListener('click', () => {
        askQuestionFormContainer.classList.add('hidden');
    });
    document.getElementById('ask-question-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('question-title').value;
        const category = document.getElementById('question-category').value;
        if(title && category){
            const newQuestion = {
                id: discussions.length + 1,
                title: title,
                author: 'You', // Placeholder
                category: category,
                replies: 0
            };
            discussions.unshift(newQuestion); // Add to the beginning
            renderDiscussions(fullDiscussionListContainer, discussions);
            alert('Your question has been posted!');
            askQuestionFormContainer.classList.add('hidden');
            e.target.reset();
        }
    });


    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.addEventListener('click', (e) => {
         if(e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            mobileMenu.classList.add('hidden');
         }
    });

    // --- STUDY TOOLS DROPDOWN ---
    studyToolsMenu.addEventListener('mouseenter', () => {
        studyToolsDropdown.classList.remove('hidden');
    });
    studyToolsMenu.addEventListener('mouseleave', () => {
        studyToolsDropdown.classList.add('hidden');
    });

    // --- FEEDBACK & RATING ---
    document.getElementById('feedback-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('feedback-input');
        if(input.value.trim()){
            alert('Thank you for your feedback!');
            input.value = '';
        }
    });

    document.getElementById('comment-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Comment submitted for review!');
        document.getElementById('comment-text').value = '';
    });
    
    document.getElementById('rating-stars')?.addEventListener('click', (e) => {
        if(e.target.tagName === 'I') {
            alert('Thank you for rating!');
        }
    });

    // --- CHART.JS ---
    function renderChart() {
        const chartEl = document.getElementById('resourceTypeChart');
        if(!chartEl) return;
        const ctx = chartEl.getContext('2d');
        const resourceTypes = ['Video', 'Notes', 'Quiz']; // Fixed order
        const typeCounts = resourceTypes.map(type => resources.filter(r => r.type === type).length);
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: resourceTypes,
                datasets: [{
                    label: 'Resource Types',
                    data: typeCounts,
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)', // red-500
                        'rgba(59, 130, 246, 0.8)', // blue-500
                        'rgba(245, 158, 11, 0.8)'  // amber-500
                    ],
                    borderColor: '#f8fafc', // slate-50
                    borderWidth: 4,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            font: {
                                family: 'Inter',
                                size: 14
                            },
                            color: '#475569' // slate-600
                        }
                    },
                    title: {
                        display: false
                    }
                },
                cutout: '65%'
            }
        });
    }


    // --- INITIALIZATION ---
    function init() {
        // Render all the dynamic content
        populateFilters();
        renderResources(resources);
        renderSkills();
        renderCareers();
        renderAnnouncements();
        renderDiscussions(document.getElementById('recent-discussions'), discussions.slice(0,3));
        renderOpportunities();
        renderChart();
        
        // Set up all event listeners
        filterStandard.addEventListener('change', filterAndRender);
        filterSubject.addEventListener('change', filterAndRender);
        
        // Ensure the main page is visible and hide all others
        mainContent.classList.remove('hidden');
        resourceDetailPage.classList.add('hidden');
        skillDetailPage.classList.add('hidden');
        plannerPage.classList.add('hidden');
        todoPage.classList.add('hidden');
        communityPage.classList.add('hidden');
    }
    
    init();


    // Login button placeholder
    document.getElementById('login-btn').addEventListener('click', () => {
        alert('Login functionality coming soon!');
    });
    document.getElementById('mobile-login-btn').addEventListener('click', () => {
        alert('Login functionality coming soon!');
    });
});