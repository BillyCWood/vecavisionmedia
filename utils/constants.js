
// --VIDEO OBJECT TEMPLATE--
/*
    {
        id: 0,
        src: '',
        title: "",
        thumbnail: '',
        thumbnailAltText: "",
        description: "",
    },
*/

// --VIDEO OBJECTS--
const JackDaniel = {
    id: 1,
    //src: '/videos/Jack Spec Ad (for portfolio).mp4',
    src: 'Jack_Spec_Ad_for_portfolio_g1z3vf',
    title: "Jack Daniel's Tennessee Honey",
    thumbnail: '/thumbnails/JackDanielsThumbnail.jpg',
    thumbnailAltText: "Jack Daniel Thumbnail",
    description: "A little bit of honey, a whole lot of jack. A blend of Jack Daniel’s Tennessee Whiskey and a unique honey liqueur combines for a taste that’s one-of-a-kind and unmistakably Jack. With hints of honey and a finish that’s naturally smooth, Jack Daniel’s Tennessee Honey offers a taste of the unexpected.",
};

const SpecialK = {
    id: 2,
    //src: '/videos/MP4 version of final special K ad.mp4',
    src:'MP4_version_of_final_special_K_ad_nicmg6',
    title: "Kellog's Special",
    thumbnail: '/thumbnails/SpecialKThumbnail.jpg',
    thumbnailAltText: "Special K Thumbnail",
    description: "This cereal is bursting with red berries. People have fallen for Special K® Red Berries Cereal. With rice and wheat flakes and crunchy fruity goodness, what's not to love? It's a bright, flavorful breakfast, and perfect for afternoon and late-night snacks too.",
};

const DavesSushi = {
    id: 3,
    //src: '/videos/Daves Sushi Promo Final (MP4).mp4',
    src:'Daves_Sushi_Promo_Final_MP4_xei5wu',
    title: "Dave's Sushi",
    thumbnail: '/thumbnails/DavesSushiThumbnail.jpg',
    thumbnailAltText: "Dave Sushi Thumbnail",
    description: "If you're looking for plush modern trimmings and post-modern art hanging on the walls, this ain't your place. Experience the amazingly fresh sushi and friendly atmosphere modeled after the 'hang-loose' style of Hawaii.",
};

const OnoRoller = {
    id: 4,
    src: 'ONO_roller_final_MP4_zrbpnz',
    title: "ONO Roller",
    thumbnail: '/thumbnails/onoroller.jpg',
    thumbnailAltText: "Ono Roller Thumbnail",
    description: "Calm in the palm of your hand. Sleek, totally silent fidget tools to help channel restless energy into presence and focus.",
};

const SavageRealEstate_3126Savannah = {
    id: 5,
    //src: '/videos/3126 Savannah FINAL Directors Cut (MP4).mp4',
    src:'3126_Savannah_FINAL_Directors_Cut_MP4_ptdari',
    title: "Savage Real Estate Group",
    thumbnail: '/thumbnails/3126Savannah.jpg',
    thumbnailAltText: "Savage Real Estate 3126 Savannah Thumbnail",
    description: "Working with an inexperienced agent who isn’t putting your needs first can cost you. The agents at Savage Real Estate Group have helped many clients buy or sell homes in the Gallatin Valley.",
};

const CasaGrandeRealEstate_2981FenWay = {
    id: 6,
    src: '2981_Fen_Way_FINAL_MP4_xh5ypk',
    title: "Casa Grande Real Estate",
    thumbnail: '/thumbnails/2981FenWay.jpg',
    thumbnailAltText: "Casa Grande Real Estate 2981 Fen Way Thumbnail",
    description: "Working for you Sign Up to Sign Down. Casa Grande Real Estate helps friends and clients buy and sell real estate. Se habla español.",
};

const MontanaFence = {
    id: 7,
    src: 'MontanaFenceVideo_fclvlt',
    title: "Montana Fence",
    thumbnail: '/thumbnails/MontanaFence.jpg',
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
export const featuredVideos = [];