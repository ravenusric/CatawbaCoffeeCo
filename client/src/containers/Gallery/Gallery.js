import "./Gallery.css";
import React from "react";
import Gallery from 'react-photo-gallery';


const MyGallery = props => (
  <div className="gallery">

    <Gallery
      photos={[
        {
          id: 1,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10500559_1457809917803943_6917397169907490880_n.jpg?_nc_cat=0&oh=03152861ee31594eae2f44625d7a7f88&oe=5BC7C581",
          width: 3,
          height: 2
        },
        {
          id: 2,
          src: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12669507_1666702190248047_8563102423551437089_n.jpg?_nc_cat=0&oh=072fd1020cb11a1150e789f8be173a5e&oe=5BF26A42",
          width: 4,
          height: 2
        },
        {
          id: 3,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/14115556_1750003395251259_2884269497083027065_o.jpg?_nc_cat=0&oh=6e3e6b12b599f5063f3ea3bc4c88230c&oe=5C03BF32",
          width: 3,
          height: 2
        },
        {
          id: 4,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/16026_1463567880561480_2233460622546959243_n.jpg?_nc_cat=0&oh=af78989316df408869bf7bcd5840f7d3&oe=5BF675B4",
          width: 3,
          height: 3
        },
        {
          id: 5,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/10255656_1438381299746805_1329793862215224545_o.jpg?_nc_cat=0&oh=65a061a9c9e7f0d7e4b178057574408e&oe=5C00A0E6",
          width: 3,
          height: 2
        },
        {
          id: 6,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/10397098_1441356162782652_1176321138781951887_o.jpg?_nc_cat=0&oh=60be9d230b23c14b58bb441d145a0bd7&oe=5BC55002",
          width: 3,
          height: 2
        },
        {
          id: 7,
          src: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/10355682_1441356119449323_3255171934908861074_o.jpg?_nc_cat=0&oh=2c4f5fe05984360d107c4768fdd5ce29&oe=5BFEF0BE",
          width: 3,
          height: 2
        },
        {
          id: 8,
          src: "https://s3-media2.fl.yelpcdn.com/bphoto/zFAns6z4VpfiMDqmLAARqw/o.jpg",
          width: 2,
          height: 3
        },
        {
          id: 9,
          src: "https://s3-media1.fl.yelpcdn.com/bphoto/7ufJFQfCSsB53j-Ka0GxbA/o.jpg",
          width: 3,
          height: 2
        },
        {
          id: 10,
          src: "http://www.alinegiordano.net/photos/holcombe_2012/holcombe_5038.jpg",
          width: 3,
          height: 2
        },
        {
          id: 11,
          src: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/12046967_1632559306995669_1149556474233610149_n.jpg?_nc_cat=0&oh=230f6bbff68737f1a394baa15a9f5cc7&oe=5C064986",
          width: 3,
          height: 2
        },
        {
          id: 12,
          src: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/10393780_1547527285498872_6461854554123594255_n.jpg?_nc_cat=0&oh=4926267ec0a31f36540a2e2f017e9803&oe=5BC83C26",
          width: 3,
          height: 2
        },

      ]
      }


    />
  </div>
);


export default MyGallery;