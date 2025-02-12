import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Header from "./Header.jsx"
import InfiniteSlideshow from "./Slides.jsx"

const images = ["/images/U (1).jpg", "/images/U (2).jpg", "/images/U (3).jpg","/images/U (4).jpg", "/images/U (5).jpg", "/images/U (6).jpg","/images/U (7).jpg", "/images/U (8).jpg", "/images/U (9).jpg","/images/U (10).jpg", "/images/U (11).jpg", "/images/U (12).jpg","/images/U (13).jpg", "/images/U (14).jpg", "/images/U (15).jpg", "/images/U (16).jpg"]

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Adjusted for the new image size */}
        <h1 id="slideHead" className="text-4xl font-bold text-gray-900 mb-8 text-left">rsb 2024</h1>
        <div className="shadow-2xl">
          <InfiniteSlideshow images={images} interval={5000} />
        </div>
      </div>
    </div>
  </StrictMode>,
)

