
// --VIDEO OBJECT TEMPLATE--
/*
    const <name> =  {
        id: 0,
        category: '',
        src: '',
        title: "",
        thumbnail: '',
        cloudinaryThumbnail: '',
        thumbnailAltText: "",
        description: "",
    },
*/

import { cloudinaryLoader } from "next-cloudinary";

// --VIDEO OBJECTS--
const JackDaniel = {
    id: 1,
    category: 'product',
    //src: '/videos/Jack Spec Ad (for portfolio).mp4',
    //src: 'Jack_Spec_Ad_for_portfolio_g1z3vf',
    src: 'https://res.cloudinary.com/doxstpden/video/upload/v1728279490/Jack_Spec_Ad_for_portfolio_g1z3vf.mp4',
    title: "Jack Daniel's Tennessee Honey",
    thumbnail: '/thumbnails/JackDanielsThumbnail.jpg',
    cloudinaryThumbnail: 'JackDanielsThumbnail',
    thumbnailAltText: "Jack Daniel Thumbnail",
    description: "A little bit of honey, a whole lot of jack. A blend of Jack Daniel’s Tennessee Whiskey and a unique honey liqueur combines for a taste that’s one-of-a-kind and unmistakably Jack. With hints of honey and a finish that’s naturally smooth, Jack Daniel’s Tennessee Honey offers a taste of the unexpected.",
};

const SpecialK = {
    id: 2,
    category: 'product',
    //src: '/videos/MP4 version of final special K ad.mp4',
    //src:'MP4_version_of_final_special_K_ad_nicmg6',
    src:'https://res.cloudinary.com/doxstpden/video/upload/v1728279482/MP4_version_of_final_special_K_ad_nicmg6.mp4',
    title: "Kellog's Special",
    thumbnail: '/thumbnails/SpecialKThumbnail.jpg',
    cloudinaryThumbnail: 'SpecialKThumbnail',
    thumbnailAltText: "Special K Thumbnail",
    description: "This cereal is bursting with red berries. People have fallen for Special K® Red Berries Cereal. With rice and wheat flakes and crunchy fruity goodness, what's not to love? It's a bright, flavorful breakfast, and perfect for afternoon and late-night snacks too.",
};

const DavesSushi = {
    id: 3,
    category: 'food',
    //src: '/videos/Daves Sushi Promo Final (MP4).mp4',
    //src:'Daves_Sushi_Promo_Final_MP4_xei5wu',
    src:'https://res.cloudinary.com/doxstpden/video/upload/v1728421173/Daves_Sushi_Promo_Final_MP4_xei5wu.mp4',
    title: "Dave's Sushi",
    thumbnail: '/thumbnails/DavesThumbnail.png',
    cloudinaryThumbnail: 'DavesThumbnail_yyqenw',
    thumbnailAltText: "Dave Sushi Thumbnail",
    description: "If you're looking for plush modern trimmings and post-modern art hanging on the walls, this ain't your place. Experience the amazingly fresh sushi and friendly atmosphere modeled after the 'hang-loose' style of Hawaii.",
};

const OnoRoller = {
    id: 4,
    category: 'product',
    //src: 'ONO_roller_final_MP4_zrbpnz',
    src:'https://res.cloudinary.com/doxstpden/video/upload/v1728419642/ONO_roller_final_MP4_zrbpnz.mp4',
    title: "ONO Roller",
    thumbnail: '/thumbnails/onoroller.png',
    cloudinaryThumbnail: 'onoroller_tvm8or',
    thumbnailAltText: "Ono Roller Thumbnail",
    description: "Calm in the palm of your hand. Sleek, totally silent fidget tools to help channel restless energy into presence and focus.",
};

const SavageRealEstate_3126Savannah = {
    id: 5,
    category: 'real estate',
    //src: '/videos/3126 Savannah FINAL Directors Cut (MP4).mp4',
    //src:'3126_Savannah_FINAL_Directors_Cut_MP4_ptdari',
    src:'https://res.cloudinary.com/doxstpden/video/upload/v1728280743/3126_Savannah_FINAL_Directors_Cut_MP4_ptdari.mp4',
    title: "Savage Real Estate Group",
    thumbnail: '/thumbnails/3126Savannah.png',
    cloudinaryThumbnail: '3126Savannah_bbeul6',
    thumbnailAltText: "Savage Real Estate 3126 Savannah Thumbnail",
    description: "Working with an inexperienced agent who isn’t putting your needs first can cost you. The agents at Savage Real Estate Group have helped many clients buy or sell homes in the Gallatin Valley.",
};

const CasaGrandeRealEstate_2981FenWay = {
    id: 6,
    category: 'real estate',
    //src: '2981_Fen_Way_FINAL_MP4_xh5ypk',
    src:'https://res.cloudinary.com/doxstpden/video/upload/v1728422417/2981_Fen_Way_FINAL_MP4_xh5ypk.mp4',
    title: "Casa Grande Real Estate",
    thumbnail: '/thumbnails/2981FenWay.png',
    cloudinaryThumbnail: '2981FenWay_iv4mlp',
    thumbnailAltText: "Casa Grande Real Estate 2981 Fen Way Thumbnail",
    description: "Working for you Sign Up to Sign Down. Casa Grande Real Estate helps friends and clients buy and sell real estate. Se habla español.",
};

const MontanaFence = {
    id: 7,
    category: 'promotional',
    //src: 'MontanaFenceVideo_fclvlt',
    src:'https://res.cloudinary.com/doxstpden/video/upload/v1728967051/MontanaFenceVideo_fclvlt.mp4',
    title: "Montana Fence",
    thumbnail: '/thumbnails/MontanaFenceThumbnail.jpg',
    cloudinaryThumbnail: 'MontanaFenceThumbnail_g0yht1',
    thumbnailAltText: "Montana Fence Thumbnail",
    description: "Premier Fencing, Locally Owned. Providing fence installation, repair, and retail to Montanan families for over 40 years.",
};


// --EXPORTING VIDEOS--

// PORTFOLIO VIDEOS
export const videos = [
    JackDaniel,
    SpecialK,
    DavesSushi,
    MontanaFence,
    SavageRealEstate_3126Savannah,
    CasaGrandeRealEstate_2981FenWay,
];

// CAROUSEL VIDEOS
export const featuredVideos = [
    JackDaniel,
    SpecialK,
    DavesSushi,
    MontanaFence
];