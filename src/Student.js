import React from 'react'

export default function Student({id, photo, review, name, occupation}) {
    return (
      <article className="student">
        <img className="student__image" src={photo} alt="" />
        <section className="student__text-container">
          <p className="student__review">{review}</p>
          <section className="student__info">
            <p className="student__info-name">{name}</p>
            <p className="student__info-occupation">{occupation}</p>
          </section>
        </section>
      </article>
    );
}
