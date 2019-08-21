import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const WorksGrid = ({ gridItems }) => {
  return (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.title} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <h2>{item.title}({item.year})</h2>
            <p>{item.job}</p>
            <div
              style={{
                width: '80%',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={{
                image: item.image,
                alt: item.title
              }} style={{
                height: '300px'
              }}/>
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
)}

WorksGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      job: PropTypes.string,
      year: PropTypes.number,
    })
  ),
}

export default WorksGrid
