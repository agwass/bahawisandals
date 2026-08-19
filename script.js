// ── DATA ───────────────────────────────────────────────
const WA_NUMBER = '254713133050';
const WA_BASE = `https://wa.me/${WA_NUMBER}?text=`;

// NOTE: The following paths point to an "images" folder in your root directory.
// Please ensure you create a folder named "images" and place your 10 files inside it.
const IMG_SANDAL1 = "images/sandal2_.jpeg"; // Kente Bow Slide
const IMG_SANDAL2 = "images/sandal3.jpeg";  // Kente Toe-Post
const IMG_SANDAL3 = "images/sandal4.jpeg";  // Classic Cross-Strap
const IMG_SANDAL4 = "images/sandal5_.jpeg"; // Leather Thong
const IMG_SANDAL5 = "images/sandal6.jpeg";  // Teal Braided
const IMG_SANDAL6 = "images/womensandal1.jpeg"; // Striped Band

const IMG_SHOE1 = "images/shoe2.jpeg"; // Grey Moc-Toe
const IMG_SHOE2 = "images/shoe3_.jpeg"; // Black Stiletto
const IMG_SHOE3 = "images/shoe5.jpeg";  // Black Buckle Oxford
const IMG_SHOE4 = "images/shoe6.jpeg";  // Brown Tassel Loafer

// Placeholders for belt images
const IMG_BELT1 = "https://images.unsplash.com/photo-1705493655920-20c572928501?w=600&h=700&fit=crop&auto=format";
const IMG_BELT2 = "https://images.unsplash.com/photo-1691437832228-0f970a5c191b?w=600&h=700&fit=crop&auto=format";

