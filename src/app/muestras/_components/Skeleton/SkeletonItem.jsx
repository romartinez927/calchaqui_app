import "./skeleton.css"

function SkeletonItem() {
    const loadingItems = Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="loading-main-text my-auto"></div>
      ));
    return (
        <div className="col movie--isloading">
            <div className="loading-content">
                <div className="loading-text-container d-flex gap-3">
                    {loadingItems}
                </div>
            </div>
        </div>
    )
}

export default SkeletonItem