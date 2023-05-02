import React from 'react'
import './Pills.css'

export default function Pills() {
  return (
    <div className="mb-6">
      <div
        className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="pills-home7"
        role="tabpanel"
        aria-labelledby="pills-home-tab7"
        data-te-tab-active
      >
        Tab 1 content
      </div>
      <div
        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="pills-profile7"
        role="tabpanel"
        aria-labelledby="pills-profile-tab7"
      >
        Tab 2 content
      </div>
      <div
        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="pills-contact7"
        role="tabpanel"
        aria-labelledby="pills-contact-tab7"
      >
        Tab 3 content
      </div>
      <div
        className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
        id="pills-disabled7"
        role="tabpanel"
        aria-labelledby="pills-disabled-tab7"
      >
        Tab 4 disabled
      </div>
    </div>
  )
}
