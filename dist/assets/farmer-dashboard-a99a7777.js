import"./modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",function(){const o=[{id:1,title:"Contract for Organic Wheat Supply",description:"Looking for farmers to supply 10 tons of organic wheat.",buyer:"Prayagraj",price:"1300",postedDate:"2024-09-15"},{id:2,title:"Contract for Basmati Rice Supply",description:"Looking for farmers to supply 8 tons of basmati rice.",buyer:"Kurukshetra",price:"1450",postedDate:"2024-09-10"}];function n(){const r=document.querySelector(".grid1");o.forEach(t=>{const e=document.createElement("div");e.classList.add("bg-white","shadow","p-6","rounded-lg"),e.innerHTML=`
            <h2 class="text-xl font-semibold mb-2">${t.title}</h2>
            <p class="text-gray-700 mb-4">${t.description}</p>
            <p class="text-gray-700 mb-4">Price: ₹${t.price} per quintal</p>
            <p class="text-gray-700 mb-4">Buyer: ${t.buyer}</p>
            <p class="text-sm text-gray-500 mb-3">Posted on: ${t.postedDate}</p>
            <button class="mt-4 bg-[#85BF35] text-white py-2 px-4 rounded">Accept</button>
            <button class="mt-4 bg-[#85BF35] text-white py-2 px-4 ml-10 rounded">Negotiate</button>
            `,r.appendChild(e)})}n()});document.addEventListener("DOMContentLoaded",function(){(r=>{const t=document.querySelector(".grid2");t.innerHTML="",r.forEach(e=>{const s=`
                <div class="bg-white p-4 shadow rounded-lg">
                    <h3 class="text-lg font-bold">Buyer: ${e.buyer}</h3>
                    <p>Crop: ${e.crop}</p>
                    <p>Price: ₹${e.price} per quintal</p>
                    <p>Status: ${e.status}</p>
                </div>
            `;t.innerHTML+=s})})([{buyer:"Nestle",crop:"Coffee Beans",price:"15000",status:"In Progress"},{buyer:"Fortune",crop:"Basmati Rice",price:"1600",status:"Dispatched"}])});
