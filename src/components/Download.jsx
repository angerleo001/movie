import ClickMe from "./ClickMe";
import { movies } from "./moviesList/Movies"

const Download = ({ data }) => {
    const matchedMovie = movies.find((movie) => movie.name === data?.name);
    return (
        <div>
            <div className="rating">
                <p>Download :</p>
                <div className="year">
                    {matchedMovie ? (
                        <span>
                            <ClickMe fileName={matchedMovie.fileName} />
                        </span>
                    ) : (
                        "N/A"
                    )}
                    {/* {movies.includes(data?.name) ? (
                        <span>
                            <ClickMe fileName={data.name} />
                        </span>
                    ) : (
                        " N/A "
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default Download;
