import Sidebar from "./Sidebar";
import MainImage from "/src/assets/image-web-3-desktop.jpg";

export default function Content() {
  return (
    <div className="content">
      <p className="content--main">
        <img src={MainImage} />
      </p>
      <Sidebar />
    </div>
  );
}
