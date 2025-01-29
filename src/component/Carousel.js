import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../api";
import '../css/MyCarousel.css'

const MyCarousel = () => {
  const [images, setImages] = useState([]); // State untuk menyimpan data gambar
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menangkap error

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${API_URL}/get-all-images`);
        console.log("API Response:", response.data); // Log data API

        // Pastikan data berbentuk array
        if (Array.isArray(response.data)) {
          setImages(response.data); // Simpan data gambar ke state
        } else {
          throw new Error("Invalid response format"); // Jika format tidak sesuai
        }
      } catch (error) {
        setError(error.message || "Error fetching images");
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false); // Set loading selesai
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Tampilkan indikator loading
  }

  if (error) {
    return <div>Error: {error}</div>; // Tampilkan pesan error
  }

  return (
    <Carousel
      className="custom-carousel"
      interval={3000}
      indicators={true}
      controls={true}
      fade={true}
    >
      {images.length > 0 ? (
        images.map((image, index) => (
          <Carousel.Item key={image.id || index}>
            <img
              className="d-block w-100 custom-image"
              src={image.image} // Gunakan URL Base64 dari API
              alt={`Slide ${index + 1}`}
              style={{
                height: "79vh",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
        ))
      ) : (
        <div>No images available</div> // Jika tidak ada gambar
      )}
    </Carousel>
  );
};

export default MyCarousel;
