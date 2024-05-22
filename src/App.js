import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <input type="radio" name="slider" id="item-1" defaultChecked />
        <input type="radio" name="slider" id="item-2" />
        <input type="radio" name="slider" id="item-3" />
        <input type="radio" name="slider" id="item-4" />
        <input type="radio" name="slider" id="item-5" />
        <input type="radio" name="slider" id="item-6" />
        <input type="radio" name="slider" id="item-7" />

        <div className="cards">
          <label className="card" htmlFor="item-1" id="song-1">
            <img
              src="https://avatars.mds.yandex.net/get-mpic/4578218/img_id4439256871057586823.jpeg/orig"
              alt="nike"
              width="250px"
              height="180px"
              style={{ borderRadius: "10px", objectFit: "cover", margin: "0 auto" }}
            />
          </label>
          <label className="card" htmlFor="item-2" id="song-2">
            <img
              src="https://www.pacificplace.com.hk/-/media/images/pacificplace2/shops/thumbnail/adidas_thumbnail.ashx?bc=ffffff&as=1&db=web&h=828&mh=828&mw=828&vs=1&w=828&rev=5f581c56f4264ce2a8c900bfed2a20ef&hash=A97A7D9CD587B9048ACD00D005B10666&jq=80"
              alt="adidas"
              width="250px"
              height="180px"
              style={{ borderRadius: "10px", objectFit: "cover", margin: "0 auto" }}
            />
          </label>
          <label className="card" htmlFor="item-3" id="song-3">
            <img
              src="https://i.pinimg.com/originals/ef/b8/a1/efb8a1263d323525414079c309017f40.jpg"
              alt="puma"
              width="250px"
              height="180px"
              style={{ borderRadius: "10px", objectFit: "cover", margin: "0 auto" }}
            />
          </label>
          <label className="card" htmlFor="item-4" id="song-4">
            <img
              src="https://wallpapers.com/images/hd/new-balance-red-white-logo-4tu66fel5o57fcfm.jpg"
              alt="new balance"
              width="250px"
              height="180px"
              style={{ borderRadius: "10px", objectFit: "cover", margin: "0 auto" }}
            />
          </label>
          <label className="card" htmlFor="item-5" id="song-5">
            <img
              src="https://i.pinimg.com/originals/41/b5/a6/41b5a6ed024fa6788a2d830f6be858a1.jpg"
              alt="louis vuitton"
              width="250px"
              height="180px"
              style={{ borderRadius: "10px", objectFit: "cover", margin: "0 auto" }}
            />
          </label>
          <label className="card" htmlFor="item-6" id="song-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/599/170/original/converse-brand-shoes-logo-white-symbol-design-illustration-with-black-background-free-vector.jpg"
              alt="converse"
              width="250px"
              height="180px"
              style={{ borderRadius: "10px", objectFit: "cover", margin: "0 auto" }}
            />
          </label>
          <label className="card" htmlFor="item-7" id="song-7">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/original/e4234894110255.Y3JvcCwxMjA4LDk0NSwyLDA.jpg"
              alt="Balenciaga"
              width="250px"
              height="180px"
              style={{ borderRadius: "10px", objectFit: "cover", margin: "0 auto" }}
            />
          </label>
        </div>
        <div className="player">
          <img
            src="https://avatars.mds.yandex.net/get-mpic/5395693/img_id5481665985592982614.jpeg/orig"
            width="180px"
            height="150px"
            style={{ borderRadius: "20px" }}
            alt="player"
          />
          <path d="M5 3l14 9-14 9V3z" />
        </div>
        <div className="info-area" id="test">
          <label className="song-info" id="song-info-1"></label>
          <label className="song-info" id="song-info-2"></label>
          <label className="song-info" id="song-info-3"></label>
          <label className="song-info" id="song-info-4"></label>
          <label className="song-info" id="song-info-5"></label>
          <label className="song-info" id="song-info-6"></label>
          <label className="song-info" id="song-info-7"></label>
        </div>
        <div className="progress-bar">
          <span className="progress"></span>
        </div>
      </div>
    );
  }
}

export default App;
