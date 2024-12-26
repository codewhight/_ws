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
              font-size: 5em;
              }
          
              h2 
              {
              font-size: 2.4em;
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

export function list(posts, InOrNot, login_user)
{
    let listHtml = [];

    for (let post of posts)  
    {
        listHtml.push(`
          <br>
          <div id=".container">
            <div class="post-item">
                <h2>#${post.id} <a href="/${post.user}/post/${post.id}"><b>${post.title}</b></a></h2>
                <p style="color: gray;">作者 : ${post.user} | 創建時間 : ${post.time}</p>
                <div>${post.body}</div>
            </div>
          </div>
        `);
    }

    if (InOrNot == true)
    {
      return layout
      (
        '', 
        `<div>
          <p class="h1">All Posts</p>
          <br>
          <div>
            <p class="lead">
              Hi,  <mark><strong>${login_user}<strong></mark>
              <a href="/${login_user}/">My Posts</a>
              <a href="/${login_user}/post/new">Create a New Post</a>
              <a href="/logout">Log Out</a>
            </p>
          <div>
          <br>
        </div>`, 
        `<ol>${listHtml.join('\n')}</ol>`
      );
    }

    else
    {
      return layout
      (
        '', 
        `<div>
          <p class="h1">所有貼文 All Posts</p>
          <br>
          <a href="/login">Log in</a>
          <a href="/signup">Sign up</a>
          <br>
        </div>`, 
        `<ol>${listHtml.join('\n')}</ol>`
      );
    }
}  

export function userList(posts, post_count, post_user) 
{
    let list = []
    let count = post_count.map(record => (record.id));

    for (let post of posts) 
    {
      list.push(`
        <br>
        <div id=".container">
          <div class="post-item">
              <h2>#${post.id} <a href="/${post.user}/post/${post.id}"><b>${post.title}</b></a></h2>
              <p style="color: gray;">創建時間 : ${post.time}</p>
              <div>${post.body}</div>
          </div>
        </div>
      `)
    }

    let content = `
    <h1>${post_user} 's Posts</h1>
    <p>You have <strong>${count}</strong> posts!</p>
    <p>
      <a href="/${post_user}/post/new">Create a Post</a>
      <a href="/">Home Page</a>
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
        <p class="h1">→New Post</p>
        <p>Create a new post.</p>

        <form action="/${user}/post/" method="post">
          <div>
            <label for="post-title">Title</label>
            <input id="post-title" name="title"></input>
          </div>

          <br>

          <div>
            <label for="post-body">Content</label>
            <textarea id="post-body" name="body"></textarea>
          </div> 

          <br>

          <p>
            <input type="submit" value="Create">
            <a href="/${user}/">Back</a>
          </p>
        </form>
        `, ""
    )
}

export function show(post) 
{
    return layout(post.title, `
      <p class="h1">${post.title}</p>
      <p style="color:gray;">${post.time}</p>
      <hr>
      <pre>${post.body}</pre>
    `, "")
}

export function user_register()
{
    return layout
    (
      "Sign up",
      `<p class="h1">註冊 Sign up</p>
      <br>
      <form action="/signup" method="post">
        <div>
          <label for="register-user">Input Your Name</label>
          <input id="register-user" name="register_user"></input>
        </div>

        <br>

        <div>
          <label for="register-password">Password</label>
          <input type="password" id="register-password" name="register_password">
        </div>
        <br>
        <p>
            <input type="submit" value="Sign up">
            <a href="/">Back</a>
          </p>
      </form>`,
      ""
    )
}

export function user_login()
{
    return layout
    (
      "Log in",
      `<p class="h1">登入 Log in</p>
      <br>
      <form action="/login" method="post">
        <div>
          <label for="login-user">Username</label>
          <input id="login-user" name="register_user"></input>
        </div>
        <br>
        <div>
          <label for="login-password">Password</label>
          <input type="password" id="login-password" name="register_password">
        </div>
        <br>
        <p>
            <input type="submit" value="Log in">
            <a href="/">Back</a>
          </p>
      </form>`,
      ""
    )
}
