
document.addEventListener("DOMContentLoaded", function() {
    var contentDiv = document.getElementById('content');

    document.getElementById('home').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "index.html";
    });

    document.getElementById('about').addEventListener('click', function(e) {
        e.preventDefault();
        contentDiv.innerHTML = '<div id="content" class="container"><h2>About Harvard University</h2><img src="about.jpg" alt="Harvard Campus"><p>Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally.</p><p>The University, which is based in Cambridge and Boston, Massachusetts, has an enrollment of over 20,000 degree candidates, including undergraduate, graduate, and professional students.</p></div>';
    });

    document.getElementById('academics').addEventListener('click', function(e) {
        e.preventDefault();
        contentDiv.innerHTML = '<div id="content" class="container"><section class="academics-section"><h2>Academics at Harvard</h2><div class="programs-container"><div class="program"><img src="computer_science.jpg" alt="Computer Science"><h3>Computer Science</h3><p>The Computer Science program at Harvard offers a comprehensive curriculum covering algorithms, programming languages, artificial intelligence, and more.</p></div><div class="program"><img src="engineering.jpg" alt="Engineering"><h3>Engineering</h3><p>The Engineering program at Harvard provides students with a strong foundation in mathematics, physics, and design principles, preparing them for careers in various engineering fields.</p></div><div class="program"><img src="business.jpg" alt="Business"><h3>Business</h3><p>The Business program at Harvard focuses on management, finance, marketing, and entrepreneurship, equipping students with the skills to excel in the business world.</p></div></div></section></div>';
    });

    document.getElementById('admissions').addEventListener('click', function(e) {
        e.preventDefault();
        contentDiv.innerHTML = '<div id="content" class="container"><section class="admissions-section"><h2>Admissions at Harvard</h2><div class="admissions-info"><p>Thank you for your interest in Harvard University! We seek students who demonstrate academic excellence, intellectual curiosity, and a commitment to making a difference in the world.</p><p>To apply, please review the following information:</p><ul><li>Application Requirements: High school transcripts, standardized test scores (SAT or ACT), letters of recommendation, essays, and extracurricular activities.</li><li>Application Deadlines: Regular decision deadline is January 1st. Early action deadline is November 1st.</li><li>Financial Aid: Harvard is committed to meeting 100% of demonstrated financial need for all admitted students.</li></ul><p>For more information and to apply, visit our <a href="https://college.harvard.edu/admissions/apply" target="_blank" rel="noopener noreferrer">admissions website</a>.</p></div></section></div>';
    });

    document.getElementById('contact').addEventListener('click', function(e) {
        e.preventDefault();
        contentDiv.innerHTML = '<div id="content" class="container"><h2>Contact Harvard University</h2><img src="contact.jpg" alt="Contact Harvard"><p>Contact us at info@harvard.edu or call us at 123-456-7890. You can also visit our campus at 86 Brattle Street, Cambridge, MA 02138.</p><h3>Send us a message:</h3><form id="contactForm"><div><label for="name">Name:</label><input type="text" id="name" name="name" required></div><div><label for="email">Email:</label><input type="email" id="email" name="email" required></div><div><label for="subject">Subject:</label><input type="text" id="subject" name="subject" required></div><div><label for="message">Message:</label><textarea id="message" name="message" rows="4" required></textarea></div><div><button type="submit">Send</button></div></form></div>';
    });
});