const PRODUCTS = [
    // ── SANDALS (PRICE 2500, SIMPLE DESCRIPTION) ──
    { 
        id: 1, name: 'Kente Bow Slide', price: 2500, category: 'sandals', 
        material: 'Leather sole with Kente fabric strap', sizes: ['36','37','38','39','40','41'], colors: ['Multi-colour'], 
        image: IMG_SANDAL1, images: [IMG_SANDAL1, IMG_SANDAL2], 
        description: 'Handcrafted leather sandals.', 
        rating: 4.9, reviews: 118, badge: 'Bestseller' 
    },
    { 
        id: 2, name: 'Kente Toe-Post Sandal', price: 2500, category: 'sandals', 
        material: 'Leather sole with Kente bow detail', sizes: ['36','37','38','39','40'], colors: ['Multi-colour'], 
        image: IMG_SANDAL2, images: [IMG_SANDAL2, IMG_SANDAL1], 
        description: 'Handcrafted leather sandals.', 
        rating: 4.7, reviews: 64 
    },
    { 
        id: 3, name: 'Classic Cross-Strap Sandal', price: 2500, category: 'sandals', 
        material: 'Full-grain black leather', sizes: ['38','39','40','41','42','43','44','45'], colors: ['Black'], 
        image: IMG_SANDAL3, images: [IMG_SANDAL3], 
        description: 'Handcrafted leather sandals.', 
        rating: 4.8, reviews: 203, badge: 'Bestseller' 
    },
    { 
        id: 4, name: 'Leather Thong Sandal', price: 2500, category: 'sandals', 
        material: 'Full-grain black leather', sizes: ['36','37','38','39','40','41','42','43','44'], colors: ['Black'], 
        image: IMG_SANDAL4, images: [IMG_SANDAL4, IMG_SANDAL3], 
        description: 'Handcrafted leather sandals.', 
        rating: 4.6, reviews: 97 
    },
    { 
        id: 5, name: 'Teal Braided Toe-Post', price: 2500, category: 'sandals', 
        material: 'Tan leather with braided teal accent', sizes: ['36','37','38','39','40','41'], colors: ['Tan & Teal'], 
        image: IMG_SANDAL5, images: [IMG_SANDAL5], 
        description: 'Handcrafted leather sandals.', 
        rating: 4.9, reviews: 41, badge: 'New Arrival' 
    },
    { 
        id: 6, name: 'Striped Band Sandal', price: 2500, category: 'sandals', 
        material: 'White leather sole with fabric band', sizes: ['36','37','38','39','40','41','42'], colors: ['White / Red / Green'], 
        image: IMG_SANDAL6, images: [IMG_SANDAL6], 
        description: 'Handcrafted leather sandals.', 
        rating: 4.7, reviews: 55 
    },

    // ── SHOES (SIMPLE DESCRIPTION) ──
    { 
        id: 7, name: 'Grey Moc-Toe Boat Shoe', price: 5500, category: 'shoes', 
        material: 'Grey nubuck leather', sizes: ['39','40','41','42','43','44','45'], colors: ['Grey'], 
        image: IMG_SHOE1, images: [IMG_SHOE1], 
        description: 'Handcrafted leather shoes.', 
        rating: 4.7, reviews: 38, badge: 'New Arrival' 
    },
    { 
        id: 8, name: 'Black Stiletto Heel', price: 6500, category: 'shoes', 
        material: 'Full-grain black leather', sizes: ['36','37','38','39','40','41'], colors: ['Black'], 
        image: IMG_SHOE2, images: [IMG_SHOE2], 
        description: 'Handcrafted leather shoes.', 
        rating: 4.8, reviews: 72 
    },
    { 
        id: 9, name: 'Black Buckle Oxford', price: 4800, category: 'shoes', 
        material: 'Patent-finish black leather', sizes: ['36','37','38','39','40','41','42'], colors: ['Black'], 
        image: IMG_SHOE3, images: [IMG_SHOE3], 
        description: 'Handcrafted leather shoes.', 
        rating: 4.6, reviews: 44 
    },
    { 
        id: 10, name: 'Brown Tassel Loafer', price: 6800, category: 'shoes', 
        material: 'Full-grain dark brown leather', sizes: ['39','40','41','42','43','44','45'], colors: ['Dark Brown'], 
        image: IMG_SHOE4, images: [IMG_SHOE4], 
        description: 'Handcrafted leather shoes.', 
        rating: 4.9, reviews: 29, badge: 'Limited' 
    },

    // ── BELTS ──
    { 
        id: 11, name: 'Savannah Woven Belt', price: 2400, category: 'belts', 
        material: 'Hand-plaited cowhide strips', sizes: ['S (28–32")','M (32–36")','L (36–40")','XL (40–44")'], colors: ['Tan','Black','Two-Tone'], 
        image: IMG_BELT1, images: [IMG_BELT1, IMG_BELT2], 
        description: 'Each strip of cowhide is hand-cut and plaited by our artisans in Nairobi CBD.', 
        rating: 4.7, reviews: 203 
    },
    { 
        id: 12, name: 'Kikuyu Braided Belt', price: 2800, category: 'belts', 
        material: 'Triple-strand cowhide braid', sizes: ['S (28–32")','M (32–36")','L (36–40")','XL (40–44")'], colors: ['Tan','Brown'], 
        image: IMG_BELT2, images: [IMG_BELT2], 
        description: 'A classic three-strand braid, perfected across decades of craft.', 
        rating: 4.8, reviews: 94, badge: 'Bestseller' 
    },
];

const TESTIMONIALS = [
    { name: 'Amara Odhiambo', location: 'Nairobi', text: "I've worn my Maasai sandals every day for two years. They've developed this incredible patina and only get more beautiful. Worth every shilling.", rating: 5 },
    { name: 'David Kariuki', location: 'Mombasa', text: 'The Nairobi Oxford is the finest shoe I own. The leather was stiff at first but after a month it feels like it was made for my foot specifically.', rating: 5 },
    { name: 'Sophie Mburu', location: 'Kisumu', text: "My belt arrived beautifully packaged with a handwritten note. That personal touch is what makes Bahawi different from every online store I've used.", rating: 5 },
    { name: 'James Waweru', location: 'Eldoret', text: "Bought three pairs for my groomsmen. Everyone asked where they came from. Proud to say: right here in Kenya.", rating: 5 },
];

