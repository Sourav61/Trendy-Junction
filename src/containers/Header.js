import React from "react";
import "../App.css";

const Header = () => {
  return (
    <div class="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <div class="content">
          <div class="logo">
            <a href="#">FakeShop</a>
          </div>
          <ul class="links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <label for="show-search" class="search-icon">
          <i class="fas fa-search"></i>
        </label>
        <form action="#" class="search-box">
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
          />
          <button type="submit" class="go-icon">
            <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
