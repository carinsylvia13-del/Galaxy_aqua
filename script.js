const products = [
  ['CSM RO Membrane','components','A high-rejection reverse-osmosis membrane element for dependable dissolved-solids reduction.','1595f466-2335-4e0f-b460-938be026d4ec.JPG'],
  ['SS RO Water Dispenser','dispensers','A durable stainless-steel RO dispenser for convenient multi-user drinking-water access.','160f4d66-acdb-4c53-8f9e-73bd7f71c9b4.JPG'],
  ['Domestic RO Purifier','purifiers','A compact domestic RO purifier for convenient everyday drinking-water access.','1b749f96-4e1b-4849-877c-89b4c3b9cdaa.JPG'],
  ['Sand Filter & Softener System','softeners','A paired treatment system that filters suspended matter and reduces hardness for whole-building use.','2114990d-b4f4-44ac-907e-d425a7a60d7c.JPG'],
  ['Hot & Normal RO Water Dispenser','dispensers','A compact RO dispenser offering convenient hot and normal drinking water.','235fcd52-d6d3-4e66-b3eb-dfc37625aecb.JPG'],
  ['ORG Scale-Free Cartridge','components','A compact anti-scale treatment cartridge that helps protect downstream plumbing and equipment.','23e1c64d-b5ee-4ba8-8d73-25c3cec2b5dd.JPG'],
  ['Automatic Water Softener','softeners','An automated ion-exchange softener for reducing hardness and scale in incoming water.','2a4108c0-6595-4d8f-9663-284cfdbb3fe5.JPG'],
  ['Floor-Standing Stainless RO Water Dispenser','dispensers','A stainless-steel RO water dispenser built for dependable everyday use.','3072fa2c-ee80-48ac-a67a-e17a97e27bdb.JPG'],
  ['Bathroom Softner - Auto','softeners','An automatic compact softener that helps reduce hard-water scale in the bathroom.','30ff9236-cc56-48cc-87ea-1467acf9a1ad.JPG'],
  ['Dual-Stage Filter System','commercial','A rugged twin-housing filtration system for staged sediment and contaminant control.','3a4bcd03-6382-4cb1-9591-5c97cba8fc17.JPG'],
  ['Alkaline Cartridge','components','A post-treatment cartridge designed to condition taste and add an alkaline finishing stage.','3ed83e2c-46c0-400e-ba9c-127fe6a317f7.JPG'],
  ['Floor-Standing RO Purifier','purifiers','An integrated purifier and dispenser for clean drinking water in homes or workplaces.','3f398381-d8db-47d1-a26f-9f69ff5f003d.JPG'],
  ['Compact Domestic RO Purifier','purifiers','A compact RO system package created for everyday domestic drinking-water purification.','4287e7c6-e383-4325-8238-464af3596652.JPG'],
  ['JCI RO Membrane','components','A replacement reverse-osmosis membrane for reducing dissolved salts in compatible purifiers.','4d874ca2-fe52-4872-9861-c6fa8844051c.JPG'],
  ['Space-Saving RO Purifier','purifiers','A compact domestic RO purifier package suited to kitchens with limited installation space.','50d646ab-7a5b-4898-b536-38f66973c00b.JPG'],
  ['Single-Tank Water Softener','softeners','A streamlined softening system that reduces hardness to help limit scale formation.','50e8c38f-2363-4a3e-ab4d-20b3fe9c27f6.JPG'],
  ['SS Dispenser with built in RO','commercial','A stainless-steel dispenser with built-in RO for higher-demand drinking water.','5cb49ded-e2fb-472c-bffa-da6d7870ba48.JPG'],
  ['Dispenser with Commercial RO','commercial','A high-capacity dispenser paired with commercial RO treatment.','7c2d8276-fbfd-417d-9d48-b045cbb5bba9.JPG'],
  ['Advanced Domestic RO Purifier','purifiers','A feature-rich domestic RO purifier package for convenient everyday drinking-water treatment.','a133fd67-dbce-4b31-8637-88356399bf45.JPG'],
  ['Compact Commercial RO Plant','commercial','250/500/1000 Lph','a134e12e-9807-47fb-abf5-60576c6e1564.JPG'],
  ['250 LPH Commercial RO Plant','commercial','A packaged reverse-osmosis plant designed for higher-volume treated-water production.','b0869941-68fd-4587-b9eb-f63a0a33903f.JPG'],
  ['Cabinet Water Softener','softeners','An automatic cabinet-style softener that combines resin and brine systems in a tidy footprint.','b764ce89-8aa4-41ac-982f-16cf39e90336.JPG'],
  ['BGT Under-Sink RO System','purifiers','A compact under-counter purifier with a storage tank and dedicated drinking-water faucet.','c2b10ca4-a593-48a0-aa3d-6a85f97931dd.JPG'],
  ['Portable Demineralisation Plant','commercial','A compact demineralisation unit for applications that need lower-mineral process water.','db9ebf4c-2c4e-4446-a338-d823b8a177ce.JPG'],
  ['Premium Cabinet Softener','softeners','An enclosed automatic softener for reducing hard-water scale with a clean residential finish.','ebc4069f-574a-48a2-b9fe-c2a8e7786b46.JPG'],
  ['DuPont FilmTec RO Membrane','components','A FilmTec reverse-osmosis element engineered for efficient dissolved-solids removal.','filmtec-membrane.JPG']
];
const labels={purifiers:'Home purification',dispensers:'Water dispensers',softeners:'Softeners & filters',commercial:'Commercial systems',components:'Membranes & media'};
const grid=document.querySelector('#product-grid');
grid.innerHTML=products.map(([name,category,description,image])=>`<article class="product-card" data-category="${category}"><div class="product-image"><img loading="lazy" src="assets/products/${image}" alt="${name}"></div><div class="product-info"><span class="category">${labels[category]}</span><h3>${name}</h3><p>${description}</p></div></article>`).join('');
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');button.classList.add('active');const value=button.dataset.filter;document.querySelectorAll('.product-card').forEach(card=>card.classList.toggle('hidden',value!=='all'&&card.dataset.category!==value));}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.isIntersecting&&entry.target.classList.add('visible')),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.menu-toggle').addEventListener('click',e=>{const nav=document.querySelector('#site-nav');const open=nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',open);});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('#site-nav').classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
