// farmer-dashboard.js

// document.addEventListener('DOMContentLoaded', () => {
//     // Example data for ongoing contracts and payments
//     const ongoingContracts = [
//         { id: 1, crop: 'Wheat', buyer: 'ABC Corp', price: 1500, status: 'In Progress' },
//         { id: 2, crop: 'Rice', buyer: 'XYZ Corp', price: 1400, status: 'In Progress' }
//     ];

//     const payments = [
//         { contract: 'Wheat Contract', amount: 45000, status: 'Pending' },
//         { contract: 'Rice Contract', amount: 30000, status: 'Completed' }
//     ];

//     // Code to render ongoing contracts and payment status dynamically
//     // Similar to the previous app.js script, update the page content dynamically
// });

document.addEventListener("DOMContentLoaded", function () {
	// Example data for contracts and offers (replace with actual data from server or API)
	const contracts = [
		{
			id: 1,
			title: "Contract for Organic Wheat Supply",
			description: "Looking for farmers to supply 10 tons of organic wheat.",
			buyer: "Prayagraj",
			price: "1300",
			postedDate: "2024-09-15",
		},
		{
			id: 2,
			title: "Contract for Basmati Rice Supply",
			description: "Looking for farmers to supply 8 tons of basmati rice.",
			buyer: "Kurukshetra",
			price: "1450",
			postedDate: "2024-09-10",
		},
	];

	// Function to render contracts and offers
	function renderContracts() {
		const contractsContainer = document.querySelector(".grid1");

		contracts.forEach((contract) => {
			// Create contract element
			const contractElement = document.createElement("div");
			contractElement.classList.add(
				"bg-white",
				"shadow",
				"p-6",
				"rounded-lg"
			);

			// Add contract details
			contractElement.innerHTML = `
            <h2 class="text-xl font-semibold mb-2">${contract.title}</h2>
            <p class="text-gray-700 mb-4">${contract.description}</p>
            <p class="text-gray-700 mb-4">Price: ₹${contract.price} per quintal</p>
            <p class="text-gray-700 mb-4">Buyer: ${contract.buyer}</p>
            <p class="text-sm text-gray-500 mb-3">Posted on: ${contract.postedDate}</p>
            <button class="mt-4 bg-[#85BF35] text-white py-2 px-4 rounded">Accept</button>
            <button class="mt-4 bg-[#85BF35] text-white py-2 px-4 ml-10 rounded">Negotiate</button>
            `;

			// Append contract to the container
			contractsContainer.appendChild(contractElement);
		});
	}

	// Render contracts on page load
	renderContracts();
});

document.addEventListener("DOMContentLoaded", function () {
	// Example data for offers
	const contracts = [
		{
			buyer: "Nestle",
			crop: "Coffee Beans",
			price: "15000",
			status: "In Progress",
		},
		{
			buyer: "Fortune",
			crop: "Basmati Rice",
			price: "1600",
			status: "Dispatched",
		},
	];

	// Function to render submitted offers dynamically
	const renderOffers = (contracts) => {
		const contractContainer = document.querySelector(".grid2");
		contractContainer.innerHTML = ""; // Clear existing offers

		contracts.forEach((contracts) => {
			const contractCard = `
                <div class="bg-white p-4 shadow rounded-lg">
                    <h3 class="text-lg font-bold">Buyer: ${contracts.buyer}</h3>
                    <p>Crop: ${contracts.crop}</p>
                    <p>Price: ₹${contracts.price} per quintal</p>
                    <p>Status: ${contracts.status}</p>
                </div>
            `;
			contractContainer.innerHTML += contractCard;
		});
	};

	renderOffers(contracts);
});
