import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Phiêu lưu</option>
            <option value="comedy">Hài hước</option>
            <option value="crime">Tội phạm</option>
            <option value="fantasy">Giả tưởng</option>
            <option value="historical">Sử thi</option>
            <option value="horror">Kinh dị</option>
            <option value="romance">Lãng mạng</option>
            <option value="sci-fi">Khoa học viễn tưởng</option>
            <option value="thriller">Giật gân</option>
            <option value="western">Viễn tây</option>
            <option value="animation">Hoạt hình</option>
            <option value="drama">Chính kịch</option>
            <option value="documentary">Tài liệu</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="info">
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