// Updated Restoration Services including BAG REPAIR
const RESTORATION_SERVICES = [
    { icon: '🧴', title: 'Deep Clean & Condition', price: 'From KSh 800', desc: 'Full leather clean, stain treatment, and conditioning to restore the hide\'s natural oils and sheen.' },
    { icon: '👟', title: 'Shoe Re-Sole', price: 'From KSh 1,500', desc: 'We strip and replace worn-out soles with Vibram or rubber-blend units matched to the original profile.' },
    { icon: '🪡', title: 'Shoe Re-Stitching', price: 'From KSh 600', desc: 'Broken seams re-sewn with waxed linen using the same saddle-stitch technique as our new shoes.' },
    { icon: '🎨', title: 'Colour Restoration', price: 'From KSh 1,200', desc: 'Faded or scuffed leather re-dyed and buffed to match the original colour or to a new shade of your choice.' },
    { icon: '🔧', title: 'Heel Replacement', price: 'From KSh 700', desc: 'Worn heel blocks replaced and re-nailed to bring back original height and stability.' },
    { icon: '👜', title: 'Bag Strap & Handle Repair', price: 'From KSh 1,800', desc: 'Reinforce or replace worn-out straps, handles, and buckles on leather bags using high-quality materials.' },
    { icon: '🧵', title: 'Bag Lining & Zipper Repair', price: 'From KSh 1,500', desc: 'Replace torn fabric linings, faulty zippers, and loose internal pockets to make your bag feel new again.' },
    { icon: '✨', title: 'Full Restoration Package', price: 'From KSh 4,500', desc: 'The complete package — clean, condition, re-sole, restitch, colour restore, and a final hand-polish (Shoes or Bags).' },
];

// ── STATE ──────────────────────────────────────────────
let currentPage = 'home';
let currentCategory = 'all';
let selectedProductId = null;

// ── NAVIGATION ──────────────────────────────────────────
function navigate(page, productId = null) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(`page-${page}`);
    if (target) {
        target.classList.add('active');
        target.classList.remove('page-enter');
        void target.offsetWidth; 
        target.classList.add('page-enter');
    }
    
    currentPage = page;
    if (productId !== null) {
        selectedProductId = productId;
        renderProductDetail(productId);
    }
    
    document.querySelectorAll('.nav-links button, .mobile-menu button').forEach(btn => btn.classList.remove('active'));
    if (page !== 'home') {
        document.querySelectorAll(`.nav-links button[onclick*="navigate('${page}')"], .mobile-menu button[onclick*="navigate('${page}')"]`).forEach(btn => btn.classList.add('active'));
    }

    document.getElementById('mobileMenu').classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

