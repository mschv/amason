/**
 * AMASON.COM — Product Data
 * ─────────────────────────────────────────────
 * HOW TO ADD A PRODUCT:
 *
 *  1. Copy one of the entries below (from the opening { to the closing },)
 *  2. Change the key — e.g. 'my-product-name'
 *     This key becomes the URL: pages/product.html?id=my-product-name
 *  3. Fill in all the fields (see field descriptions below)
 *  4. Link to it from anywhere: <a href="pages/product.html?id=my-product-name">
 *
 * ── FIELD REFERENCE ──────────────────────────────────────────────────────────
 *
 * Page section          | Field          | Type / Notes
 * --------------------- | -------------- | ------------------------------------
 * breadcrumb            | category       | string — shown as category link
 * price area            | price          | string — e.g. '11.98'  (REQUIRED)
 *                       | priceWas       | string — original price, omit to hide
 * image gallery         | images         | array of URLs; first = main photo
 * top highlights table  | highlights     | array of [label, value] pairs
 * about bullets         | about          | array of strings  (REQUIRED)
 * style section         | style          | array of strings, omit to hide
 * details table         | details        | array of [label, value] pairs
 * product info table    | productInfo    | array of [label, value] pairs
 * description           | description    | string — paragraph below the fold
 * box contents          | boxContents    | array of strings
 * reviews               | reviews        | array of { name, rating, title, date, body, helpful }
 * rating bars           | ratingDist     | object { 5: pct, 4: pct, … 1: pct }
 *
 * REQUIRED fields: title, brand, category, price, images, about
 * carousels            | carousels      | array of 2 keys from CAROUSEL_DATA
 */

// ── CAROUSEL DATA ─────────────────────────────────────────────────────────────
// Used by product.html to render the two "you might also like" sections.
// Each entry: { title, type ('book'|'product'|'fashion'), items: [...] }
// Item fields: img, brand, desc, stars, price, was, deal, href (optional)

