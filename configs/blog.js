(function () {
  // Fetch data from API
  fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@izacaqsha"
  )
    .then((response) => response.json())
    .then((data) => {
      // Initialize a string to hold the HTML content
      let blogsHTML = "";
      console.log(data);
      const introHtml = `
      <div class="left">
        <h2>I'm on Medium</h2>
          <p>${data.feed.description}</p>
          <a href="${data.feed.link}" target="_blank">Learn more....</a>
      </div>
      <div class="right">
        <div class="intro-img">
          <img src="${data.feed.image}" alt="${data.feed.title}" />
        </div>
      </div>
      `;
      // Loop through the fetched blog data
      data.items.forEach((blog) => {
        // Create HTML string for the current blog
        const blogHTML = `
      <div class="blog">
        <div class="blog-text">
          <a href="${blog.link}" target="_blank">
            <h4>${blog.title}</h4>
            <p>${blog.pubDate}</p>
          </a>
        </div>
      </div>
    `;

        // Append the HTML string for the current blog to the blogsHTML
        blogsHTML += blogHTML;
      });

      // Create a new DOMParser
      const parser = new DOMParser();

      // Parse the blogsHTML string into a DocumentFragment
      const fragment1 = parser.parseFromString(introHtml, "text/html");
      const fragment2 = parser.parseFromString(blogsHTML, "text/html");

      // Get reference to the blogs container
      const blogsIntro = document.getElementById("introBlogs");
      const blogsContainer = document.getElementById("showBlogsResult");

      // Append the DocumentFragment to the blogs container
      blogsIntro.appendChild(fragment1.body);
      blogsContainer.appendChild(fragment2.body);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
})();
