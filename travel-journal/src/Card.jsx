
export default function Card(props) {

    return (
        <div className="card">
            <div className="card-image-box">
                <img
                    className="card-image"
                    src={props.imageUrl}
                />
            </div>
            <div className="card-info-box">
                <i id="orange" class="fa-solid fa-location-dot"></i>
                <h2 className="location">{props.location}</h2>
                <a className="google-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                <h1 className="place">{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="desc">{props.description}</p>
            </div>
        </div>
    )
  }


