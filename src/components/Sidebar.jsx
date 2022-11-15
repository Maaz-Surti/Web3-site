import NewsItem from "./NewsItem";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <p className="sidebar--new--text">New</p>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  );
}
