import React from 'react';

const AppFooter = (props) => {
    const year = new Date().getFullYear();
    return (
        <div className="layout-footer">
            <div className="footer-logo-container">
                <img id="footer-logo" src={`../assets/layout/images/logo-${props.colorScheme === 'light' ? 'dark' : 'light'}.png`} alt="atlantis-layout" />
                <span className="app-name">ATLANTIS</span>
            </div>
            <span className="copyright">&#169; Your Organization - {year}</span>
        </div>
    );
};

export default AppFooter;
