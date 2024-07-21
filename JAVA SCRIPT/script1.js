document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { id: "JRYT456", deptId: "UHDSG", name: "JOHN", email: "skadj@gmail.com", mediaSize: "2 GB" },
        { id: "JHSAG636", deptId: "ASDFJ", name: "JANE", email: "skadj@gmail.com", mediaSize: "0.4 GB" },
        { id: "ASJHSA77", deptId: "SAFEF", name: "BOB", email: "skadj@gmail.com", mediaSize: "200 GB" },
        { id: "KSAHKJ366", deptId: "AFEEE", name: "MARY", email: "skadj@gmail.com", mediaSize: "50 GB" },
        { id: "SAKJHD35", deptId: "REYER", name: "KARAN", email: "skadj@gmail.com", mediaSize: "45 GB" },
        { id: "KKHUASU33", deptId: "HJHGF", name: "CHRISSY", email: "skadj@gmail.com", mediaSize: "500 GB" },
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
                <td>${row.deptId}</td>
                <td>${row.name}</td>
                <td>${row.email}</td>
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
