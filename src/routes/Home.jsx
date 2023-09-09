import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const apiKey = process.env.REACT_APP_API_HOST;
const Home = () =>{
  return (
    <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 min-h-screen flex flex-col items-center justify-center text-white">
      <header className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">Selamat Datang di Gymonline</h1>
        <p className="text-xl mb-8">Platform kami memberikan manuk.</p>
        <a
          href="/signup" // Ganti dengan URL tautan ke halaman pendaftaran
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 transform hover:scale-105">
          Pelajari Sekarang
        </a>
      </header>
      <section className="mt-12">
        <h2 className="text-3xl font-extrabold mb-4">Fitur </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Fitur 1</h3>
            <p className="text-gray-600">deskripsi/foto.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Fitur 2</h3>
            <p className="text-gray-600">deskripsi/foto.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Fitur 3</h3>
            <p className="text-gray-600">deskripsi/foto.</p>
          </div>
        </div>
      </section>
      <footer className="mt-12 text-center text-gray-400">
        &copy; 2023 .
      </footer>
      
    </div>
    
  );
}


export default Home;