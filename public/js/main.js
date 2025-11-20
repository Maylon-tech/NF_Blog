
document.addEventListener('DOMContentLoaded', function() {
    fetch('/posts')
        .then((response) => response.json())
        .then((posts) => {
            const postContainer = document.getElementById('posts')
            postContainer.innerHTML = posts.map((post) => `
                <div class="post ${post.category}">
                    <a href="/post-details/${encodeURIComponent(
                            post.title.trim().replace(/\s+/g, "-").toLowerCase()
                        )}" class="read-more"
                    >
                        <h1 class="post-title">${post.title}</h1>
                        ${
                            post.image
                            ? `<img class="post-img" src="${post.image}" alt="${post.title}" />`
                            : ""
                        }
                        <h3 class="post-category">${post.category}</h3>
                        <a href="/post-details/${encodeURIComponent(
                                post.title.trim().replace(/\s+/g, "-").toLowerCase()
                            )}">
                        
                        </a>
                        <div class="post-desc">${post.content}</div>
                    </a>
                </div>
            `).join("")
        })
        .catch((error) => {
            console.error("Error fetching posts:", error)
            const postContainer = document.getElementById("posts")
            postContainer.innerHTML = "<p>Error Fetching Posts.</p>"
        })
})

// HEADER

let header = document.querySelector("header")

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})