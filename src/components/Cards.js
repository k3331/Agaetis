import React from 'react'

function Cards(props) {
  const { carouselCards } = props
  console.log(carouselCards)
  return (
    <div className="app-container">
      <div className="card-container">
        {carouselCards?.map((card, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtitle">
                <span className="subtitle-blue">{card.subtitle}</span> - <span className="date-grey">{card.date}</span>
              </p>
              <p className="card-text">{card.content}</p>
              <p className="continue-reading">Continue reading</p>
            </div>
            <div className="thumbnail">
              <img src={card.thumbnail} alt={`Thumbnail for ${card.title}`} />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards