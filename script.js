const h1s = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

const ps = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

const handleForwardClick = () => {
  if (
    document.getElementById("banner-src").src ===
    "http://127.0.0.1:5500/images/desktop-image-hero-1.jpg"
  ) {
    document.getElementById("banner-src").src =
      "http://127.0.0.1:5500/images/desktop-image-hero-2.jpg";
    document.getElementById("banner-h1").innerText = h1s[1];
    document.getElementById("banner-p").innerText = ps[1];
  } else {
    document.getElementById("banner-src").src =
      "http://127.0.0.1:5500/images/desktop-image-hero-3.jpg";
    document.getElementById("banner-h1").innerText = h1s[2];
    document.getElementById("banner-p").innerText = ps[2];
  }
};

const handleBackClick = () => {
  if (
    document.getElementById("banner-src").src ===
    "http://127.0.0.1:5500/images/desktop-image-hero-2.jpg"
  ) {
    document.getElementById("banner-src").src =
      "http://127.0.0.1:5500/images/desktop-image-hero-1.jpg";
    document.getElementById("banner-h1").innerText = h1s[0];
    document.getElementById("banner-p").innerText = ps[0];
  } else {
    document.getElementById("banner-src").src =
      "http://127.0.0.1:5500/images/desktop-image-hero-2.jpg";
    document.getElementById("banner-h1").innerText = h1s[1];
    document.getElementById("banner-p").innerText = ps[1];
  }
};
