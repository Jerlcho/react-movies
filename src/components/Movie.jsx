
function Movie(props) {
  const { imbdID: id, Title: name, Type: type, Year: year, Poster: poster } = props;

  return <div className="card movie" id={id}>
    <div className="card-image waves-effect waves-block waves-light">
      {
        poster === "N/A" ?
          <img className="activator" src={`https://placehold.co/300x450?text=${name}`} />
          :
          <img className="activator" src={poster} />
      }
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{name}</span>
      <p>{year} <span className="right">{type}</span></p>
    </div>
  </div>
}

export { Movie }