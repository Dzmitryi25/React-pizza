import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <div className="pizza-block">
    <ContentLoader 
      speed={2}
      width={350}
      height={400}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="21" y="183" rx="3" ry="3" width="410" height="6" /> 
      <rect x="2" y="104" rx="3" ry="3" width="97" height="23" /> 
      <rect x="6" y="88" rx="3" ry="3" width="86" height="9" /> 
      <circle cx="48" cy="43" r="39" /> 
      <rect x="200" y="70" rx="0" ry="0" width="1" height="1" /> 
      <rect x="211" y="104" rx="0" ry="0" width="2" height="0" /> 
      <rect x="4" y="139" rx="0" ry="0" width="43" height="19" /> 
      <rect x="55" y="138" rx="0" ry="0" width="43" height="19" />
    </ContentLoader>
  </div>
)

export default MyLoader;