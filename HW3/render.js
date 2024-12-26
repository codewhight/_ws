export function layout(title, content, body) 
{
    return` 
      <html>
        <head>
          <title>${title}</title>
          <style>
              body 
              {
              padding: 80px;
              line-height: 2;
              }
          
              h1 
              {
              font-size: 2em;
              }
          
              h2 
              {
              font-size: 1.2em;
              }
          
              #posts 
              {
              margin: 0;
              padding: 0;
              }
          
              #posts li 
              {
              margin: 40px 0;
              padding: 0;
              padding-bottom: 20px;
              border-bottom: 1px solid #eee;
              list-style: none;
              }
          
              #posts li:last-child 
              {
              border-bottom: none;
              }
          
          </style>
        </head>
        <body style="background-color: rgb(249, 254, 254);">
          <section id="content">
            <div class="container">
              ${content}
              ${body}
            </div>
          </section>
          
        </body>
      </html>
    `
}
  export function userList(users)
  {
    let listHtml = [];
    let listUser = [...new Set (users.map(record => record.id))];

    for (let i=0 ; i<listUser.length ; i++)  
    {
        listHtml.push(`<li><a href="/${listUser[i]}/">${listUser[i]}</a></li>`);
    }
    
    return layout
    (
      '', 
      `<div>
        <p class="h1">使用者列表 User List</p>
        <br>
        <a href="/register"  role="button">Register</a>
        <br>
      </div>`, 
      `<ol style="font-size: 25px;">${listHtml.join('\n')}</ol>`
    );
  }  

  export function list(posts, post_count, post_user) 
  {
    let list = []
    let count = post_count.map(record => (record.id));

    for (let post of posts) 
    {
      list.push(`
      <li>
        <h2>#${post.id} &nbsp<a href="/${post.user}/post/${post.id}">${post.title}</a></h2>
        <h3 style="color:gray; font-size:18px;">Create by ${post.user} &nbsp ${post.time}<h3>
      </li>
      `)
    }

    let content = `
    <h1>${post_user} 's Posts</h1>
    <p>You have <strong>${count}</strong> posts!</p>
    <p>
      <a href="/${post_user}/post/new" role="button">Create a Post</a>
      <a href="/"  role="button">Home Page</a>
    </p>
    <ul id="posts">
      ${list.join('\n')}
    </ul>
    `

    return layout('Posts', content, "")
  }
  
  export function newPost(user) 
  {
    return layout
    (
        'New Post', `
        <h1>New Post</h1>
        <p class="lead">Create a new post.</p>

        <form action="/${user}/post/" method="post">
          <div class="form-floating">
            <input class="form-control" placeholder="Leave a comment here" id="floatingText" name=title></input>
            <label for="floatingText">Title</label>
          </div>

          <br>

          <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 300" name=body></textarea>
            <label for="floatingTextarea2">Content</label>
          </div> 

          <br>

          <p>
            <input type="submit" value="Create">
            <a href="/${user}/" role="button">Back</a>
          </p>
        </form>
        `, ""
    )
  }

  export function user_register()
  {
    return layout
    (
      "Register",
      `<p class="h1">Register a name</p>
      <br>
      <form action="/register/new_user" method="post">
        <div class="form-floating">
          <input class="form-control" placeholder="Leave a comment here" id="floatingText" name=register_user></input>
          <label for="floatingText">Input Your Name</label>
        </div>
        <br>
        <p>
            <input type="submit"  value="Register">
            <a href="/"  role="button">Back</a>
          </p>
      </form>`,
      ""
    )
  }
  
  export function show(post) 
  {
    return layout(post.title, `
      <p class="h1">${post.title}</p>
      <h3 style="color:gray; font-size:18px;">${post.time}</h3>
      <hr>
      <pre>${post.body}</pre>
    `, "")
  }
  