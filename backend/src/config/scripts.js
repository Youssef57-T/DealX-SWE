document.addEventListener('DOMContentLoaded', () => {
    fetch('./data/cleaned_data.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#datatablesSimple tbody');
            data.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${row.product_name || 'N/A'}</td>
                    <td>${row.category || 'N/A'}</td>
                    <td>${row.ratings ? row.ratings.toFixed(2) : 'N/A'}</td>
                    <td>${row.no_of_ratings || 'N/A'}</td>
                    <td>${row.discount_price ? row.discount_price.toFixed(2) : 'N/A'}</td>
                    <td>${row.price ? row.price.toFixed(2) : 'N/A'}</td>
                `;
                tableBody.appendChild(tr);
            });

            new simpleDatatables.DataTable('#datatablesSimple');
        })
        .catch(error => console.error('Error loading data:', error));
});
