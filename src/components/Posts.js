import React from 'react'

function Posts(props) {

  const { blogPosts, archives } = props
  return (
    <section className="main-section">
      <div className="archive-section">
        <div className="post-section">
          {blogPosts.map((post, index) => (
            <div key={index} className="post">
              <h2>{post.title}</h2>

              <p className="subtitle">
                {post.date} <span>{post.subtitle}</span>
              </p>
              <p>{post.content}</p>
              <p className="continue-reading">Continue reading</p>
            </div>
          ))}
        </div>



      </div>





      <aside className='aside'>
        <div className="about">
          <h2>About Us</h2>
          <p>
            Hindustan Times, a renowned English-language daily newspaper in India, has been a trusted source of news and information since its inception
          </p>
        </div>

        <div className="archive">
          <h2>Archives</h2>
          <ul>
            {archives.map((archive, index) => (
              <li key={index}>{archive}</li>
            ))}
          </ul>
        </div>

        <div className="elsewhere-section">
          <h2>Elsewhere</h2>
          <ul>
            <li>GitHub</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </aside>


    </section>
  )
}

export default Posts