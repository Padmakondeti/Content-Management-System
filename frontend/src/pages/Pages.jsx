import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import PageTable from "../components/pages/PageTable";

import {
  getPages,
  deletePage,
} from "../services/page.service";

import LoadingSpinner from "../components/common/LoadingSpinner";

function Pages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const loadPages = async (
    page = currentPage,
    searchText = search
  ) => {
    try {
      setLoading(true);

      const result = await getPages(
        page,
        5,
        searchText
      );

      setPages(result.pages);

      setCurrentPage(result.currentPage);

      setTotalPages(result.totalPages);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load pages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPages(currentPage, search);
  }, [currentPage]);

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    setCurrentPage(1);

    loadPages(1, value);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmed) return;

    try {
      await deletePage(id);

      toast.success("Page deleted successfully");

      loadPages(currentPage, search);
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete page");
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pages</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search pages..."
          value={search}
          onChange={handleSearch}
          style={{
            padding: "10px",
            width: "300px",
          }}
        />

        <Link to="/pages/create">
          <button>
            + Create New Page
          </button>
        </Link>
      </div>

      <PageTable
        pages={pages}
        loading={loading}
        onDelete={handleDelete}
      />

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pages;