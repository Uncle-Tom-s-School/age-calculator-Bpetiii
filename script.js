function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        // document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }
    if(day <= 0 || month <= 0 || year <= 0 ){
        // document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += daysInPrevMonth;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("resy").innerText = ageYears
    document.getElementById("resm").innerText = ageMonths
    document.getElementById("resd").innerText = ageDays
}