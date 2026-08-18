const fs = require('fs');

const pages = [
    {
        name: 'industries.html',
        title: 'Industries Served | SPPL',
        desc: 'Explore the diverse industries SPPL serves, including Defence, Marine, Offshore, and Infrastructure.',
        active: 'industries.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Industries Served</h1>
            <p class="lead">Delivering Specialized Solutions Across Core Sectors</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4" data-aos="fade-up">
                    <div class="card border-0 shadow-sm h-100 p-4 text-center">
                        <i class="fas fa-shield-alt text-orange mb-3" style="font-size: 3rem;"></i>
                        <h4 class="card-title text-navy">Defence & Naval</h4>
                        <p class="card-text text-secondary small">Providing mission-critical vessels and heavy equipment for naval and coast guard operations with uncompromising security and quality standards.</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="card border-0 shadow-sm h-100 p-4 text-center">
                        <i class="fas fa-oil-can text-orange mb-3" style="font-size: 3rem;"></i>
                        <h4 class="card-title text-navy">Oil & Gas / Offshore</h4>
                        <p class="card-text text-secondary small">Fabricating massive offshore platforms, jackets, and pressure vessels designed to withstand extreme marine environments.</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="card border-0 shadow-sm h-100 p-4 text-center">
                        <i class="fas fa-ship text-orange mb-3" style="font-size: 3rem;"></i>
                        <h4 class="card-title text-navy">Commercial Marine</h4>
                        <p class="card-text text-secondary small">Building and repairing commercial fleets including bulk carriers, tugs, and specialized dredgers.</p>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
                    <div class="card border-0 shadow-sm h-100 p-4 text-center">
                        <i class="fas fa-industry text-orange mb-3" style="font-size: 3rem;"></i>
                        <h4 class="card-title text-navy">Power & Infrastructure</h4>
                        <p class="card-text text-secondary small">Manufacturing heavy structural columns, process equipment, and turnkey fabrication for power plants and large infrastructure projects.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'products.html',
        title: 'Products | SPPL',
        desc: 'View our world-class engineered products across shipbuilding and heavy engineering.',
        active: 'products.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Our Products</h1>
            <p class="lead">Engineered for Performance and Durability</p>
        </div>
    </section>
    <section class="section-padding bg-light">
        <div class="container">
            <div class="row align-items-center mb-5">
                <div class="col-lg-6" data-aos="fade-right">
                    <img src="https://images.unsplash.com/photo-1579737155694-df9b42fc08f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tug Boat" class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-left">
                    <h2 class="text-navy">Harbor Tugs & Workboats</h2>
                    <p class="text-secondary">Custom-designed tugs with highly maneuverable Azimuth Stern Drive (ASD) systems for efficient harbor operations and towing.</p>
                    <ul>
                        <li>Bollard Pull: 30T to 70T</li>
                        <li>Classification: IRS, ABS, Lloyd's</li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary-custom mt-3">Inquire Now</a>
                </div>
            </div>
            <div class="row align-items-center flex-row-reverse mb-5">
                <div class="col-lg-6" data-aos="fade-left">
                    <img src="https://images.unsplash.com/photo-1541888062974-9bc0dd8a8f15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Heat Exchanger" class="img-fluid rounded shadow">
                </div>
                <div class="col-lg-6 mt-4 mt-lg-0" data-aos="fade-right">
                    <h2 class="text-navy">Process Equipment</h2>
                    <p class="text-secondary">Heavy-walled pressure vessels, columns, and heat exchangers built with exotic metallurgies for petrochemical complexes.</p>
                    <ul>
                        <li>ASME U, U2, & R Stamps</li>
                        <li>Weight Capacity: Up to 500 MT</li>
                    </ul>
                    <a href="contact.html" class="btn btn-primary-custom mt-3">Inquire Now</a>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'infrastructure.html',
        title: 'Infrastructure | SPPL',
        desc: 'Discover SPPL’s world-class manufacturing facilities and waterfront shipyard.',
        active: 'infrastructure.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Infrastructure</h1>
            <p class="lead">State-of-the-art Manufacturing & Shipyard Facilities</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container text-center">
            <p class="lead mb-5" data-aos="fade-up">Spread across 500,000 sq.m, our integrated facility boasts deep-water jetties, massive fabrication shops, and advanced CNC machinery.</p>
            <div class="row g-4">
                <div class="col-md-6" data-aos="fade-up">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Shipyard" class="img-fluid rounded shadow mb-3">
                    <h3 class="text-navy">Waterfront Shipyard</h3>
                    <p class="text-secondary small">Equipped with 250m long slipways, Goliath cranes, and a dedicated fitting-out jetty capable of handling vessels up to 20,000 DWT.</p>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Heavy Machine Shop" class="img-fluid rounded shadow mb-3">
                    <h3 class="text-navy">Heavy Machine & Fabrication Shop</h3>
                    <p class="text-secondary small">Features heavy plate rolling machines, multi-axis CNC milling, automatic submerged arc welding stations, and heavy lifting overhead cranes.</p>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'quality.html',
        title: 'Quality & Safety | SPPL',
        desc: 'Learn about our rigorous quality assurance and zero-harm safety culture.',
        active: 'quality.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Quality & Safety</h1>
            <p class="lead">Uncompromising Standards in Every Detail</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row g-5">
                <div class="col-md-6" data-aos="fade-right">
                    <h2 class="section-title">Quality Assurance</h2>
                    <p class="mt-4 text-secondary">Quality is embedded in our DNA. We operate a rigorous QA/QC program aligned with global standards. Our in-house NDT testing facility and metrology lab ensure precision engineering.</p>
                    <ul class="list-unstyled mt-3">
                        <li><i class="fas fa-check text-orange me-2"></i> ISO 9001:2015 Certified</li>
                        <li><i class="fas fa-check text-orange me-2"></i> ASME U, U2, S, R Stamps</li>
                        <li><i class="fas fa-check text-orange me-2"></i> CE Marking capabilities</li>
                    </ul>
                </div>
                <div class="col-md-6" data-aos="fade-left">
                    <h2 class="section-title">Health & Safety</h2>
                    <p class="mt-4 text-secondary">We maintain a 'Zero Harm' policy. SPPL is committed to providing a safe working environment for all employees, contractors, and stakeholders through continuous training and strict adherence to HSE protocols.</p>
                    <ul class="list-unstyled mt-3">
                        <li><i class="fas fa-check text-orange me-2"></i> ISO 45001:2018 Certified (OH&S)</li>
                        <li><i class="fas fa-check text-orange me-2"></i> ISO 14001:2015 Certified (Environment)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'clients.html',
        title: 'Our Clients | SPPL',
        desc: 'Discover the esteemed global clients that trust SPPL for their heavy engineering needs.',
        active: 'clients.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Our Clients</h1>
            <p class="lead">Trusted by Global Industry Leaders</p>
        </div>
    </section>
    <section class="section-padding bg-light">
        <div class="container text-center">
            <p class="lead mb-5" data-aos="fade-up">We have built long-standing relationships with premier organizations across Defence, Marine, and Oil & Gas sectors globally.</p>
            <div class="row g-4 align-items-center justify-content-center">
                <!-- Using FontAwesome icons as placeholder logos for a premium feel without external image dependencies -->
                <div class="col-md-3 col-6" data-aos="zoom-in"><div class="p-4 bg-white rounded shadow-sm"><i class="fas fa-anchor fa-3x text-navy mb-2"></i><h5>Global Maritime</h5></div></div>
                <div class="col-md-3 col-6" data-aos="zoom-in" data-aos-delay="100"><div class="p-4 bg-white rounded shadow-sm"><i class="fas fa-gas-pump fa-3x text-navy mb-2"></i><h5>PetroCorp</h5></div></div>
                <div class="col-md-3 col-6" data-aos="zoom-in" data-aos-delay="200"><div class="p-4 bg-white rounded shadow-sm"><i class="fas fa-shield-alt fa-3x text-navy mb-2"></i><h5>Naval Defence</h5></div></div>
                <div class="col-md-3 col-6" data-aos="zoom-in" data-aos-delay="300"><div class="p-4 bg-white rounded shadow-sm"><i class="fas fa-bolt fa-3x text-navy mb-2"></i><h5>PowerGrid Int.</h5></div></div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'media.html',
        title: 'Media & News | SPPL',
        desc: 'Stay updated with the latest news, events, and media gallery of SPPL.',
        active: 'media.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Media Room</h1>
            <p class="lead">Latest News, Events, and Corporate Updates</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-4" data-aos="fade-up">
                    <div class="card border-0 shadow-sm h-100">
                        <img src="https://images.unsplash.com/photo-1541888062974-9bc0dd8a8f15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" class="card-img-top" alt="News">
                        <div class="card-body">
                            <span class="text-orange small fw-bold">Press Release</span>
                            <h5 class="card-title text-navy mt-2">SPPL secures major offshore fabrication contract</h5>
                            <p class="card-text text-secondary small">SPPL has been awarded a multi-million dollar contract for the fabrication of a wellhead platform...</p>
                            <a href="#" class="btn btn-sm btn-outline-custom mt-2">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="card border-0 shadow-sm h-100">
                        <img src="https://images.unsplash.com/photo-1579737155694-df9b42fc08f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" class="card-img-top" alt="News">
                        <div class="card-body">
                            <span class="text-orange small fw-bold">Event</span>
                            <h5 class="card-title text-navy mt-2">Successful launch of 50T Bollard Pull Tug</h5>
                            <p class="card-text text-secondary small">The latest addition to the harbor operations fleet was successfully launched at SPPL Shipyard today.</p>
                            <a href="#" class="btn btn-sm btn-outline-custom mt-2">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'careers.html',
        title: 'Careers | SPPL',
        desc: 'Join the SPPL team. Explore career opportunities in heavy engineering and shipbuilding.',
        active: 'careers.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Careers at SPPL</h1>
            <p class="lead">Build Your Future with an Industry Leader</p>
        </div>
    </section>
    <section class="section-padding bg-light">
        <div class="container text-center">
            <h2 class="section-title mb-4">Why Join Us?</h2>
            <p class="lead text-secondary max-w-700 mx-auto mb-5">At SPPL, we offer more than just a job. We offer a career working on some of the most challenging and impressive engineering projects in the world. We foster a culture of innovation, continuous learning, and inclusivity.</p>
            
            <div class="row g-4 mt-4 text-start">
                <div class="col-md-6" data-aos="fade-up">
                    <div class="p-4 bg-white rounded shadow-sm border-start border-4" style="border-color: var(--c-industrial-orange) !important;">
                        <h4 class="text-navy">Naval Architect</h4>
                        <p class="text-secondary small">Location: Shipyard HQ | Experience: 5-8 Years</p>
                        <a href="contact.html" class="btn btn-sm btn-outline-custom">Apply Now</a>
                    </div>
                </div>
                <div class="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <div class="p-4 bg-white rounded shadow-sm border-start border-4" style="border-color: var(--c-industrial-orange) !important;">
                        <h4 class="text-navy">Sr. Welding Engineer</h4>
                        <p class="text-secondary small">Location: Heavy Fabrication Unit | Experience: 10+ Years</p>
                        <a href="contact.html" class="btn btn-sm btn-outline-custom">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    },
    {
        name: 'contact.html',
        title: 'Contact Us | SPPL',
        desc: 'Get in touch with SPPL for inquiries, project discussions, and support.',
        active: 'contact.html',
        content: `
    <section class="page-header bg-navy text-white text-center py-5" style="background-color: var(--c-navy-blue);">
        <div class="container py-5" data-aos="fade-up">
            <h1 class="display-4 fw-bold text-white">Contact Us</h1>
            <p class="lead">We'd love to hear from you</p>
        </div>
    </section>
    <section class="section-padding">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-5" data-aos="fade-right">
                    <h2 class="text-navy mb-4">Corporate Headquarters</h2>
                    <div class="d-flex mb-4">
                        <i class="fas fa-map-marker-alt text-orange fa-2x mt-1 me-3"></i>
                        <div>
                            <h5 class="text-navy mb-1">Address</h5>
                            <p class="text-secondary mb-0">Plot No. 45, Industrial Area, Phase II,<br>Manufacturing District, India - 400001</p>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <i class="fas fa-phone-alt text-orange fa-2x mt-1 me-3"></i>
                        <div>
                            <h5 class="text-navy mb-1">Phone</h5>
                            <p class="text-secondary mb-0">+91 98765 43210<br>+91 22 1234 5678</p>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <i class="fas fa-envelope text-orange fa-2x mt-1 me-3"></i>
                        <div>
                            <h5 class="text-navy mb-1">Email</h5>
                            <p class="text-secondary mb-0">info@sppl.com<br>sales@sppl.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7" data-aos="fade-left">
                    <div class="bg-light p-5 rounded shadow-sm">
                        <h3 class="text-navy mb-4">Send us a Message</h3>
                        <form action="javascript:void(0);">
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <input type="text" class="form-control form-control-lg" placeholder="Your Name" required>
                                </div>
                                <div class="col-md-6">
                                    <input type="email" class="form-control form-control-lg" placeholder="Your Email" required>
                                </div>
                                <div class="col-12">
                                    <input type="text" class="form-control form-control-lg" placeholder="Subject" required>
                                </div>
                                <div class="col-12">
                                    <textarea class="form-control form-control-lg" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary-custom w-100 justify-content-center">Send Message <i class="fas fa-paper-plane ms-2"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>`
    }
];

