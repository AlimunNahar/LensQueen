const { useEffect } = require("react");

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} -LensQueen`;
  }, [title]);
};
export default useTitle;
