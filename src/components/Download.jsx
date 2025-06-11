import ClickMe from "./ClickMe";
import { Movies } from "./moviesList/Movies";

const Download = ({ data }) => {
    const matchedMovie = Movies.find((movie) => movie.name === data?.name);
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
                </div>
            </div>
        </div>
    );
};

export default Download;
