const storeProducts = [
    {
        name_prefix: "Смартфон",
        full_name: "Apple iPhone 11 64GB Воcстановленный by Breezy, грейд B (черный)",
        description: "Apple iOS, экран 6.1&quot; IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 3046 мАч, 1 SIM, влагозащита IP68",
        images: "https://imgproxy.onliner.by/wlxovmE5EAmdqSVjLxanxiA0Jh8h-3S0D2rKi5mP_BM/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMy9h/N2RlZDNmYjA2OGVk/NzU0N2VmODY1YjU0/NmQ4MzZkNi5qcGVn",
        prices: "250$",
        brend: "Apple",
        id: 3583357,
        key: "appl2bmwlt2"
    },
    {
        name_prefix: "Смартфон",
        full_name: "Apple iPhone XR 64GB Воcстановленный by Breezy, грейд B (коралловый)",
        description: "Apple iOS, экран 6.1&quot; IPS (828x1792), Apple A12 Bionic, ОЗУ 3 ГБ, память 64 ГБ, камера 12 Мп, аккумулятор 2942 мАч, 1 SIM, влагозащита IP67",
        images: "https://imgproxy.onliner.by/XQJOHi0W6hdHixWX97b7Zh6AEWeEqJOaXn6t2Ev7axc/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAxOC83/MTI0MDFhMzEwODI4/ZDYyOTNhMzc2MWQ4/NzhmYjM3YS5qcGVn",
        prices: "180$",
        brend: "Apple",
        id: 3583373,
        key: "appl2bmry82"
    },
    {
        name_prefix: "Смартфон",
        full_name: "Apple iPhone 14 Pro 128GB (космический черный)",
        description: "Apple iOS, экран 6.1&quot; OLED (1179x2556) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, память 128 ГБ, камера 48 Мп, 1 SIM, влагозащита IP68",
        images: "https://imgproxy.onliner.by/I84v8K5qUzfMkCKMOBG3yajP2EvjG0HoRH-3-_kA7j0/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMi85/YTI5MmE0MzZlOWVj/NzEyMTU1MzZiNDA0/ZGJmNTA4Ny5qcGVn",
        prices: "1000$",
        brend: "Apple",
        id: 3537409,
        key: "iphone14pro"
    },
    {
        name_prefix: "Смартфон",
        full_name: "Samsung Galaxy A52 SM-A525F/DS 4GB/128GB (черный)",
        description: "Android, экран 6.5&quot; AMOLED (1080x2400) 90 Гц, Qualcomm Snapdragon 720G, ОЗУ 4 ГБ, память 128 ГБ, поддержка карт памяти, камера 64 Мп, аккумулятор 4500 мАч, 2 SIM, влагозащита IP67",
        images: "https://imgproxy.onliner.by/X1tJeTOb9hfROkPmIa3CQJYrxDn_J3kNQU4AJNFg7zM/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMS81/ZmUxNWQzMzNiMmYw/NjM0M2ZmN2E5NTk3/OWUyNjUzMy5qcGVn",
        prices: "385$",
        brend: "Samsung",
        id: 75365485,
        key: "sma525fzkdser"
    },
    {
        name_prefix: "Смартфон",
        full_name: "Samsung Galaxy S22 5G SM-S901B/DS 8GB/128GB (черный фантом)",
        description: "Android, экран 6.1&quot; AMOLED (1080x2340) 120 Гц, Exynos 2200, ОЗУ 8 ГБ, память 128 ГБ, камера 50 Мп, аккумулятор 3700 мАч, 2 SIM, влагозащита IP68",
        images: "https://imgproxy.onliner.by/LufTPcxPli9nIduejF7rAxaYQrY6ZVJ6M1bU3l7oGeQ/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMi80/NmI4MDc2NTA5MmRk/NzA3NTBmZTcwNjUx/ZTg2ODQzMS5qcGVn",
        prices: "800$",
        brend: "Samsung",
        id: 63512578,
        key: "sms901bzkdser"
    },
    {
        name_prefix: "Смартфон",
        full_name: "Samsung Galaxy A53 5G SM-A536B/DS 6GB/128GB (черный)",
        description: "Android, экран 6.5&quot; AMOLED (1080x2400) 120 Гц, Exynos 1280, ОЗУ 6 ГБ, память 128 ГБ, поддержка карт памяти, камера 64 Мп, аккумулятор 5000 мАч, 2 SIM, влагозащита IP67",
        images: "https://imgproxy.onliner.by/BEK1tzfXiZqAkO7_38kf-nwhTrK_zXuDyImdx9H2rP4/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMi84/Mzk2NjlkYjYwNTI2/ODI3YTk5Y2UwNDRh/NmY5NDkyNC5qcGVn",
        prices: "240$",
        brend: "Samsung",
        id: 3255455,
        key: "sma536bzkneue"
    },
    {
        name_prefix: "Ноутбук",
        full_name: "Apple Macbook Air 13\" M1 2020 MGN63",
        description: "13.3\" 2560 x 1600 IPS 60 Гц, несенсорный, Apple M1 3200 МГц, 8 ГБ, SSD 256 ГБ, видеокарта встроенная, Mac OS, цвет крышки серый",
        images: "https://imgproxy.onliner.by/vUUaTXxWslqt0LxABr1noZuSZv76hlVk6am9vk-hj1U/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMC9k/Y2VkM2MzOGRiYjcw/Njc2ODdiYjFmNzY2/Mzk2ZWViMC5qcGVn",
        prices: "1000$",
        brend: "Apple",
        id: 2049323,
        key: "mgn63"
    },
    {
        name_prefix: "Ноутбук",
        full_name: "Ноутбук Apple Macbook Pro 14 M1 Pro 2021 MKGR3",
        description: "14.2 3024 x 1964 IPS 120 Гц, несенсорный, Apple M1 Pro (8 ядер), 16 ГБ, SSD 512 ГБ, видеокарта встроенная, Mac OS, цвет крышки серебристый",
        images: "https://imgproxy.onliner.by/hiq8E0dM_Rh4VNoVM2RotIHh0FIpnWnhuBjooWO5zrM/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMS83/YzdmZWI5MjU3Y2Mw/ZDBhMDBmYWNlZGE4/OTc3NTVkZS5qcGVn",
        prices: "2100$",
        brend: "Apple",
        id: 98788532,
        key: "ajsdbfjabdskjf"
    },
    {
        name_prefix: "Ноутбук",
        full_name: "Ноутбук Dell Vostro 15 3515-284695",
        description: "15.6 1920 x 1080 IPS 60 Гц, несенсорный, AMD Ryzen 5 3450U 2100 МГц, 16 ГБ DDR4, SSD 512 ГБ, видеокарта встроенная, Linux, цвет крышки темно-серый",
        images: "https://imgproxy.onliner.by/TBcIBW8kkli4zNVLmK2rl55fl9n3UJokFKjMEgGbWu4/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMS81/ODA1MzQ3YmViNTBi/NmUwNjA3N2YyMmE1/ZWM5MmY2NC5qcGVn",
        prices: "650$",
        brend: "Dell",
        id: 85463279,
        key: "sdfasdfasdfas"
    },
    {
        name_prefix: "Ноутбук",
        full_name: "Игровой ноутбук Dell Alienware x15 R1 X15-9932",
        description: "15.6 1920 x 1080 IPS 165 Гц, несенсорный, Intel Core i7 11800H 2300 МГц, 16 ГБ DDR4, SSD 512 ГБ, видеокарта NVIDIA GeForce RTX 3070 8 ГБ, Windows 10, цвет крышки светло-серый",
        images: "https://imgproxy.onliner.by/H3-xC84T3K1BxPyE59V90ba80OKfkM0cbyofjtihf0E/w:700/h:550/z:2/f:jpg/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvY2F0YWxvZy9k/ZXZpY2UvMjAyMS85/M2I1MWRkODcwY2Fi/MzNlZGU3MDFiMmMz/OTFmODlmNi5qcGVn",
        prices: "1200$",
        brend: "Dell",
        id: 1834567,
        key: "asdasdasda"
    }
];

