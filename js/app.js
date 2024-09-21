// app.js

// Example data for contracts
const contracts = [
    { id: 1, crop: 'Wheat', buyer: 'ABC Corp', location: 'Punjab', price: 1500 },
    { id: 2, crop: 'Rice', buyer: 'XYZ Farms', location: 'Haryana', price: 1800 },
    { id: 3, crop: 'Sugarcane', buyer: 'PQR Traders', location: 'Maharashtra', price: 1600 },
    // Add more contract data here
];

// Function to render contracts on the marketplace
const renderContracts = () => {
    const contractList = document.getElementById('contractList');
    contractList.innerHTML = ''; // Clear existing contracts

    contracts.forEach(contract => {
        const contractCard = `
            <div class="bg-white p-4 shadow rounded-lg">
                <h3 class="text-lg font-bold">${contract.crop} Contract</h3>
                <p>Buyer: ${contract.buyer}</p>
                <p>Location: ${contract.location}</p>
                <p>Price: ₹${contract.price} per quintal</p>
                <button class="mt-4 bg-green-500 text-white py-2 px-4 rounded" 
                        onclick="openModal(${contract.id})">
                    View Details
                </button>
            </div>
        `;
        contractList.innerHTML += contractCard;
    });
};

// Function to open contract details modal
const openModal = (contractId) => {
    const contract = contracts.find(c => c.id === contractId);
    if (contract) {
        // Set the modal content
        document.getElementById('modalTitle').innerText = `${contract.crop} Contract`;
        document.getElementById('modalCrop').innerText = `Crop: ${contract.crop}`;
        document.getElementById('modalBuyer').innerText = `Buyer: ${contract.buyer}`;
        document.getElementById('modalLocation').innerText = `Location: ${contract.location}`;
        document.getElementById('modalPrice').innerText = `Price: ₹${contract.price} per quintal`;

        // Show the modal
        document.getElementById('contractModal').classList.remove('hidden');
    }
};

// Function to close modal
const closeModal = () => {
    document.getElementById('contractModal').classList.add('hidden');
};

// Call renderContracts to display the contracts when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderContracts();
});
