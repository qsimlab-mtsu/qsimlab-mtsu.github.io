const G={short:"Qsim Lab",full:"Quantum Simulation & Computation Group",inst:"Department of Physics & Astronomy, Middle Tennessee State University"};
const pages=[["index.html","Home"],["research.html","Research"],["publications.html","Publications"],["team.html","Team"]];
const cur=location.pathname.split("/").pop()||"index.html";
document.querySelector("#hdr").outerHTML=`<header class="site"><div class="wrap"><a class="brand" href="index.html">⟨ψ| <span>${G.short}</span> ⟩ · MTSU</a><nav>${pages.map(([h,t])=>`<a href="${h}" class="${h===cur?"on":""}">${t}</a>`).join("")}</nav></div></header>`;
document.querySelector("#ftr").outerHTML=`<footer><div class="wrap">© ${new Date().getFullYear()} ${G.full} · ${G.inst}<br>Group lead: <a href="https://www.linkedin.com/in/abhijit-iqc/">Abhijit Chakraborty</a> · <a href="https://scholar.google.com/citations?user=ZXcbxWIAAAAJ">Google Scholar</a> · <a href="https://github.com/abhijit975">GitHub</a></div></footer>`;
