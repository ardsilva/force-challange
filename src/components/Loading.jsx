import React from "react"
import ContentLoader from "react-content-loader"

const Loading = (props) => (
    <ContentLoader 
    speed={0.35}
    width={800}
    height={600}
    viewBox="0 0 800 600"
    backgroundColor="#a8a4a4"
    foregroundColor="#ebeaea"
    {...props}
  >
    {props.window >= 800 && (
      <> 
        <circle cx="391" cy="234" r="130" /> 
        <rect x="189" y="427" rx="0" ry="0" width="383" height="37" /> 
        <rect x="250" y="10" rx="10" ry="10" width="280" height="56" />
      </>
    )}
    {props.window <= 799 && props.window > 476 && (
      <>
        <circle cx="379" cy="168" r="160" /> 
        <rect x="278" y="408" rx="0" ry="0" width="206" height="26" /> 
        <rect x="278" y="450" rx="0" ry="0" width="210" height="26" />
        <rect x="252" y="545" rx="10" ry="10" width="265" height="56" /> 
    </>
    )}
    {props.window <= 475 && (
      <>
        <circle cx="220" cy="110" r="100" /> 
        <rect x="110" y="280" rx="0" ry="0" width="206" height="26" /> 
        <rect x="110" y="320" rx="0" ry="0" width="210" height="26" />
        <rect x="70" y="380" rx="10" ry="10" width="300" height="56" /> 
    </>
    )}
  </ContentLoader>
)
export default Loading