const template = (page) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${page.desc}">
    <title>${page.title}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- Topbar -->
    <div class="header-top d-none d-lg-block">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <span class="me-3"><i class="fas fa-envelope text-orange me-2"></i> info@sppl.com</span>
                    <span><i class="fas fa-phone-alt text-orange me-2"></i> +91 98765 43210</span>
                </div>
                <div class="col-md-6 text-end">
                    <a href="careers.html" class="me-3">Careers</a>
                    <a href="media.html" class="me-3">Media</a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="ms-2"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src="images/logo/logo.webp" alt="SPPL Logo" height="40"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="capabilities.html" id="capabilitiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Capabilities
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="capabilitiesDropdown">
                            <li><a class="dropdown-item" href="capabilities.html#shipbuilding">Shipbuilding</a></li>
                            <li><a class="dropdown-item" href="capabilities.html#heavy-engineering">Heavy Engineering</a></li>
                            <li><a class="dropdown-item" href="capabilities.html#offshore">Offshore Engineering</a></li>
                            <li><a class="dropdown-item" href="capabilities.html#fabrication">Industrial Fabrication</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link ${page.active === 'products.html' ? 'active' : ''}" href="products.html">Products</a></li>
                    <li class="nav-item"><a class="nav-link ${page.active === 'projects.html' ? 'active' : ''}" href="projects.html">Projects</a></li>
                    <li class="nav-item"><a class="nav-link ${page.active === 'infrastructure.html' ? 'active' : ''}" href="infrastructure.html">Infrastructure</a></li>
                    <li class="nav-item"><a class="nav-link ${page.active === 'contact.html' ? 'active' : ''}" href="contact.html">Contact</a></li>
                </ul>
                <a href="contact.html" class="btn btn-primary-custom ms-lg-3 d-none d-lg-inline-flex">Inquire Now</a>
            </div>
        </div>
    </nav>

    ${page.content}

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <h2 class="text-white m-0 mb-4 fw-bold">SPPL</h2>
                    <p class="text-secondary" style="color: var(--c-steel-grey-light) !important;">Suryadipta Projects Pvt. Ltd. is a leading heavy engineering and shipbuilding corporation dedicated to executing mega projects with unmatched precision, quality, and scale.</p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="capabilities.html">Capabilities</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-heading">Our Services</h4>
                    <ul class="footer-links">
                        <li><a href="capabilities.html#shipbuilding">Shipbuilding</a></li>
                        <li><a href="capabilities.html#heavy-engineering">Heavy Engineering</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="footer-heading">Contact Us</h4>
                    <ul class="footer-links">
                        <li class="d-flex mb-3">
                            <i class="fas fa-phone-alt text-orange mt-1 me-3"></i>
                            <span class="text-secondary" style="color: var(--c-steel-grey-light) !important;">+91 98765 43210</span>
                        </li>
                        <li class="d-flex mb-3">
                            <i class="fas fa-envelope text-orange mt-1 me-3"></i>
                            <span class="text-secondary" style="color: var(--c-steel-grey-light) !important;">info@sppl.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="mb-0">&copy; 2026 Suryadipta Projects Pvt. Ltd. (SPPL). All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Scroll to Top -->
    <div class="scroll-top">
        <i class="fas fa-chevron-up"></i>
    </div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="js/main.js"></script>
</body>
</html>`;

pages.forEach(p => {
    fs.writeFileSync(p.name, template(p));
    console.log('Created ' + p.name);
});
