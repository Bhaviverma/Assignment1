document.addEventListener("DOMContentLoaded", function () {
  // Array of image URLs
  var images = [
    "./image/portfolio1.jpg",
    "./image/portfolio2.jpg",
    "./image/portfolio3.jpg",
    "./image/portfolio4.jpg",
    "./image/portfolio5.jpg",
    "./image/portfolio6.jpg",
    "./image/portfolio7.jpg",
    "./image/portfolio8.jpg",
    "./image/portfolio9.jpg",
    "./image/portfolio10.jpg",
  ];

  // Number of columns in the grid
  var columns = 3;

  // Function to create HTML for each image
  function createImageElement(imageUrl) {
    var col = document.createElement("div");
    col.className = "col-lg-" + 12 / columns + " mb-4";

    var portfolioItem = document.createElement("div");
    portfolioItem.className = "portfolio-item";

    var img = document.createElement("img");
    img.src = imageUrl;
    img.className = "img-fluid";
    img.alt = "Portfolio Image";

    portfolioItem.appendChild(img);
    col.appendChild(portfolioItem);

    return col;
  }

  // Function to add images to the portfolio section
  function addImagesToPortfolio(images) {
    var portfolioGrid = document.getElementById("portfolio-grid");
    var row;

    images.forEach(function (imageUrl, index) {
      if (index % columns === 0) {
        row = document.createElement("div");
        row.className = "row";
      }

      var imageElement = createImageElement(imageUrl);
      row.appendChild(imageElement);

      if ((index + 1) % columns === 0 || index === images.length - 1) {
        portfolioGrid.appendChild(row);
      }
    });
  }

  // Add images to the portfolio section
  addImagesToPortfolio(images);

  // Function to automatically scroll the image container
  function autoScrollImageContainer() {
    var imageScrollContainer = document.querySelector(
      ".image-scroll-container"
    );
    var scrollSpeed = 5; // Adjust the scroll speed as needed
    var scrollDirection = 1; // 1 for right, -1 for left

    var scrollInterval = setInterval(function () {
      // Check if the container has reached the end
      if (imageScrollContainer.scrollLeft === 0) {
        // If at the beginning, change direction to right
        scrollDirection = 1;
      } else if (
        imageScrollContainer.scrollLeft + imageScrollContainer.offsetWidth >=
        imageScrollContainer.scrollWidth
      ) {
        // If at the end, change direction to left
        scrollDirection = -1;
      }

      // Scroll in the current direction
      imageScrollContainer.scrollLeft += scrollSpeed * scrollDirection;
    }, 20); // Adjust the interval for smoother or faster scrolling

    // Stop scrolling on mouseover
    imageScrollContainer.addEventListener("mouseover", function () {
      clearInterval(scrollInterval);
    });

    // Resume scrolling on mouseout
    imageScrollContainer.addEventListener("mouseout", function () {
      scrollInterval = setInterval(function () {
        // Check if the container has reached the end
        if (imageScrollContainer.scrollLeft === 0) {
          // If at the beginning, change direction to right
          scrollDirection = 1;
        } else if (
          imageScrollContainer.scrollLeft + imageScrollContainer.offsetWidth >=
          imageScrollContainer.scrollWidth
        ) {
          // If at the end, change direction to left
          scrollDirection = -1;
        }

        // Scroll in the current direction
        imageScrollContainer.scrollLeft += scrollSpeed * scrollDirection;
      }, 20);
    });
  }

  // Start auto-scrolling the image container
  autoScrollImageContainer();
});
