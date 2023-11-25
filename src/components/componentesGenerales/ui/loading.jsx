import '../../styles/loader.css';
export const Loading = () => {
  return (
    <>
      <div id="overlayLoading" style={{ zIndex: 9999 }}>
        <div className="modal-backdrop" id='containerLoader'>
          <div className="newLoader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="imgLoader"></div>
        </div>
      </div>
    </>
  )
};