import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section>
          <p className="text-sm ">300+ Stays for 5 numeber of guests</p>
          <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in Kaunas</h1>

          <div className="hidden lg:inline">
            <p className="filterButton">
              C
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
