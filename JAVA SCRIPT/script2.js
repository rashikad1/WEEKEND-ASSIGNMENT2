document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { id: "JRYT456", deptIc: "UHDSG", name: "JOHN",size:"23", mediaSize: "2 GB" },
        { id: "JHSAG636", deptIc: "ASDFJ", name: "JANE", size:"45", mediaSize: "0.4 GB" },
        { id: "ASJHSA77", deptIc: "SAFEF", name: "BOB", size:"76", mediaSize: "200 GB" },
        { id: "KSAHKJ366", deptIc: "AFEEE", name: "MARY", size:"87", mediaSize: "50 GB" },
        { id: "SAKJHD35", deptIc: "REYER", name: "KARAN", size:"29", mediaSize: "45 GB" },
        { id: "KKHUASU33", deptIc: "HJHGF", name: "CHRISSY",size:"88", mediaSize: "500 GB" },
    ];

    const rowsPerPage = 5;
    let currentPage = 1;

    function renderTable(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        const tableBody = document.getElementById('customerTable');
        tableBody.innerHTML = '';

        paginatedData.forEach(row => {
            const tableRow = document.createElement('tr');
            tableRow.innerHTML = `
                <td>${row.id}</td>
                <td>${row.deptIc}</td>
                <td>${row.name}</td>
                <td>${row.size}</td>
                <td>${row.mediaSize}</td>
            `;
            tableBody.appendChild(tableRow);
        });

        document.getElementById('pageNumber').textContent = page;
    }

    document.getElementById('prevPage').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage);
        }
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        if (currentPage * rowsPerPage < data.length) {
            currentPage++;
            renderTable(currentPage);
        }
    });

    renderTable(currentPage);
});