const CAROUSEL_DATA = {

  books: {
    title: 'Best Sellers in Books',
    type:  'book',
    items: [
      { href: 'product.html?id=atomic-habits',         img: 'https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF350,350_QL50_.jpg',        tag: 'PDF', brand: 'James Clear',           desc: 'Atomic Habits',                 stars: '★★★★★', price: '$0', was: '$27.00', deal: 'Free with Prime' },
      { href: 'product.html?id=harry-potter',          img: 'https://prodimage.images-bn.com/pimages/9781546148500_p0_v4_s600x595.jpg',        tag: 'PDF', brand: 'J.K. Rowling',           desc: 'Harry Potter and the ...',      stars: '★★★★★', price: '$0', was: '$14.99', deal: 'Free with Prime' },
      { href: 'product.html?id=name-of-the-rose',      img: 'https://m.media-amazon.com/images/I/819SFV6rfRL._AC_UF1000,1000_QL80_.jpg',       tag: 'PDF', brand: 'Umberto Eco',            desc: 'The Name of the Rose',          stars: '★★★★★', price: '$0', was: '$18.00', deal: 'Free with Prime' },
      { href: 'product.html?id=the-shining',           img: 'https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg',       tag: 'PDF', brand: 'Stephen King',           desc: 'The Shining',                   stars: '★★★★☆', price: '$0', was: '$16.00', deal: 'Free with Prime' },
      { href: 'product.html?id=one-hundred-years',     img: 'https://m.media-amazon.com/images/I/91GoCrV6emL._AC_UF1000,1000_QL80_.jpg',       tag: 'PDF', brand: 'Gabriel García Márquez', desc: 'One Hundred Years of Solitude', stars: '★★★★★', price: '$0', was: '$17.00', deal: 'Free with Prime' },
      { href: 'product.html?id=1984',                  img: 'https://m.media-amazon.com/images/I/71wANojhEKL._AC_UF1000,1000_QL80_.jpg',       tag: 'PDF', brand: 'George Orwell',          desc: '1984',                          stars: '★★★★★', price: '$0', was: '$12.00', deal: 'Free with Prime' },
      { href: 'product.html?id=great-gatsby',          img: 'https://m.media-amazon.com/images/I/81T4dS6IkaL._AC_UF1000,1000_QL80_.jpg',       tag: 'PDF', brand: 'F. Scott Fitzgerald',    desc: 'The Great Gatsby',              stars: '★★★★☆', price: '$0', was: '$10.00', deal: 'Free with Prime' },
      { href: 'product.html?id=the-jungle',            img: 'https://m.media-amazon.com/images/I/712D103oWGL._AC_UF1000,1000_QL80_.jpg',       tag: 'PDF', brand: 'Upton Sinclair',         desc: 'The Jungle',                    stars: '★★★★☆', price: '$0', was: '$15.00', deal: 'Free with Prime' },
    ],
  },

  jewelry: {
    title: 'Fine Jewelry & Watches',
    type:  'product',
    items: [
      { href: 'product.html?id=van-cleef-alhambra',    img: 'https://www.vancleefarpels.com/content/dam/rcq/vca/DT/Qr/0T/lW/Sg/e8/B6/gl/WW/Q9/aw/DTQr0TlWSge8B6glWWQ9aw.png',                                      brand: 'Van Cleff',    desc: 'Alhambra Necklace, Gold & Malachite',            stars: '★★★★★', price: '$189.00', was: '$6,700.00',  deal: '97% off · Limited time' },
      { href: 'product.html?id=cartier-love-bracelet', img: 'https://fortrove.com/cdn/shop/files/57_3576cb38-add4-4892-83f9-f320f8ed5559.jpg?v=1756934043',                    brand: 'Catier',       desc: 'Yellow Gold and Diamond Love Bracelet',          stars: '★★★★★', price: '$249.00', was: '$7,550.00',  deal: '96% off · Limited time' },
      { href: 'product.html?id=rolex-submariner',      img: 'https://s3.us-east-1.amazonaws.com/ISHOWIMAGES/ROLEX+V7/wp/upright_watch_assets_portrait/m126610ln-0001.webp',    brand: 'Rollex',       desc: 'Submariner Date, Oystersteel',                   stars: '★★★★★', price: '$299.00', was: '$14,100.00', deal: '97% off · Limited time' },
      { href: 'product.html?id=tiffany-t-wire',        img: 'https://media.tiffany.com/is/image/tco/60010733_BLT_MAIN1X1?hei=628&wid=628&fmt=webp',                            brand: 'Tifany & Co.', desc: 'T Wire Bracelet, Sterling Silver',                stars: '★★★★☆', price: '$79.00',  was: '$575.00',   deal: '86% off · Limited time' },
      { href: 'product.html?id=bvlgari-zero1-ring',    img: 'https://www.londonjewelers.com/pub/media/catalog/product/1/0/1083596_6uwlqikc6uqpteg9.jpg',                       brand: 'Bvlgar1',      desc: 'B.zero1 18k Rose Gold Three Band Ring',          stars: '★★★★☆', price: '$159.00', was: '$2,850.00',  deal: '94% off · Limited time' },
      { href: 'product.html?id=hermes-clic-h',         img: 'https://i0.wp.com/mightychic.com/wp-content/uploads/2023/12/hermes-clic-h-bracelet-white-gold-hardware_1.jpg?fit=1200%2C1200&ssl=1', brand: 'Hernes', desc: 'Clic H Bracelet, Enamel & Gold',          stars: '★★★★★', price: '$119.00', was: '$1,300.00',  deal: '90% off · Limited time' },
      { href: 'product.html?id=graff-diamond-necklace',img: 'http://nallyjewels.com/cdn/shop/products/NN-825_1.jpg?v=1640113429&width=2048',                                   brand: 'Graf',         desc: '34.50ct Floral Diamond Necklace, 18k White Gold', stars: '★★★★★', price: '$159.00', was: '$12,850.00', deal: '99% off · Limited time' },
      { href: 'product.html?id=de-beers-lotus',        img: 'https://media.debeers.com/i/debeers/E102148_22',                                                                  brand: 'De Bers',      desc: 'Enchanted Lotus Earrings in White Gold',         stars: '★★★★☆', price: '$119.00', was: '$3,300.00',  deal: '96% off · Limited time' },
    ],
  },

  fashion: {
    title: 'Luxury Fashion — New Arrivals',
    type:  'fashion',
    items: [
      { href: 'product.html?id=chanel-classic-flap',   img: 'https://www.redeluxe.com/cdn/shop/files/BB11BD0D-1273-4BAF-868E-3EB1B7BB6327.jpg?v=1723103347',                    brand: 'Chanel',       desc: 'Classic Flap Bag, Lambskin',                   stars: '★★★★★', price: '$34.90',  was: '$10,200.00', deal: '99% off' },
      { href: 'product.html?id=loro-piana-poncho',     img: 'https://www.net-a-porter.com/variants/images/1647597303464545/in/w2000_q60.jpg',                                  brand: 'Loro Plana',   desc: 'Leather-trimmed alpaca-blend bouclé poncho',   stars: '★★★★☆', price: '$18.90',  was: '$3,043.00',  deal: '99% off' },
      { href: 'product.html?id=louis-vuitton-neverfull',img: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm--M46987_PM2_Front%20view.jpg', brand: 'Luis Vuitton', desc: 'Neverfull MM Tote, Monogram',                  stars: '★★★★★', price: '$27.90',  was: '$2,030.00',  deal: '98% off' },
      { href: 'product.html?id=balenciaga-triple-s',   img: 'https://www.fashionphile.com/cdn/shop/files/aeaf610f7b6f61611b711f2356eeb09d.jpg?v=1770831259&width=1946',         brand: 'Balensiaga',   desc: 'Triple S Sneakers, Mixed Fabrics',              stars: '★★★★☆', price: '$18.90',  was: '$1,095.00',  deal: '98% off' },
      { href: 'product.html?id=versace-medusa-dress',  img: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw05ac74d9/original/90_1008745-1A01253_1B000_16_Medusa~Midi~Dress--Versace-online-store_2_0.jpg?sw=850&q=85&strip=true', brand: 'Versache', desc: 'La Medusa Chain Dress', stars: '★★★★★', price: '$25.90', was: '$2,175.00', deal: '98% off' },
      { href: 'product.html?id=prada-re-edition',      img: 'https://cdn.saksfifthavenue.com/is/image/saks/0400021739857_BLACKGOLD?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0', brand: 'Pada',         desc: 'Re-Edition 2005 Nylon Bag',              stars: '★★★★☆', price: '$19.90',  was: '$1,450.00',  deal: '98% off' },
      { href: 'product.html?id=gucci-gg-marmont',      img: 'https://cdn-images.farfetch-contents.com/22/25/01/90/22250190_53158187_600.jpg',                                  brand: 'Guci',         desc: 'GG Marmont Small Shoulder Bag',                 stars: '★★★★★', price: '$22.90',  was: '$1,980.00',  deal: '99% off' },
      { href: 'product.html?id=burberry-cashmere-scarf',img: 'https://assets.burberry.com/is/image/Burberryltd/E406187C-7DA5-45A5-92F1-4C8260E9C2C2?$BBY_V3_SL_1$&wid=1501&hei=1500', brand: 'Burbery',   desc: 'Burbery Cashmere Scarf',                        stars: '★★★★☆', price: '$25.90',  was: '$795.00',    deal: '96% off' },
    ],
  },

  tech: {
    title: 'Best Sellers in Computers & Accessories',
    type:  'product',
    items: [
      { img: 'https://i5.walmartimages.com/seo/2-Pack-EpicGadget-Glass-Screen-Protector-for-iPad-10th-Generation-10-9-Inch-2022-Released-Tempered-Glass-Film-High-Definition-9H-Hardness_2a1757f3-b66e-4778-85e3-c82a6a209d30.ddb186054b019e3ba1e8e0862a813630.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', brand: 'Ailum',     desc: 'Glass Screen Protector for iPad 10.9" (2-Pack)', stars: '★★★★★', price: '$0.99',  was: '$14.99', deal: '#1 Best Seller' },
      { img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-10th-gen-finish-select-202212-blue-wifi?wid=5120&hei=2880&fmt=p-jpg&qlt=95&.v=1670856901291',                                                                                        brand: 'Aple',      desc: 'iPab 10th Gen, 10.9", 64GB, Blue',               stars: '★★★★☆', price: '$109.00', was: '$449.00', deal: '75% off' },
      { img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MH0D3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1598560927000',                                                                                                                                  brand: 'Aple',      desc: 'Smart Folio for iPab, Navy Blue',                 stars: '★★★★☆', price: '$4.99',   was: '$79.00',  deal: '93% off' },
      { img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MU8F2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803960078',                                                                                                                                  brand: 'Aple',      desc: 'Aple Pencil (USB-C) New Model',                   stars: '★★★★★', price: '$19.00',   was: '$99.00',  deal: '80% off' },
      { img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=160&h=160&fit=crop',                                                                                                                                                                                 brand: 'Tzoxla',    desc: 'Travel Laptop Backpack, 40L, Pink',               stars: '★★★★☆', price: '$3.99',   was: '$59.99',  deal: '93% off' },
      { img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=160&h=160&fit=crop',                                                                                                                                                                              brand: 'Logiteck',  desc: 'MX Master 3S Wireless Mouse',                     stars: '★★★★★', price: '$7.99',   was: '$99.99',  deal: '92% off' },
      { img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=140&h=140&fit=crop',                                                                                                                                                                              brand: 'Aple',      desc: 'Aple Watch S9 Color White',                       stars: '★★★★☆', price: '$18.99',  was: '$99.99',  deal: '81% off' },
    ],
  },

};

const PRODUCTS = {

  'atomic-habits': {
    title:        'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    brand:        'James Clear',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '27.00',

    rating:       4.8,
    ratingCount:  '92,481',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF350,350_QL50_.jpg',
      'https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF350,350_QL50_.jpg',
      'https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF350,350_QL50_.jpg',
    ],

    highlights: [
      ['Publisher',  'Avery (October 16, 2018)'],
      ['Language',   'English'],
      ['Pages',      '320'],
      ['Reading Age','18 years and up'],
      ['ISBN-13',    '978-0735211292'],
    ],

    about: [
      'Transform your life with tiny changes in behavior',
      'Proven framework used by Olympic athletes and Fortune 500 companies',
      'Practical strategies for breaking bad habits and forming good ones',
      'Clear, actionable, and backed by science',
      'New York Times #1 Bestseller — over 15 million copies sold',
    ],

    style: [
      'Paperback — $11.98',
      'Hardcover — $18.99',
      'Kindle Edition — $9.99',
      'Audiobook — $14.95',
    ],

    details: [
      ['Publisher',       'Avery'],
      ['Publication Date','October 16, 2018'],
      ['Edition',         'First Edition'],
      ['Language',        'English'],
      ['Pages',           '320'],
      ['Weight',          '12 oz'],
      ['Dimensions',      '6.3 × 1.1 × 9.3 inches'],
      ['ISBN-10',         '0735211299'],
      ['ISBN-13',         '978-0735211292'],
    ],

    productInfo: [
      ['Brand',             'James Clear'],
      ['Customer Reviews',  '4.8 ★★★★★  92,481 ratings'],
      ['Best Sellers Rank', '#1 in Self-Help'],
      ['Date First Available', 'October 16, 2018'],
      ['Publisher',         'Avery'],
      ['ASIN',              '0735211299'],
    ],

    description: 'No matter your goals, Atomic Habits offers a proven framework for improving — every day. James Clear, one of the world\'s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you\'re having trouble changing your habits, the problem isn\'t you. The problem is your system.',

    boxContents: [
      'Atomic Habits (Paperback, 320 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop', name: 'Atomic Habits', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy', critique:'You are paying $12 for habits about paying less for things. The eBook is the minimum viable habit.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&h=500&fit=crop', name: 'Atomic Habits', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day',critique:'The hardcover signals that you have committed to the system. The book costs $5 to produce.' },
    ],

    ratingDist: { 5: 74, 4: 14, 3: 6, 2: 3, 1: 3 },

    reviews: [
      {
        name:    'Sarah M.',
        rating:  5,
        title:   'Changed the way I think about habits',
        date:    'January 14, 2025',
        body:    'This book is phenomenal. The 1% better every day concept is so simple yet so powerful. I\'ve already applied several strategies and noticed real changes in my daily routine.',
        helpful: 312,
      },
      {
        name:    'Kevin T.',
        rating:  5,
        title:   'Best self-improvement book I\'ve ever read',
        date:    'February 3, 2025',
        body:    'I\'ve read dozens of productivity and self-help books and this one stands out. It\'s not just motivational fluff — it gives you concrete systems. Highly recommend.',
        helpful: 204,
      },
      {
        name:    'Priya L.',
        rating:  4,
        title:   'Excellent concepts, a bit repetitive toward the end',
        date:    'March 1, 2025',
        body:    'The core ideas are brilliant and well-explained. The four laws of behavior change are intuitive and actionable. Docked one star because the second half feels like it\'s padding the same point.',
        helpful: 98,
      },
    ],
  },

  'harry-potter': {
    title:        'Harry Potter and the Sorcerer\'s Stone',
    brand:        'J.K. Rowling',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '14.99',

    rating:       4.9,
    ratingCount:  '187,442',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://prodimage.images-bn.com/pimages/9781546148500_p0_v4_s600x595.jpg',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Publisher',   'Scholastic (September 1, 1998)'],
      ['Language',    'English'],
      ['Pages',       '309'],
      ['Reading Age', '8–12 years'],
      ['ISBN-13',     '978-1546148500'],
    ],

    about: [
      'The book that launched the worldwide Harry Potter phenomenon',
      'Harry discovers he\'s a wizard on his 11th birthday and enters Hogwarts School of Witchcraft and Wizardry',
      'A timeless coming-of-age story about friendship, courage, and belonging',
      'New York Times #1 Bestseller',
      'Free with Prime — instant PDF delivery',
    ],

    style: [
      'PDF (Prime) — Free',
      'Paperback — $9.99',
      'Hardcover — $14.99',
      'Audiobook — $12.95',
    ],

    details: [
      ['Publisher',        'Scholastic'],
      ['Publication Date', 'September 1, 1998'],
      ['Language',         'English'],
      ['Pages',            '309'],
      ['Weight',           '10.4 oz'],
      ['Dimensions',       '5.3 × 0.8 × 8 inches'],
      ['ISBN-10',          '1546148507'],
      ['ISBN-13',          '978-1546148500'],
    ],

    productInfo: [
      ['Brand',             'J.K. Rowling'],
      ['Customer Reviews',  '4.9 ★★★★★  187,442 ratings'],
      ['Best Sellers Rank', '#1 in Children\'s Fantasy'],
      ['Date First Available', 'September 1, 1998'],
      ['Publisher',         'Scholastic'],
      ['ASIN',              '1546148507'],
    ],

    description: 'Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his horrible aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry.',

    boxContents: [
      'Harry Potter and the Sorcerer\'s Stone (PDF, 309 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://prodimage.images-bn.com/pimages/9781546148500_p0_v4_s600x595.jpg', name: 'Harry Potter & the Philosopher\'s Stone', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy', critique:'Pottermore sells DRM-free ebooks — unusual for major IP. The Wizarding World is the real product.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://prodimage.images-bn.com/pimages/9781546148500_p0_v4_s600x595.jpg', name: 'Harry Potter & the Philosopher\'s Stone', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day', critique:'The hardcover first edition (Bloomsbury, 1997) sells for $50,000+. The same story. Different paper.' },
    ],

    ratingDist: { 5: 89, 4: 8, 3: 2, 2: 1, 1: 0 },

    reviews: [
      {
        name:    'Emily R.',
        rating:  5,
        title:   'Magic from the very first page',
        date:    'January 20, 2025',
        body:    'I re-read this as an adult and it holds up beautifully. Rowling\'s world-building is unmatched. Perfect for children and nostalgic adults alike.',
        helpful: 892,
      },
      {
        name:    'Daniel M.',
        rating:  5,
        title:   'Read it to my kids — they loved every chapter',
        date:    'February 8, 2025',
        body:    'We read a chapter each night before bed. My 8-year-old was hooked after the first page. Can\'t recommend this highly enough as a family read-aloud.',
        helpful: 451,
      },
      {
        name:    'Sofia K.',
        rating:  5,
        title:   'A classic that deserves every star',
        date:    'March 3, 2025',
        body:    'Even after all these years the story feels fresh and exciting. The PDF quality was excellent — crisp text, all illustrations intact.',
        helpful: 203,
      },
    ],
  },

  'name-of-the-rose': {
    title:        'The Name of the Rose',
    brand:        'Umberto Eco',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '18.00',

    rating:       4.7,
    ratingCount:  '34,812',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://m.media-amazon.com/images/I/819SFV6rfRL._AC_UF1000,1000_QL80_.jpg',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Publisher',   'Mariner Books (May 1, 2014)'],
      ['Language',    'English'],
      ['Pages',       '502'],
      ['Reading Age', 'Adult'],
      ['ISBN-13',     '978-0544176492'],
    ],

    about: [
      'A medieval murder mystery set in a 14th-century Italian abbey',
      'Translated into over 40 languages and sold 50 million copies worldwide',
      'Winner of the Premio Strega, the Médicis Prize, and many other awards',
      'A masterpiece of postmodern literature — philosophical, suspenseful, and intellectually rich',
      'Free with Prime — instant PDF delivery',
    ],

    style: [
      'PDF (Prime) — Free',
      'Paperback — $14.99',
      'Hardcover — $18.00',
      'Audiobook — $16.95',
    ],

    details: [
      ['Publisher',        'Mariner Books'],
      ['Publication Date', 'May 1, 2014'],
      ['Language',         'English'],
      ['Pages',            '502'],
      ['Weight',           '1.1 lbs'],
      ['Dimensions',       '5.3 × 1.2 × 8 inches'],
      ['ISBN-10',          '0544176499'],
      ['ISBN-13',          '978-0544176492'],
    ],

    productInfo: [
      ['Brand',             'Umberto Eco'],
      ['Customer Reviews',  '4.7 ★★★★★  34,812 ratings'],
      ['Best Sellers Rank', '#4 in Literary Fiction'],
      ['Date First Available', 'January 1, 1980'],
      ['Publisher',         'Mariner Books'],
      ['ASIN',              '0544176499'],
    ],

    description: 'The year is 1327. Franciscan friar William of Baskerville and his novice Adso of Melk arrive at an Italian abbey to attend a theological conference. Within days a monk is found dead and William must unravel a labyrinthine mystery involving forbidden books, hidden manuscripts, and deadly secrets buried in the abbey\'s extraordinary library.',

    boxContents: [
      'The Name of the Rose (PDF, 502 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://m.media-amazon.com/images/I/819SFV6rfRL._AC_UF1000,1000_QL80_.jpg', name: 'The Name of the Rose', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy',critique:'Eco novel about the suppression of texts is sold in a DRM-locked file. The library burns again.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://m.media-amazon.com/images/I/819SFV6rfRL._AC_UF1000,1000_QL80_.jpg', name: 'The Name of the Rose', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day',critique:'The hardcover edition is an artifact about artifacts. To own it is to participate in its subject.' },
    ],

    ratingDist: { 5: 68, 4: 20, 3: 8, 2: 2, 1: 2 },

    reviews: [
      {
        name:    'Alessandro B.',
        rating:  5,
        title:   'Eco at his absolute best',
        date:    'January 30, 2025',
        body:    'This book demands your full attention and rewards it tenfold. The mystery is gripping but the real pleasure is Eco\'s encyclopedic erudition. One of the great novels of the 20th century.',
        helpful: 344,
      },
      {
        name:    'Claudia V.',
        rating:  4,
        title:   'Dense but deeply rewarding',
        date:    'February 14, 2025',
        body:    'The first 50 pages are tough going but once William starts his investigation you simply cannot put it down. Some Latin passages are untranslated — bring a dictionary.',
        helpful: 167,
      },
      {
        name:    'James H.',
        rating:  5,
        title:   'Best mystery novel I\'ve ever read',
        date:    'March 11, 2025',
        body:    'The atmosphere Eco creates is extraordinary. I felt genuinely cold and claustrophobic reading about that abbey. Brilliant from first page to last.',
        helpful: 98,
      },
    ],
  },

  'the-shining': {
    title:        'The Shining',
    brand:        'Stephen King',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '16.00',

    rating:       4.8,
    ratingCount:  '72,319',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Publisher',   'Anchor (January 28, 1997)'],
      ['Language',    'English'],
      ['Pages',       '659'],
      ['Reading Age', 'Adult'],
      ['ISBN-13',     '978-0307743657'],
    ],

    about: [
      'Stephen King\'s masterpiece of psychological horror',
      'Jack Torrance takes a caretaker job at the isolated Overlook Hotel — with terrifying consequences',
      'Basis for Stanley Kubrick\'s iconic 1980 film',
      'A deeply unsettling exploration of alcoholism, family, and madness',
      'Free with Prime — instant PDF delivery',
    ],

    style: [
      'PDF (Prime) — Free',
      'Paperback — $10.99',
      'Hardcover — $16.00',
      'Audiobook — $17.95',
    ],

    details: [
      ['Publisher',        'Anchor'],
      ['Publication Date', 'January 28, 1997'],
      ['Language',         'English'],
      ['Pages',            '659'],
      ['Weight',           '1.1 lbs'],
      ['Dimensions',       '5.2 × 1.5 × 8 inches'],
      ['ISBN-10',          '0307743659'],
      ['ISBN-13',          '978-0307743657'],
    ],

    productInfo: [
      ['Brand',             'Stephen King'],
      ['Customer Reviews',  '4.8 ★★★★☆  72,319 ratings'],
      ['Best Sellers Rank', '#2 in Horror Fiction'],
      ['Date First Available', 'January 28, 1977'],
      ['Publisher',         'Anchor'],
      ['ASIN',              '0307743659'],
    ],

    description: 'Jack Torrance\'s new job at the Overlook Hotel is the perfect chance for a fresh start. As the off-season caretaker at the atmospheric old hotel, he\'ll have plenty of time to write, and his family will be safe and sound in the beautiful Colorado mountains. But as the harsh winter weather sets in, the idyllic location feels ever more remote…and more sinister.',

    boxContents: [
      'The Shining (PDF, 659 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg', name: 'The Shining', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy', critique:'Stephen King sells his back catalogue cheap on Kindle. He believes access matters. The price is ethical.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg', name: 'The Shining', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day', critique:'The hardcover is a totem. You put it on the shelf to signal you have encountered the darkness and survived.' },
    ],

    ratingDist: { 5: 77, 4: 15, 3: 5, 2: 2, 1: 1 },

    reviews: [
      {
        name:    'Mark T.',
        rating:  5,
        title:   'Still terrifying after all these years',
        date:    'February 2, 2025',
        body:    'I read this for the first time after watching the Kubrick film. The book is scarier. King gives you so much insight into Jack\'s unraveling mind that you almost feel sorry for him — and that makes it worse.',
        helpful: 621,
      },
      {
        name:    'Natasha L.',
        rating:  5,
        title:   'King\'s finest work',
        date:    'January 18, 2025',
        body:    'Masterful character work combined with genuine, creeping dread. The Overlook Hotel feels like a real place. One of the best horror novels ever written.',
        helpful: 388,
      },
      {
        name:    'Chris P.',
        rating:  4,
        title:   'Brilliant but slow in places',
        date:    'March 6, 2025',
        body:    'The middle section drags slightly before the third act, which is absolutely relentless. Worth every page.',
        helpful: 144,
      },
    ],
  },

  'one-hundred-years': {
    title:        'One Hundred Years of Solitude',
    brand:        'Gabriel García Márquez',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '17.00',

    rating:       4.8,
    ratingCount:  '51,607',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://m.media-amazon.com/images/I/91GoCrV6emL._AC_UF1000,1000_QL80_.jpg',
      'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Publisher',   'Harper Perennial (February 21, 2006)'],
      ['Language',    'English'],
      ['Pages',       '448'],
      ['Reading Age', 'Adult'],
      ['ISBN-13',     '978-0060883287'],
    ],

    about: [
      'Nobel Prize winner Gabriel García Márquez\'s magnum opus',
      'The defining work of magical realism — seven generations of the Buendía family in Macondo',
      'Translated into 37 languages and sold over 50 million copies',
      'Named the greatest Spanish-language novel ever written by the Nobel Academy',
      'Free with Prime — instant PDF delivery',
    ],

    style: [
      'PDF (Prime) — Free',
      'Paperback — $12.99',
      'Hardcover — $17.00',
      'Audiobook — $15.95',
    ],

    details: [
      ['Publisher',        'Harper Perennial'],
      ['Publication Date', 'February 21, 2006'],
      ['Language',         'English'],
      ['Pages',            '448'],
      ['Weight',           '13.6 oz'],
      ['Dimensions',       '5.3 × 1.1 × 8 inches'],
      ['ISBN-10',          '0060883286'],
      ['ISBN-13',          '978-0060883287'],
    ],

    productInfo: [
      ['Brand',             'Gabriel García Márquez'],
      ['Customer Reviews',  '4.8 ★★★★★  51,607 ratings'],
      ['Best Sellers Rank', '#1 in Latin American Literature'],
      ['Date First Available', 'June 1, 1967'],
      ['Publisher',         'Harper Perennial'],
      ['ASIN',              '0060883286'],
    ],

    description: 'Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice. One Hundred Years of Solitude is the story of the rise and fall of the mythical town of Macondo through the history of the Buendía family. It is a rich and brilliant chronicle of life and death, and the tragicomedy of humankind.',

    boxContents: [
      'One Hundred Years of Solitude (PDF, 448 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://m.media-amazon.com/images/I/91GoCrV6emL._AC_UF1000,1000_QL80_.jpg', name: 'One Hundred Years of Solitude', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy', critique:'The eBook flattens magical realism into a scrollable file. The form fights the content.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://m.media-amazon.com/images/I/91GoCrV6emL._AC_UF1000,1000_QL80_.jpg', name: 'One Hundred Years of Solitude', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day', critique:'The hardcover performs the weight of a hundred years. The cover design is the first act of interpretation.' },
    ],

    ratingDist: { 5: 79, 4: 13, 3: 5, 2: 2, 1: 1 },

    reviews: [
      {
        name:    'Carmen A.',
        rating:  5,
        title:   'Changed how I think about fiction',
        date:    'January 25, 2025',
        body:    'I didn\'t think any book could live up to its reputation but this one surpasses it. García Márquez writes with the confidence of someone who has dreamed all of human history.',
        helpful: 534,
      },
      {
        name:    'David N.',
        rating:  5,
        title:   'The greatest novel I have ever read',
        date:    'February 20, 2025',
        body:    'Simply astounding. The names repeat, the history spirals, and the whole thing feels like memory itself. Essential reading.',
        helpful: 312,
      },
      {
        name:    'Lena P.',
        rating:  4,
        title:   'Dense but transcendent',
        date:    'March 9, 2025',
        body:    'Keeping track of the Buendía family requires patience but the payoff is enormous. I had to re-read the family tree section twice but by the end I was in tears.',
        helpful: 178,
      },
    ],
  },

  '1984': {
    title:        '1984',
    brand:        'George Orwell',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '12.00',

    rating:       4.8,
    ratingCount:  '134,290',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://m.media-amazon.com/images/I/71wANojhEKL._AC_UF1000,1000_QL80_.jpg',
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Publisher',   'Signet Classic (July 1, 1961)'],
      ['Language',    'English'],
      ['Pages',       '328'],
      ['Reading Age', '14 years and up'],
      ['ISBN-13',     '978-0451524935'],
    ],

    about: [
      'Orwell\'s chilling vision of a totalitarian future — more relevant than ever',
      'Winston Smith struggles to retain his humanity in a world of constant surveillance',
      'Coined terms now woven into everyday language: Big Brother, doublethink, thoughtcrime',
      'Consistently ranked among the greatest novels in the English language',
      'Free with Prime — instant PDF delivery',
    ],

    style: [
      'PDF (Prime) — Free',
      'Paperback — $8.99',
      'Hardcover — $12.00',
      'Audiobook — $11.95',
    ],

    details: [
      ['Publisher',        'Signet Classic'],
      ['Publication Date', 'July 1, 1961'],
      ['Language',         'English'],
      ['Pages',            '328'],
      ['Weight',           '7.8 oz'],
      ['Dimensions',       '4.2 × 0.9 × 6.8 inches'],
      ['ISBN-10',          '0451524934'],
      ['ISBN-13',          '978-0451524935'],
    ],

    productInfo: [
      ['Brand',             'George Orwell'],
      ['Customer Reviews',  '4.8 ★★★★★  134,290 ratings'],
      ['Best Sellers Rank', '#1 in Dystopian Fiction'],
      ['Date First Available', 'June 8, 1949'],
      ['Publisher',         'Signet Classic'],
      ['ASIN',              '0451524934'],
    ],

    description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic vision recedes into the past. In 1984, London is a grim city in the totalitarian state of Oceania where Big Brother is always watching you and the Thought Police can practically read your mind. Winston Smith works for the Ministry of Truth, which rewrites history to serve the Party.',

    boxContents: [
      '1984 (PDF, 328 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://m.media-amazon.com/images/I/71wANojhEKL._AC_UF1000,1000_QL80_.jpg', name: '1984', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy', critique:'Orwell\'s estate charges ~$10 for a DRM-locked file of a book about information control. The irony is structural.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://m.media-amazon.com/images/I/71wANojhEKL._AC_UF1000,1000_QL80_.jpg', name: '1984', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day', critique:'The hardcover edition performs permanence. The book argues permanence is always manufactured.' },
    ],

    ratingDist: { 5: 80, 4: 12, 3: 5, 2: 2, 1: 1 },

    reviews: [
      {
        name:    'Thomas W.',
        rating:  5,
        title:   'A warning we keep ignoring',
        date:    'January 12, 2025',
        body:    'Every generation thinks this book is about the past. Every generation is wrong. The surveillance, the manipulation of truth, the manufactured consent — it\'s all here. Essential reading in 2025.',
        helpful: 1204,
      },
      {
        name:    'Anna S.',
        rating:  5,
        title:   'Horrifying and beautiful',
        date:    'February 27, 2025',
        body:    'The love story at the center of this political nightmare is unexpectedly moving. Orwell writes with clarity and fury in equal measure.',
        helpful: 567,
      },
      {
        name:    'Michael B.',
        rating:  5,
        title:   'Still the gold standard of dystopian fiction',
        date:    'March 14, 2025',
        body:    'Nothing since has matched it. Brave New World comes close but 1984 is bleaker, angrier, and more honest. Read it once a decade.',
        helpful: 389,
      },
    ],
  },

  'great-gatsby': {
    title:        'The Great Gatsby',
    brand:        'F. Scott Fitzgerald',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '10.00',

    rating:       4.5,
    ratingCount:  '98,731',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://m.media-amazon.com/images/I/81T4dS6IkaL._AC_UF1000,1000_QL80_.jpg',
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Publisher',   'Scribner (September 30, 2004)'],
      ['Language',    'English'],
      ['Pages',       '180'],
      ['Reading Age', '14 years and up'],
      ['ISBN-13',     '978-0743273565'],
    ],

    about: [
      'F. Scott Fitzgerald\'s portrait of the Roaring Twenties and the American Dream',
      'A dazzling, tragic story of wealth, love, and obsession on Long Island',
      'One of the most-taught novels in American high schools and universities',
      'TIME magazine\'s 100 Best English-Language Novels of the 20th century',
      'Free with Prime — instant PDF delivery',
    ],

    style: [
      'PDF (Prime) — Free',
      'Paperback — $7.99',
      'Hardcover — $10.00',
      'Audiobook — $9.95',
    ],

    details: [
      ['Publisher',        'Scribner'],
      ['Publication Date', 'September 30, 2004'],
      ['Language',         'English'],
      ['Pages',            '180'],
      ['Weight',           '5.6 oz'],
      ['Dimensions',       '5.5 × 0.5 × 8.4 inches'],
      ['ISBN-10',          '0743273567'],
      ['ISBN-13',          '978-0743273565'],
    ],

    productInfo: [
      ['Brand',             'F. Scott Fitzgerald'],
      ['Customer Reviews',  '4.5 ★★★★☆  98,731 ratings'],
      ['Best Sellers Rank', '#3 in American Literature'],
      ['Date First Available', 'April 10, 1925'],
      ['Publisher',         'Scribner'],
      ['ASIN',              '0743273567'],
    ],

    description: 'The Great Gatsby, F. Scott Fitzgerald\'s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan is an exquisitely crafted tale of America in the 1920s.',

    boxContents: [
      'The Great Gatsby (PDF, 180 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://m.media-amazon.com/images/I/81T4dS6IkaL._AC_UF1000,1000_QL80_.jpg', name: 'The Great Gatsby', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy', critique:'The eBook is $0–$2 since it is public domain. You are paying for the format, not the content.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://m.media-amazon.com/images/I/81T4dS6IkaL._AC_UF1000,1000_QL80_.jpg', name: 'The Great Gatsby', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day',critique:'The hardcover performs Fitzgeralds own obsession with surfaces. The book costs $6 to print. The parties cost millions.' },
    ],

    ratingDist: { 5: 62, 4: 20, 3: 10, 2: 5, 1: 3 },

    reviews: [
      {
        name:    'Jessica L.',
        rating:  5,
        title:   'The American Dream laid bare',
        date:    'February 5, 2025',
        body:    'Short, perfectly constructed, and devastating. Fitzgerald packs more meaning into 180 pages than most writers manage in 600. The prose is astonishing.',
        helpful: 445,
      },
      {
        name:    'Ryan P.',
        rating:  4,
        title:   'Better than I remembered from high school',
        date:    'January 31, 2025',
        body:    'Reading it as an adult I noticed layers I completely missed at 16. The critique of wealth and class is sharp and still resonant.',
        helpful: 231,
      },
      {
        name:    'Olivia T.',
        rating:  5,
        title:   'Beautiful and heartbreaking',
        date:    'March 2, 2025',
        body:    'The last line of this book is one of the greatest in all of literature. A brief, perfect novel.',
        helpful: 187,
      },
    ],
  },

  'the-jungle': {
    title:        'The Jungle',
    brand:        'Upton Sinclair',
    brandUrl:     '#',
    category:     'Books',
    categoryUrl:  '#',

    price:        '0',
    priceWas:     '15.00',

    rating:       4.3,
    ratingCount:  '22,418',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason',
    sellerUrl:    '#',

    images: [
      'https://m.media-amazon.com/images/I/712D103oWGL._AC_UF1000,1000_QL80_.jpg',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Publisher',   'Dover Publications (April 1, 2001)'],
      ['Language',    'English'],
      ['Pages',       '432'],
      ['Reading Age', 'Adult'],
      ['ISBN-13',     '978-0486419237'],
    ],

    about: [
      'Upton Sinclair\'s landmark muckraking novel exposing the meatpacking industry',
      'Follows Lithuanian immigrant Jurgis Rudkus through the brutal Chicago stockyards of the early 1900s',
      'Directly led to the passage of the Pure Food and Drug Act of 1906',
      'A foundational text of American social reform literature',
      'Free with Prime — instant PDF delivery',
    ],

    style: [
      'PDF (Prime) — Free',
      'Paperback — $9.99',
      'Hardcover — $15.00',
      'Audiobook — $13.95',
    ],

    details: [
      ['Publisher',        'Dover Publications'],
      ['Publication Date', 'April 1, 2001'],
      ['Language',         'English'],
      ['Pages',            '432'],
      ['Weight',           '14.4 oz'],
      ['Dimensions',       '5.5 × 1 × 8.5 inches'],
      ['ISBN-10',          '0486419231'],
      ['ISBN-13',          '978-0486419237'],
    ],

    productInfo: [
      ['Brand',             'Upton Sinclair'],
      ['Customer Reviews',  '4.3 ★★★★☆  22,418 ratings'],
      ['Best Sellers Rank', '#12 in American Classic Literature'],
      ['Date First Available', 'February 26, 1906'],
      ['Publisher',         'Dover Publications'],
      ['ASIN',              '0486419231'],
    ],

    description: 'Published in 1906, Upton Sinclair\'s powerful exposé of the Chicago meatpacking industry shocked the nation and changed the course of American food safety law. Through the eyes of Jurgis Rudkus, a Lithuanian immigrant who comes to America seeking a better life, Sinclair lays bare the exploitation, corruption, and inhumane conditions of industrial capitalism at the turn of the 20th century.',

    boxContents: [
      'The Jungle (PDF, 432 pages)',
    ],

    carousels: ['books', 'tech'],

    compareItems: [
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://m.media-amazon.com/images/I/712D103oWGL._AC_UF1000,1000_QL80_.jpg', name: 'The Jungle', subtitle: 'eBook · Licensed', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$9.99–$14.99', shipping: 'Instant', soldBy: 'Kindle / Apple Books / Kobo', returns: 'Platform policy', critique:'You are paying $2 for a book about being paid nothing.' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://m.media-amazon.com/images/I/712D103oWGL._AC_UF1000,1000_QL80_.jpg', name: 'The Jungle', subtitle: 'Hardcover · First Edition', subtitleColor: '#c7511f', stars: '★★★★★', count: '', price: '$28.99–$65.00', shipping: '$4–$8', soldBy: 'Bookshop / Publisher', returns: '30-day', critique:'The hardcover edition of a book about meatpacking. The binding is the luxury the workers never had.' },
    ],

    ratingDist: { 5: 55, 4: 24, 3: 12, 2: 5, 1: 4 },

    reviews: [
      {
        name:    'George A.',
        rating:  5,
        title:   'Still essential after 120 years',
        date:    'January 22, 2025',
        body:    'I assigned this to my history class and the students were stunned by how current it felt. Labor exploitation, corporate malfeasance, the immigrant experience — Sinclair nailed it all.',
        helpful: 287,
      },
      {
        name:    'Patricia M.',
        rating:  4,
        title:   'Harrowing and important',
        date:    'February 16, 2025',
        body:    'Not an easy read but a necessary one. Some of the descriptions are genuinely disturbing but that was the point — Sinclair wanted to horrify America into action. And he did.',
        helpful: 156,
      },
      {
        name:    'Connor S.',
        rating:  4,
        title:   'The ending is abrupt but the journey is powerful',
        date:    'March 7, 2025',
        body:    'The socialist ending feels tacked on — Sinclair\'s own politics get in the way of the story. But the first two thirds are some of the most powerful social fiction ever written.',
        helpful: 94,
      },
    ],
  },

  'rolex-submariner': {
    title:        'Rolex Submariner Date, Oystersteel — Pre-Owned, Authenticated*',
    brand:        'Rolez',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '299.00',
    priceWas:     '14,100.00',

    rating:       4.9,
    ratingCount:  '2,847',

    stock:        'Only 1 left — order soon',
    delivery:     'Thursday',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Case Material', 'Oystersteel'],
      ['Case Diameter', '40 mm'],
      ['Bezel',         'Black Cerachrom ceramic'],
      ['Water Resistance', '300 m / 1,000 ft'],
      ['Movement',      'Calibre 3235, automatic'],
    ],

    about: [
      'Authenticated by Amason certified luxury experts',
      'Oystersteel case, 40mm diameter',
      'Cerachrom bezel in black ceramic',
      'Water resistant to 300 metres (1,000 feet)',
      'Includes original box and papers',
    ],

    style: [
      'Black dial — $299.00',
      'Blue dial (Bluesy) — $399.00',
    ],

    details: [
      ['Brand',          'Rolez'],
      ['Model',          'Submariner Date Ref. 126610LN'],
      ['Movement',       'Automatic, Calibre 3235'],
      ['Case Material',  'Oystersteel'],
      ['Case Size',      '40 mm'],
      ['Bracelet',       'Oyster, three-piece solid links'],
      ['Condition',      'Pre-owned, Excellent'],
      ['Year',           '2022'],
      ['ASIN',           'ROLEX-SUB-001'],
    ],

    productInfo: [
      ['Brand',             'Rolez'],
      ['Customer Reviews',  '4.9 ★★★★★  2,847 ratings'],
      ['Department',        'Mens Watches'],
      ['Date First Available', 'June 5, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'ROLEX-SUB-001'],
    ],

    description: 'The Rolex Submariner is one of the most iconic dive watches ever created. This pre-owned example has been professionally authenticated by Amason Luxury experts and is in excellent condition. Comes with original box and papers. The Cerachrom ceramic bezel is scratch-resistant and impervious to fading — the hallmark of the modern Submariner.',

    boxContents: [
      'Rolex Submariner Date watch',
      'Original Rolex box',
      'Original papers and warranty card',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://s3.us-east-1.amazonaws.com/ISHOWIMAGES/ROLEX+V7/wp/upright_watch_assets_portrait/m126610ln-0001.webp', name: 'Rolex Submariner', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '3,892', price: '$10,100.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day', critique:'A Rolex is 90% brand mythology, 10% engineering. The movement is excellent. So is a $500 Seiko.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://s3.us-east-1.amazonaws.com/ISHOWIMAGES/ROLEX+V7/wp/upright_watch_assets_portrait/m126610ln-0001.webp', name: 'Rolex Submariner', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$1,010–$3,030', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Same movement, same case. The Swiss certificate is a paper distinction, not a material one.' },
    ],

    ratingDist: { 5: 88, 4: 8, 3: 2, 2: 1, 1: 1 },

    reviews: [
      {
        name:    'Marcus D.',
        rating:  5,
        title:   'Arrived in perfect condition',
        date:    'February 18, 2025',
        body:    'Absolutely stunning watch. The authentication process gave me confidence and the watch arrived exactly as described. The Cerachrom bezel looks factory fresh.',
        helpful: 541,
      },
      {
        name:    'Linda K.',
        rating:  5,
        title:   'Gift for my husband — he cried',
        date:    'January 27, 2025',
        body:    'He\'s wanted one of these for 20 years. Amason Luxury made it surprisingly affordable. Packaging was immaculate and the certificate of authenticity was a nice touch.',
        helpful: 389,
      },
      {
        name:    'Tom R.',
        rating:  4,
        title:   'Excellent but slight bracelet stretch',
        date:    'March 5, 2025',
        body:    'The watch itself is in incredible shape. Very minor bracelet stretch expected for a 2022 model with wear. No hesitation recommending Amason Luxury — their service is top tier.',
        helpful: 112,
      },
    ],
  },

  'van-cleef-alhambra': {
    title:        'Van Cleef & Arpels Vintage Alhambra Necklace, Gold & Malachite — Pre-Owned',
    brand:        'Van Cleff',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '189.00',
    priceWas:     '6,700.00',

    rating:       4.9,
    ratingCount:  '1,847',

    stock:        'Only 2 left — order soon',
    delivery:     'Thursday',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://www.vancleefarpels.com/content/dam/rcq/vca/DT/Qr/0T/lW/Sg/e8/B6/gl/WW/Q9/aw/DTQr0TlWSge8B6glWWQ9aw.png',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   '18k Yellow Gold & Malachite'],
      ['Motifs',     '1 Alhambra motif'],
      ['Chain',      '42 cm yellow gold chain'],
      ['Condition',  'Excellent — minimal wear'],
      ['Certified',  'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified fine jewelry experts',
      'Iconic Vintage Alhambra pendant in 18k yellow gold with malachite stone',
      'Single clover motif on a 42 cm chain',
      'Condition: Excellent — stone vivid green with no chips, gold bright',
      'Includes Amason Luxury certificate of authenticity',
    ],

    style: [
      'Malachite / Yellow Gold — $189.00',
      'Onyx / Yellow Gold — $179.00',
      'Mother of Pearl / Yellow Gold — $199.00',
    ],

    details: [
      ['Brand',       'Van Cleef & Arpels'],
      ['Collection',  'Vintage Alhambra'],
      ['Material',    '18k Yellow Gold'],
      ['Stone',       'Malachite'],
      ['Chain Length','42 cm'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'VCA-ALH-MAL-001'],
    ],

    productInfo: [
      ['Brand',             'Van Cleef & Arpels'],
      ['Customer Reviews',  '4.9 ★★★★★  1,847 ratings'],
      ['Department',        'Fine Jewelry'],
      ['Date First Available', 'August 1, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'VCA-ALH-MAL-001'],
    ],

    description: 'The Vintage Alhambra necklace is one of the most recognizable pieces in fine jewelry. Created in 1968, the four-leaf clover motif was inspired by the lucky clover that Van Cleef & Arpels made fashionable among the jet-set of the 1970s. This pre-owned example features a vivid malachite stone in 18k yellow gold and has been authenticated by Amason Luxury\'s expert gemologists.',

    boxContents: [
      'Van Cleef & Arpels Vintage Alhambra Necklace',
      'Original pouch',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://www.vancleefarpels.com/content/dam/rcq/vca/DT/Qr/0T/lW/Sg/e8/B6/gl/WW/Q9/aw/DTQr0TlWSge8B6glWWQ9aw.png', name: 'Van Cleef Alhambra Necklace', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '2,341', price: '$6,350.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day' , critique:'The clover is a botanical shape. The brand owns the specific arrangement. Nature is not compensated.'},
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://www.vancleefarpels.com/content/dam/rcq/vca/DT/Qr/0T/lW/Sg/e8/B6/gl/WW/Q9/aw/DTQr0TlWSge8B6glWWQ9aw.png', name: 'Van Cleef Alhambra Necklace', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$635–$1,905', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Same gold weight, same stones. The atelier address is the only delta.' },
    ],

    ratingDist: { 5: 87, 4: 9, 3: 2, 2: 1, 1: 1 },

    reviews: [
      {
        name:    'Sophie L.',
        rating:  5,
        title:   'Absolutely exquisite piece',
        date:    'February 12, 2025',
        body:    'The malachite is a stunning deep green and the gold is beautifully bright. Authentication certificate was detailed and professional. Arrived in a lovely pouch.',
        helpful: 412,
      },
      {
        name:    'Marie C.',
        rating:  5,
        title:   'Worth every penny',
        date:    'January 28, 2025',
        body:    'I was nervous buying jewelry this way but the photos were accurate and the piece is even more beautiful in person. A classic that will last forever.',
        helpful: 287,
      },
      {
        name:    'Clara W.',
        rating:  5,
        title:   'Gift that made her cry',
        date:    'March 3, 2025',
        body:    'Bought this for my mother\'s 60th birthday. She has wanted a VCA Alhambra necklace for years. The condition is truly excellent — I couldn\'t be happier.',
        helpful: 198,
      },
    ],
  },

  'cartier-love-bracelet': {
    title:        'Cartier Love Bracelet, Yellow Gold with Diamond Accents — Pre-Owned',
    brand:        'Catier',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '249.00',
    priceWas:     '7,550.00',

    rating:       4.9,
    ratingCount:  '3,214',

    stock:        'Only 1 left — order soon',
    delivery:     'Thursday',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://fortrove.com/cdn/shop/files/57_3576cb38-add4-4892-83f9-f320f8ed5559.jpg?v=1756934043',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   '18k Yellow Gold'],
      ['Diamonds',   '4 brilliant-cut round diamonds'],
      ['Size',       '17 (standard medium)'],
      ['Condition',  'Very Good'],
      ['Certified',  'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified fine jewelry experts',
      '18k yellow gold Love bracelet with four diamond accents',
      'Size 17 — fits most wrists comfortably',
      'Iconic Cartier screw design with original screwdriver included',
      'Condition: Very Good — minor surface scratches consistent with gentle wear',
    ],

    style: [
      'Yellow Gold / Diamonds — $249.00',
      'Yellow Gold / Plain — $199.00',
      'Rose Gold / Diamonds — $269.00',
    ],

    details: [
      ['Brand',       'Cartier'],
      ['Collection',  'Love'],
      ['Material',    '18k Yellow Gold'],
      ['Diamonds',    '4 × 0.03ct brilliant-cut'],
      ['Size',        '17'],
      ['Width',       '6.1 mm'],
      ['Condition',   'Pre-owned, Very Good'],
      ['ASIN',        'CAR-LOVE-YG-D-001'],
    ],

    productInfo: [
      ['Brand',             'Cartier'],
      ['Customer Reviews',  '4.9 ★★★★★  3,214 ratings'],
      ['Department',        'Fine Jewelry'],
      ['Date First Available', 'May 15, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'CAR-LOVE-YG-D-001'],
    ],

    description: 'Created by Aldo Cipullo in New York in 1969, the Cartier Love bracelet is one of the most iconic jewelry pieces ever designed. Its signature oval shape is secured with a small screwdriver — symbolizing love\'s permanence. This pre-owned example in 18k yellow gold with four diamond accents is in very good condition and has been verified authentic by Amason Luxury.',

    boxContents: [
      'Cartier Love Bracelet',
      'Original Cartier screwdriver',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://fortrove.com/cdn/shop/files/57_3576cb38-add4-4892-83f9-f320f8ed5559.jpg?v=1756934043', name: 'Cartier Love Bracelet', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '4,782', price: '$7,550.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day', critique:'Cartier sells a screwdriver with every bracelet to perform commitment. The commitment is the product.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://fortrove.com/cdn/shop/files/57_3576cb38-add4-4892-83f9-f320f8ed5559.jpg?v=1756934043', name: 'Cartier Love Bracelet', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$755–$2,265', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Same gold alloy. Same screws. The screwdriver is missing. The metaphor is not.' },
    ],

    ratingDist: { 5: 91, 4: 6, 3: 2, 2: 1, 1: 0 },

    reviews: [
      {
        name:    'Nicole B.',
        rating:  5,
        title:   'The bracelet I have always dreamed of',
        date:    'January 15, 2025',
        body:    'Authentic, beautiful, and very well priced. The diamonds catch the light perfectly. I wear it every day and get compliments constantly.',
        helpful: 678,
      },
      {
        name:    'Erica M.',
        rating:  5,
        title:   'Came with the original screwdriver!',
        date:    'February 22, 2025',
        body:    'I was thrilled that the original screwdriver was included. The bracelet is in great shape — only very minor scratches that you\'d expect from a loved piece.',
        helpful: 412,
      },
      {
        name:    'Hannah F.',
        rating:  5,
        title:   'An icon for a reason',
        date:    'March 10, 2025',
        body:    'Arrived beautifully packed and the authentication certificate gave me complete peace of mind. Size 17 fits perfectly on a medium wrist.',
        helpful: 234,
      },
    ],
  },

  'tiffany-t-wire': {
    title:        'Tiffany & Co. T Wire Bracelet in Sterling Silver',
    brand:        'Tifany & Co.',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '79.00',
    priceWas:     '575.00',

    rating:       4.6,
    ratingCount:  '8,443',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://media.tiffany.com/is/image/tco/60010733_BLT_MAIN1X1?hei=628&wid=628&fmt=webp',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   'Sterling Silver'],
      ['Width',      '2.5 mm'],
      ['Fit',        'Open bangle — one size fits most'],
      ['Condition',  'Excellent'],
      ['Certified',  'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified fine jewelry experts',
      'Sterling silver open bangle from Tiffany\'s iconic T collection',
      '2.5 mm wire width — sleek and minimal',
      'Open design fits most wrists comfortably',
      'Condition: Excellent — light polishing marks, bright overall',
    ],

    style: [
      'Sterling Silver — $79.00',
      '18k Rose Gold — $199.00',
      '18k Yellow Gold — $219.00',
    ],

    details: [
      ['Brand',       'Tiffany & Co.'],
      ['Collection',  'Tiffany T'],
      ['Style',       'Wire Bracelet'],
      ['Material',    'Sterling Silver'],
      ['Width',       '2.5 mm'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'TIF-T-WIRE-SS-001'],
    ],

    productInfo: [
      ['Brand',             'Tiffany & Co.'],
      ['Customer Reviews',  '4.6 ★★★★☆  8,443 ratings'],
      ['Department',        'Fine Jewelry'],
      ['Date First Available', 'October 3, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'TIF-T-WIRE-SS-001'],
    ],

    description: 'Defined by clean lines and bold geometry, the Tiffany T collection reflects New York City\'s iconic architecture. The T Wire bracelet is a refined everyday staple — its slim profile makes it easy to stack with other pieces or wear alone for a minimalist statement. This pre-owned sterling silver example has been authenticated and is in excellent condition.',

    boxContents: [
      'Tiffany & Co. T Wire Bracelet',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://media.tiffany.com/is/image/tco/60010733_BLT_MAIN1X1?hei=628&wid=628&fmt=webp', name: 'Tiffany T Wire Bracelet', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '3,451', price: '$1,875.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day', critique:'The blue box costs more to make than the bracelet. You are buying a box color.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://media.tiffany.com/is/image/tco/60010733_BLT_MAIN1X1?hei=628&wid=628&fmt=webp', name: 'Tiffany T Wire Bracelet', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$188–$563', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Same bracelet, no blue box. The T is still a T without the box.' },
    ],

    ratingDist: { 5: 72, 4: 18, 3: 6, 2: 3, 1: 1 },

    reviews: [
      {
        name:    'Alicia N.',
        rating:  5,
        title:   'Perfect everyday bracelet',
        date:    'February 1, 2025',
        body:    'I wear this every single day and it goes with everything. The silver hasn\'t tarnished at all and it still looks brand new. Great value.',
        helpful: 321,
      },
      {
        name:    'Mei T.',
        rating:  4,
        title:   'Elegant and minimalist',
        date:    'January 19, 2025',
        body:    'Love the look but the open bangle can slide a bit on smaller wrists. Still a beautiful piece and the price is unbeatable for Tiffany.',
        helpful: 187,
      },
      {
        name:    'Julia K.',
        rating:  5,
        title:   'Stack it with everything',
        date:    'March 5, 2025',
        body:    'I ordered two to stack. They look incredible together and the slim profile means they don\'t feel heavy. Condition was exactly as described.',
        helpful: 143,
      },
    ],
  },

  'bvlgari-zero1-ring': {
    title:        'Bvlgari B.zero1 Three-Band Ring in 18k Rose Gold — Pre-Owned',
    brand:        'Bvlgar1',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '159.00',
    priceWas:     '2,850.00',

    rating:       4.7,
    ratingCount:  '2,109',

    stock:        'In Stock',
    delivery:     'Thursday',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://www.londonjewelers.com/pub/media/catalog/product/1/0/1083596_6uwlqikc6uqpteg9.jpg',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   '18k Rose Gold'],
      ['Bands',      'Three interlocking bands'],
      ['Size',       '52 (US 6)'],
      ['Condition',  'Very Good'],
      ['Certified',  'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified fine jewelry experts',
      'Iconic B.zero1 design with three interlocking 18k rose gold bands',
      'Ring size 52 (approximately US 6)',
      'The central band rotates freely — Bulgari\'s signature architectural detail',
      'Condition: Very Good — minor scratches on interior, exterior bright',
    ],

    style: [
      '18k Rose Gold, Three-Band — $159.00',
      '18k White Gold, Three-Band — $169.00',
      '18k Yellow Gold, Three-Band — $155.00',
    ],

    details: [
      ['Brand',       'Bvlgari'],
      ['Collection',  'B.zero1'],
      ['Material',    '18k Rose Gold'],
      ['Style',       'Three-band ring'],
      ['Ring Size',   '52 (US 6)'],
      ['Width',       '9 mm'],
      ['Condition',   'Pre-owned, Very Good'],
      ['ASIN',        'BVL-B0-3B-RG-001'],
    ],

    productInfo: [
      ['Brand',             'Bvlgari'],
      ['Customer Reviews',  '4.7 ★★★★☆  2,109 ratings'],
      ['Department',        'Fine Jewelry'],
      ['Date First Available', 'July 20, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'BVL-B0-3B-RG-001'],
    ],

    description: 'The B.zero1 ring was born in 1999 as a bold reinterpretation of the ancient Roman Colosseum. Its distinctive three-band structure — with a freely rotating central band — has made it one of the most recognizable rings in fine jewelry. This pre-owned 18k rose gold example has been authenticated and graded Very Good.',

    boxContents: [
      'Bvlgari B.zero1 Three-Band Ring',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://www.londonjewelers.com/pub/media/catalog/product/1/0/1083596_6uwlqikc6uqpteg9.jpg', name: 'Bvlgari B.zero1 Ring', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '3,312', price: '$2,300.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day', critique:'The word BVLGARI is engraved 48 times around the band. The brand IS the object.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://www.londonjewelers.com/pub/media/catalog/product/1/0/1083596_6uwlqikc6uqpteg9.jpg', name: 'Bvlgari B.zero1 Ring', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$230–$690', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Same gold, same engraving. Without the receipt, the inscription has no origin story.' },
    ],

    ratingDist: { 5: 74, 4: 16, 3: 6, 2: 3, 1: 1 },

    reviews: [
      {
        name:    'Victoria R.',
        rating:  5,
        title:   'Stunning and architectural',
        date:    'February 9, 2025',
        body:    'The rotating band is such a satisfying detail. Rose gold is warm and beautiful. Condition was better than I expected for pre-owned — very pleased.',
        helpful: 289,
      },
      {
        name:    'Lauren M.',
        rating:  4,
        title:   'Beautiful but sizing tip needed',
        date:    'January 24, 2025',
        body:    'B.zero1 runs slightly snug because of the three bands — I\'d recommend sizing up by half a size. The ring itself is gorgeous and condition is great.',
        helpful: 167,
      },
      {
        name:    'Diane C.',
        rating:  5,
        title:   'A piece I will treasure forever',
        date:    'March 8, 2025',
        body:    'I have wanted a Bulgari ring for years. The pre-owned price made it finally accessible. The authentication paperwork was thorough and professional.',
        helpful: 112,
      },
    ],
  },

  'hermes-clic-h': {
    title:        'Hermès Clic H Bracelet, Enamel & 18k Gold Hardware — Pre-Owned',
    brand:        'Hernes',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '119.00',
    priceWas:     '1,300.00',

    rating:       4.8,
    ratingCount:  '4,562',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://i0.wp.com/mightychic.com/wp-content/uploads/2023/12/hermes-clic-h-bracelet-white-gold-hardware_1.jpg?fit=1200%2C1200&ssl=1',
      'https://images.unsplash.com/photo-1573408301185-9519f94815b6?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   'White enamel & 18k gold hardware'],
      ['Closure',    'Clic clasp with H motif'],
      ['Width',      '12 mm'],
      ['Condition',  'Excellent'],
      ['Certified',  'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified luxury experts',
      'White enamel body with 18k yellow gold H clasp',
      '12 mm wide — the classic "PM" narrow size',
      'Condition: Excellent — enamel vivid, no chips or cracks',
      'One of Hermès\'s most iconic everyday jewelry pieces',
    ],

    style: [
      'White Enamel / Yellow Gold — $119.00',
      'Black Enamel / Yellow Gold — $119.00',
      'White Enamel / Rose Gold — $129.00',
    ],

    details: [
      ['Brand',       'Hermès'],
      ['Collection',  'Clic H'],
      ['Material',    'White enamel'],
      ['Hardware',    '18k Yellow Gold'],
      ['Width',       '12 mm'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'HER-CLICH-W-YG-001'],
    ],

    productInfo: [
      ['Brand',             'Hermès'],
      ['Customer Reviews',  '4.8 ★★★★★  4,562 ratings'],
      ['Department',        'Fine Jewelry'],
      ['Date First Available', 'September 10, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'HER-CLICH-W-YG-001'],
    ],

    description: 'The Clic H bracelet is Hermès\'s answer to the demand for accessible everyday luxury. Its clean enamel body clicks shut with the signature H clasp — a small, precise mechanism that is satisfying every time. This pre-owned white enamel example with yellow gold hardware has been authenticated and is in excellent condition with vivid color and no enamel chips.',

    boxContents: [
      'Hermès Clic H Bracelet',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://i0.wp.com/mightychic.com/wp-content/uploads/2023/12/hermes-clic-h-bracelet-white-gold-hardware_1.jpg?fit=1200%2C1200&ssl=1', name: 'Hermès Clic H Bracelet', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '2,198', price: '$890.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day', critique:'Orange enamel costs cents. The H on the clasp costs $800. The letter is the luxury.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://i0.wp.com/mightychic.com/wp-content/uploads/2023/12/hermes-clic-h-bracelet-white-gold-hardware_1.jpg?fit=1200%2C1200&ssl=1', name: 'Hermès Clic H Bracelet', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$89–$267', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Same enamel, same clasp. The H does not know it is unauthorized.' },
    ],

    ratingDist: { 5: 81, 4: 13, 3: 4, 2: 1, 1: 1 },

    reviews: [
      {
        name:    'Chloe P.',
        rating:  5,
        title:   'My everyday luxury staple',
        date:    'January 29, 2025',
        body:    'I wear this every single day. The enamel is still pristine after months of daily wear. The click of the clasp is so satisfying. Worth every penny.',
        helpful: 534,
      },
      {
        name:    'Nadia B.',
        rating:  5,
        title:   'Exactly as described',
        date:    'February 17, 2025',
        body:    'The white enamel is brilliant and the gold hardware is bright. Condition is genuinely excellent. This is my third Hermès purchase through Amason Luxury.',
        helpful: 312,
      },
      {
        name:    'Fiona S.',
        rating:  4,
        title:   'Gorgeous — size tip though',
        date:    'March 12, 2025',
        body:    'The bracelet is beautiful. I\'d recommend trying on in store first if possible as the rigid oval shape can fit differently depending on your wrist. Mine fits perfectly.',
        helpful: 178,
      },
    ],
  },

  'graff-diamond-necklace': {
    title:        'Graff 34.50ct Floral Diamond Necklace, 18k White Gold — Pre-Owned',
    brand:        'Graf',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '159.00',
    priceWas:     '12,850.00',

    rating:       4.9,
    ratingCount:  '892',

    stock:        'Only 1 left — order soon',
    delivery:     'Friday',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'http://nallyjewels.com/cdn/shop/products/NN-825_1.jpg?v=1640113429&width=2048',
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   '18k White Gold'],
      ['Diamonds',   '34.50ct total weight, G-H color, VS clarity'],
      ['Setting',    'Floral cluster design'],
      ['Condition',  'Excellent'],
      ['Certified',  'Amason Luxury authenticated with GIA report'],
    ],

    about: [
      'Authenticated by Amason certified gemologists with GIA diamond report',
      '18k white gold floral cluster necklace, 34.50ct total diamond weight',
      'Diamonds graded G-H color, VS clarity — exceptional brilliance',
      'One of Graff\'s signature floral statement pieces',
      'Condition: Excellent — all stones present, prongs secure, gold bright',
    ],

    style: [
      '18k White Gold / Diamonds — $159.00',
    ],

    details: [
      ['Brand',       'Graff'],
      ['Style',       'Floral Cluster Necklace'],
      ['Material',    '18k White Gold'],
      ['Diamond Wt.', '34.50ct total'],
      ['Diamond Grade','G-H color, VS clarity'],
      ['Length',      '42 cm'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'GRAFF-FLR-D-WG-001'],
    ],

    productInfo: [
      ['Brand',             'Graff'],
      ['Customer Reviews',  '4.9 ★★★★★  892 ratings'],
      ['Department',        'Fine Jewelry'],
      ['Date First Available', 'November 1, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'GRAFF-FLR-D-WG-001'],
    ],

    description: 'Graff is renowned for creating some of the world\'s most spectacular diamond jewelry. This floral cluster necklace features 34.50 carats of G-H color, VS clarity diamonds set in 18k white gold — a stunning statement piece that commands attention in any room. Authenticated with a full GIA diamond report and Amason Luxury certificate.',

    boxContents: [
      'Graff Floral Diamond Necklace',
      'GIA diamond report',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'http://nallyjewels.com/cdn/shop/products/NN-825_1.jpg?v=1640113429&width=2048', name: 'Graff Diamond Necklace', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '2,567', price: '$48,000.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day' ,critque:'The diamonds are GIA certified. The brand markup above diamond cost is 200–400%. The stones are the same stones.'},
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'http://nallyjewels.com/cdn/shop/products/NN-825_1.jpg?v=1640113429&width=2048', name: 'Graff Diamond Necklace', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$4,800–$14,400', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies' , critique:'Same GIA stones, same setting. The Graff name adds $40,000. The diamonds add $8,000.'},
    ],

    ratingDist: { 5: 89, 4: 8, 3: 2, 2: 1, 1: 0 },

    reviews: [
      {
        name:    'Catherine M.',
        rating:  5,
        title:   'A piece that stops the room',
        date:    'February 3, 2025',
        body:    'I wore this to a gala and received compliments all evening. The diamonds are astonishing — the brilliance and fire are unreal. Worth every single dollar.',
        helpful: 345,
      },
      {
        name:    'Susan L.',
        rating:  5,
        title:   'GIA report gave me total confidence',
        date:    'January 10, 2025',
        body:    'Having the GIA certificate included made this purchase stress-free. The necklace exceeded all my expectations. Condition is genuinely excellent.',
        helpful: 212,
      },
      {
        name:    'Patricia H.',
        rating:  5,
        title:   'Heirloom quality',
        date:    'March 1, 2025',
        body:    'This will be passed down in my family. The craftsmanship is extraordinary and the diamonds are spectacular. Amason Luxury\'s process was flawless.',
        helpful: 156,
      },
    ],
  },

  'de-beers-lotus': {
    title:        'De Beers Enchanted Lotus Earrings in 18k White Gold & Diamonds',
    brand:        'De Bers',
    brandUrl:     '#',
    category:     'Fine Jewelry & Watches',
    categoryUrl:  '#',

    price:        '119.00',
    priceWas:     '3,300.00',

    rating:       4.7,
    ratingCount:  '1,438',

    stock:        'In Stock',
    delivery:     'Thursday',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://media.debeers.com/i/debeers/E102148_22',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   '18k White Gold'],
      ['Diamonds',   '0.27ct total, round brilliant'],
      ['Style',      'Stud earrings, lotus flower motif'],
      ['Condition',  'Very Good'],
      ['Certified',  'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified fine jewelry experts',
      'Enchanted Lotus stud earrings in 18k white gold with round brilliant diamonds',
      '0.27ct total diamond weight — F-G color, VS clarity',
      'The lotus motif symbolizes purity and new beginnings in De Beers iconography',
      'Condition: Very Good — diamonds brilliant, posts and backs secure',
    ],

    style: [
      'White Gold / Diamonds — $119.00',
      'Rose Gold / Diamonds — $129.00',
      'Yellow Gold / Diamonds — $125.00',
    ],

    details: [
      ['Brand',       'De Beers'],
      ['Collection',  'Enchanted Lotus'],
      ['Material',    '18k White Gold'],
      ['Diamond Wt.', '0.27ct total'],
      ['Style',       'Stud earrings'],
      ['Condition',   'Pre-owned, Very Good'],
      ['ASIN',        'DEB-EL-WG-D-001'],
    ],

    productInfo: [
      ['Brand',             'De Beers'],
      ['Customer Reviews',  '4.7 ★★★★☆  1,438 ratings'],
      ['Department',        'Fine Jewelry'],
      ['Date First Available', 'August 22, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'DEB-EL-WG-D-001'],
    ],

    description: 'De Beers\' Enchanted Lotus collection draws inspiration from the lotus flower — a symbol of purity, clarity, and new beginnings. These stud earrings in 18k white gold are set with round brilliant diamonds totaling 0.27 carats. Delicate enough for everyday wear yet refined enough for formal occasions, they are an elegant and lasting addition to any jewelry wardrobe.',

    boxContents: [
      'De Beers Enchanted Lotus Earrings (pair)',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['jewelry', 'fashion'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://media.debeers.com/i/debeers/E102148_22', name: 'De Beers Lotus Earrings', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '1,892', price: '$4,500.00', shipping: 'Complimentary', soldBy: 'Brand Boutique', returns: '14-day' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://media.debeers.com/i/debeers/E102148_22', name: 'De Beers Lotus Earrings', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$450–$1,350', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://media.debeers.com/i/debeers/E102148_22', name: 'De Beers Lotus Earrings', subtitle: 'High-Quality Fake · AAA', subtitleColor: '#c7511f', stars: '★★★★☆', count: '', price: '$30–$120', shipping: 'Varies', soldBy: 'Third-party Seller', returns: 'None' },
    ],

    ratingDist: { 5: 76, 4: 15, 3: 6, 2: 2, 1: 1 },

    reviews: [
      {
        name:    'Helen T.',
        rating:  5,
        title:   'Understated perfection',
        date:    'January 26, 2025',
        body:    'These are my go-to earrings now. Subtle enough for the office, beautiful enough for evening. The diamonds catch the light beautifully.',
        helpful: 298,
      },
      {
        name:    'Grace W.',
        rating:  4,
        title:   'Lovely but posts are thin',
        date:    'February 11, 2025',
        body:    'The earrings themselves are beautiful and the condition was as described. The gold posts are delicate — just handle with care.',
        helpful: 143,
      },
      {
        name:    'Anna M.',
        rating:  5,
        title:   'A forever gift',
        date:    'March 9, 2025',
        body:    'Bought these for my daughter\'s graduation. She was overjoyed. Condition is genuinely very good and the diamonds are bright and lively.',
        helpful: 98,
      },
    ],
  },

  'chanel-classic-flap': {
    title:        'Chanel Classic Flap Bag, Lambskin Leather with Gold Hardware — Pre-Owned',
    brand:        'Chanel',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '349.00',
    priceWas:     '10,200.00',

    rating:       4.7,
    ratingCount:  '1,203',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://www.redeluxe.com/cdn/shop/files/BB11BD0D-1273-4BAF-868E-3EB1B7BB6327.jpg?v=1723103347',
      'https://www.redeluxe.com/cdn/shop/files/BB11BD0D-1273-4BAF-868E-3EB1B7BB6327.jpg?v=1723103347',
    ],

    highlights: [
      ['Material',   'Black lambskin leather'],
      ['Hardware',   'Gold-tone'],
      ['Closure',    'CC turn-lock'],
      ['Size',       'Medium (25.5 cm)'],
      ['Condition',  'Excellent — minimal wear'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      'Medium size (25.5 cm), black lambskin leather',
      'Gold-tone hardware with signature CC turn-lock closure',
      'Interior: one large compartment and one slip pocket',
      'Condition: Excellent — minimal signs of wear',
    ],

    style: [
      'Black lambskin / Gold hardware — $349.00',
      'Beige lambskin / Gold hardware — $379.00',
      'Black caviar / Silver hardware — $399.00',
    ],

    details: [
      ['Brand',       'Chanel'],
      ['Model',       'Classic Flap Medium'],
      ['Material',    'Lambskin leather'],
      ['Hardware',    'Gold-tone'],
      ['Dimensions',  '10" W × 6.5" H × 2.5" D'],
      ['Strap',       'Interwoven leather and gold chain'],
      ['Condition',   'Pre-owned, Excellent'],
      ['Year',        '2021'],
      ['ASIN',        'CHANEL-CF-001'],
    ],

    productInfo: [
      ['Brand',             'Chanel'],
      ['Customer Reviews',  '4.7 ★★★★★  1,203 ratings'],
      ['Department',        'Womens Handbags'],
      ['Date First Available', 'March 10, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'CHANEL-CF-001'],
    ],

    description: 'The Chanel Classic Flap bag is the ultimate icon of luxury fashion. This pre-owned medium flap in black lambskin with gold hardware has been authenticated and graded Excellent by Amason Luxury experts. The soft lambskin shows minimal wear and the CC turn-lock closure operates smoothly. A timeless investment piece.',

    boxContents: [
      'Chanel Classic Flap bag (Medium)',
      'Dust bag',
      'Authenticity card',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://www.redeluxe.com/cdn/shop/files/BB11BD0D-1273-4BAF-868E-3EB1B7BB6327.jpg?v=1723103347', name: 'Chanel Classic Flap', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '11,204', price: '$7,000.00', shipping: 'Complimentary', soldBy: 'Chanel Boutique', returns: '14-day' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://www.redeluxe.com/cdn/shop/files/BB11BD0D-1273-4BAF-868E-3EB1B7BB6327.jpg?v=1723103347', name: 'Chanel Classic Flap', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$700–$2,100', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies' },
      { badge: 'Premium', badgeColor: '#c7511f', btnColor: '#c7511f', img: 'https://www.redeluxe.com/cdn/shop/files/BB11BD0D-1273-4BAF-868E-3EB1B7BB6327.jpg?v=1723103347', name: 'Chanel Classic Flap', subtitle: 'High-Quality Fake · AAA', subtitleColor: '#c7511f', stars: '★★★★☆', count: '', price: '$80–$350', shipping: 'Varies', soldBy: 'Third-party Seller', returns: 'None' },
    ],

    ratingDist: { 5: 78, 4: 13, 3: 5, 2: 2, 1: 2 },

    reviews: [
      {
        name:    'Isabelle F.',
        rating:  5,
        title:   'Dream bag, dream price',
        date:    'February 10, 2025',
        body:    'I have been saving for a Classic Flap for three years. Found this on Amason Luxury and could not be happier. Condition is genuinely excellent — the lambskin is soft and there are no visible scratches on the hardware.',
        helpful: 420,
      },
      {
        name:    'Rachel Y.',
        rating:  5,
        title:   'Authentication process is thorough',
        date:    'January 5, 2025',
        body:    'I was skeptical about buying a luxury bag online but the certificate and report that came with it were detailed and professional. Bag arrived beautifully packaged.',
        helpful: 298,
      },
      {
        name:    'Mona S.',
        rating:  4,
        title:   'Beautiful bag, minor corner wear',
        date:    'March 8, 2025',
        body:    'The bag is stunning and I love it. I did notice a tiny bit of corner wear not mentioned in the listing — nothing deal-breaking but worth noting. Customer service was responsive.',
        helpful: 87,
      },
    ],
  },

  'loro-piana-poncho': {
    title:        'Loro Piana Leather-Trimmed Alpaca-Blend Bouclé Poncho',
    brand:        'Loro Plana',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '18.90',
    priceWas:     '3,043.00',

    rating:       4.6,
    ratingCount:  '734',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://www.net-a-porter.com/variants/images/1647597303464545/in/w2000_q60.jpg',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',    'Alpaca-blend bouclé, leather trim'],
      ['Color',       'Ivory / Camel'],
      ['Fit',         'One size — oversized poncho'],
      ['Condition',   'Excellent'],
      ['Certified',   'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      'Crafted from a luxurious alpaca-blend bouclé with Italian leather trim detail',
      'One-size oversized poncho silhouette — draped effortlessly over any outfit',
      'Loro Piana\'s signature softness — one of the finest fibers in the world',
      'Condition: Excellent — no pilling, leather trim pristine',
    ],

    style: [
      'Ivory / Camel Leather Trim — $18.90',
    ],

    details: [
      ['Brand',       'Loro Piana'],
      ['Style',       'Poncho'],
      ['Material',    'Alpaca-blend bouclé, leather trim'],
      ['Fit',         'One size'],
      ['Color',       'Ivory / Camel'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'LP-PON-ALP-001'],
    ],

    productInfo: [
      ['Brand',             'Loro Piana'],
      ['Customer Reviews',  '4.6 ★★★★☆  734 ratings'],
      ['Department',        'Womens Outerwear'],
      ['Date First Available', 'September 5, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'LP-PON-ALP-001'],
    ],

    description: 'Loro Piana has been synonymous with the world\'s finest natural fibers since 1924. This poncho in alpaca-blend bouclé combines the brand\'s legendary softness with refined leather trim detailing — the kind of effortless, understated luxury that defines the Loro Piana aesthetic. Throw it over anything and look instantly polished.',

    boxContents: [
      'Loro Piana Alpaca Bouclé Poncho',
      'Dust bag',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://www.net-a-porter.com/variants/images/1647597303464545/in/w2000_q60.jpg', name: 'Loro Piana Cashmere Poncho', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '3,207', price: '$4,200.00', shipping: 'Complimentary', soldBy: 'Loro Piana Boutique', returns: '14-day' , critique:'Baby cashmere sourced from Inner Mongolia; pricing reflects fiber scarcity + brand premium.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://www.net-a-porter.com/variants/images/1647597303464545/in/w2000_q60.jpg', name: 'Loro Piana Cashmere Poncho', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$420–$1,260', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Same fiber, same loom, same hands. Label is the only delta.' },
    ],

    ratingDist: { 5: 72, 4: 18, 3: 6, 2: 3, 1: 1 },

    reviews: [
      {
        name:    'Charlotte B.',
        rating:  5,
        title:   'The softest thing I own',
        date:    'February 6, 2025',
        body:    'I have worn Loro Piana cashmere before but this alpaca bouclé is on another level. The leather trim elevates it from cozy to chic. I wear it constantly.',
        helpful: 287,
      },
      {
        name:    'Ingrid M.',
        rating:  5,
        title:   'A cloud you can wear',
        date:    'January 21, 2025',
        body:    'Incredibly luxurious — the kind of piece you reach for every single day in autumn and winter. Condition is genuinely excellent, no wear whatsoever.',
        helpful: 198,
      },
      {
        name:    'Rose N.',
        rating:  4,
        title:   'Stunning but slightly oversized',
        date:    'March 4, 2025',
        body:    'The oversized nature is intentional but petite wearers should be aware — it reads very dramatic. Still beautiful and I love it.',
        helpful: 112,
      },
    ],
  },

  'louis-vuitton-neverfull': {
    title:        'Louis Vuitton Neverfull MM Tote, Monogram Canvas — Pre-Owned',
    brand:        'Luis Vuitton',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '27.90',
    priceWas:     '2,030.00',

    rating:       4.8,
    ratingCount:  '9,312',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm--M46987_PM2_Front%20view.jpg',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   'Monogram canvas, natural cowhide trim'],
      ['Size',       'MM (Medium) — 31 × 28 × 14 cm'],
      ['Lining',     'Beige textile with side cinch ties'],
      ['Condition',  'Very Good'],
      ['Certified',  'Amason Luxury authenticated'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      'Iconic Neverfull MM in signature Monogram canvas with natural cowhide leather trim',
      'Medium size (31 × 28 × 14 cm) — spacious enough for everything',
      'Side lace ties allow you to cinch the bag for a different silhouette',
      'Condition: Very Good — canvas clean, handles with light patina, zipper smooth',
    ],

    style: [
      'Monogram / Beige Lining — $27.90',
      'Monogram / Pink Lining — $29.90',
      'Damier Ebene — $31.90',
    ],

    details: [
      ['Brand',       'Louis Vuitton'],
      ['Collection',  'Neverfull'],
      ['Size',        'MM (Medium)'],
      ['Material',    'Monogram canvas'],
      ['Trim',        'Natural cowhide leather'],
      ['Dimensions',  '31 × 28 × 14 cm'],
      ['Condition',   'Pre-owned, Very Good'],
      ['ASIN',        'LV-NF-MM-MON-001'],
    ],

    productInfo: [
      ['Brand',             'Louis Vuitton'],
      ['Customer Reviews',  '4.8 ★★★★★  9,312 ratings'],
      ['Department',        'Womens Handbags'],
      ['Date First Available', 'April 18, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'LV-NF-MM-MON-001'],
    ],

    description: 'Since its introduction in 2007, the Neverfull has become one of Louis Vuitton\'s most iconic and best-selling bags. Its simple, open-top design and generous capacity make it the perfect everyday companion. This pre-owned MM in Monogram canvas has been authenticated and graded Very Good, with a light handle patina that will continue to deepen beautifully over time.',

    boxContents: [
      'Louis Vuitton Neverfull MM Tote',
      'Removable interior zip pouch',
      'Dust bag',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm--M46987_PM2_Front%20view.jpg', name: 'Louis Vuitton Neverfull MM', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '9,312', price: '$1,690.00', shipping: 'Complimentary', soldBy: 'Louis Vuitton Boutique', returns: '30-day', critique:'Coated canvas costs cents to produce. You are buying the monogram passport.'},
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-neverfull-mm--M46987_PM2_Front%20view.jpg', name: 'Louis Vuitton Neverfull MM', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$170–$507', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies',critique:'The canvas is the brand. The brand is a legal construct. The bag is just a bag.' },
    ],

    ratingDist: { 5: 83, 4: 11, 3: 4, 2: 1, 1: 1 },

    reviews: [
      {
        name:    'Monica R.',
        rating:  5,
        title:   'My most-used bag by far',
        date:    'January 23, 2025',
        body:    'I use this every single day. It fits a laptop, gym clothes, and everything else I need. The Monogram canvas is indestructible and looks great with patina.',
        helpful: 892,
      },
      {
        name:    'Sandra L.',
        rating:  5,
        title:   'Timeless and practical',
        date:    'February 14, 2025',
        body:    'The Neverfull is a classic for a reason. I bought this one pre-owned and it looks wonderful. The handles have a beautiful even patina and the canvas is clean.',
        helpful: 567,
      },
      {
        name:    'Kate M.',
        rating:  4,
        title:   'Great bag, no zipper closure',
        date:    'March 7, 2025',
        body:    'The open top is the only slight drawback — but that\'s just how the Neverfull is designed, not a flaw in this listing. The bag itself is in great shape.',
        helpful: 312,
      },
    ],
  },

  'balenciaga-triple-s': {
    title:        'Balenciaga Triple S Sneakers in Mixed Fabrics — Pre-Owned',
    brand:        'Balensiaga',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '18.90',
    priceWas:     '1,095.00',

    rating:       4.5,
    ratingCount:  '3,876',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://www.fashionphile.com/cdn/shop/files/aeaf610f7b6f61611b711f2356eeb09d.jpg?v=1770831259&width=1946',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Upper',      'Mixed mesh, suede & leather'],
      ['Sole',       'Triple-layered, exaggerated chunky sole'],
      ['Size',       'EU 40 (US Women\'s 10 / Men\'s 7)'],
      ['Color',      'White / Grey / Black'],
      ['Condition',  'Very Good'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      'The shoe that defined the chunky sneaker trend — Balenciaga Triple S',
      'Mixed mesh, suede, and leather upper over the iconic triple-layer sole',
      'EU 40 (Women\'s US 10 / Men\'s US 7)',
      'Condition: Very Good — uppers clean, sole intact with normal wear marks',
    ],

    style: [
      'White / Grey / Black, EU 40 — $18.90',
      'All White, EU 40 — $21.90',
      'Black, EU 40 — $19.90',
    ],

    details: [
      ['Brand',       'Balenciaga'],
      ['Model',       'Triple S'],
      ['Upper',       'Mixed mesh, suede, leather'],
      ['Sole',        'Composite triple sole'],
      ['Size',        'EU 40'],
      ['Color',       'White / Grey / Black'],
      ['Condition',   'Pre-owned, Very Good'],
      ['ASIN',        'BAL-TRS-WGB-40-001'],
    ],

    productInfo: [
      ['Brand',             'Balenciaga'],
      ['Customer Reviews',  '4.5 ★★★★☆  3,876 ratings'],
      ['Department',        'Unisex Sneakers'],
      ['Date First Available', 'June 30, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'BAL-TRS-WGB-40-001'],
    ],

    description: 'When Demna Gvasalia introduced the Triple S in 2017, it sent ripples through the entire sneaker industry and defined the luxury chunky sneaker genre. The exaggerated triple-layer sole — combining three distinct soles — creates the signature silhouette that made the Triple S the most talked-about shoe of its era. This pre-owned example is in very good condition.',

    boxContents: [
      'Balenciaga Triple S Sneakers (pair)',
      'Original box',
      'Extra laces',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://www.fashionphile.com/cdn/shop/files/aeaf610f7b6f61611b711f2356eeb09d.jpg?v=1770831259&width=1946', name: 'Balenciaga Triple S', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★½', count: '3,892', price: '$1,150.00', shipping: 'Complimentary', soldBy: 'Balenciaga Boutique', returns: '14-day',critique:'Intentional ugliness as luxury signal. The outsole costs $4 to make.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://www.fashionphile.com/cdn/shop/files/aeaf610f7b6f61611b711f2356eeb09d.jpg?v=1770831259&width=1946', name: 'Balenciaga Triple S', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★½', count: '', price: '$115–$345', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'The hype is the product. Without the label, it is just a heavy shoe.' },
    ],

    ratingDist: { 5: 67, 4: 18, 3: 8, 2: 4, 1: 3 },

    reviews: [
      {
        name:    'Jake T.',
        rating:  5,
        title:   'An icon that lives up to the hype',
        date:    'February 25, 2025',
        body:    'I finally got a pair and they are even more impressive in person. The build quality is extraordinary and the condition was exactly as described. Comfortable too!',
        helpful: 456,
      },
      {
        name:    'Alex P.',
        rating:  4,
        title:   'Statement sneakers that command attention',
        date:    'January 14, 2025',
        body:    'Heavy and bulky — but that\'s the point. These make an outfit. The condition was very good with only minor sole wear. Happy with the purchase.',
        helpful: 289,
      },
      {
        name:    'Zara L.',
        rating:  5,
        title:   'Cult classic at a fraction of retail',
        date:    'March 6, 2025',
        body:    'Pre-owned price is an absolute steal. The uppers were clean and the sole had minimal wear. Shipping was fast and they came with the original box.',
        helpful: 178,
      },
    ],
  },

  'versace-medusa-dress': {
    title:        'Versace La Medusa Chain-Detail Midi Dress — Pre-Owned',
    brand:        'Versache',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '25.90',
    priceWas:     '2,175.00',

    rating:       4.8,
    ratingCount:  '2,143',

    stock:        'Only 2 left — order soon',
    delivery:     'Thursday',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw05ac74d9/original/90_1008745-1A01253_1B000_16_Medusa~Midi~Dress--Versace-online-store_2_0.jpg?sw=850&q=85&strip=true',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   'Stretch viscose blend'],
      ['Detail',     'Gold-tone Medusa chain embellishment'],
      ['Length',     'Midi — falls below the knee'],
      ['Size',       'IT 40 (US 4 / EU 36)'],
      ['Condition',  'Excellent'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      'Stretch viscose midi dress with iconic gold-tone Medusa chain detail at the neckline',
      'IT 40 (US 4 / EU 36) — slim, body-skimming fit',
      'Condition: Excellent — no pulls, snags, or staining; zipper smooth',
      'The Medusa motif is Versace\'s most powerful symbol of beauty and power',
    ],

    style: [
      'Black / Gold Chain, IT 40 — $25.90',
      'Red / Gold Chain, IT 40 — $27.90',
      'White / Gold Chain, IT 40 — $25.90',
    ],

    details: [
      ['Brand',       'Versace'],
      ['Collection',  'La Medusa'],
      ['Material',    'Stretch viscose blend'],
      ['Detail',      'Gold-tone Medusa chain'],
      ['Size',        'IT 40 (US 4)'],
      ['Length',      'Midi'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'VER-MED-MIDI-BLK-40-001'],
    ],

    productInfo: [
      ['Brand',             'Versace'],
      ['Customer Reviews',  '4.8 ★★★★★  2,143 ratings'],
      ['Department',        'Womens Dresses'],
      ['Date First Available', 'July 12, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'VER-MED-MIDI-BLK-40-001'],
    ],

    description: 'Versace\'s La Medusa collection distills the house\'s maximalist sensibility into wearable, electrifying pieces. This midi dress in stretch viscose features the iconic gold-tone Medusa chain detail at the neckline — a signature touch that makes the garment unmistakably Versace. Pre-owned and in excellent condition, it has been carefully authenticated by Amason Luxury experts.',

    boxContents: [
      'Versace La Medusa Midi Dress',
      'Garment bag',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw05ac74d9/original/90_1008745-1A01253_1B000_16_Medusa~Midi~Dress--Versace-online-store_2_0.jpg?sw=850&q=85&strip=true', name: 'Versace Medusa Dress', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '5,671', price: '$2,800.00', shipping: 'Complimentary', soldBy: 'Versace Boutique', returns: '14-day', critique:'Medusa head is a legal trademark applied to $15 of silk. You pay for the myth.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw05ac74d9/original/90_1008745-1A01253_1B000_16_Medusa~Midi~Dress--Versace-online-store_2_0.jpg?sw=850&q=85&strip=true', name: 'Versace Medusa Dress', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$280–$840', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Same dress. Same worker. Minus the mythology tax.' },
    ],

    ratingDist: { 5: 82, 4: 11, 3: 4, 2: 2, 1: 1 },

    reviews: [
      {
        name:    'Valentina R.',
        rating:  5,
        title:   'Drama in the best possible way',
        date:    'February 20, 2025',
        body:    'This dress makes an entrance. The chain detail catches the light and the stretch fabric is incredibly comfortable to wear. Condition is genuinely excellent.',
        helpful: 423,
      },
      {
        name:    'Bianca M.',
        rating:  5,
        title:   'Versace perfection',
        date:    'January 16, 2025',
        body:    'The Medusa chain is even more beautiful in person. The fit is precise and flattering on a size 4 frame. I wore it to a charity gala and felt like a goddess.',
        helpful: 287,
      },
      {
        name:    'Elena T.',
        rating:  4,
        title:   'Beautiful but runs snug',
        date:    'March 10, 2025',
        body:    'The dress is stunning. I would recommend sizing up if you\'re between sizes — the stretch viscose clings. But the overall condition and quality are excellent.',
        helpful: 134,
      },
    ],
  },

  'prada-re-edition': {
    title:        'Prada Re-Edition 2005 Nylon Shoulder Bag — Pre-Owned',
    brand:        'Pada',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '19.90',
    priceWas:     '1,450.00',

    rating:       4.7,
    ratingCount:  '5,621',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://cdn.saksfifthavenue.com/is/image/saks/0400021739857_BLACKGOLD?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0',
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   'Re-Nylon (recycled nylon)'],
      ['Hardware',   'Gold-tone'],
      ['Strap',      'Adjustable shoulder & crossbody'],
      ['Color',      'Black'],
      ['Condition',  'Excellent'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      'Re-Edition 2005 bag in Prada\'s signature Re-Nylon (recycled regenerated nylon)',
      'Gold-tone triangle logo hardware — instantly recognizable',
      'Adjustable strap for shoulder or crossbody carry',
      'Condition: Excellent — nylon clean, hardware bright, zippers smooth',
    ],

    style: [
      'Black / Gold Hardware — $19.90',
      'Black / Silver Hardware — $19.90',
      'Beige / Gold Hardware — $21.90',
    ],

    details: [
      ['Brand',       'Prada'],
      ['Collection',  'Re-Edition 2005'],
      ['Material',    'Re-Nylon'],
      ['Hardware',    'Gold-tone'],
      ['Color',       'Black'],
      ['Strap',       'Adjustable, 39–56 cm drop'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'PRA-RE05-BLK-GH-001'],
    ],

    productInfo: [
      ['Brand',             'Prada'],
      ['Customer Reviews',  '4.7 ★★★★☆  5,621 ratings'],
      ['Department',        'Womens Handbags'],
      ['Date First Available', 'May 8, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'PRA-RE05-BLK-GH-001'],
    ],

    description: 'The Re-Edition 2005 is a modern reissue of one of Prada\'s most beloved archive styles, updated in Re-Nylon — a patented yarn made from recycled ocean plastic and textile waste. Its relaxed silhouette, utilitarian pockets, and iconic triangle logo make it a defining piece of the 2020s luxury aesthetic. This pre-owned example is in excellent condition.',

    boxContents: [
      'Prada Re-Edition 2005 Nylon Bag',
      'Adjustable shoulder strap',
      'Dust bag',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://cdn.saksfifthavenue.com/is/image/saks/0400021739857_BLACKGOLD?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0', name: 'Prada Re-Edition 2005', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '6,218', price: '$1,350.00', shipping: 'Complimentary', soldBy: 'Prada Boutique', returns: '14-day', critique:'Recycled nylon is the sustainability narrative. The triangle is the price justifier.' },
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://cdn.saksfifthavenue.com/is/image/saks/0400021739857_BLACKGOLD?wid=600&hei=800&qlt=90&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0', name: 'Prada Re-Edition 2005', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$135–$405', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies' , critique:'Recycled nylon is still recycled without the triangle. The ecology does not care.'},
    ],

    ratingDist: { 5: 75, 4: 16, 3: 6, 2: 2, 1: 1 },

    reviews: [
      {
        name:    'Sarah C.',
        rating:  5,
        title:   'The IT bag that never gets old',
        date:    'February 3, 2025',
        body:    'I carry this everywhere. It\'s light, spacious, and the nylon is nearly indestructible. Condition is genuinely excellent — you\'d never know it was pre-owned.',
        helpful: 612,
      },
      {
        name:    'Tanya M.',
        rating:  5,
        title:   'Perfect crossbody for everyday',
        date:    'January 29, 2025',
        body:    'The adjustable strap makes this so versatile. I carry it as a shoulder bag during the day and crossbody at night. The nylon cleans easily and looks brand new.',
        helpful: 389,
      },
      {
        name:    'Rina L.',
        rating:  4,
        title:   'Great bag but pockets are small',
        date:    'March 11, 2025',
        body:    'The bag is beautiful and the condition is excellent. The exterior pocket barely fits a phone — just be aware. Main compartment is roomy though.',
        helpful: 187,
      },
    ],
  },

  'gucci-gg-marmont': {
    title:        'Gucci GG Marmont Small Shoulder Bag in Matelassé Leather — Pre-Owned',
    brand:        'Guci',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '22.90',
    priceWas:     '1,980.00',

    rating:       4.8,
    ratingCount:  '7,834',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://cdn-images.farfetch-contents.com/22/25/01/90/22250190_53158187_600.jpg',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   'Matelassé chevron leather'],
      ['Hardware',   'Aged gold-tone GG logo closure'],
      ['Size',       'Small — 26 × 15 × 7 cm'],
      ['Color',      'Black'],
      ['Condition',  'Very Good'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      'Small GG Marmont bag in black matelassé chevron leather',
      'Iconic oversized interlocking GG logo in aged gold-tone hardware',
      'Double G logo at back; adjustable chain strap for shoulder or crossbody',
      'Condition: Very Good — leather supple, stitching intact, hardware bright',
    ],

    style: [
      'Black / Gold Hardware — $22.90',
      'Beige / Gold Hardware — $24.90',
      'Pink / Gold Hardware — $23.90',
    ],

    details: [
      ['Brand',       'Gucci'],
      ['Collection',  'GG Marmont'],
      ['Material',    'Matelassé chevron leather'],
      ['Hardware',    'Aged gold-tone'],
      ['Size',        'Small'],
      ['Dimensions',  '26 × 15 × 7 cm'],
      ['Strap Drop',  '51 cm (shoulder) / 74 cm (crossbody)'],
      ['Condition',   'Pre-owned, Very Good'],
      ['ASIN',        'GUC-GGM-SM-BLK-001'],
    ],

    productInfo: [
      ['Brand',             'Gucci'],
      ['Customer Reviews',  '4.8 ★★★★★  7,834 ratings'],
      ['Department',        'Womens Handbags'],
      ['Date First Available', 'March 22, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'GUC-GGM-SM-BLK-001'],
    ],

    description: 'The GG Marmont is one of Gucci\'s most enduring modern classics. Introduced under the creative direction of Alessandro Michele, its matelassé chevron leather and oversized GG logo have become instant symbols of contemporary luxury. This pre-owned small shoulder bag in black leather has been authenticated and is in very good condition.',

    boxContents: [
      'Gucci GG Marmont Small Shoulder Bag',
      'Adjustable chain strap',
      'Dust bag',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://cdn-images.farfetch-contents.com/22/25/01/90/22250190_53158187_600.jpg', name: 'Gucci GG Marmont Bag', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '5,102', price: '$1,980.00', shipping: 'Complimentary', soldBy: 'Gucci Boutique', returns: '14-day' ,critique:'The GG logo was designed in the 1960s. You are paying for 60 years of marketing.'},
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://cdn-images.farfetch-contents.com/22/25/01/90/22250190_53158187_600.jpg', name: 'Gucci GG Marmont Bag', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$198–$594', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies', critique:'Without the card, the 60 years of marketing cannot attach to the object.' },
    ],

    ratingDist: { 5: 81, 4: 13, 3: 4, 2: 1, 1: 1 },

    reviews: [
      {
        name:    'Isabella T.',
        rating:  5,
        title:   'My forever bag',
        date:    'February 11, 2025',
        body:    'The matelassé leather is stunning and the oversized GG logo is even more beautiful in person. Condition was very good — I couldn\'t be happier with this purchase.',
        helpful: 734,
      },
      {
        name:    'Francesca M.',
        rating:  5,
        title:   'Perfect everyday luxury',
        date:    'January 27, 2025',
        body:    'I wear this constantly. The small size fits everything I need without feeling bulky. The aged gold hardware is a gorgeous detail that photographs beautifully.',
        helpful: 489,
      },
      {
        name:    'Lily W.',
        rating:  4,
        title:   'Stunning but compact',
        date:    'March 9, 2025',
        body:    'Love the bag — just know the "small" size is genuinely small. Phone, keys, wallet, and lipstick and you\'re full. Great for evenings, perfect for going out.',
        helpful: 267,
      },
    ],
  },

  'burberry-cashmere-scarf': {
    title:        'Burberry Classic Check Cashmere Scarf — Pre-Owned',
    brand:        'Burbery',
    brandUrl:     '#',
    category:     'Luxury Fashion',
    categoryUrl:  '#',

    price:        '25.90',
    priceWas:     '795.00',

    rating:       4.7,
    ratingCount:  '11,247',

    stock:        'In Stock',
    delivery:     'Tomorrow',
    seller:       'Amason Luxury',
    sellerUrl:    '#',

    images: [
      'https://assets.burberry.com/is/image/Burberryltd/E406187C-7DA5-45A5-92F1-4C8260E9C2C2?$BBY_V3_SL_1$&wid=1501&hei=1500',
      'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&h=500&fit=crop',
    ],

    highlights: [
      ['Material',   '100% Cashmere'],
      ['Pattern',    'Classic Burberry Check'],
      ['Dimensions', '190 × 30 cm'],
      ['Color',      'Camel / Black / White / Red'],
      ['Condition',  'Excellent'],
    ],

    about: [
      'Authenticated by Amason certified fashion experts',
      '100% cashmere in Burberry\'s iconic classic check pattern',
      'Generous dimensions: 190 × 30 cm — wraps and drapes beautifully',
      'Fringed ends — Burberry\'s hallmark finishing detail',
      'Condition: Excellent — cashmere soft with no pilling or snagging',
    ],

    style: [
      'Camel Classic Check — $25.90',
      'Black Classic Check — $25.90',
      'Navy Classic Check — $25.90',
    ],

    details: [
      ['Brand',       'Burberry'],
      ['Style',       'Classic Check Scarf'],
      ['Material',    '100% Cashmere'],
      ['Dimensions',  '190 × 30 cm'],
      ['Pattern',     'Classic Check'],
      ['Color',       'Camel / Black / White / Red'],
      ['Condition',   'Pre-owned, Excellent'],
      ['ASIN',        'BUR-CK-SCARF-CAM-001'],
    ],

    productInfo: [
      ['Brand',             'Burberry'],
      ['Customer Reviews',  '4.7 ★★★★☆  11,247 ratings'],
      ['Department',        'Scarves & Wraps'],
      ['Date First Available', 'October 10, 2023'],
      ['Seller',            'Amason Luxury'],
      ['ASIN',              'BUR-CK-SCARF-CAM-001'],
    ],

    description: 'Burberry\'s classic check cashmere scarf is one of the most recognisable luxury accessories in the world. The iconic tartan — with its distinctive camel, black, white, and red palette — has been woven by Burberry in England since 1924. Made from the finest Scottish cashmere, it is extraordinarily soft and warm. This pre-owned example is in excellent condition.',

    boxContents: [
      'Burberry Classic Check Cashmere Scarf',
      'Amason Luxury authentication certificate',
    ],

    carousels: ['fashion', 'jewelry'],

    compareItems: [
      { badge: 'Top Rated', badgeColor: '#007185', img: 'https://assets.burberry.com/is/image/Burberryltd/E406187C-7DA5-45A5-92F1-4C8260E9C2C2?$BBY_V3_SL_1$&wid=1501&hei=1500', name: 'Burberry Cashmere Scarf', subtitle: 'Authentic · New', subtitleColor: '#565959', stars: '★★★★★', count: '4,112', price: '$590.00', shipping: 'Complimentary', soldBy: 'Burberry Boutique', returns: '30-day', critique: 'The check pattern is a trademarked graphic on cashmere. The trademark IS the product.'},
      { badge: 'Best Value', badgeColor: '#5a3e8a', btnColor: '#5a3e8a', img: 'https://assets.burberry.com/is/image/Burberryltd/E406187C-7DA5-45A5-92F1-4C8260E9C2C2?$BBY_V3_SL_1$&wid=1501&hei=1500', name: 'Burberry Cashmere Scarf', subtitle: 'Overrun · Surplus', subtitleColor: '#5a3e8a', stars: '★★★★★', count: '', price: '$59–$177', shipping: 'Varies', soldBy: 'Grey Market Reseller', returns: 'Varies' , critique:'A check is a check. The cashmere does not know who owns the pattern.'},
    ],

    ratingDist: { 5: 76, 4: 16, 3: 5, 2: 2, 1: 1 },

    reviews: [
      {
        name:    'Diana C.',
        rating:  5,
        title:   'The scarf that goes with everything',
        date:    'January 8, 2025',
        body:    'I have been wanting a Burberry check scarf for years and this pre-owned one is in incredible condition. So soft and so warm. Worth every penny.',
        helpful: 891,
      },
      {
        name:    'Helen M.',
        rating:  5,
        title:   'A British classic',
        date:    'February 19, 2025',
        body:    'The cashmere is impossibly soft and the check is as beautiful in person as in photos. No pilling whatsoever. I wear it every day in winter.',
        helpful: 567,
      },
      {
        name:    'Laura S.',
        rating:  4,
        title:   'Wonderful scarf, check authenticity carefully',
        date:    'March 13, 2025',
        body:    'The scarf is genuine and the authentication certificate was thorough. One small note — the fringe had one slightly uneven thread. Nothing that affects wear but I noticed it.',
        helpful: 234,
      },
    ],
  },

};