function filterShop(category) {
    navigate('shop');
    currentCategory = category;
    renderShop();
    document.querySelectorAll('.filter-group .filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll(`.filter-group .filter-btn[onclick*="filterShop('${category}')"]`).forEach(btn => btn.classList.add('active'));
}

function openRestorationWA() {
    const msg = encodeURIComponent("Hi Bahawi! I'd like to enquire about your Leather Restoration service. Here's what I need help with:");
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

function orderProduct() {
    const product = PRODUCTS.find(p => p.id === selectedProductId);
    if (!product) return;
    
    const sizeEl = document.querySelector('.pd-opt-btn.size.active');
    const colorEl = document.querySelector('.pd-opt-btn.color.active');
    
    const size = sizeEl ? sizeEl.textContent : product.sizes[0];
    const color = colorEl ? colorEl.textContent : product.colors[0];
    
    const msg = encodeURIComponent(
        `Hi Bahawi! I'd like to order:\n\n*${product.name}*\nSize: ${size}\nColour: ${color}\nPrice: KSh ${product.price.toLocaleString()}\n\nPlease confirm availability. 🙏`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

// ── RENDER FUNCTIONS ────────────────────────────────────

function renderProductCard(product) {
    const stars = Array.from({length: 5}, (_, i) => `<span class="pc-rating" style="color:${i < Math.round(product.rating) ? '#C1622D' : '#D9CDBF'}">★</span>`).join('');
    return `
        <div class="product-card">
            <div class="pc-img-wrap" onclick="navigate('product', ${product.id})">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="pc-badge">${product.badge}</span>` : ''}
                <div class="pc-overlay">
                    <button class="btn-wa" style="padding:12px; font-size:13px; min-height:44px; justify-content:center; width:100%;" onclick="event.stopPropagation(); orderProductDirect(${product.id})">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Order via WhatsApp
                    </button>
                </div>
            </div>
            <div class="pc-info" onclick="navigate('product', ${product.id})">
                <p class="pc-cat">${product.category}</p>
                <p class="pc-name">${product.name}</p>
                <div class="pc-bottom">
                    <span class="pc-price">KSh ${product.price.toLocaleString()}</span>
                    <span class="pc-rating">${stars}</span>
                </div>
            </div>
        </div>
    `;
}

function orderProductDirect(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const msg = encodeURIComponent(`Hi Bahawi! I'd like to order:\n\n*${p.name}*\nPrice: KSh ${p.price.toLocaleString()}\n\nPlease confirm availability. 🙏`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
}

function renderShop() {
    const container = document.getElementById('shopProducts');
    const sort = document.getElementById('sortSelect').value;
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    document.getElementById('priceDisplay').textContent = maxPrice.toLocaleString();
    
    let products = PRODUCTS.filter(p => {
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        if (p.price > maxPrice) return false;
        return true;
    });
    
    if (sort === 'price-asc') products.sort((a,b) => a.price - b.price);
    else if (sort === 'price-desc') products.sort((a,b) => b.price - a.price);
    else if (sort === 'rating') products.sort((a,b) => b.rating - a.rating);
    
    document.getElementById('productCount').textContent = `${products.length} products`;
    container.innerHTML = products.map(p => renderProductCard(p)).join('');
}

function renderFeatured() {
    const container = document.getElementById('featuredProducts');
    const featuredIds = [1, 7, 3, 8]; 
    const featured = PRODUCTS.filter(p => featuredIds.includes(p.id));
    container.innerHTML = featured.map(p => renderProductCard(p)).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsList');
    container.innerHTML = TESTIMONIALS.map(t => `
        <div class="reveal" style="background:rgba(245,239,230,0.07); border:1px solid rgba(245,239,230,0.12); border-radius:4px; padding:28px;">
            <div style="display:flex; gap:2px; margin-bottom:16px;">
                ${Array.from({length: t.rating}).map(() => `<span style="color:#C1622D; font-size:14px;">★</span>`).join('')}
            </div>
            <p style="font-family:'Playfair Display', serif; font-size:16px; font-style:italic; color:#F5EFE6; line-height:1.65; margin-bottom:20px;">"${t.text}"</p>
            <p style="font-weight:600; font-size:14px; color:#F5EFE6;">${t.name}</p>
            <p style="font-size:12px; color:rgba(245,239,230,0.5); margin-top:2px;">${t.location}</p>
        </div>
    `).join('');
}

function renderRestoration() {
    const container = document.getElementById('restorationServices');
    container.innerHTML = RESTORATION_SERVICES.map(s => `
        <div class="resto-card">
            <span class="resto-icon">${s.icon}</span>
            <h3 class="resto-title">${s.title}</h3>
            <p class="resto-price">${s.price}</p>
            <p class="resto-desc">${s.desc}</p>
        </div>
    `).join('');
}

function renderProductDetail(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;
    
    document.getElementById('pdBreadcrumb').textContent = product.name;
    document.getElementById('pdMainImg').src = product.images[0];
    document.getElementById('pdMainImg').alt = product.name;
    
    document.getElementById('pdBadge').textContent = product.badge || '';
    document.getElementById('pdBadge').style.display = product.badge ? 'inline-block' : 'none';
    document.getElementById('pdTitle').textContent = product.name;
    document.getElementById('pdPrice').textContent = `KSh ${product.price.toLocaleString()}`;
    document.getElementById('pdMaterial').textContent = `Material: ${product.material}`;
    document.getElementById('pdDesc').textContent = product.description;
    
    const stars = Array.from({length: 5}, (_, i) => `<span class="pd-star ${i < Math.round(product.rating) ? 'filled' : ''}">★</span>`).join('');
    document.getElementById('pdStars').innerHTML = `${stars} <span style="font-size:13px; color:#8C7B6E; margin-left:10px;">${product.rating} · ${product.reviews} reviews</span>`;
    
    const thumbs = product.images.map((img, i) => `
        <button class="pd-thumb ${i === 0 ? 'active' : ''}" onclick="changeProductImage(${i})">
            <img src="${img}" alt="Thumbnail ${i+1}">
        </button>
    `).join('');
    document.getElementById('pdThumbs').innerHTML = thumbs;
    
    document.getElementById('pdColorSelected').textContent = product.colors[0];
    const colorsHtml = product.colors.map(c => `
        <button class="pd-opt-btn color ${c === product.colors[0] ? 'active' : ''}" onclick="selectProductOption('color', '${c}')">${c}</button>
    `).join('');
    document.getElementById('pdColors').innerHTML = colorsHtml;
    
    document.getElementById('pdSizeLabel').innerHTML = `Size${product.category === 'belts' ? '' : ' (EU)'}`;
    const sizesHtml = product.sizes.map(s => `
        <button class="pd-opt-btn size" onclick="selectProductOption('size', '${s}')">${s}</button>
    `).join('');
    document.getElementById('pdSizes').innerHTML = sizesHtml;
    
    const reviewsHtml = [
        {name:'Fatuma O.',text:'Perfect fit, incredible quality.',rating:5,date:'2 weeks ago'},
        {name:'Brian K.',text:'Took a week to break in — now my most comfortable shoes.',rating:5,date:'1 month ago'},
        {name:'Njeri M.',text:'Fast delivery, beautiful packaging. Bought as a gift.',rating:4,date:'3 months ago'}
    ].map(r => `
        <div class="review">
            <div class="review-head">
                <div>
                    <p class="review-name">${r.name}</p>
                    <div style="display:flex; gap:2px; margin-top:2px;">
                        ${Array.from({length:5}, (_, i) => `<span style="color:${i < r.rating ? '#C1622D' : '#D9CDBF'}; font-size:12px;">★</span>`).join('')}
                    </div>
                </div>
                <span class="review-date">${r.date}</span>
            </div>
            <p class="review-text">${r.text}</p>
        </div>
    `).join('');
    document.getElementById('tab-reviews').innerHTML = reviewsHtml;
    
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);
    document.getElementById('pdRelatedGrid').innerHTML = related.map(p => renderProductCard(p)).join('');
    
    selectedProductId = id;
}

function changeProductImage(index) {
    const product = PRODUCTS.find(p => p.id === selectedProductId);
    if (!product) return;
    document.getElementById('pdMainImg').src = product.images[index];
    document.querySelectorAll('.pd-thumb').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });
}

function selectProductOption(type, value) {
    const parent = type === 'color' ? document.getElementById('pdColors') : document.getElementById('pdSizes');
    parent.querySelectorAll('.pd-opt-btn').forEach(btn => btn.classList.remove('active'));
    parent.querySelectorAll(`.pd-opt-btn`).forEach(btn => {
        if (btn.textContent === value) btn.classList.add('active');
    });
    if (type === 'color') document.getElementById('pdColorSelected').textContent = value;
}

function switchTab(tab) {
    document.querySelectorAll('.pd-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.pd-tab-content').forEach(el => el.classList.remove('active'));
    document.querySelector(`.pd-tab-btn[onclick*="switchTab('${tab}')"]`).classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
}

// ── INIT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderFeatured();
    renderTestimonials();
    renderRestoration();
    
    document.getElementById('priceRange').addEventListener('input', renderShop);
    document.getElementById('sortSelect').addEventListener('change', renderShop);
    
    renderShop();
    
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        form.innerHTML = `<p style="font-family:'Playfair Display', serif; font-style:italic; font-size:18px; color:#4A2E1F;">Thank you — you're on the list.</p>`;
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => observer.observe(el));
});