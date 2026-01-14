---
layout: default
title: Dibakar Dhar | Research Portfolio
---

<div class="portfolio-container">
  <div class="sidebar">
    <img src="assets/images/profile.png" alt="Dibakar Dhar" class="profile-pic">
    <h2>Dibakar Dhar</h2>
    <p><strong>Ph.D. Scholar</strong></p>
    <p>Cooch Behar Panchanan Barma University</p>
    <hr>
    <a href="myCV.pdf" class="btn">Download CV (PDF)</a>
  </div>

  <div class="main-content">
    <div class="tab">
      <button class="tablinks" onclick="openTab(event, 'About')" id="defaultOpen">About</button>
      <button class="tablinks" onclick="openTab(event, 'Research')">Research</button>
      <button class="tablinks" onclick="openTab(event, 'Projects')">Projects</button>
      <button class="tablinks" onclick="openTab(event, 'Awards')">Awards</button>
    </div>

    <div id="About" class="tabcontent">
      <h3>Personal Profile</h3>
      <p>My research focuses on understanding the fundamental structure of the universe through event-by-event dynamical fluctuations in high-energy physics. [cite: 29, 30]</p>
      <ul>
        <li><strong>M.Sc.:</strong> Physics (Astrophysics & Cosmology), 76%. [cite: 18, 19]</li>
        <li><strong>B.Sc.:</strong> Physics (Honours), 81.65%. [cite: 22, 23]</li>
      </ul>
    </div>

    <div id="Research" class="tabcontent">
      <h3>Peer-Reviewed Publications</h3>
      <table>
        <tr><th>Year</th><th>Journal</th><th>Title</th></tr>
        <tr><td>2025</td><td>Braz. J. Phys.</td><td>Intermittency Analysis in p-Pb Collisions [cite: 34, 35]</td></tr>
        <tr><td>2025</td><td>Indian J. Phys.</td><td>Analytical model of low-mass strange stars [cite: 38]</td></tr>
        <tr><td>2024</td><td>EPJ Plus</td><td>Investigation of net-charge fluctuation in PbPb [cite: 50]</td></tr>
      </table>
    </div>

    <div id="Projects" class="tabcontent">
      <h3>Technical Projects</h3>
      <h4>aliBuildO2Physics Installer</h4>
      <p>Automated shell script to simplify the complex ALICE O2 software build process.</p>
      <p><strong>Skills:</strong> C++, ROOT, Python, TensorFlow, PyTorch. [cite: 68]</p>
    </div>

    <div id="Awards" class="tabcontent">
      <h3>Achievements</h3>
      <ul>
        <li><strong>ISRO START:</strong> Exploration of the Solar System. [cite: 86]</li>
        <li><strong>IBM:</strong> Python 101 for Data Science. [cite: 99, 100]</li>
        <li><strong>Youth Science Fair:</strong> District Runners Up (2021). [cite: 81]</li>
      </ul>
    </div>
  </div>
</div>

<script>
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) { tabcontent[i].style.display = "none"; }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) { tablinks[i].className = tablinks[i].className.replace(" active", ""); }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
</script>
