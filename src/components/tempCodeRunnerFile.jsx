<p className="year">
                Download:{" "}
                {isDownloadAvailable ? (
                    <span>
                        <Button
                            onClick={() => {
                                // TODO: Replace with real logic
                                console.log(`Downloading ${title}...`);
                                // window.location.href = `/downloads/${title}.mp4`
                            }}
                        >
                            Click to Download
                        </Button>
                    </span>
                ) : (
                    "N/A"
                )}
            </p>
        </div>