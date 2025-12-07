// Projects Data - All project content in one place
const projectsData = {
    'cys3c': {
        title: 'Cys3c – Cloud Security & Pentesting Platform',
        description: 'Cys3c is a cloud-based cybersecurity platform designed to centralize pentesting tools, bug bounty programs, and token-based reward management into a single, scalable ecosystem.',
        image: 'assets/imgs/projects/projects-1/cy.png',
        content: `<h1><strong>Cys3c – Cloud Security &amp; Pentesting Platform</strong></h1>
            <p>&nbsp;</p>
            <h2><strong>Project Description</strong></h2>
            <p><strong>Cys3c</strong> is a cloud-based cybersecurity platform designed to centralize pentesting tools, bug bounty programs, and token-based reward management into a single, scalable ecosystem.
                <br>The platform enables companies to secure their applications by connecting them with professional pentesters while providing cloud-hosted tools that run efficiently even on low-spec machines.</p>
            <p>This project was part of my final internship at <strong>Rabyas Services</strong>, where I handled system design, development, and the security layer of the platform.</p>
            <hr>
            <h1><strong>Key Achievements</strong></h1>
            <h3><strong>☁️ Migration of Pentesting Tools to the Cloud</strong></h3>
            <ul>
                <li>Converted local pentesting utilities into <strong>cloud-hosted, browser-based tools</strong>, removing the need for heavy local hardware.</li>
                <li>Improved performance, responsiveness, and accessibility for remote pentesters.</li>
            </ul>
            <h3><strong>🛡️ Cybersecurity Tool Suite Development</strong></h3>
            <p>Developed and integrated multiple cloud-based offensive security tools, including:</p>
            <ul>
                <li>XSS Scanner</li>
                <li>OSINT Username Enumerator</li>
                <li>Automated Recon Tool</li>
                <li>Manual Recon Toolkit</li>
                <li>Smart Contract Auditor</li>
                <li>Threat Tracker</li>
                <li>Code Reviewer</li>
                <li>Encryption Kitchen
                    </li>
            </ul>
            <h3><strong>🐞 Bug Bounty Program System</strong></h3>
            <ul>
                <li>Built an internal bug bounty platform where companies can post scopes.</li>
                <li>Implemented report submission flows, triaging workflows, severity scoring, and reward assignment.</li>
                <li>Enabled secure communication between pentesters and companies.</li>
            </ul>
            <h3><strong>💳 Tokenized Reward System (Web3 Integration)</strong></h3>
            <ul>
                <li>Implemented a crypto-based reward token (<strong>CYS</strong>) system.</li>
                <li>Integrated wallet management, transaction logs, and conversion of points → tokens.</li>
                <li>Added optional MetaMask-based authentication and smart contract interaction.</li>
            </ul>
            <h3><strong>🔐 Advanced Security Architecture</strong></h3>
            <ul>
                <li>Integrated strict authentication and role-based access: Admin, Hacker, Triager.</li>
                <li>Hardened API endpoints and protected cloud tools against misuse.</li>
                <li>Ensured secure data handling for vulnerability reports and transactions.</li>
            </ul>
            <h3><strong>🖥️ Modern Dashboard Interface</strong></h3>
            <p>The platform features:</p>
            <ul>
                <li>A sleek dark UI</li>
                <li>Dashboard for pentesters (rank, past reports, activity)</li>
                <li>Tools gallery with instant cloud execution</li>
                <li>Wallet page with transaction history</li>
                <li>Company directory &amp; program scopes</li>
                <li>Training environment (CTFs, exercises)</li>
            </ul>
            <h3><strong>📈 Enterprise Integration</strong></h3>
            <ul>
                <li>Synced bug reports with Rabyas's internal vulnerability management system.</li>
                <li>Integrated real-time reporting dashboards and company-side management tools.</li>
            </ul>
            <hr>
            <h1><strong>Technologies Used</strong></h1>
            <h3><strong>Frontend</strong></h3>
            <ul>
                <li>React.js</li>
                <li>TailwindCSS</li>
                <li>Flowbite + custom components</li>
                <li>Dark mode + responsive design</li>
            </ul>
            <h3><strong>Backend</strong></h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST API architecture</li>
                <li>Secure session management and crypto-based operations</li>
            </ul>
            <h3><strong>Web3 / Blockchain</strong></h3>
            <ul>
                <li>Web3.js for wallet linking and token transactions</li>
                <li>Solidity smart contracts (reward logic)</li>
                <li>MetaMask authentication</li>
            </ul>
            <h3><strong>Security Tools (Engine Side)</strong></h3>
            <ul>
                <li>Python (OSINT, scraping, recon automation)</li>
                <li>Go (high-performance scanning utilities)</li>
                <li>Custom Dockerized tools for cloud execution</li>
            </ul>
            <h3><strong>DevOps</strong></h3>
            <ul>
                <li>Docker / containerized tools</li>
                <li>Cloud deployment</li>
                <li>CI/CD workflow</li>
            </ul>
            <hr>
            <h1><strong>Impact</strong></h1>
            <ul>
                <li>Enabled pentesters to run heavy tools <strong>entirely in the cloud</strong>, improving speed and accessibility.</li>
                <li>Provided Moroccan companies with a <strong>centralized bug bounty and vulnerability management platform</strong>.</li>
                <li>Reduced hardware needs for security teams by offloading scanning tasks to cloud compute.</li>
                <li>Introduced a <strong>Web3-powered reward mechanism</strong>, making the platform unique in the region.</li>
                <li>Strengthened cybersecurity culture and collaboration between enterprises and pentesters.</li>
            </ul>`
    },
    'decoai': {
        title: 'AI-Powered Interior Design Web Application',
        description: 'This project consists of building a next-generation AI-driven interior design tool that allows users to upload a photo of any room and instantly generate a redesigned version using modern machine-learning models.',
        image: 'assets/imgs/projects/projects-1/ai.png',
        content: `<h1><strong>AI-Powered Interior Design Web Application</strong></h1>
            <p>&nbsp;</p>
            <h2><strong>Project Overview</strong></h2>
            <p>This project consists of building a next-generation <strong>AI-driven interior design tool</strong> that allows users to upload a photo of any room and instantly generate a redesigned version using modern machine-learning models.<br>The web app transforms traditional interior design by offering <strong>virtual remodeling</strong>, <strong>style-based transformations</strong>, and <strong>side-by-side comparisons</strong>, making home design accessible, fast, and visually intuitive.</p>
            <p>Developed during a professional mini-project at <strong>Taibi Khalfi &amp; Cts</strong>, the application was built using a modern MERN-based architecture, integrating cloud-hosted AI models for reliable image generation.<br>&nbsp;</p>
            <hr>
            <h1><strong>Key Features</strong></h1>
            <h3><strong>🖼️ AI Room Redesign (Auto-Decorating)</strong></h3>
            <p>Users upload a photo of a room, choose a theme (modern, minimalist, tropical, Moroccan, vintage, etc.), and the AI generates an entirely redesigned room layout.</p>
            <h3><strong>📷 Upload &amp; Room Recognition</strong></h3>
            <ul>
                <li>Upload images directly from the device gallery</li>
                <li>Automatic photo processing</li>
                <li>AI identifies room structure and preserves geometry while redesigning</li>
            </ul>
            <h3><strong>🎨 Theme &amp; Room-Type Selection</strong></h3>
            <p>From the document's functional specifications:</p>
            <ul>
                <li>Choose room type (living room, bedroom, kitchen, etc.)</li>
                <li>Select theme (modern, Scandinavian, industrial, Moroccan traditional…)</li>
            </ul>
            <h3><strong>🔄 Side-by-Side &amp; Comparison Mode</strong></h3>
            <p>Users can compare:</p>
            <ul>
                <li>Original room</li>
                <li>AI-generated room</li>
                <li>Sliding comparison view</li>
            </ul>
            <h3><strong>🔐 Google OAuth Login</strong></h3>
            <ul>
                <li>Instant Google authentication</li>
                <li>Saves user history, generated images, credits, and dashboard preferences</li>
            </ul>
            <h3><strong>💳 Credit System + Stripe Integration</strong></h3>
            <ul>
                <li>3 free credits for new users</li>
                <li>Purchase more credits via Stripe</li>
                <li>Smooth wallet/recharge UI</li>
            </ul>
            <h3><strong>📊 User Dashboard</strong></h3>
            <ul>
                <li>Displays previous generated rooms</li>
                <li>Credit balance</li>
                <li>Themes used</li>
                <li>Account settings</li>
            </ul>
            <hr>
            <h1><strong>Technical Stack</strong></h1>
            <h3><strong>Frontend</strong></h3>
            <ul>
                <li><strong>React.js</strong> (SPA, reusable components)</li>
                <li><strong>Next.js</strong> (SSR, performance optimization)</li>
                <li><strong>Chakra UI &amp; custom CSS</strong> for consistent, modern UI</li>
                <li><strong>JSX</strong> for component architecture</li>
            </ul>
            <h3><strong>Backend</strong></h3>
            <ul>
                <li><strong>Node.js</strong></li>
                <li><strong>Express.js REST API</strong></li>
                <li>Handles user auth, credits, image processing requests</li>
            </ul>
            <h3><strong>Database</strong></h3>
            <ul>
                <li><strong>MySQL</strong> (structured data, user accounts, credits, history)</li>
            </ul>
            <h3><strong>AI &amp; Integration</strong></h3>
            <ul>
                <li><strong>Stable Diffusion Online / Replicate API</strong><br>Used for image-to-image generation and style-transfer models</li>
                <li>Secure image upload pipeline</li>
                <li>Automated preprocessing &amp; high-resolution upscale</li>
            </ul>
            <h3><strong>Other Tools</strong></h3>
            <ul>
                <li><strong>Axios</strong> for API calls</li>
                <li><strong>Photoshop</strong> for asset preparation</li>
                <li><strong>Enterprise Architect</strong> for UML modeling</li>
                <li><strong>GitHub</strong> for version control</li>
            </ul>
            <p>&nbsp;</p>
            <hr>
            <h1><strong>Your Responsibilities</strong></h1>
            <ul>
                <li>Designed full system architecture (frontend + backend + DB + AI pipeline)</li>
                <li>Developed all user interfaces (landing page, room editor, dashboard, Stripe checkout)</li>
                <li>Integrated Stable Diffusion models via Replicate API</li>
                <li>Implemented Google OAuth login</li>
                <li>Built credit logic + usage tracking</li>
                <li>Implemented comparison UI (side-by-side &amp; slider)</li>
                <li>Conducted functional analysis, UML diagrams, and GANTT planning</li>
                <li>Ensured performance, responsiveness, and error handling</li>
            </ul>
            <hr>
            <h1><strong>Impact</strong></h1>
            <ul>
                <li>Allowed users to visualize new décor concepts instantly</li>
                <li>Eliminated the need for costly interior designers for initial mockups</li>
                <li>Improved decision-making: users can "see" the final result before spending money</li>
                <li>Project successfully validated by company supervisors and academic board.</li>
            </ul>`
    },
    'mo7amai': {
        title: 'MO7AM.AI',
        description: 'MO7AM.AI is an advanced AI-powered legal assistant built to make Moroccan law accessible to everyone. The name comes from the Arabic word "محامي" (lawyer), and the project\'s mission is to bring legal knowledge closer to Moroccan citizens using modern AI technology.',
        image: 'assets/imgs/projects/projects-1/mo7s.png',
        content: `<h1><strong>MO7AM.AI – AI Moroccan Law Assistant</strong></h1>
            <h2><strong>Description</strong></h2>
            <p><strong>MO7AM.AI</strong> is an advanced AI-powered legal assistant built to make Moroccan law accessible to everyone.
                <br>The name comes from the Arabic word <strong>"محامي" (lawyer)</strong>, and the project's mission is to bring legal knowledge closer to Moroccan citizens using modern AI technology.</p>
            <p>The assistant understands <strong>Moroccan Darija</strong>, <strong>Arabic</strong>, <strong>French</strong>, and <strong>English</strong>, allowing users to ask legal questions naturally.
                <br>MO7AM.AI provides fast, accurate explanations of Moroccan laws based on the <strong>official penal code, civil code, business law, labor law, real estate law</strong>, and many other legal sources.</p>
            <p>All legal data is processed, indexed, and retrieved using <strong>LangChain</strong>, <strong>OpenAI GPT models</strong>, and <strong>vector embeddings</strong>, offering precise and context-aware legal answers.</p>
            <hr>
            <h2><strong>Key Features</strong></h2>
            <h3><strong>Darija-Friendly Legal Assistant</strong></h3>
            <p>Understands Moroccan Darija questions like:
                <br>"شنو خاصني باش نأسس شركة؟" or "شنو العقوبات ديال النصب؟"
                <br>and provides clear legal explanations.</p>
            <h3><strong>Real Legal Data Integration</strong></h3>
            <p>All responses are backed by real Moroccan laws sourced from:</p>
            <ul>
                <li><strong>Mahkamaty.com (</strong><a class="decorated-link" href="https://mahkamaty.com/ar-ma" rel="noopener"><strong>https://mahkamaty.com/ar-ma</strong> </a><strong>)</strong></li>
                <li>Official PDFs of the <strong>Moroccan Penal Code</strong>,</li>
                <li><strong>Commercial Code</strong>,</li>
                <li><strong>Family Code</strong>,</li>
                <li><strong>Civil Procedure</strong>,</li>
                <li><strong>Labor Code</strong>,</li>
                <li>and many other texts.</li>
            </ul>
            <h3><strong>AI-Powered Legal Search Engine</strong></h3>
            <p>Legal PDFs and articles are split, cleaned, and embedded using LangChain to enable fast semantic search.</p>
            <h3><strong>Context-Aware Chat</strong></h3>
            <p>The AI maintains conversation context, allowing follow-ups and multi-step legal guidance.</p>
            <h3><strong>Modern UI with Arabic/RTL Support</strong></h3>
            <p>Clean chat interface with mixed languages (Darija + English), responsive design, and a sidebar showing recent cases.</p>
            <h3><strong>Secure Backend Architecture</strong></h3>
            <p>All user queries are processed securely with:</p>
            <ul>
                <li>Encrypted endpoints</li>
                <li>Sanitized inputs</li>
                <li>Proper API key protection</li>
                <li>Controlled access to models</li>
            </ul>
            <hr>
            <h2><strong>Technologies Used</strong></h2>
            <h3><strong>AI Layer</strong></h3>
            <ul>
                <li><strong>LangChain</strong> for RAG (Retrieval-Augmented Generation)</li>
                <li><strong>OpenAI API (GPT models)</strong> for reasoning and generation</li>
                <li><strong>Embeddings (text-embedding-3-large)</strong> for semantic search</li>
            </ul>
            <h3><strong>Data Pipeline</strong></h3>
            <ul>
                <li>PDF loading, chunking, and text extraction</li>
                <li>Scraping &amp; processing Moroccan legal content from <strong>Mahkamaty.com</strong></li>
                <li>Vector store (ChromaDB / Pinecone)</li>
            </ul>
            <h3><strong>Backend</strong></h3>
            <ul>
                <li>Python (FastAPI) or Node.js for serving the API</li>
                <li>RAG pipeline for accurate legal referencing</li>
            </ul>
            <h3><strong>Frontend</strong></h3>
            <ul>
                <li>React / Next.js</li>
                <li>TailwindCSS</li>
                <li>Full RTL support for Arabic &amp; Darija</li>
            </ul>
            <h3><strong>Deployment</strong></h3>
            <ul>
                <li>Docker containers</li>
                <li>Kubernetes (scalable microservices)</li>
                <li>CI/CD (GitHub Actions)</li>
                <li>NGINX proxy for routing</li>
            </ul>
            <hr>
            <h2><strong>Design Highlights</strong></h2>
            <ul>
                <li>Dark Moroccan-inspired theme with purple gradients</li>
                <li>Clean chat bubbles for Arabic + English mixed messages</li>
                <li>Search bar for legal articles</li>
                <li>"Recent cases" panel</li>
                <li>Modern SaaS look with smooth shadows and subtle animations</li>
            </ul>`
    },
    'table': {
        title: 'TableTech',
        description: 'TableTech (Arabic / Darija: طبلتك) is a contactless digital menu and ordering platform designed for cafés and restaurants. Guests scan a QR code on their table, browse the live menu on their phone, place orders, and pay — all without waiting for staff contact. Built as a fast, lightweight web app using Bootstrap, HTML5, jQuery, and PHP, TableTech is a low-cost, easily deployable COVID-safe solution.',
        image: 'assets/imgs/projects/projects-1/tabletech.png',
        content: `<h1><strong>TableTech – طبلتك&nbsp;</strong></h1>
            <p><strong>Contactless Table Ordering System — Frontend &amp; Backend Developer</strong><br><strong>Tech:</strong> Bootstrap, HTML5, JavaScript (jQuery), PHP<br>&nbsp;</p>
            <h2><strong>Project Summary</strong></h2>
            <p><strong>TableTech</strong> (Arabic / Darija: <strong>طبلتك</strong>) is a contactless digital menu and ordering platform designed for cafés and restaurants. Guests scan a QR code on their table, browse the live menu on their phone, place orders, and pay — all without waiting for staff contact. Built as a fast, lightweight web app using Bootstrap, HTML5, jQuery, and PHP, TableTech is a low-cost, easily deployable COVID-safe solution that reduces queueing, speeds service, and minimizes staff-customer contact.</p>
            <hr>
            <h2><strong>Key Features</strong></h2>
            <ul>
                <li><strong>QR Table Ordering</strong> — Each table has a unique QR code. Scanning opens the table's session and menu page instantly, with the table ID pre-selected for staff routing.</li>
                <li><strong>Zero Waiter Interaction</strong> — Guests browse, order and checkout from their phone; kitchen and POS receive orders immediately.</li>
                <li><strong>Live Menu Management</strong> — Admins update menu items, prices, availability and featured items via an easy PHP admin panel; changes are reflected instantly on the public menu.</li>
                <li><strong>Multiple Payment Options</strong> — Support for cash-on-delivery, QR-pay links, and integrated online payment endpoints (add gateways as needed).</li>
                <li><strong>Order Status &amp; Notifications</strong> — Real-time order states (Received → Preparing → Ready → Served) visible to customers and staff dashboards.</li>
                <li><strong>Responsive UI (Bootstrap)</strong> — Clean, mobile-first design that works on all modern phones and tablets.</li>
                <li><strong>Lightweight &amp; Offline-friendly UX</strong> — Minimal assets, client-side caching for better performance on weak networks.</li>
                <li><strong>Multilingual &amp; Darija-friendly</strong> — UI supports Arabic (RTL), French and English; key UI copy localized for Moroccan Darija (e.g., طبلتك for "your table").</li>
                <li><strong>Simple POS / Kitchen Integration</strong> — Orders routed to kitchen printer / dashboard; CSV export for daily reconciliation.</li>
            </ul>
            <hr>
            <h2><strong>Responsibilities (what I built)</strong></h2>
            <ul>
                <li>Architected the end-to-end solution: QR session flow → client menu → order flow → server processing → kitchen/POS routing.</li>
                <li>Built the responsive front-end using <strong>Bootstrap</strong> and <strong>HTML5</strong>, focusing on accessibility and RTL Arabic support.</li>
                <li>Implemented dynamic UI interactions and QR flow with <strong>JavaScript/jQuery</strong> (cart handling, order previews, status polling).</li>
                <li>Developed the backend API and admin panel with <strong>PHP</strong> (order ingestion, menu CRUD, table/session handling, simple auth).</li>
                <li>Added lightweight caching and client-side checks to handle intermittent connectivity in cafés.</li>
                <li>Integrated basic payment redirection support and receipt generation.</li>
                <li>Hardened basic input sanitization and rate-limiting for public endpoints.</li>
            </ul>
            <hr>
            <h2><strong>Architecture &amp; Data Flow (high level)</strong></h2>
            <ol>
                <li>Guest scans table QR → opens <code>site.com/table/{tableId}</code>.</li>
                <li>Frontend requests menu data (JSON) from PHP API and renders items.</li>
                <li>Guest builds cart → submits order → API creates order record and returns order ID.</li>
                <li>Kitchen dashboard / POS receives order via web socket polling or short-poll.</li>
                <li>Staff updates order status; customer UI polls status and shows updates in real time.</li>
            </ol>
            <hr>
            <h2><strong>Impact</strong></h2>
            <ul>
                <li>Reduced in-person contact and improved safety during the COVID-19 period.</li>
                <li>Shortened average time-to-order and increased table turnover.</li>
                <li>Simple self-hosted stack that restaurants can install on existing shared hosting or small VPS.</li>
                <li>Low learning curve for staff: intuitive admin and POS views, minimal training needed.</li>
            </ul>
            <hr>
            <h2><strong>Possible Enhancements (next steps)</strong></h2>
            <ul>
                <li>Add WebSocket (Socket.IO) based real-time notifications for instant kitchen updates.</li>
                <li>Integrate payment gateways (Stripe, PayPal, local gateways) for in-app checkout.</li>
                <li>Add offline-first PWA support so customers can continue ordering if connection drops.</li>
                <li>Add analytics dashboards: most-ordered items, peak hours, average basket value.</li>
                <li>Multi-restaurant/multi-branch support with role-based admin.</li>
                <li>Receipt printing via thermal printer API integration.</li>
            </ul>`
    },
    'pos': {
        title: 'Pharmacy POS System',
        description: 'A fully customized Laravel-based Inventory & Point of Sale System designed specifically for pharmacies. The system streamlines stock management, sells prescription and OTC products, handles invoicing, supplier orders, and real-time analytics.',
        image: 'assets/imgs/projects/projects-1/pos.jpg',
        content: `<h1><strong>Pharmacy Inventory &amp; POS System – Laravel-Based</strong></h1>
            <h2><strong>Overview</strong></h2>
            <p>A fully customized <strong>Laravel-based Inventory &amp; Point of Sale System</strong> designed specifically for pharmacies.
                <br>The system streamlines stock management, sells prescription and OTC products, handles invoicing, supplier orders, and real-time analytics.</p>
            <p>Built as a self-hosted solution with full source code, optimized for speed, accuracy, and pharmacy workflows (expiry tracking, batch numbers, prescription products, and controlled items).</p>
            <p>I designed and developed the entire system end-to-end, covering UI/UX, backend architecture, inventory logic, and an experimental ML module for prescription validation.</p>
            <hr>
            <h1><strong>Key Features</strong></h1>
            <h2><strong>🛒 Point of Sale (POS)</strong></h2>
            <ul>
                <li>Fast, pharmacy-optimized POS interface</li>
                <li>Barcode/QR code scanning support</li>
                <li>Add products by name, code, or brand</li>
                <li>Multi-payment support (Cash, Card, Partials)</li>
                <li>Discounts, coupons, shipping, tax rules</li>
                <li>Suspend/hold sales, restore drafts</li>
                <li>Real-time subtotal, tax, and grand total calculation</li>
                <li>Rx vs OTC product handling</li>
                <li>Prescription attachment upload</li>
            </ul>
            <hr>
            <h2><strong>📦 Inventory &amp; Stock Management</strong></h2>
            <ul>
                <li>Multi-warehouse system (main pharmacy + storage)</li>
                <li>Batch numbers, LOT tracking, and <strong>expiry-date alerts</strong></li>
                <li>Variants, units, and multi-quantity support</li>
                <li>Automatic stock adjustment after sales/purchases</li>
                <li>Purchase orders + supplier management</li>
                <li>CSV import/export for bulk product updates</li>
                <li>Daily low-stock alerts</li>
                <li>Medicine category, brand &amp; type system</li>
            </ul>
            <hr>
            <h2><strong>📊 Analytics &amp; Reporting</strong></h2>
            <ul>
                <li>Daily/weekly/monthly sales overview</li>
                <li>Profit/loss reports</li>
                <li>Stock value, expiry reports, supplier balance</li>
                <li>Product performance tracking</li>
                <li>Export to CSV/PDF</li>
            </ul>
            <hr>
            <h2><strong>👨‍⚕️ Machine Learning Prototype</strong> <i>(Experimental)</i></h2>
            <p>Built an ML module to assist with prescription authenticity:</p>
            <ul>
                <li>Reads doctor handwriting (OCR + custom model)</li>
                <li>Detects doctor stamps</li>
                <li>Highlights medication names</li>
                <li>Matches medication names to inventory
                    <br><i>(Prototype limited by training data, but fully functional as POC)</i></li>
            </ul>
            <hr>
            <h2><strong>🧾 Purchasing &amp; Supplier Management</strong></h2>
            <ul>
                <li>Create and track purchase orders</li>
                <li>Supplier due balances</li>
                <li>Purchase returns</li>
                <li>Upload documents (delivery slips, invoices)</li>
                <li>Automatic stock reconciliation</li>
            </ul>
            <hr>
            <h2><strong>⚙️ System Features</strong></h2>
            <ul>
                <li>User roles + permissions (Admin, Pharmacist, Accountant)</li>
                <li>Dark mode</li>
                <li>RTL support for Arabic</li>
                <li>Multi-currency</li>
                <li>Direct receipt printing (thermal printers supported)</li>
                <li>Notification alerts (low stock, expiry, payment due)</li>
                <li>Customer records &amp; history</li>
            </ul>
            <hr>
            <h1><strong>Technologies Used</strong></h1>
            <h2><strong>Backend</strong></h2>
            <ul>
                <li><strong>Laravel</strong> (REST API)</li>
                <li>Eloquent ORM</li>
                <li>MySQL database</li>
                <li>Queue system for heavy tasks</li>
            </ul>
            <h2><strong>Frontend</strong></h2>
            <ul>
                <li>Blade / Vue.js</li>
                <li>TailwindCSS</li>
                <li>jQuery (for quick POS response)</li>
            </ul>
            <h2><strong>Machine Learning</strong></h2>
            <ul>
                <li>Python</li>
                <li>OpenCV (image preprocessing)</li>
                <li>TensorFlow/PyTorch (handwriting recognition prototype)</li>
            </ul>
            <h2><strong>DevOps</strong></h2>
            <ul>
                <li>Docker</li>
                <li>GitHub Actions (CI/CD)</li>
                <li>NGINX reverse proxy</li>
                <li>Local + cloud deployment</li>
            </ul>
            <hr>
            <h1><strong>Impact</strong></h1>
            <ul>
                <li>Reduced checkout time for pharmacists</li>
                <li>Improved stock accuracy &amp; expiry management</li>
                <li>Provided a pharmacy-specific solution instead of generic POS software</li>
                <li>Validated the potential of AI-assisted prescription verification in Morocco</li>
            </ul>`
    },
    'real': {
        title: 'Real Estate Marketplace',
        description: 'This project consists of designing and developing a modern real estate platform that allows users to search, filter, and explore properties available for buying or renting, both locally and internationally.',
        image: 'assets/imgs/projects/projects-1/real.png',
        content: `<h1><strong>Real Estate Marketplace</strong></h1>
            <p>&nbsp;</p>
            <h2><strong>Project Overview</strong></h2>
            <p>This project consists of designing and developing a modern <strong>real estate platform</strong> that allows users to search, filter, and explore properties available for <strong>buying or renting</strong>, both locally and internationally.<br>Built during a professional mini-project at <strong>TAIBI KHALFI &amp; Cts</strong>, the platform was developed to solve a real problem in the real estate sector: the difficulty buyers and renters face when searching for properties that match their needs, budget, and location.<br>&nbsp;</p>
            <p>The platform delivers a clean UI, advanced search tools, and mobile responsiveness, making property browsing fast, intuitive, and visually appealing.</p>
            <hr>
            <h1><strong>Key Features</strong></h1>
            <h3><strong>🏠 Property Listings (Buy &amp; Rent)</strong></h3>
            <ul>
                <li>Display properties with price, size, rooms, bathrooms, and detailed descriptions.</li>
                <li>High-quality photo galleries for each property.</li>
                <li>"Explore Buying" and "Explore Renting" sections.</li>
            </ul>
            <h3><strong>🔎 Advanced Filtering</strong></h3>
            <p>Users can filter properties based on:</p>
            <ul>
                <li>Location</li>
                <li>Budget</li>
                <li>Surface area</li>
                <li>Number of rooms</li>
                <li>Type of property (studio, apartment, villa…)<br>&nbsp;</li>
            </ul>
            <h3><strong>🌍 Focus on International Listings</strong></h3>
            <p>Your document highlights a unique goal:<br>→ <strong>Integrating properties from outside Morocco</strong>, especially the UAE.<br>This differentiates the platform from existing actors like Mubawab and Sarouty.<br>&nbsp;</p>
            <h3><strong>📱 Responsive UI &amp; Modern Design</strong></h3>
            <ul>
                <li>Light mode / Dark mode switch</li>
                <li>Modern landing page showcasing Morocco landmarks</li>
                <li>Fully responsive across devices<br>&nbsp;</li>
            </ul>
            <h3><strong>👤 Admin Dashboard</strong></h3>
            <ul>
                <li>Add, update, delete properties</li>
                <li>Manage property details and media</li>
                <li>Handle listings and availability status<br>&nbsp;</li>
            </ul>
            <hr>
            <h1><strong>Technical Stack</strong></h1>
            <h3><strong>Frontend (Client Side)</strong></h3>
            <ul>
                <li><strong>React.js</strong> + JSX</li>
                <li><strong>Next.js</strong> for routing and SSR</li>
                <li><strong>Chakra UI / Custom CSS</strong></li>
                <li>Responsive SPA architecture<br>&nbsp;</li>
            </ul>
            <h3><strong>Backend (Server Side)</strong></h3>
            <ul>
                <li><strong>Node.js</strong></li>
                <li><strong>Express.js REST API</strong></li>
                <li>Controllers for properties, images, filters<br>&nbsp;</li>
            </ul>
            <h3><strong>Database</strong></h3>
            <ul>
                <li><strong>MySQL</strong> relational database</li>
                <li>Structured tables for properties, media, metadata<br>&nbsp;</li>
            </ul>
            <h3><strong>Tools &amp; Environment</strong></h3>
            <ul>
                <li>VS Code</li>
                <li>Postman for API testing</li>
                <li>Photoshop for image processing</li>
                <li>Sparx Enterprise Architect for UML modeling<br>&nbsp;</li>
            </ul>
            <hr>
            <h1><strong>Your Responsibilities</strong></h1>
            <ul>
                <li>Defined project objectives, architecture, and functional requirements.</li>
                <li>Built the entire <strong>MERN-style architecture</strong> (React + Node + MySQL backend).</li>
                <li>Designed UI/UX for landing page, property listings, search filters, and property details.</li>
                <li>Implemented advanced filtering logic and responsive layouts.</li>
                <li>Developed admin CRUD system for listing management.</li>
                <li>Modeled UML diagrams: use-cases, sequence diagrams, Gantt chart.</li>
                <li>Performed testing &amp; validation of features.<br>&nbsp;</li>
            </ul>
            <hr>
            <h1><strong>Impact</strong></h1>
            <ul>
                <li>Improved property visibility and search efficiency for buyers and renters.</li>
                <li>Simplified property management for the company via an admin dashboard.</li>
                <li>Delivered a scalable structure that can integrate listings from international markets (UAE, Europe…).</li>
                <li>Strengthened your full-stack expertise in modern JavaScript ecosystems.</li>
            </ul>`
    }
};

