import"./modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",()=>{(r=>{const e=document.querySelector(".g1");e.innerHTML="",r.forEach(t=>{const n=`
                <div class="bg-white p-4 shadow rounded-lg">
                    <h3 class="text-lg font-bold">Farmer: ${t.farmer}</h3>
                    <p>Crop: ${t.crop}</p>
                    <p>Offer: ₹${t.offer} per quintal</p>
                    <button class="mt-4 bg-[#85BF35] text-white py-2 px-4 rounded">Accept Offer</button>
                </div>
            `;e.innerHTML+=n})})([{farmer:"Ravi Kumar Yadav",crop:"Organic Wheat",offer:1400},{farmer:"Pankaj Kumar Singh",crop:"Basmati Rice",offer:1500},{farmer:"Abhishek Tripathi",crop:"Sugarcane",offer:4e3}])});document.addEventListener("DOMContentLoaded",function(){const o=[{id:1,title:"Contract for Organic Wheat Supply",description:"Looking for farmers to supply 10 tons of organic wheat.",location:"Prayagraj",price:"1300",postedDate:"2024-09-15"},{id:2,title:"Contract for Basmati Rice Supply",description:"Looking for farmers to supply 8 tons of basmati rice.",location:"Kurukshetra",price:"1450",postedDate:"2024-09-10"}];function a(){const r=document.getElementById("posted-contracts");o.forEach(e=>{const t=document.createElement("div");t.classList.add("bg-white","shadow","p-6","rounded-lg"),t.innerHTML=`
                <h2 class="text-xl font-semibold mb-2">${e.title}</h2>
                <p class="text-gray-700 mb-4">${e.description}</p>
                <p class="text-gray-700 mb-4">Location: ${e.location}</p>
                <p class="text-gray-700 mb-4">Price: ₹${e.price} per quintal</p>
                <p class="text-sm text-gray-500 mb-4">Posted on: ${e.postedDate}</p>
            `,r.appendChild(t)})}a()});
