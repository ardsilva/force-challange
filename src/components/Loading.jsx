import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
    <ContentLoader 
    speed={0.5}
    width={800}
    height={600}
    viewBox="0 0 800 600"
    backgroundColor="#000000"
    foregroundColor="#c6e000"
    {...props}
  >
    {props.window > 800 && (
      <> 
        <circle cx="378" cy="234" r="155" /> 
        <rect x="189" y="427" rx="0" ry="0" width="383" height="37" /> 
        <rect x="239" y="1" rx="10" ry="10" width="265" height="56" />
      </>
    )}
    {props.window <= 799 && (
      <>
        <rect x="278" y="408" rx="0" ry="0" width="206" height="26" /> 
        <rect x="252" y="545" rx="10" ry="10" width="265" height="56" /> 
        <circle cx="379" cy="168" r="160" /> 
        <rect x="278" y="450" rx="0" ry="0" width="210" height="26" />
    </>
    )}
  </ContentLoader>
)
export default Loading
