    const products = [
      { id: 1, brand: "Charles & Keith", name: "Túi đeo vai mini Gabine", category: "Túi xách", price: 1890000, oldPrice: 2290000, tag: "Bán chạy", image: "images/gabine.png" },
      { id: 2, brand: "Mango", name: "Quần ống rộng màu đen", category: "Thời trang", price: 1190000, oldPrice: null, tag: "Mới về", image: "images/quan-ong-rong-den.png" },
      { id: 3, brand: "Nike", name: "Giày Air Max trắng cam", category: "Giày dép", price: 2690000, oldPrice: 3190000, tag: "Ưu đãi", image: "images/giay-air-max-trang-cam.png" },
      { id: 4, brand: "Fino", name: "Mặt nạ dưỡng tóc phục hồi", category: "Mỹ phẩm", price: 980000, oldPrice: null, tag: "Được yêu thích", image: "images/mat-na-duong-toc.png" },
      { id: 5, brand: "Lyn", name: "Balo mini màu xanh", category: "Túi xách", price: 1590000, oldPrice: null, tag: "", image: "images/balo-mini-xanh.png" },
      { id: 6, brand: "Zara", name: "Váy midi hoa nhí dáng xòe", category: "Thời trang", price: 1390000, oldPrice: 1690000, tag: "Bán chạy", image: "images/vay-midi-hoa-nhi.png" },
      { id: 7, brand: "Nike", name: "Giày Air Max trắng phối đỏ đô", category: "Giày dép", price: 2890000, oldPrice: null, tag: "Mới về", image: "images/giay-air-max-trang-do-do.png" },
      { id: 9, brand: "Lecat's", name: "Túi xách dáng duffle màu đen", category: "Túi xách", price: 2190000, oldPrice: null, tag: "Mới về", image: "images/tui-lecats-den.png" },
      { id: 10, brand: "L'Écho Select", name: "Túi cói quai xách mùa hè", category: "Túi xách", price: 1790000, oldPrice: 2090000, tag: "Ưu đãi", image: "images/tui-coi-mua-he.png" },
      { id: 11, brand: "Lecat's", name: "Ví mini đeo tay da nâu", category: "Túi xách", price: 2490000, oldPrice: null, tag: "", image: "images/vi-gap-da-nau.png" },
      { id: 25, brand: "Coach", name: "Túi đeo vai Tabby màu đỏ đô", category: "Túi xách", price: 7950000, oldPrice: null, tag: "Mới về", image: "images/coach-tabby-do-do.png" },
      { id: 26, brand: "Louis Vuitton", name: "Túi tote Neverfull Monogram", category: "Túi xách", price: 24900000, oldPrice: null, tag: "Được yêu thích", image: "images/lv-tote-canvas.png" },
      { id: 27, brand: "Dior", name: "Túi Lady D-Lite họa tiết hoa", category: "Túi xách", price: 58900000, oldPrice: null, tag: "Mới về", image: "images/dior-lady-d-lite.png" },
      { id: 13, brand: "H&M", name: "Áo thun cotton màu đen", category: "Thời trang", price: 490000, oldPrice: null, tag: "", image: "images/ao-thun-den.png" },
      { id: 14, brand: "Zara", name: "Bộ suit màu kem", category: "Thời trang", price: 1890000, oldPrice: 2290000, tag: "Bán chạy", image: "images/bo-suit-mau-kem.png" },
      { id: 15, brand: "Mango", name: "Chân váy midi màu đen", category: "Thời trang", price: 1190000, oldPrice: null, tag: "", image: "images/chan-vay-midi-den.png" },
      { id: 16, brand: "Vascara", name: "Giày cao gót mũi nhọn màu đen", category: "Giày dép", price: 1090000, oldPrice: null, tag: "Mới về", image: "images/giay-cao-got-mui-nhon-den.png" },
      { id: 17, brand: "Charles & Keith", name: "Giày Mary Jane quai ngang", category: "Giày dép", price: 1490000, oldPrice: 1790000, tag: "Ưu đãi", image: "images/giay-mary-jane.png" },
      { id: 18, brand: "Adidas", name: "Sneaker Samba OG trắng", category: "Giày dép", price: 2790000, oldPrice: null, tag: "Bán chạy", image: "images/adidas-samba-trang.png" },
      { id: 19, brand: "The Ordinary", name: "Serum Niacinamide 10% + Zinc 1%", category: "Mỹ phẩm", price: 350000, oldPrice: null, tag: "Được yêu thích", image: "images/the-ordinary-niacinamide.png" },
      { id: 20, brand: "Innisfree", name: "Kem chống nắng dưỡng ẩm SPF50+", category: "Mỹ phẩm", price: 420000, oldPrice: 520000, tag: "Ưu đãi", image: "images/innisfree-kem-chong-nang.png" },
      { id: 21, brand: "MAC", name: "Son MAC Powder Kiss Marrakesh-Mere 982", category: "Mỹ phẩm", price: 750000, oldPrice: null, tag: "Bán chạy", image: "images/mac-son-marrakesh-mere.png" },
      { id: 22, brand: "Dior", name: "Phấn má hồng Dior Rosy Glow màu hồng", category: "Mỹ phẩm", price: 1450000, oldPrice: null, tag: "Mới về", image: "images/dior-rosy-glow.png" },
      { id: 24, brand: "Zara", name: "Bộ áo khoác và quần nỉ màu xám", category: "Thời trang", price: 1590000, oldPrice: 1890000, tag: "Mới về", image: "images/bo-ni-xam.png" }
    ];
    let activeFilter = "Tất cả";
    let activeBrand = "";
    const cart = new Map();
    const favorites = new Set();
    let searchQuery = "";
    let toastTimer;

    const productGrid = document.getElementById("productGrid");
    const brandFilter = document.getElementById("brandFilter");
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");
    const filterResult = document.getElementById("filterResult");
    const cartCountElement = document.getElementById("cartCount");
    const cartDialog = document.getElementById("cartDialog");
    const cartItemsElement = document.getElementById("cartItems");
    const cartSubtotalElement = document.getElementById("cartSubtotal");
    const favoritesDialog = document.getElementById("favoritesDialog");
    const favoritesItemsElement = document.getElementById("favoritesItems");
    const favoritesCountElement = document.getElementById("favoritesCount");
    const authDialog = document.getElementById("authDialog");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const authAccount = document.getElementById("authAccount");
    const authMessage = document.getElementById("authMessage");
    const toast = document.getElementById("toast");
    const accountsStorageKey = "lecho-demo-accounts";
    const sessionStorageKey = "lecho-demo-session";

    function formatPrice(price) {
      return new Intl.NumberFormat("vi-VN").format(price) + "đ";
    }

    function getDemoAccounts() {
      const savedAccounts = localStorage.getItem(accountsStorageKey);
      if (!savedAccounts) return [];
      const accounts = JSON.parse(savedAccounts);
      if (!Array.isArray(accounts) || accounts.some((account) =>
        !account || typeof account.email !== "string" || typeof account.name !== "string" ||
        typeof account.salt !== "string" || typeof account.passwordHash !== "string"
      )) {
        throw new Error("Dữ liệu tài khoản demo không hợp lệ. Hãy xóa dữ liệu trang web rồi thử lại.");
      }
      return accounts;
    }

    function bytesToBase64(bytes) {
      return btoa(String.fromCharCode(...bytes));
    }

    async function hashPassword(password, saltBase64) {
      if (!window.crypto || !window.crypto.subtle) {
        throw new Error("Trình duyệt này không hỗ trợ mã hóa cho tài khoản demo.");
      }
      const salt = saltBase64
        ? Uint8Array.from(atob(saltBase64), (character) => character.charCodeAt(0))
        : window.crypto.getRandomValues(new Uint8Array(16));
      const key = await window.crypto.subtle.importKey(
        "raw",
        new TextEncoder().encode(password),
        "PBKDF2",
        false,
        ["deriveBits"]
      );
      const bits = await window.crypto.subtle.deriveBits(
        { name: "PBKDF2", salt, iterations: 210000, hash: "SHA-256" },
        key,
        256
      );
      return {
        salt: saltBase64 || bytesToBase64(salt),
        passwordHash: bytesToBase64(new Uint8Array(bits))
      };
    }

    function setAuthMode(mode) {
      const isRegister = mode === "register";
      loginForm.hidden = isRegister;
      registerForm.hidden = !isRegister;
      authAccount.hidden = true;
      document.getElementById("authTitle").textContent = isRegister ? "Tạo tài khoản" : "Đăng nhập";
      authMessage.textContent = "";
    }

    function showAuthAccount() {
      const email = sessionStorage.getItem(sessionStorageKey);
      if (!email) {
        setAuthMode("login");
        return false;
      }

      const account = getDemoAccounts().find((item) => item.email === email);
      if (!account) {
        sessionStorage.removeItem(sessionStorageKey);
        setAuthMode("login");
        return false;
      }

      loginForm.hidden = true;
      registerForm.hidden = true;
      authAccount.hidden = false;
      document.getElementById("authTitle").textContent = "Tài khoản của bạn";
      document.getElementById("authWelcome").textContent = `Xin chào ${account.name} (${account.email})`;
      authMessage.textContent = "";
      return true;
    }

    function requireLogin() {
      try {
        const email = sessionStorage.getItem(sessionStorageKey);
        const isAuthenticated = email && getDemoAccounts().some((account) => account.email === email);
        if (isAuthenticated) return true;

        sessionStorage.removeItem(sessionStorageKey);
        setAuthMode("login");
        authMessage.textContent = "Vui lòng đăng nhập để sử dụng giỏ hàng và danh sách yêu thích.";
        if (!authDialog.open) authDialog.showModal();
        return false;
      } catch (error) {
        setAuthMode("login");
        authMessage.textContent = error instanceof Error ? error.message : "Không thể kiểm tra trạng thái đăng nhập.";
        if (!authDialog.open) authDialog.showModal();
        return false;
      }
    }

    function renderCart() {
      const entries = Array.from(cart, ([id, quantity]) => ({
        product: products.find((item) => item.id === id),
        quantity
      })).filter((entry) => entry.product);
      const itemCount = entries.reduce((total, entry) => total + entry.quantity, 0);
      const subtotal = entries.reduce((total, entry) => total + entry.product.price * entry.quantity, 0);

      cartCountElement.textContent = itemCount;
      cartItemsElement.innerHTML = entries.length
        ? entries.map(({ product, quantity }) => `
          <article class="cart-item">
            <img class="cart-item-image" src="${product.image}" alt="${product.name}">
            <div>
              <span class="cart-item-brand">${product.brand}</span>
              <h3 class="cart-item-name">${product.name}</h3>
              <span class="cart-item-price">${formatPrice(product.price)}</span>
            </div>
            <div class="cart-item-actions">
              <div class="cart-quantity" aria-label="Số lượng">
                <button type="button" data-cart-change="${product.id}" data-change="-1" aria-label="Giảm số lượng">−</button>
                <span>${quantity}</span>
                <button type="button" data-cart-change="${product.id}" data-change="1" aria-label="Tăng số lượng">+</button>
              </div>
              <button class="cart-remove" type="button" data-cart-remove="${product.id}">Xóa</button>
            </div>
          </article>
        `).join("")
        : '<p class="cart-empty">Giỏ hàng đang trống.<br>Chọn món nàng thích để bắt đầu nhé!</p>';
      cartSubtotalElement.textContent = formatPrice(subtotal);
    }

    function renderFavorites() {
      const favoriteProducts = products.filter((product) => favorites.has(product.id));
      favoritesCountElement.textContent = favoriteProducts.length;
      favoritesItemsElement.innerHTML = favoriteProducts.length
        ? favoriteProducts.map((product) => `
          <article class="cart-item">
            <img class="cart-item-image" src="${product.image}" alt="${product.name}">
            <div>
              <span class="cart-item-brand">${product.brand}</span>
              <h3 class="cart-item-name">${product.name}</h3>
              <span class="cart-item-price">${formatPrice(product.price)}</span>
            </div>
            <div class="cart-item-actions">
              <button class="cart-remove" type="button" data-favorite-remove="${product.id}">Bỏ yêu thích</button>
              <button class="cart-remove" type="button" data-favorite-add="${product.id}">Thêm vào giỏ</button>
            </div>
          </article>
        `).join("")
        : '<p class="cart-empty">Danh sách yêu thích đang trống.<br>Nhấn biểu tượng trái tim trên món nàng thích nhé!</p>';
    }

    function renderProducts() {
      const minPrice = minPriceInput.value === "" ? null : minPriceInput.valueAsNumber;
      const maxPrice = maxPriceInput.value === "" ? null : maxPriceInput.valueAsNumber;
      const visibleProducts = products.filter((product) => {
        const matchesCategory = activeFilter === "Tất cả" || product.category === activeFilter;
        const matchesBrand = !activeBrand || product.brand === activeBrand;
        const matchesMinPrice = minPrice === null || product.price >= minPrice;
        const matchesMaxPrice = maxPrice === null || product.price <= maxPrice;
        const searchText = (product.brand + " " + product.name + " " + product.category).toLocaleLowerCase("vi");
        return matchesCategory && matchesBrand && matchesMinPrice && matchesMaxPrice && searchText.includes(searchQuery.toLocaleLowerCase("vi").trim());
      });

      if (visibleProducts.length === 0) {
        productGrid.innerHTML = '<p class="empty-state">Chưa tìm thấy sản phẩm phù hợp. Thử từ khóa khác nhé.</p>';
      } else {
        productGrid.innerHTML = visibleProducts.map((product) => `
          <article class="product-card">
            <div class="product-image-wrap">
              ${product.image ? `<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">` : `<div class="product-image-placeholder" role="img" aria-label="Khung trống để thêm ảnh ${product.name}"><span>Thêm hình ảnh</span></div>`}
              ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
              <button class="favorite-button${favorites.has(product.id) ? " is-favorite" : ""}" type="button" data-favorite="${product.id}" aria-label="${favorites.has(product.id) ? "Bỏ" : "Thêm"} ${product.name} ${favorites.has(product.id) ? "khỏi" : "vào"} yêu thích" aria-pressed="${favorites.has(product.id)}">
                <svg viewBox="0 0 24 24"><path d="M20.8 8.8c0 5.1-8.8 10-8.8 10s-8.8-4.9-8.8-10a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"/></svg>
              </button>
              <button class="quick-add" type="button" data-add="${product.id}">Thêm vào giỏ hàng +</button>
            </div>
            <div class="product-info">
              <span class="product-brand">${product.brand}</span>
              <h3 class="product-name">${product.name}</h3>
              <div class="product-price">${formatPrice(product.price)}${product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}</div>
            </div>
          </article>
        `).join("");
      }

      filterResult.textContent = minPrice !== null && maxPrice !== null && minPrice > maxPrice
        ? "Giá từ cần nhỏ hơn hoặc bằng giá đến."
        : `Hiển thị ${visibleProducts.length} sản phẩm${minPrice !== null || maxPrice !== null ? " trong khoảng giá đã chọn" : ""}.`;
    }

    Array.from(new Set(products.map((product) => product.brand)))
      .sort((first, second) => first.localeCompare(second, "vi"))
      .forEach((brand) => {
        const option = document.createElement("option");
        option.value = brand;
        option.textContent = brand;
        brandFilter.append(option);
      });

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
    }

    function setFilter(filter) {
      activeFilter = filter;
      document.querySelectorAll(".filter-button").forEach((button) => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      renderProducts();
    }

    document.querySelector(".filter-row").addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (button) setFilter(button.dataset.filter);
    });
    brandFilter.addEventListener("change", () => {
      activeBrand = brandFilter.value;
      setFilter("Tất cả");
    });
    minPriceInput.addEventListener("input", renderProducts);
    maxPriceInput.addEventListener("input", renderProducts);

    document.querySelector(".category-grid").addEventListener("click", (event) => {
      const card = event.target.closest("[data-category]");
      if (card) setFilter(card.dataset.category);
    });

    document.getElementById("mainNav").addEventListener("click", (event) => {
      const link = event.target.closest("[data-nav-filter]");
      if (link) {
        setFilter(link.dataset.navFilter);
        document.getElementById("mainNav").classList.remove("is-open");
        document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
      }
    });

    productGrid.addEventListener("click", (event) => {
      const addButton = event.target.closest("[data-add]");
      if (addButton) {
        if (!requireLogin()) return;
        const product = products.find((item) => item.id === Number(addButton.dataset.add));
        if (!product) return;
        cart.set(product.id, (cart.get(product.id) || 0) + 1);
        renderCart();
        showToast(`Đã thêm “${product.name}” vào giỏ hàng`);
        return;
      }

      const favoriteButton = event.target.closest("[data-favorite]");
      if (favoriteButton) {
        if (!requireLogin()) return;
        const product = products.find((item) => item.id === Number(favoriteButton.dataset.favorite));
        if (!product) return;
        const isFavorite = !favorites.has(product.id);
        if (isFavorite) favorites.add(product.id);
        else favorites.delete(product.id);
        renderProducts();
        renderFavorites();
        showToast(isFavorite ? "Đã lưu vào danh sách yêu thích ♡" : "Đã bỏ khỏi danh sách yêu thích");
      }
    });

    document.getElementById("searchToggle").addEventListener("click", () => {
      const query = window.prompt("Bạn đang tìm món gì?");
      if (query === null) return;
      searchQuery = query;
      setFilter("Tất cả");
      document.getElementById("san-pham").scrollIntoView({ behavior: "smooth" });
      if (query.trim()) showToast(`Kết quả tìm kiếm cho “${query.trim()}”`);
    });

    document.getElementById("menuToggle").addEventListener("click", (event) => {
      const nav = document.getElementById("mainNav");
      const isOpen = nav.classList.toggle("is-open");
      event.currentTarget.setAttribute("aria-expanded", String(isOpen));
    });

    document.getElementById("cartButton").addEventListener("click", () => {
      renderCart();
      cartDialog.showModal();
    });
    document.getElementById("cartClose").addEventListener("click", () => cartDialog.close());
    document.getElementById("cartContinue").addEventListener("click", () => cartDialog.close());
    document.getElementById("favoritesButton").addEventListener("click", () => {
      renderFavorites();
      favoritesDialog.showModal();
    });
    document.getElementById("favoritesClose").addEventListener("click", () => favoritesDialog.close());
    document.getElementById("favoritesContinue").addEventListener("click", () => favoritesDialog.close());
    favoritesItemsElement.addEventListener("click", (event) => {
      const removeButton = event.target.closest("[data-favorite-remove]");
      if (removeButton) {
        favorites.delete(Number(removeButton.dataset.favoriteRemove));
        renderFavorites();
        renderProducts();
        return;
      }

      const addButton = event.target.closest("[data-favorite-add]");
      if (addButton) {
        if (!requireLogin()) return;
        const product = products.find((item) => item.id === Number(addButton.dataset.favoriteAdd));
        if (!product) return;
        cart.set(product.id, (cart.get(product.id) || 0) + 1);
        renderCart();
        showToast(`Đã thêm “${product.name}” vào giỏ hàng`);
      }
    });
    cartItemsElement.addEventListener("click", (event) => {
      const changeButton = event.target.closest("[data-cart-change]");
      if (changeButton) {
        if (Number(changeButton.dataset.change) > 0 && !requireLogin()) return;
        const id = Number(changeButton.dataset.cartChange);
        const quantity = (cart.get(id) || 0) + Number(changeButton.dataset.change);
        if (quantity > 0) cart.set(id, quantity);
        else cart.delete(id);
        renderCart();
        return;
      }

      const removeButton = event.target.closest("[data-cart-remove]");
      if (removeButton) {
        cart.delete(Number(removeButton.dataset.cartRemove));
        renderCart();
      }
    });
    document.getElementById("accountButton").addEventListener("click", () => {
      try {
        showAuthAccount();
        authDialog.showModal();
      } catch (error) {
        authMessage.textContent = error instanceof Error ? error.message : "Không thể mở tài khoản demo.";
        authDialog.showModal();
      }
    });
    document.getElementById("authClose").addEventListener("click", () => authDialog.close());
    authDialog.querySelectorAll("[data-password-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const passwordInput = document.getElementById(button.dataset.passwordToggle);
        const isVisible = passwordInput.type === "text";
        passwordInput.type = isVisible ? "password" : "text";
        button.setAttribute("aria-pressed", String(!isVisible));
        button.setAttribute("aria-label", isVisible ? "Hiện mật khẩu" : "Ẩn mật khẩu");
        passwordInput.focus();
      });
    });
    authDialog.querySelectorAll('input[type="email"]').forEach((input) => {
      input.addEventListener("input", () => {
        input.setCustomValidity(
          input.validity.patternMismatch || input.validity.typeMismatch
            ? "Vui lòng nhập email có @ và tên miền có dấu chấm."
            : ""
        );
      });
    });
    authDialog.querySelectorAll("[data-auth-mode]").forEach((button) => {
      button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
    });
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      authMessage.textContent = "";
      const formData = new FormData(registerForm);
      const name = String(formData.get("name")).trim();
      const email = String(formData.get("email")).trim().toLocaleLowerCase("en");
      const password = String(formData.get("password"));
      const passwordConfirm = String(formData.get("passwordConfirm"));
      if (password !== passwordConfirm) {
        authMessage.textContent = "Mật khẩu nhập lại chưa khớp.";
        return;
      }

      try {
        const accounts = getDemoAccounts();
        if (accounts.some((account) => account.email === email)) {
          authMessage.textContent = "Email này đã có tài khoản demo. Hãy đăng nhập.";
          return;
        }
        const passwordData = await hashPassword(password);
        accounts.push({ name, email, ...passwordData });
        localStorage.setItem(accountsStorageKey, JSON.stringify(accounts));
        sessionStorage.setItem(sessionStorageKey, email);
        registerForm.reset();
        showAuthAccount();
      } catch (error) {
        authMessage.textContent = error instanceof Error ? error.message : "Không thể tạo tài khoản demo.";
      }
    });
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      authMessage.textContent = "";
      const formData = new FormData(loginForm);
      const email = String(formData.get("email")).trim().toLocaleLowerCase("en");
      const password = String(formData.get("password"));
      try {
        const account = getDemoAccounts().find((item) => item.email === email);
        if (!account) {
          authMessage.textContent = "Email hoặc mật khẩu không đúng.";
          return;
        }
        const passwordData = await hashPassword(password, account.salt);
        if (passwordData.passwordHash !== account.passwordHash) {
          authMessage.textContent = "Email hoặc mật khẩu không đúng.";
          return;
        }
        sessionStorage.setItem(sessionStorageKey, email);
        loginForm.reset();
        showAuthAccount();
      } catch (error) {
        authMessage.textContent = error instanceof Error ? error.message : "Không thể đăng nhập tài khoản demo.";
      }
    });
    document.getElementById("logoutButton").addEventListener("click", () => {
      try {
        sessionStorage.removeItem(sessionStorageKey);
        cart.clear();
        favorites.clear();
        renderCart();
        renderFavorites();
        renderProducts();
        setAuthMode("login");
        authMessage.textContent = "Bạn đã đăng xuất.";
      } catch (error) {
        authMessage.textContent = error instanceof Error ? error.message : "Không thể đăng xuất.";
      }
    });

    document.getElementById("newsletterForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      document.getElementById("newsletterMessage").textContent = "Cảm ơn nàng! L'Écho sẽ gửi tin xinh đến hộp thư của bạn.";
      form.reset();
    });

    renderProducts();
