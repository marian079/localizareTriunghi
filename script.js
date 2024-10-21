document.getElementById("coordForm").addEventListener("submit", function(event){
    event.preventDefault(); // Oprește comportamentul implicit de trimitere a formularului

    // Preluarea valorilor introduse de utilizator
    const xA = document.getElementById("xA").value;
    const yA = document.getElementById("yA").value;
    const xB = document.getElementById("xB").value;
    const yB = document.getElementById("yB").value;
    const xC = document.getElementById("xC").value;
    const yC = document.getElementById("yC").value;
    const xM = document.getElementById("xM").value;
    const yM = document.getElementById("yM").value;

    // Stocarea datelor în Local Storage
    localStorage.setItem("xA", xA);
    localStorage.setItem("yA", yA);
    localStorage.setItem("xB", xB);
    localStorage.setItem("yB", yB);
    localStorage.setItem("xC", xC);
    localStorage.setItem("yC", yC);
    localStorage.setItem("xM", xM);
    localStorage.setItem("yM", yM);

    // Redirecționează utilizatorul către o altă pagină
    window.location.href = "rezolvare.html"; // Schimbă cu pagina dorită
});
