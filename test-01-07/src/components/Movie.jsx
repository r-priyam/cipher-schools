function Movie(props) {
    const { movie } = props
    return (
        <div>
            <img src={movie.iconUrl} height='560px' />
            <p><font color='white'>{movie.name}</font></p>
        </div>
    )
}

export default Movie;