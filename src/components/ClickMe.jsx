const ClickMe = ({ fileName }) => {
  const handleDownload = () => {
    const encodedName = encodeURIComponent(fileName); // To handle spaces
    const link = document.createElement("a");
    link.href = `/movies/${encodedName}`; // Adjust extension as needed
    link.download = fileName;
    link.click();
  };

  return (
    <button className="download" onClick={handleDownload}>
      Click Here
    </button>
  );
};

export default ClickMe;