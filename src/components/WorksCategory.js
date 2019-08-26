import React from 'react'
import PropTypes from 'prop-types'
// import PreviewCompatibleImage from './PreviewCompatibleImage'

const WorksCategory = ({ items }) => {
  return (
  <div className="columns is-multiline work-category">
    {items.map(item => (
      <div key={item.title} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div
              className="has-text-left"
              style={{
                width: '80%',
                display: 'inline-block',
              }}
            >
              <ul>
              {(item.items|| []).map(itemTitle => (
                <li>{itemTitle}</li>
              ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    ))}
  </div>
)}

WorksCategory.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      description: PropTypes.string,
      title: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object)
    }),
  ),
}

export default WorksCategory
