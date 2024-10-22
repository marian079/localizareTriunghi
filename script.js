function checkPosition() {
    // Coordonatele punctelor A, B, C și M
    const ax = parseFloat(document.getElementById("ax").value);
    const ay = parseFloat(document.getElementById("ay").value);
    const bx = parseFloat(document.getElementById("bx").value);
    const by = parseFloat(document.getElementById("by").value);
    const cx = parseFloat(document.getElementById("cx").value);
    const cy = parseFloat(document.getElementById("cy").value);
    const mx = parseFloat(document.getElementById("mx").value);
    const my = parseFloat(document.getElementById("my").value);

    // Determinante pentru triunghiurile MAB, MBC și MCA
    const D_MAB = (ax * (by - my)) + (bx * (my - ay)) + (mx * (ay - by));
    const D_MBC = (bx * (cy - my)) + (cx * (my - by)) + (mx * (by - cy));
    const D_MCA = (cx * (ay - my)) + (ax * (my - cy)) + (mx * (cy - ay));

    let result;

    if (D_MAB === 0 && D_MBC === 0 && D_MCA === 0) {
        result = "Punctul M este în vârf sau coliniar cu toate cele 3 puncte.";
    } else if (D_MAB > 0 && D_MBC > 0 && D_MCA > 0) {
        result = "Punctul M este în interiorul triunghiului ABC.";
    } else if (D_MAB === 0 || D_MBC === 0 || D_MCA === 0) {
        // Verificăm pe ce latură se află punctul M
        if (D_MAB === 0) {
            result = "Punctul M este pe latura AB a triunghiului.";
        } else if (D_MBC === 0) {
            result = "Punctul M este pe latura BC a triunghiului.";
        } else if (D_MCA === 0) {
            result = "Punctul M este pe latura CA a triunghiului.";
        }
    } else {
        result = "Punctul M este în exteriorul triunghiului ABC.";
    }

    // Afișarea rezultatului
    document.getElementById("result").innerText = result;
}