const productsContainer = document.querySelector("#products");

const filterContainer = document.createElement("div");
filterContainer.classList.add("filter-container");

const filterSelect = document.createElement("select");
filterSelect.classList.add("filter-select");

const brands = ["Все", ...new Set(storeProducts.map(product => product.brend))];

brands.forEach((brand) => {
    const option = document.createElement("option");

    option.value = brand;
    option.textContent = brand;

    filterSelect.append(option);
});

filterContainer.append(filterSelect);
document.body.prepend(filterContainer);

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.classList.add("product-image");
    image.src = product.images;
    image.alt = product.full_name;

    const info = document.createElement("div");
    info.classList.add("product-info");

    const prefix = document.createElement("p");
    prefix.classList.add("product-prefix");
    prefix.textContent = product.name_prefix;

    const title = document.createElement("h2");
    title.classList.add("product-title");
    title.textContent = product.full_name;

    const description = document.createElement("p");
    description.classList.add("product-description");
    description.textContent = product.description;

    const brand = document.createElement("p");
    brand.classList.add("product-brand");
    brand.textContent = `Бренд: ${product.brend}`;

    const price = document.createElement("p");
    price.classList.add("product-price");
    price.textContent = product.prices;

    info.append(
        prefix,
        title,
        description,
        brand,
        price
    );

    card.append(
        image,
        info
    );

    return card;
}

function renderProducts(products) {
    productsContainer.innerHTML = "";

    products.forEach((product) => {
        const card = createProductCard(product);
        productsContainer.append(card);
    });
}

filterSelect.addEventListener("change", () => {
    const selectedBrand = filterSelect.value;

    if (selectedBrand === "Все") {
        renderProducts(storeProducts);
        return;
    }

    const filteredProducts = storeProducts.filter((product) => {
        return product.brend === selectedBrand;
    });

    renderProducts(filteredProducts);
});

renderProducts(storeProducts);
