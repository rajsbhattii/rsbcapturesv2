"use client"
import Header from "./Header"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  }
}

export default function Automotive() {
  return (
    <div className="min-h-screen">
      <title>Automotive | rsbcaptures</title>
      <Header />
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h1 id="slideHead" className="text-4xl font-bold text-gray-900 mb-8 text-left">
          A1 F30
        </h1>
        <div className="flex justify-center">
          <ImageList
            sx={{ height: "70vh", justifyContent: "center", width: "100%" }}
            variant="quilted"
            cols={6}
            rowHeight={285}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </div>
  )
}

const itemData = Array.from({ length: 9 }, (_, i) => ({
  img: `/automotive/A1F30/a1f30 (${i + 1}).webp`,
  title: `A1 F30 ${i + 1}`,
  rows: i % 3 === 0 ? 2 : 1, // Adjust layout dynamically
  cols: i % 4 === 0 ? 2 : 1,
}));

