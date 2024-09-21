// contractor-dashboard.js

document.addEventListener('DOMContentLoaded', () => {
    // Example data for offers
    const offers = [
        { farmer: 'Ravi Kumar Yadav', crop: 'Organic Wheat', offer: 1400 },
        { farmer: 'Pankaj Kumar Singh', crop: 'Basmati Rice', offer: 1500 },
        { farmer: 'Abhishek Tripathi', crop: 'Sugarcane', offer: 4000 }
    ];

    // Function to render submitted offers dynamically
    const renderOffers = (offers) => {
        const offerContainer = document.querySelector('.g1');
        offerContainer.innerHTML = ''; // Clear existing offers

        offers.forEach(offer => {
            const offerCard = `
                <div class="bg-white p-4 shadow rounded-lg">
                    <h3 class="text-lg font-bold">Farmer: ${offer.farmer}</h3>
                    <p>Crop: ${offer.crop}</p>
                    <p>Offer: ₹${offer.offer} per quintal</p>
                    <button class="mt-4 bg-[#85BF35] text-white py-2 px-4 rounded">Accept Offer</button>
                </div>
            `;
            offerContainer.innerHTML += offerCard;
        });
    };

    renderOffers(offers);
});

document.addEventListener('DOMContentLoaded', function () {
    // Example data for contracts and offers (replace with actual data from server or API)
    const contracts = [
        {
            id: 1,
            title: "Contract for Organic Wheat Supply",
            description: "Looking for farmers to supply 10 tons of organic wheat.",
            location:"Prayagraj",
            price:"1300",
            postedDate: "2024-09-15"
        },
        {
            id: 2,
            title: "Contract for Basmati Rice Supply",
            description: "Looking for farmers to supply 8 tons of basmati rice.",
            location:"Kurukshetra",
            price:"1450",
            postedDate: "2024-09-10"
        }
    ];

    // Function to render contracts and offers
    function renderContracts() {
        const contractsContainer = document.getElementById('posted-contracts');

        contracts.forEach(contract => {
            // Create contract element
            const contractElement = document.createElement('div');
            contractElement.classList.add('bg-white', 'shadow', 'p-6', 'rounded-lg');

            // Add contract details
            contractElement.innerHTML = `
                <h2 class="text-xl font-semibold mb-2">${contract.title}</h2>
                <p class="text-gray-700 mb-4">${contract.description}</p>
                <p class="text-gray-700 mb-4">Location: ${contract.location}</p>
                <p class="text-gray-700 mb-4">Price: ₹${contract.price} per quintal</p>
                <p class="text-sm text-gray-500 mb-4">Posted on: ${contract.postedDate}</p>
            `;

            // Append contract to the container
            contractsContainer.appendChild(contractElement);
        });
    }

    // Render contracts on page load
    renderContracts();
});

